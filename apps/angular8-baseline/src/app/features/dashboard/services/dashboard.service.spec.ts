import { TestBed } from '@angular/core/testing';

import { DashboardService, DashboardStats } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return dashboard stats', (done) => {
    service.getStats().subscribe((stats: DashboardStats) => {
      expect(stats.users).toBe(1234);
      expect(stats.reports).toBe(567);
      expect(stats.accounts).toBe(89);
      expect(stats.revenue).toBe(45678);
      done();
    });
  });
});
