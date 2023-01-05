import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  e!:string;
  token!:string;
  url:string = "http://localhost:8080/auth/login";
  
  //PARAR
  constructor(private http:HttpClient, private router: Router) { }

  login(username:string, password:string){ 
    localStorage.clear(); 
    this.http.post(this.url, {email: username, password:password})
    .subscribe((resp:any) => {
    location.reload();
    localStorage.setItem('token', resp.jwt);
    });
  }


  
/*
  login(username:string, password:string){ 
    this.http.post(this.url, {email: username, password:password})
    .pipe(first())
    .subscribe((response:any) =>{
      console.log(response);
      if(response){
        localStorage.setItem('token', JSON.stringify(response.jwt));
      }

    })

    /*

    console.log("SALINEDO "+ username + " " + password)
    localStorage.clear(); 
    //this.http.post(this.url, {username: username, password:password})
    this.http.post(this.url, {email: username, password:password})
    .subscribe((e:any) => {
    //location.reload();
    console.log("salienod token " + e.token);

    //localStorage.setItem('token', e.token);

    });
    
  }*/

  logout(){
    localStorage.removeItem('token');
    location.reload();
  }

  public get headers():HttpHeaders{
    return new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
  }
  

  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }

}
