import { TestBed } from '@angular/core/testing';

import { LogicaService } from './logica.service';

describe('LogicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogicaService = TestBed.get(LogicaService);
    expect(service).toBeTruthy();
  });
});
