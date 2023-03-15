import { TestBed } from '@angular/core/testing';

import { ArabicserviceService } from './arabicservice.service';

describe('ArabicserviceService', () => {
  let service: ArabicserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArabicserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
