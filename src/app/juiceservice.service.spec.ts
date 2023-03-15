import { TestBed } from '@angular/core/testing';

import { JuiceserviceService } from './juiceservice.service';

describe('JuiceserviceService', () => {
  let service: JuiceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuiceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
