import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vtab',
  templateUrl: './vtab.component.html',
  styleUrls: ['./vtab.component.scss']
})
export class VtabComponent implements OnInit {
  @ViewChild('tabEspace') tabEspace!: ElementRef;
  @Input() tabs!: string[];

  constructor() { }

  ngAfterViewInit() {
    console.log(tabEspace)
  }


  ngOnInit(): void {

  }

}

