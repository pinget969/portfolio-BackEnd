import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  url:string = "https://backendproyectfinal-production-8fb3.up.railway.app/auth/login";

  constructor(private http:HttpClient) { }
}
