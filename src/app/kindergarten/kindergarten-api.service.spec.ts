import { TestBed } from '@angular/core/testing';

import { KindergartenApiService } from './kindergarten-api.service';

describe('KindergartenApiService', () => {
  let service: KindergartenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindergartenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
