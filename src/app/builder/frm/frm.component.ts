import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frm',
  templateUrl: './frm.component.html',
  styleUrls: ['./frm.component.scss']
})
export class FrmComponent implements OnInit {
  
initBlks:boolean = false;
workspace:any;

  constructor() { }

  ngOnInit(): void {
    this.onViewDis();
  }

  onViewDis(): void {
    $(".btnDis").addClass("active");
    $(".btnAcc").removeClass("active");
    $("#divDis").show();
    $("#divAcc").hide();
  }
  onViewAcc(): void {
    $(".btnDis").removeClass("active");
    $(".btnAcc").addClass("active");
    $("#divDis").hide();
    $("#divAcc").show();
    if (!this.initBlks) {
      let toolbox: any = {toolbox: document.getElementById('toolboxDiv')};
      this.workspace = Blockly.inject('blocklyDiv', toolbox);
      this.initBlks = true;
      
      
      
    }
  }

}
