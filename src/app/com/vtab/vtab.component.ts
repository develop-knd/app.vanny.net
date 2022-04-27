import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vtab',
  templateUrl: './vtab.component.html',
  styleUrls: ['./vtab.component.scss']
})
export class VtabComponent implements OnInit {

@Input() tabs!:string[];

  constructor() { }

  ngOnInit(): void {

  }

}

