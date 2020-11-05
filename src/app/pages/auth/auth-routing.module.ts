import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OffialLoginComponent } from './login/offial-login/offial-login.component';
import { BasicRegComponent } from './registration/basic-reg/basic-reg.component';

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
        component:BasicRegComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
