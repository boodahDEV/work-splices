import { TestBed } from '@angular/core/testing';

import { ApiConnectService } from './api-connect.service';

describe('ApiConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiConnectService = TestBed.get(ApiConnectService);
    expect(service).toBeTruthy();
  });
});
