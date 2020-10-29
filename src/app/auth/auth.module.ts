import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbAlertModule, NbBadgeModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbListModule, NbRadioModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
      CommonModule,
      AuthModule,
      NbLayoutModule,
      NbButtonModule,
      NbCardModule,
      NbBadgeModule,
      NbListModule,
      NbTooltipModule,
      NbIconModule,
      NbUserModule,
      NbRadioModule,
      NbActionsModule
    ],
    providers: [],
  })
  export class AuthModule { }
  