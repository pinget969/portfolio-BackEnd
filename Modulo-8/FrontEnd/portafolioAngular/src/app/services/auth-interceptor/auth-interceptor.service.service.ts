import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

import {  AuthService } from './../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor( private auth:AuthService) { }
  /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }*/
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('token') || "";

    let request = req;
    

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status == 403) {
          if (localStorage.getItem("token")) {
            this.auth.logout();
          }else{
            console.log("error al iniciar sesión")
          }
        }
        console.log("Ocurrió un error");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect user or password!',
        })

         
        return throwError(err.error.message);
      })
      
    );
    
  }

}

