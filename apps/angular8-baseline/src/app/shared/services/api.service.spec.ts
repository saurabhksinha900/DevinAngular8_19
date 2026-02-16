import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform GET request', () => {
    const mockData = { id: 1, name: 'Test' };
    service.get('test').subscribe(data => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne('/api/test');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
