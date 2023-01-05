import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { itemProyecto } from 'src/app/models/itemProyecto'; /* quitar */
import { Proyect } from 'src/app/models/proyect';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';
import { ProyectServiceService } from 'src/app/services/proyectService/proyect-service.service';

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
  this.service.DeleteProyect(proyect)
  .subscribe(data=>{
  this.proyects=this.proyects.filter(p=>p!==proyect);
  })
}

logIn:Boolean = this.auth.logIn;

}
