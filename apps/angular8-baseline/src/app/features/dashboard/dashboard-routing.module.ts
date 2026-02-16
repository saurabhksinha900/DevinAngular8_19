import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardActivityComponent } from './dashboard-activity/dashboard-activity.component';

const routes: Routes = [
  { path: '', component: DashboardOverviewComponent },
  { path: 'summary', component: DashboardSummaryComponent },
  { path: 'widgets', component: DashboardWidgetsComponent },
  { path: 'charts', component: DashboardChartsComponent },
  { path: 'activity', component: DashboardActivityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
