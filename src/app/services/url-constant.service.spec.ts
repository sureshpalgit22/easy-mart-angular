import { TestBed } from '@angular/core/testing';

import { UrlConstantService } from './url-constant.service';

describe('UrlConstantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlConstantService = TestBed.get(UrlConstantService);
    expect(service).toBeTruthy();
  });
});
