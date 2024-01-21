import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { alunosGuard } from './alunos.guard';

describe('alunosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alunosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
