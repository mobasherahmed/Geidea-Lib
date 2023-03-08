import { TestBed } from '@angular/core/testing';

import { GeideaLibService } from './geidea-lib.service';

describe('GeideaLibService', () => {
  let service: GeideaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeideaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
