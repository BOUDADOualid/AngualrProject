import { TestBed } from '@angular/core/testing';

import { ResolusService } from './resolus.service';

describe('ResolusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolusService = TestBed.get(ResolusService);
    expect(service).toBeTruthy();
  });
});
