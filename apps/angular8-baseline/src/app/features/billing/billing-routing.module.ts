import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingListComponent } from './billing-list/billing-list.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BillingCreateComponent } from './billing-create/billing-create.component';
import { BillingEditComponent } from './billing-edit/billing-edit.component';
import { BillingOverviewComponent } from './billing-overview/billing-overview.component';

const routes: Routes = [
  { path: '', component: BillingListComponent },
  { path: 'create', component: BillingCreateComponent },
  { path: 'overview', component: BillingOverviewComponent },
  { path: ':id', component: BillingDetailsComponent },
  { path: ':id/edit', component: BillingEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
