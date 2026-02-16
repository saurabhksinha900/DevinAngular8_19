import { TestBed } from '@angular/core/testing';

import { ReportSchedulerService } from './report-scheduler.service';

describe('ReportSchedulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportSchedulerService = TestBed.get(ReportSchedulerService);
    expect(service).toBeTruthy();
  });
});
