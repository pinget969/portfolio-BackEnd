import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/services/contactService/contact-service.service';
import { Contact } from 'src/app/models/contact';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  // academicTrainings:Academic = new Academic();
  constructor(private contactService:ContactServiceService, private router:Router, private auth:AuthService) { }

  ngOnInit() {
    const id = 1;
    this.contactService.getContactId(+id!).subscribe(response =>{
      this.contact = response['mensaje'];
    });
  }

  EditContact(contact:Contact):void{
    localStorage.setItem("id",contact.id!.toString());
    this.router.navigate(["editContact"]);
  } 
  logIn:Boolean = this.auth.logIn;
}
