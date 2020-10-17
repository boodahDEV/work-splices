import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PanelIzqComponent } from './panel-izq/panel-izq.component';
import { PanelCentralComponent } from './panel-central/panel-central.component';
import { PanelDerComponent } from './panel-der/panel-der.component';

@NgModule({
    declarations: [
      DashboardComponent,
      PanelIzqComponent,
      PanelCentralComponent,
      PanelDerComponent
    ],
    imports: [
      BrowserModule,
    ],
    providers: [],
  })
  export class DashboardModule { }
  