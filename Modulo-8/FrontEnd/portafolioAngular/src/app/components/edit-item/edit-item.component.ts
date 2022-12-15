import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  itemEdit:Item = new Item();
  id:number=0;
  title:string ='';
  comentario:string= '';
  img:string='';


  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
    this.editItem();
  }

  editItem(){
    let id=localStorage.getItem("id");
    this.itemService.getItemsId(+id!)
    .subscribe(data=>{
      this.itemEdit=data;
    })
  }

  ActualizarItem(title:String, comentario:String, img:String){
    this.itemEdit.title=title;
    this.itemEdit.comentario=comentario;
    this.itemEdit.img=img;
    this.itemService.editItem(this.itemEdit)
    .subscribe(data=>{
      alert("Se Actualizó con Exito..");
      this.router.navigate(["/"]);
    })
  }

  onSubmit(){
    const item = new Item();
    item.title = this.title;
    item.comentario = this.comentario;
    item.img = this.img;
    item.complete = false;

    
    this.itemService.editItem(item)
    .subscribe(i =>{
      alert("Se Edito con exito");
      this.router.navigate(['/']);
    });
    
  }

}
