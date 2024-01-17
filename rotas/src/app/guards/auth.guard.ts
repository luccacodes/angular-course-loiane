import { Inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
export const authGuard: CanActivateFn = (route, state) => {
  const auth = Inject(AuthService);
  const router = Inject(Router);

  if (auth.usuarioEstaAutenticado) {
    return true;
  }

  router.navigate(['/login']);

  return false;
};
