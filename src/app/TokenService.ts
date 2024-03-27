import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private accessToken:any;
  private refreshToken:any;
  constructor() { }

  setTokens(tokens: { access_token: string, refresh_token: string }) {
    this.accessToken = tokens.access_token;
    this.refreshToken = tokens.refresh_token;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  getRefreshToken(): string {
    return this.refreshToken;
  }

  isValidAccessToken(): boolean {
    
    const accessToken = sessionStorage.getItem('auth_token');
    if (!accessToken) {
      // Access token not found in sessionStorage
      return false;
    }

    // Parse the access token to extract expiration time
    const tokenData = JSON.parse(atob(accessToken.split('.')[1]));
    const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds

    // Check if the current time is before the expiration time
    const currentTime = new Date().getTime();
    return expirationTime > currentTime;

  }

  isValidRefreshToken(): boolean {
    const refreshToken = sessionStorage.getItem('refresh_token');
    if (!refreshToken) {
      // Refresh token not found in sessionStorage
      return false;
    }

    // Parse the refresh token to extract expiration time
    const tokenData = JSON.parse(atob(refreshToken.split('.')[1]));
    const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds

    // Check if the current time is before the expiration time
    const currentTime = new Date().getTime();
    return expirationTime > currentTime;
  }

  refreshTokenCall(): void {
    // Implement logic to refresh the access token using the refresh token
  }
}
