import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

export interface IFormCanDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const alunosDeactivateGuard: CanDeactivateFn<IFormCanDeactivate> = (
  component: IFormCanDeactivate
) => {
  console.log('guarda desativacao')
  return component.canDeactivate();
  // if (component.canDeactivate()) {
  //   console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - allowed`);
  //   return true;
  // } else {
  //   console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - not allowed`);
  //   return false;
  // }
}