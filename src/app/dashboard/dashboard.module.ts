import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PanelIzqComponent } from './panel-izq/panel-izq.component';
import { PanelCentralComponent } from './panel-central/panel-central.component';
import { PanelDerComponent } from './panel-der/panel-der.component';
import { NbActionsModule, NbAlertModule, NbBadgeModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbListModule, NbRadioModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { PanelSurComponent } from './panel-sur/panel-sur.component';

@NgModule({
    declarations: [
      DashboardComponent,
      PanelIzqComponent,
      PanelCentralComponent,
      PanelDerComponent,
      PanelSurComponent
    ],
    imports: [
      BrowserModule,
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
  export class DashboardModule { }
  