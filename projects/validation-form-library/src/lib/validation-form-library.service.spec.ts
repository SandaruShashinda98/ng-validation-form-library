import { TestBed } from '@angular/core/testing';

import { ValidationFormLibraryService } from './validation-form-library.service';

describe('ValidationFormLibraryService', () => {
  let service: ValidationFormLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationFormLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
