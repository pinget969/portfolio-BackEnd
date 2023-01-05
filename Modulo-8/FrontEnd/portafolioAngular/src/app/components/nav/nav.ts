import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';


@Component({
    selector: 'my_nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav.component.css']
})

export class my_nav implements OnInit{
    constructor(private auth:AuthService){
    }
    ngOnInit(): void {
        
    }
    logIn:Boolean = this.auth.logIn;
    
    logout(){
        this.auth.logout();
      }
    
}