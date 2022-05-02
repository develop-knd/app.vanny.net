import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { VtableComponent } from './com/vtable/vtable.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from "@angular/material/table";

import { HttpClientModule } from '@angular/common/http';
import { BuilderComponent } from './builder/builder.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TaskComponent } from './builder/task/task.component';
import { FxComponent } from './builder/fx/fx.component';
import { SrvComponent } from './builder/srv/srv.component';
import { ApaComponent } from './builder/apa/apa.component';
import { VtabComponent } from './com/vtab/vtab.component';
import { FrmComponent } from './builder/frm/frm.component';


@NgModule({
  declarations: [
    AppComponent,
    VtableComponent,
    BuilderComponent,
    FacturacionComponent,
    PerfilComponent,
    TaskComponent,
    FxComponent,
    SrvComponent,
    ApaComponent,
    VtabComponent,
    FrmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
