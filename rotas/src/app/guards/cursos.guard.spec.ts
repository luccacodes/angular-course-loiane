import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cursosGuard } from './cursos.guard';

describe('cursosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cursosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
