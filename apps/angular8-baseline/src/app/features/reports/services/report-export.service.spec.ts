import { TestBed } from '@angular/core/testing';

import { ReportExportService } from './report-export.service';

describe('ReportExportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportExportService = TestBed.get(ReportExportService);
    expect(service).toBeTruthy();
  });
});
