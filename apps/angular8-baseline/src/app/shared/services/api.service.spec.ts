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

  it('should handle HTTP 404 not-found gracefully (edge test – hop v12→v13)', () => {
    let errorResponse: any;
    service.get('missing-resource').subscribe(
      () => fail('expected a 404 error, not data'),
      (error: any) => { errorResponse = error; }
    );
    const req = httpMock.expectOne('/api/missing-resource');
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
    expect(errorResponse.status).toBe(404);
  });

  it('should handle HTTP 429 rate-limit response (edge test – hop v14→v15)', () => {
    let errorResponse: any;
    service.get('rate-limited').subscribe(
      () => fail('expected a 429 error, not data'),
      (error: any) => { errorResponse = error; }
    );
    const req = httpMock.expectOne('/api/rate-limited');
    req.flush('Too Many Requests', { status: 429, statusText: 'Too Many Requests' });
    expect(errorResponse.status).toBe(429);
  });

  it('should handle HTTP 403 forbidden response (edge test – hop v17→v18)', () => {
    let errorResponse: any;
    service.get('forbidden-resource').subscribe(
      () => fail('expected a 403 error, not data'),
      (error: any) => { errorResponse = error; }
    );
    const req = httpMock.expectOne('/api/forbidden-resource');
    req.flush('Forbidden', { status: 403, statusText: 'Forbidden' });
    expect(errorResponse.status).toBe(403);
  });
});
