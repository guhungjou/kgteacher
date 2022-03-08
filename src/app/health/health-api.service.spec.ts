import { TestBed } from '@angular/core/testing';

import { HealthApiService } from './health-api.service';

describe('HealthApiService', () => {
  let service: HealthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
