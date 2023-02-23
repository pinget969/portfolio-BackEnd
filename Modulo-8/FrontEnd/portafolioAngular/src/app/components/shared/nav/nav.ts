import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';


@Component({
    selector: 'my_nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav.component.css']
})

export class my_nav implements OnInit{
    
    constructor(private router:Router, private auth:AuthService){
    }
    ngOnInit(): void {
        
    }
    logIn:Boolean = this.auth.logIn;
    
    logout(){
        this.auth.logout();
      }
      allSkills(){
        this.router.navigate(['/skills']);
      }
}