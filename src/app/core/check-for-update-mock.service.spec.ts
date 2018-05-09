import { TestBed, inject } from '@angular/core/testing';

import { CheckForUpdateMockService } from './check-for-update-mock.service';

describe('CheckForUpdateMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckForUpdateMockService]
    });
  });

  it('should be created', inject([CheckForUpdateMockService], (service: CheckForUpdateMockService) => {
    expect(service).toBeTruthy();
  }));
});
