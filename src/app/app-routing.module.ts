import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApaComponent } from './builder/apa/apa.component';
import { BuilderComponent } from './builder/builder.component';
import { FxComponent } from './builder/fx/fx.component';
import { SrvComponent } from './builder/srv/srv.component';
import { TaskComponent } from './builder/task/task.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'builder/:apa', component: ApaComponent, children: [
    { path: 'fx', component: FxComponent },
    { path: 'task', component: TaskComponent },
    { path: 'srv', component: SrvComponent },
  ] },
  { path: 'builder', component: BuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
