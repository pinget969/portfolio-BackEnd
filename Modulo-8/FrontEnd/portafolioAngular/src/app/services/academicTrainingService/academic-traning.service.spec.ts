import { TestBed } from '@angular/core/testing';

import { AcademicTraningService } from './academic-traning.service';

describe('AcademicTraningService', () => {
  let service: AcademicTraningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicTraningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
