import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { HttpService } from '../../core/services/http.service';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private _auth: HttpService ,private auth: HttpService ,private cookie :CookieService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the user's token from the auth service
    const authToken = this.auth.accessToken();

    // Modify the request to include the token or other auth data
    if(authToken){
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`),
      body: {
        ...request.body,
        username: this.cookie.get('username'),
        password: this.cookie.get('password')
      }
    });
  }
  return next.handle(request).pipe(
  	catchError((err) => {
   	 if (err instanceof HttpErrorResponse) {
       	 if (err.status === 401) {
       	 // redirect user to the logout page
     	}
 	 }
  	return throwError(err);
	})
   )
  }
  }
  