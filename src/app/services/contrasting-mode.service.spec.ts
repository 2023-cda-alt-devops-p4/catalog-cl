import { TestBed } from '@angular/core/testing';

import { ContrastingModeService } from './contrasting-mode.service';

describe('ContrastingModeService', () => {
  let service: ContrastingModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContrastingModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
