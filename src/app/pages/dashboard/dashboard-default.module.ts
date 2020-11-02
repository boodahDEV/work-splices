import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDefaultRoutingModule } from './dashboard-default-routing.module';
import { DashboardDefaultComponent } from './dashboard-default.component';
import { SharedModule } from '../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { PanelCentralComponent } from './panel-central/panel-central.component';
import { PanelIzqComponent } from './panel-izq/panel-izq.component';
import { PanelDerComponent } from './panel-der/panel-der.component';
import { PanelSurComponent } from './panel-sur/panel-sur.component';
import { NbActionsModule, NbBadgeModule, NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbRadioModule, NbTooltipModule, NbUserModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    DashboardDefaultRoutingModule,
    SharedModule,
    ChartModule,
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
  declarations: [DashboardDefaultComponent, PanelCentralComponent, PanelIzqComponent, PanelDerComponent, PanelSurComponent]
})
export class DashboardDefaultModule { }
