import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDasboardUserComponent } from '../basic-dasboard-user/basic-dasboard-user.component';
import { PeoplesComponent } from '../peoples/peoples.component';
import { TeamsComponent } from '../teams/teams.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: BasicDasboardUserComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'peoples',
    component: PeoplesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
