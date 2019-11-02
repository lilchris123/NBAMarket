import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        // add authorization header with jwt token if available
        let resp = JSON.parse(localStorage.getItem('currentUser'));
        if (resp && resp.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${resp.token}`
                }
            });
        }

        return next.handle(request);
    }
}