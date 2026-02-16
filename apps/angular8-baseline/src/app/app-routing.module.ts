import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule' },
  { path: 'users', loadChildren: './features/users/users.module#UsersModule' },
  { path: 'reports', loadChildren: './features/reports/reports.module#ReportsModule' },
  { path: 'accounts', loadChildren: './features/accounts/accounts.module#AccountsModule' },
  { path: 'billing', loadChildren: './features/billing/billing.module#BillingModule' },
  { path: 'analytics', loadChildren: './features/analytics/analytics.module#AnalyticsModule' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
