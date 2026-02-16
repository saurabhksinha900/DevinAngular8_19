import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: 'create', component: AccountCreateComponent },
  { path: 'overview', component: AccountOverviewComponent },
  { path: ':id', component: AccountDetailsComponent },
  { path: ':id/edit', component: AccountEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
