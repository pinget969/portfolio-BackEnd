import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/skillService/item.service';


// CommonJS
const Swal = require('sweetalert2')


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
          /* */
          Swal.fire({
            title: 'Update changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result: { isConfirmed: any; isDenied: any; }) => {
            /* confir*/
            if (result.isConfirmed) {
              this.itemEdit.title=title;
              this.itemEdit.comentario=comentario;
              this.itemEdit.img=img;
              this.itemService.editItem(this.itemEdit)
              .subscribe(data=>{
              this.router.navigate(["/skills"]);
              })
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
          /* */
    
  }
  CancelItem(){
    Swal.fire({
      title: 'Are you sure?',
      text: "If you made changes they will not be applied!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelled!',
          'Suspended edition.',
          'success'
        )
      this.router.navigate(['/skills']);
      }
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
