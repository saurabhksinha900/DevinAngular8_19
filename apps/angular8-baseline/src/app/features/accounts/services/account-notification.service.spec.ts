import { TestBed } from '@angular/core/testing';

import { AccountNotificationService } from './account-notification.service';

describe('AccountNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountNotificationService = TestBed.get(AccountNotificationService);
    expect(service).toBeTruthy();
  });
});
