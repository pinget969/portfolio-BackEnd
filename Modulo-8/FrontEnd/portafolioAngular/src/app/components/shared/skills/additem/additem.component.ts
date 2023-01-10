import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/skillService/item.service';
import Swal from 'sweetalert2';

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
    
    
  }
  Cancel_AddNewSkill(){
     Swal.fire({
      title: 'Are you sure?',
      text: "If you made changes they will not be applied!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'cancelled!',
          'Your skill has been cancelled..',
          'success'
        )
        this.router.navigate(['/skills']);
      }
    }) 
  }
  add_newSkill(){
    const item = new Item();
    item.title = this.title;
    item.comentario = this.comentario;
    item.img = this.img;
    item.complete = false;

    this.itemService.addItem(item)
    .subscribe(i =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your skill has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/skills']);
    });

  }
}
