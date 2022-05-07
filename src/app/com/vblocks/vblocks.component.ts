import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var Blockly: any;


@Component({
  selector: 'app-vblocks',
  templateUrl: './vblocks.component.html',
  styleUrls: ['./vblocks.component.scss']
})
export class VblocksComponent  implements OnInit {
  
  workspace: any;


  ngOnInit(): void {
    
    let toolbox: any = {toolbox: document.getElementById('toolboxDiv')};
    this.workspace = Blockly.inject('blocklyDiv', toolbox);
    
    
    /*
    let tmpEle = $("#toolboxDiv")[0];
    alert(tmpEle);
    
    this.workspace = Blockly.inject('blocklyDiv', { 
      toolbox: tmpEle
    });
    */
  }
}