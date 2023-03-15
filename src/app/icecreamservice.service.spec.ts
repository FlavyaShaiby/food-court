import { TestBed } from '@angular/core/testing';

import { IcecreamserviceService } from './icecreamservice.service';

describe('IcecreamserviceService', () => {
  let service: IcecreamserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcecreamserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
