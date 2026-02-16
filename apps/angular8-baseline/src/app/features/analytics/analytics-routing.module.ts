import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsOverviewComponent } from './analytics-overview/analytics-overview.component';
import { AnalyticsChartsComponent } from './analytics-charts/analytics-charts.component';
import { AnalyticsFiltersComponent } from './analytics-filters/analytics-filters.component';
import { AnalyticsExportComponent } from './analytics-export/analytics-export.component';
import { AnalyticsSummaryComponent } from './analytics-summary/analytics-summary.component';

const routes: Routes = [
  { path: '', component: AnalyticsOverviewComponent },
  { path: 'charts', component: AnalyticsChartsComponent },
  { path: 'filters', component: AnalyticsFiltersComponent },
  { path: 'export', component: AnalyticsExportComponent },
  { path: 'summary', component: AnalyticsSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
