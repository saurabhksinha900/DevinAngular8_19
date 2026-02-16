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

  it('should return stats where all numeric fields are non-negative (edge test – hop v10→v11)', (done) => {
    service.getStats().subscribe((stats: DashboardStats) => {
      expect(stats.users).toBeGreaterThanOrEqual(0);
      expect(stats.reports).toBeGreaterThanOrEqual(0);
      expect(stats.accounts).toBeGreaterThanOrEqual(0);
      expect(stats.revenue).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('should return stats with all expected keys present (edge test – hop v13→v14)', (done) => {
    service.getStats().subscribe((stats: DashboardStats) => {
      expect('users' in stats).toBe(true);
      expect('reports' in stats).toBe(true);
      expect('accounts' in stats).toBe(true);
      expect('revenue' in stats).toBe(true);
      done();
    });
  });

  it('should return stats where revenue is a finite number (edge test – hop v16→v17)', (done) => {
    service.getStats().subscribe((stats: DashboardStats) => {
      expect(Number.isFinite(stats.revenue)).toBe(true);
      expect(stats.revenue).not.toBeNaN();
      done();
    });
  });
});
