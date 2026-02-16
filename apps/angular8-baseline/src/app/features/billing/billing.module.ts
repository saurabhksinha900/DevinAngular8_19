import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingListComponent } from './billing-list/billing-list.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BillingCreateComponent } from './billing-create/billing-create.component';
import { BillingEditComponent } from './billing-edit/billing-edit.component';
import { BillingOverviewComponent } from './billing-overview/billing-overview.component';


@NgModule({
  declarations: [BillingListComponent, BillingDetailsComponent, BillingCreateComponent, BillingEditComponent, BillingOverviewComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
