
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';
import { User } from 'src/app/components/auth/login/usuario/usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  e!:String;
  username:string = "";
  password:string = "";

  constructor(private auth:AuthService, private router:Router) { }
  
  logIn:Boolean = this.auth.logIn;

  login(form:NgForm){
    this.username = form.value.username;
    this.password = form.value.password;
    this.auth.login(this.username, this.password); 

  }

  ngOnInit(): void {
  }
}
