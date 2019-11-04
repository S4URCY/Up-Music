import { TestBed } from '@angular/core/testing';

import { LogarService } from './logar.service';

describe('LogarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogarService = TestBed.get(LogarService);
    expect(service).toBeTruthy();
  });
});
