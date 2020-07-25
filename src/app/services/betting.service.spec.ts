import { TestBed } from '@angular/core/testing';

import { BettingService } from './betting.service';

describe('BettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BettingService = TestBed.get(BettingService);
    expect(service).toBeTruthy();
  });
});
