import { TestBed } from '@angular/core/testing';

import { AnalyticsExportService } from './analytics-export.service';

describe('AnalyticsExportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyticsExportService = TestBed.get(AnalyticsExportService);
    expect(service).toBeTruthy();
  });
});
