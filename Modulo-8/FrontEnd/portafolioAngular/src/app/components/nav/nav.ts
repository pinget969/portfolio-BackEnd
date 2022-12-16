import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my_nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav.component.css']
})

export class my_nav implements OnInit{
    constructor(private router:Router){
    }
    ngOnInit(): void {
        
    }
    Contact(){
        console.log("Click");
        this.router.navigate(["contact"]);
    }
}