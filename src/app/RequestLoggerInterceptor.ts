// request-logger.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestLoggerInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Log the details of the request before it is sent
    console.log(`Outgoing Request: ${request.method} ${request.url}`);
    console.log('Request Headers:', request.headers.keys());
    console.log('Request Body:', request.body);

    return next.handle(request).pipe(
      tap(
        (event) => {
          // Log the details of the response if needed
          console.log('Incoming Response:', event);
        },
        (error) => {
          // Log the details of the error if the request fails
          console.error('Request failed:', error);
        }
      )
    );
  }
}
