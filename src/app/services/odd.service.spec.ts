import { TestBed } from '@angular/core/testing';

import { OddService } from './odd.service';

describe('OddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OddService = TestBed.get(OddService);
    expect(service).toBeTruthy();
  });
});
