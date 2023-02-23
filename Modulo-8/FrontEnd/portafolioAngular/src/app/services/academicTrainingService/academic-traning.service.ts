import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Academic } from 'src/app/models/academic';

@Injectable({
  providedIn: 'root'
})
export class AcademicTraningService {
  constructor(private http:HttpClient) { }
  Url='https://backendproyectfinal-production-8fb3.up.railway.app/api/academic';
/*
  getAcademic():Observable<Academic[]>{
    return this.http.get<Academic[]>(this.Url);
  }*/
  getAcademic():Observable<any> {
    return this.http.get(this.Url);
  }
  
  createAcademic(academic:Academic){
    return this.http.post<Academic>(this.Url,academic);
  }
  getAcademicId(id:number){
    return this.http.get<Academic>(this.Url+"/find/id/"+id);
  }
  updateAcademic(id: number, academic: Academic): Observable<Academic> {
    const url = `${this.Url}/id/${id}`;
    return this.http.put<Academic>(url, academic);
  }

  DeleteAcademic(academic:Academic){
    return this.http.delete<Academic>(this.Url+"/delete/"+academic.id)
  }
  
}
