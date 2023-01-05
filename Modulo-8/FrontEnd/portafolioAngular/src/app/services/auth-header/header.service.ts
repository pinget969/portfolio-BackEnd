import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  url:string = "http://localhost:8080/auth/login";

  constructor(private http:HttpClient) { }
}
