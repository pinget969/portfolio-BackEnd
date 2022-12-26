import { Component, OnInit } from '@angular/core';
import { ProyectServiceService } from 'src/app/services/proyectService/proyect-service.service';
import { Proyect } from 'src/app/models/proyect';
import { Router } from '@angular/router';

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
  ActualizarProducto(title:String, company:String, date:String, content:String, img: String, tools:String){
        this.proyect.title=title;
        this.proyect.company=company;
        this.proyect.date=date;
        this.proyect.content=content;
        this.proyect.img=img;
        this.proyect.tools=tools;
        this.service.updateProyect(this.proyect)
  .subscribe(data=>{
    this.proyect=data;
    this.router.navigate(["proyect"]);
  })
} 
}

