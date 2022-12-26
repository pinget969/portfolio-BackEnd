import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { itemProyecto } from 'src/app/models/itemProyecto'; /* quitar */
import { Proyect } from 'src/app/models/proyect';
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
  
  constructor( private service:ProyectServiceService, private router:Router) { }
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
}

/*
  ngOnInit(): void {
    this.items = [
      {
      id:0,
      title:'Juego del Ahorcado',
      sub_title: 'HTML CSS JavaScript',
      content: 'El juego del ahorcado es un Juego de adivinanzas. Debes ir insertando letras mayúsculas hasta acertar la palabra oculta sin ser “ahorcado”.',
      img: "../../../assets/img/proyectosRealizados/ahorcado-principal-4.png",
      complete:true
    },
    {
      id:1,
      title:'Encriptador de texto',
      sub_title: 'HTML CSS JavaScript',
      content: 'Esta es una aplicacion que encripta el texto que desees. Así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.',
      img: "../../../assets/img/proyectosRealizados/encriptador-1.png",
      complete:true
    }
  ]
  }

}
*/
