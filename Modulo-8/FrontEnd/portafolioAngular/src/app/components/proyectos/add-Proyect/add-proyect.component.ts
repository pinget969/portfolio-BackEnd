import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/models/proyect';
import { ProyectServiceService } from 'src/app/services/proyectService/proyect-service.service';

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
    const proyect = new Proyect();
    proyect.title = this.title;
    proyect.company = this.company;
    proyect.date = this.date;
    proyect.content = this.content;
    proyect.img = this.img;
    proyect.tools=this.tools;
    this.productService.updateProyect(proyect)
    .subscribe(i =>{
      alert("Se agregó con exito");
      this.router.navigate(['/proyect']);
    });
  }
}
