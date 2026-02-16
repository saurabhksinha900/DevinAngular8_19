import { TestBed } from '@angular/core/testing';

import { DashboardActivityService } from './dashboard-activity.service';

describe('DashboardActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardActivityService = TestBed.get(DashboardActivityService);
    expect(service).toBeTruthy();
  });
});
