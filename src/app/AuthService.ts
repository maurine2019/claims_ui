// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient,private router:Router) {}

  isAuthenticated() {
    var status=true;

    if(status){
      return true;
    }
    else {
      return false;
    }
      
  }

  private authToken: string ="";


  private apiUrl = 'http://your-spring-boot-api-url';



  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }


  
  setAuthToken(token: string): void {
    this.authToken = token;
  }

  getAuthToken(): string {
    // Check token expiry and refresh if needed
    if (this.isTokenExpired()) {
      this.refreshToken();
    }
    return this.authToken;
  }

  private isTokenExpired(): boolean {
    // Implement logic to check if the token has expired
    // Return true if expired, false otherwise
    // You may need to decode the token and check its expiration claim
    return false;
  }

  private refreshToken(): void {
    // Implement logic to refresh the token from the Spring Boot backend
    // Update this.authToken with the new token
  }
}
