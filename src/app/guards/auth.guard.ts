import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(localStorage.getItem('user-data-store')) {
    return true;
  }
  if (!authService.isLoggedIn) {
    router.navigateByUrl('/');
  }
  return authService.isLoggedIn;
};
