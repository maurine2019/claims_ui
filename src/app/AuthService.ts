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
      return decodedToken?.userId || null;
    }

  login(username: string, password: string): Observable<any> {
    const credentials = {"email": username,"password": password };
    return this.http.post('http://localhost:8081/api/v1/auth/authenticate', credentials);
  }

  setToken(token: string): void {
    sessionStorage.setItem('auth_token', token);
    sessionStorage.setItem('userId',this.getUserUuIdFromToken(token))
  }

  // getToken(): string | null {
  //   return localStorage.getItem(this.tokenKey);
  // }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('userId');
    // Redirect or perform other actions
    if(!this.isAuthenticated()){
    this.router.navigate(["../login"]);
    }
  }

  
  // saveToken(token: string): void {
  //   sessionStorage.setItem('auth_token', token);
  // }

  getToken(): string | null {
    return sessionStorage.getItem('auth_token');
  }



}
