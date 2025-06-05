import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Jwt {
  jwtToken = signal<string | null>(null);
  jwtRefreshToken = signal<string | null>(null);

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  setJwtToken(token: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('jwtToken', token);
    }
    this.jwtToken.set(token);
  }

  setJwtRefreshToken(token: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('jwtRefreshToken', token);
    }
    this.jwtRefreshToken.set(token);
  }

  getJwtToken(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('jwtToken');
    }
    return this.jwtToken();
  }

  getJwtRefreshToken(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('jwtRefreshToken');
    }
    return this.jwtRefreshToken();
  }

  clearTokens(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('jwtRefreshToken');
    }
    this.jwtToken.set(null);
    this.jwtRefreshToken.set(null);
  }
}
