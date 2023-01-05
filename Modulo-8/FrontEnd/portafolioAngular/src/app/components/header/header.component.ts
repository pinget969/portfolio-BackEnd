import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth-service/auth-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private auth:AuthService) { }

  ngOnInit(): void {
  }
  logIn:Boolean = this.auth.logIn;
}
