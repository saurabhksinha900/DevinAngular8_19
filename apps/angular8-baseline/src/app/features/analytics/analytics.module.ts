import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsOverviewComponent } from './analytics-overview/analytics-overview.component';
import { AnalyticsChartsComponent } from './analytics-charts/analytics-charts.component';
import { AnalyticsFiltersComponent } from './analytics-filters/analytics-filters.component';
import { AnalyticsExportComponent } from './analytics-export/analytics-export.component';
import { AnalyticsSummaryComponent } from './analytics-summary/analytics-summary.component';


@NgModule({
  declarations: [AnalyticsOverviewComponent, AnalyticsChartsComponent, AnalyticsFiltersComponent, AnalyticsExportComponent, AnalyticsSummaryComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
