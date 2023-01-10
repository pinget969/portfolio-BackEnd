import { Component, OnInit } from '@angular/core';
import { Item } from "../../../../models/item";
import { ItemService } from "../../../../services/skillService/item.service";
import { AuthService } from 'src/app/services/auth-service/auth-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  constructor(private itemservice:ItemService, private auth:AuthService) { }

  ngOnInit(): void {
    this.itemservice.getItems().subscribe(data =>{
      this.items=data;
    })
  }
deleteItem(item:Item){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.items = this.items.filter(e => e.id != item.id);
      this.itemservice.deleteItem(item).subscribe();
      Swal.fire(
        'Deleted!',
        'Your skill has been deleted.',
        'success'
      )
    }
  })

}
editItem(item:Item){
  this.items = this.items.filter(e => e.id != item.id);
  this.itemservice.editItem(item).subscribe();
}
logIn:Boolean = this.auth.logIn;
}
