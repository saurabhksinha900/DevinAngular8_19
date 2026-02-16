import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportCreateComponent } from './report-create/report-create.component';
import { ReportEditComponent } from './report-edit/report-edit.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';


@NgModule({
  declarations: [ReportListComponent, ReportDetailsComponent, ReportCreateComponent, ReportEditComponent, ReportOverviewComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
