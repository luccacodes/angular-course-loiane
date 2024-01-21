import { CanActivateFn } from '@angular/router';

export const alunosGuard: CanActivateFn = (route, state) => {
  console.log('guarda filha alunos')

  // if (state.url.includes('editar')) {
  //   return false;
  // }

  return true;
};
