import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as Ask from 'src/app/utils/ask';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';

@Component({
  selector: 'app-apa',
  templateUrl: './apa.component.html',
  styleUrls: ['./apa.component.scss']
})
export class ApaComponent implements OnInit {

  apa!: string;
  nombre!: string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.apa = params["apa"];
      this.nombre = "";
    });
  }
  
  onCrearFrm():void {
    Ask.ask({
      text: "",
      items:[
        { 
          text: "Nombre del nuevo formulario",
          field: "nombre",
          type: "str",
          required: true
        }
      ]
    }, (res:any) => {
      if (res.ret == "ok") {
        
        //window.location.href = "builder/APA/frm/NOMBRE";
        //this.router.navigate(["../builder", this.apa, "frm", "formualrio"]);
        
        
        const routerService = this.injector.get(Router);
        const ngZone = this.injector.get(NgZone);
        ngZone.run(() => {
          routerService.navigate(["../builder", this.apa, "frm", "formualrio"]);
        });
        
        
      }
    });
  }

}
