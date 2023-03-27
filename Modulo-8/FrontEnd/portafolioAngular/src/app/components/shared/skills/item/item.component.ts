import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //conf entrada, recibe objeto
  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter(); //creacion de evento

  constructor( private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }
  onDelete(item: Item){
    this.deleteItem.emit(item);
  }
  EditarItem(item:Item):void{
    localStorage.setItem("id",item.id!.toString());
    this.router.navigate(["edit"])
  }
  logIn:Boolean = this.auth.logIn;

}
