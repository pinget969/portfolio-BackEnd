import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/models/proyect';
import { ProyectServiceService } from 'src/app/services/proyectService/proyect-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-proyect',
  templateUrl: './add-proyect.component.html',
  styleUrls: ['./add-proyect.component.css']
})
export class AddProyectComponent implements OnInit {
  id:number=0;
  title:string ='';
  company:string= '';
  date:string='';
  content:string='';
  img:string='';
  tools:string='';
  complete:boolean=true;

  constructor(private productService:ProyectServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
 
  }
  add_newProject(){
    const proyect = new Proyect();
    proyect.title = this.title;
    proyect.company = this.company;
    proyect.date = this.date;
    proyect.content = this.content;
    proyect.img = this.img;
    proyect.tools=this.tools;
    this.productService.updateProyect(proyect)
    .subscribe(i =>{
      Swal.fire({
        position: 'top-start',
        icon: 'success',
        title: 'Your projetc has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    });
    this.router.navigate(['/proyect']);
    
  }
  Cancel_AddNewProject(){
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
         'Your projetc has been cancelled..',
         'success'
       )
       this.router.navigate(['//proyect']);
     }
   }) 
 }
}
