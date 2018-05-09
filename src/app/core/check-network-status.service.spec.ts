import { TestBed, inject } from '@angular/core/testing';

import { CheckNetworkStatusService } from './check-network-status.service';

describe('CheckNetworkStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckNetworkStatusService]
    });
  });

  it('should be created', inject([CheckNetworkStatusService], (service: CheckNetworkStatusService) => {
    expect(service).toBeTruthy();
  }));
});
