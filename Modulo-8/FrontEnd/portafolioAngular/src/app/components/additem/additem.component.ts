import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/skillService/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
/* Revisar para borrar */
  id:number=0;
  title:string ='';
  comentario:string= '';
  img:string='';
  /* Revisar para borrar */

  constructor(private itemService:ItemService, private router:Router){ }

  ngOnInit(): void {
  }
  onSubmit(){
    const item = new Item();
    item.title = this.title;
    item.comentario = this.comentario;
    item.img = this.img;
    item.complete = false;

    this.itemService.addItem(item)
    .subscribe(i =>{
      alert("Se agregó con exito");
      this.router.navigate(['/']);
    });
    
  }
}
