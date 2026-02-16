import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DashboardStats {
  users: number;
  reports: number;
  accounts: number;
  revenue: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getStats(): Observable<DashboardStats> {
    return of({
      users: 1234,
      reports: 567,
      accounts: 89,
      revenue: 45678
    });
  }
}
