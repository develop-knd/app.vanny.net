import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-vtab',
  templateUrl: './vtab.component.html',
  styleUrls: ['./vtab.component.scss']
})
export class VtabComponent implements OnInit {
  @Input() tabs!: string[];
  @ViewChild('tabEspace') tabEspace!:ElementRef;
  @ViewChild('tabTabs') tabTabs!:ElementRef;

  // constructor() { }

  ngAfterViewInit() {
    this.onTabClick(0);
    this.tabEspace.nativeElement.style.display = "";
  }


  ngOnInit(): void {
    
  }
  
  onTabClick(num:number):void {
    for (let tmpInt = 0; tmpInt < this.tabEspace.nativeElement.children.length; tmpInt++) {
      this.tabEspace.nativeElement.children[tmpInt].style.display = (tmpInt == num ? "" : "none");
      this.tabTabs.nativeElement.children[tmpInt].children[0].className = (tmpInt == num ? "nav-link active" : "nav-link");
    }
  }

}

