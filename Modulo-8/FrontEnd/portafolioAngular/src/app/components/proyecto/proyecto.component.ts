import { Component, Input, OnInit } from '@angular/core';
import { itemProyecto } from 'src/app/models/itemProyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
@Input() item:itemProyecto = new itemProyecto();
  constructor() { }

  ngOnInit(): void {
  }

}
