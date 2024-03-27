import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  private logoutTimeout!: NodeJS.Timeout;

  constructor(private authService: AuthService) { }

  startIdleTimer(): void {
    console.log(".................................................")
    clearTimeout(this.logoutTimeout);
    this.logoutTimeout = setTimeout(() => {
      this.authService.logout();
    }, 5000); // 5 minutes in milliseconds * 60 * 1
  }

  resetIdleTimer(): void {
    this.startIdleTimer();
  }

  stopIdleTimer(): void {
    clearTimeout(this.logoutTimeout);
  }
}
