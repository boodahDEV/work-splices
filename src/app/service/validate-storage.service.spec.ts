import { TestBed } from '@angular/core/testing';

import { ValidateStorageService } from './validate-storage.service';

describe('ValidateStorageService', () => {
  let service: ValidateStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
