import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Cek apakah user sudah login?
  if (authService.isLoggedIn()) {
    return true; // Boleh masuk
  } else {
    // Belum login? Tendang ke halaman login
    router.navigate(['/login']);
    return false;
  }
};
