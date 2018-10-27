import { TestBed } from '@angular/core/testing';

import { IncidentEncoursService } from './incident-encours.service';

describe('IncidentEncoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncidentEncoursService = TestBed.get(IncidentEncoursService);
    expect(service).toBeTruthy();
  });
});
