import { TestBed } from '@angular/core/testing';

import { AccountValidationService } from './account-validation.service';

describe('AccountValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountValidationService = TestBed.get(AccountValidationService);
    expect(service).toBeTruthy();
  });
});
