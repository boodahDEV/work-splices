import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasComponent } from './ideas/ideas.component';
import { ProyectosComponent } from './proyectos.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ProyectosComponent,
  },
  {
    path: 'ideas',
    component: IdeasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
