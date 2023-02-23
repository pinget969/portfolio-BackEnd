import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactServiceService } from 'src/app/services/contactService/contact-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  contact:Contact = new Contact();
  constructor(private contactService:ContactServiceService, private router:Router){}
  ngOnInit() {
    this.EditContact();
  }
  EditContact(){
    let id=localStorage.getItem("id");
    this.contactService.getContactId(+id!).subscribe(response =>{
      this.contact = response['mensaje'];
    })
  }
  UpdateContact(nameDeveloper:String, perfiDeveloper:String, locationDeveloper:String, emailDeveloper:String, webSiteDeveloper:String, gitHubDeveloper:String, linkedinDevelper:String ){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.contact.nameDeveloper=nameDeveloper;
        this.contact.perfiDeveloper=perfiDeveloper;
        this.contact.locationDeveloper=locationDeveloper;
        this.contact.emailDeveloper=emailDeveloper;
        this.contact.webSiteDeveloper=webSiteDeveloper;
        this.contact.gitHubDeveloper=gitHubDeveloper;
        this.contact.linkedinDevelper=linkedinDevelper;

        this.contactService.updateContact(this.contact.id, this.contact)
  .subscribe(data=>{
    this.contact=data;
    this.router.navigate(["/contact"]);
  })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  CancelContact(){
    Swal.fire({
      title: 'Are you sure?',
      text: "If you made changes they will not be applied!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelled!',
          'Suspended edition.',
          'success'
        )
      this.router.navigate(['/contact']);
      }
    })
  }
}
