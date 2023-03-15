import { TestBed } from '@angular/core/testing';

import { KeralaserviceService } from './keralaservice.service';

describe('KeralaserviceService', () => {
  let service: KeralaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeralaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
