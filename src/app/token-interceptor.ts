// keycloak-interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';

@Injectable()
export class TokeInterceptor implements HttpInterceptor {
  constructor(private authService:AuthService ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add the Authorization header with the Keycloak token
   const token= this.authService.getToken();
   console.log(">>>>>> "+token);
    // const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIweVFqczNBZDVSZVZsVWV5eDRheVFDNFRRVVgwSU56YzlYbjlWVnpfc3A4In0.eyJleHAiOjE3MDYwMTc5MDIsImlhdCI6MTcwNjAxNzYwMiwianRpIjoiMGI2MDYzNWMtZjUxYy00NmVjLWFhNWEtOWZlNTQ5NTc5ZmM5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9hdHRhY2htZW50LXBvcnRhbCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwMjI3NzIxYi1mZTU3LTQ1YmItOGE5NC02YmU5ODlhMTQ3OGIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmcm9udGVuZC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiODhkMzcxMjktYjM5MC00OTFlLWJjMWUtMDAzYmU0M2M5YzRkIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQyMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1hdHRhY2htZW50LXBvcnRhbCIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19LCJmcm9udGVuZC1jbGllbnQiOnsicm9sZXMiOlsiY2xpZW50X2hyX29mZmljZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6Ijg4ZDM3MTI5LWIzOTAtNDkxZS1iYzFlLTAwM2JlNDNjOWM0ZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImtpcHRhbGFtIGpvc2VwaCIsInByZWZlcnJlZF91c2VybmFtZSI6ImtpcHRhbGFtIiwiZ2l2ZW5fbmFtZSI6ImtpcHRhbGFtIiwiZmFtaWx5X25hbWUiOiJqb3NlcGgiLCJlbWFpbCI6ImtpcHRhbGFtam9zZXBoQGdtYWlsLmNvbSJ9.FunRRRdU7mV6NxyLaJHjd13-21p2awLyVsLbTNvHqVsuPeg9lOFNsgv6F3yOy93dgH2PJulMloJocYgFifSZ0KwznqewbhziyIh00P7KhxNJyay37n0Ka6AWJPVQu34nLRUKET292yUQgK9SNHIkJWERxjAyKWGjsKEqmV4OWzERtZeGk35JO1YYa0fzIdJCbse29cVsRx7t5N7LoW6hoca_eOUjaYJkxFAjHPcqPMv8xcQPwpW9bXedrRdcn2vY5MuhIWLKhkuURniSKi_jo2DYq4Aohr6pEPhYR74lUjOHWkedsGDluULxoW8jgwbcHAXiHwTKa2pE-dgUwZ5PDQ"
    // const token = await this.keycloakService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer "+token,
          'Content-Type': 'application/json'

        },
      });
    }

    return next.handle(request);
  }

 
}
