import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { OffialLoginComponent } from './login/offial-login/offial-login.component';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { BasicRegComponent } from './registration/basic-reg/basic-reg.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NbFormFieldModule,
    NbCardModule,
    NbButtonModule,
    // NbThemeModule.forRoot({name: 'default'}),
    NbInputModule,
    NbIconModule,
    NbToastrModule,
    NbSelectModule,
    FormsModule      
  ],
  declarations: [OffialLoginComponent,BasicRegComponent]
})
export class AuthModule { }
