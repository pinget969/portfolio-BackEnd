import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item";
import { ItemService } from "../../services/skillService/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  constructor(private itemservice:ItemService) { }

  ngOnInit(): void {
    //this.items = [];
    //this.items = this.itemservice.getItems();
    this.itemservice.getItems().subscribe(data =>{
      this.items=data;
    })
  }
deleteItem(item:Item){
  this.items = this.items.filter(e => e.id != item.id);
  this.itemservice.deleteItem(item).subscribe();
}
editItem(item:Item){
  this.items = this.items.filter(e => e.id != item.id);
  this.itemservice.editItem(item).subscribe();
}
}
