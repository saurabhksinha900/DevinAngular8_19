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

  it('should propagate HTTP 500 error to subscriber (edge test – hop v9→v10)', () => {
    let errorResponse: any;
    service.get('fail-endpoint').subscribe(
      () => fail('expected an error, not data'),
      (error: any) => { errorResponse = error; }
    );
    const req = httpMock.expectOne('/api/fail-endpoint');
    req.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });
    expect(errorResponse.status).toBe(500);
  });
});
