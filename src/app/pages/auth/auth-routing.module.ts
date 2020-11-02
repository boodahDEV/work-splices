import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OffialLoginComponent } from './login/offial-login/offial-login.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentication',
      status: false
    },
    children: [
      {
        path: 'login',
        component: OffialLoginComponent
      },
      {
        path: 'register',
        loadChildren: () => import('./registration/basic-reg/basic-reg.module').then(m => m.BasicRegModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
