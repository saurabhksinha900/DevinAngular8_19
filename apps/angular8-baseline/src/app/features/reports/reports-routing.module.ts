import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportCreateComponent } from './report-create/report-create.component';
import { ReportEditComponent } from './report-edit/report-edit.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';

const routes: Routes = [
  { path: '', component: ReportListComponent },
  { path: 'create', component: ReportCreateComponent },
  { path: 'overview', component: ReportOverviewComponent },
  { path: ':id', component: ReportDetailsComponent },
  { path: ':id/edit', component: ReportEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
