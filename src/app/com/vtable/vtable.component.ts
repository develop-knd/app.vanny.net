import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { CrudDataSource } from '../../utils/crud.datasource';

@Component({
  selector: 'app-vtable',
  templateUrl: './vtable.component.html',
  styleUrls: ['./vtable.component.scss']
})
export class VtableComponent implements OnInit {

  @Input() resource!: string;
  @Input() fields!: string[];
  @Input() linkRef!: string;
  @Input() linkField!: string;

  dataSource!: CrudDataSource;
  data: any;

  constructor(
    private crudSvc: CrudService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.dataSource = new CrudDataSource(this.crudSvc);
    this.dataSource.loadData(this.resource, this.fields);
    this.crudSvc.callGet("sys.app", this.fields).subscribe((res) => { this.data = res })
  }

  onCellClick(item: any, field: string) {
    if (field == this.linkField) {
      let tmpRef = this.linkRef;
      for (let act in item) {
        tmpRef = tmpRef.replace(":" + act, item[act]);
      }
      this.router.navigate([tmpRef]);
    }
    //console.log("item", item);
    //console.log("field", field);
  }

}
