import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardActivityComponent } from './dashboard-activity/dashboard-activity.component';


@NgModule({
  declarations: [DashboardOverviewComponent, DashboardSummaryComponent, DashboardWidgetsComponent, DashboardChartsComponent, DashboardActivityComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
