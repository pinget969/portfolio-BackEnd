import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyect } from 'src/app/models/proyect'

@Injectable({
  providedIn: 'root'
})
export class ProyectServiceService {
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/api/proyects';
  getProyect(){
    return this.http.get<Proyect[]>(this.Url);
  }
  createProyects(proyect:Proyect){
    return this.http.post<Proyect>(this.Url,proyect);
  }
  getProyectId(id:number){
    return this.http.get<Proyect>(this.Url+"/"+id);
  }
  updateProyect(proyect:Proyect){
    return this.http.post<Proyect>(this.Url,proyect);
  }
  DeleteProyect(proyect:Proyect){
    return this.http.delete<Proyect>(this.Url+"/"+proyect.id)
  }
}


