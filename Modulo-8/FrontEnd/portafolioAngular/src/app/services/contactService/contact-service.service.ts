import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  constructor(private http:HttpClient) { }
  Url='https://backendproyectfinal-production-8fb3.up.railway.app/api/contact';

  /*
   getAcademic():Observable<any> {
    return this.http.get(this.Url);
  }
  */
    getContact():Observable<any>{
      return this.http.get(this.Url);
    }
    getContactId(id:number){
      return this.http.get<Contact>(this.Url+"/find/id/"+id);
    }
    updateContact(id: number, contact:Contact): Observable<Contact>{
      const url = `${this.Url}/id/${id}`;
      return this.http.put<Contact>(url, contact);
    }

}
