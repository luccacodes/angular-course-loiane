import { CanActivateFn } from '@angular/router';

export const cursosGuard: CanActivateFn = (route, state) => {
  console.log('guarda filha')
  return true;
};
