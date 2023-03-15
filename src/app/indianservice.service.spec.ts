import { TestBed } from '@angular/core/testing';

import { IndianserviceService } from './indianservice.service';

describe('IndianserviceService', () => {
  let service: IndianserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
