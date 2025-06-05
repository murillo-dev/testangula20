import { inject, Injectable, signal } from '@angular/core';
import { Jwt } from './jwt';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  readonly jwtService = inject(Jwt);

  isAuthenticated(): boolean {
    const token = this.jwtService.getJwtToken();
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiration = payload.exp * 1000; // Convert to milliseconds
    return Date.now() < expiration;
  }

  // login
}
