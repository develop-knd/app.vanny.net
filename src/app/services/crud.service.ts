import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  callGet(resource: string, fields: string[]): Observable<any> {

    let queryParams = new HttpParams({ fromObject: {
      "fields": JSON.stringify(fields)
    } });
    return this.http.get('https://ga11v3dga7.execute-api.us-east-1.amazonaws.com/dev/crud/sys.app', { params: queryParams });
  }
}
