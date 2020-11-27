import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPeoplesComponent } from '../add-peoples/add-peoples.component';
import { BasicDasboardUserComponent } from '../basic-dasboard-user/basic-dasboard-user.component';
import { MakeTeamComponent } from '../make-team/make-team.component';
import { PeoplesComponent } from '../peoples/peoples.component';
import { TeamsComponent } from '../teams/teams.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule, NbUserModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    NbButtonModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbSelectModule,
    NbInputModule,
    NbDialogModule.forChild(),
    HttpClientModule
  ],
  declarations: [
    ProfileComponent,
    AddPeoplesComponent,
    BasicDasboardUserComponent,
    MakeTeamComponent,
    TeamsComponent,
    PeoplesComponent
  ]
})
export class ProfileModule { }
