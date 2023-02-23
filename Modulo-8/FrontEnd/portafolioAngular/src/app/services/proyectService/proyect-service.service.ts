import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyect } from 'src/app/models/proyect'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectServiceService {
  constructor(private http:HttpClient) { }
  Url='https://backendproyectfinal-production-8fb3.up.railway.app/api/proyects';
  getProyect():Observable<Proyect[]>{
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
   /*
  getProyectId(id:number):Observable<Proyect>{  
    return this.http.get<Proyect>(this.Url+'/'+id);
  }
   */
}


