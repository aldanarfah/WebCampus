import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged = false;

  login(user: string, pass: string) {
    if (user === 'admin' && pass === 'admin') {
      this.logged = true;
      return true;
    }
    return false;
  }

  logout() {
    this.logged = false;
  }

  isLoggedIn() {
    return this.logged;
  }
}
