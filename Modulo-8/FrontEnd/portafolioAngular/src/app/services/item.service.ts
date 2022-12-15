import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Item } from '../models/item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = 'http://localhost:8080/api/skills';
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http:HttpClient) { }


  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }
   
   getItemsId(id:number){
    return this.http.get<Item>(this.url+"/"+id);
  }
  

  toggleCompleted(item:Item):Observable<any>{
    return this.http.put(this.url + item.id,item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    //return this.http.delete<Item>(this.url + item.id);
  return this.http.delete<Item>(this.url+"/"+item.id);
  }

  addItem(item:Item):Observable<Item>{
    //return this.http.post<Item>(this.url, item, this.httpOptions);
  return this.http.post<Item>(this.url,item);
  }
  editItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url+"/"+item.id,item);
  }

}