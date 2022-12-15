import { Component, OnInit } from '@angular/core';
import { itemProyecto } from 'src/app/models/itemProyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  items: itemProyecto[]=[];
  
  constructor() { }

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
