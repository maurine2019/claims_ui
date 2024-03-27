// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  isTokenExpired(token: string) {
    return this.jwtHelper.isTokenExpired(token);
  }


  setUserProfile(res: any) {
    sessionStorage.setItem('profile', res);
  }
  profile:any;

  getUserProfile() {
    const userProfileString = sessionStorage.getItem('profile');
    if (userProfileString) {
    return this.profile = JSON.parse(userProfileString);
    }
    return null;
  }
  getUserId(): any {
    return sessionStorage.getItem('userId');
  }
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private readonly tokenKey = 'your_token_key';


  constructor(private http: HttpClient,
    private router:Router
    ) {}

    getUserUuIdFromToken(token: any) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken?.uuid || null;
    }

    getUserIdFromToken(token: any) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken?.userId || null;
    }

  login(username: string, password: string): Observable<any> {
    const credentials = {"email": username,"password": password };
    
    return this.http.post('http://localhost:8081/api/v1/auth/authenticate', credentials);
  }

  setToken(token: string): void {
    sessionStorage.setItem('auth_token', token);
    sessionStorage.setItem('userId',this.getUserIdFromToken(token))
  }

  setRefreshToken(token: string): void {
    sessionStorage.setItem('refresh_token', token);
  }

  // getToken(): string | null {
  //   return localStorage.getItem(this.tokenKey);
  // }
  // isAuthenticated(): boolean {
  //   // Implement logic to check if the user is authenticated
  //   // For example, check if access token is valid
  //   return this.tokenService.isValidAccessToken();
  // }
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('profile');
    // Redirect or perform other actions
    if(!this.isAuthenticated()){
    this.router.navigate(["../login"]);
    }
  }

  
  getToken(): string | null {
    return sessionStorage.getItem('auth_token');
  }

token:any;
  getUserRoles(): string[] {
     this.token = localStorage.getItem('auth_token'); // Retrieve the JWT token from local storage or from wherever you store it
    const decodedToken = this.jwtHelper.decodeToken(this.token);

    // Assuming user roles are stored in the token as an array under the key 'roles'
    return decodedToken.roles;

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
}
