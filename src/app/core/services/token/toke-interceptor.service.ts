import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler,HttpContextToken, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


export const BYPASS_JW_TOKEN = new HttpContextToken(() => false);
@Injectable({
  providedIn: 'root'
})



export class TokeInterceptorService implements HttpInterceptor {

  auth:any
  parsedAuth
  constructor() { }

  intercept(req, next): Observable<HttpEvent<any>> {

    try {
      this.auth = localStorage.getItem('user');
      if (this.auth === null) {
        console.log('Error this.auth is: ', this.auth)
        return next.handle(req)

      }
      if (req.context.get(BYPASS_JW_TOKEN) === true) {
        console.log('exception Http')
        return next.handle(req)
      }

      this.parsedAuth = JSON.parse(this.auth);

      const tokennizeReq = req.clone({
        setHeaders: {
          Authorization: `brearer ${this.parsedAuth.token}`

        }
      });
      return next.handle(tokennizeReq)
    } catch (error) {
      console.error('Sin token', error);

      return new Observable();
    }

  }
}
