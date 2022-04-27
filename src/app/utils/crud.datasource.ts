import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { CrudService } from "..//services/crud.service";


export class CrudDataSource implements DataSource<any> {

    private dataSubject = new BehaviorSubject<[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private crudSvc: CrudService) { }

    connect(collectionViewer: CollectionViewer): Observable<[]> {
        return this.dataSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.dataSubject.complete();
        this.loadingSubject.complete();
    }

    loadData(resource:string, fields:string[]) {

        this.loadingSubject.next(true);

        this.crudSvc.callGet("sys.app", fields).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(ret => this.dataSubject.next(ret));
    }
}