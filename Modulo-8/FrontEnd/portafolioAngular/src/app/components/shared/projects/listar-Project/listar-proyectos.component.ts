import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { itemProyecto } from 'src/app/models/itemProyecto'; /* quitar */
import { Proyect } from 'src/app/models/proyect';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';
import { ProyectServiceService } from 'src/app/services/proyectService/proyect-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  styleUrls: ['./listar-proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  designer:String='Nelson Pinget';
  //items: itemProyecto[]=[]; /* quitar */
  proyects : Proyect[]=[];
  
  constructor( private service:ProyectServiceService, private router:Router, private auth:AuthService) { }
  ngOnInit(): void {
    this.service.getProyect()
    .subscribe(data=>{
      this.proyects=data;

  })

}
EditarProyect(proyect:Proyect):void{
  localStorage.setItem("id",proyect.id!.toString());
  this.router.navigate(["editProyect"]);
}

DeleteProyect(proyect:Proyect){
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
      this.service.DeleteProyect(proyect)
      .subscribe(data=>{
      this.proyects=this.proyects.filter(p=>p!==proyect);
  })
      Swal.fire(
        'Deleted!',
        'Your projetc has been deleted.',
        'success'
      )
    }
  })
  
}

logIn:Boolean = this.auth.logIn;

}
