import { Component, OnInit } from '@angular/core';
import { ProyectServiceService } from 'src/app/services/proyectService/proyect-service.service';
import { Proyect } from 'src/app/models/proyect';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {
  proyect:Proyect=new Proyect();
  constructor(private service:ProyectServiceService, private router:Router) { }

  ngOnInit(): void {
    this.EditProyect();
  }

  EditProyect(){
    let id=localStorage.getItem("id");
    this.service.getProyectId(+id!)
    .subscribe(data=>{
      this.proyect=data;
    })
  }
  ActualizarProject(title:String, company:String, date:String, content:String, img: String, tools:String, web: String){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.proyect.title=title;
        this.proyect.company=company;
        this.proyect.date=date;
        this.proyect.content=content;
        this.proyect.img=img;
        this.proyect.tools=tools;
        this.proyect.web=web;
        this.service.updateProyect(this.proyect)
  .subscribe(data=>{
    this.proyect=data;
    this.router.navigate(["/proyect"]);
  })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
} 
CancelProjetc(){
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
    this.router.navigate(['/proyect']);
    }
  })
}
}

