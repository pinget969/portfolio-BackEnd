import { Component, OnInit } from '@angular/core';
import { AcademicTraningService } from 'src/app/services/academicTrainingService/academic-traning.service';
import { Academic } from 'src/app/models/academic';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-academic-training',
  templateUrl: './academic-training.component.html',
  styleUrls: ['./academic-training.component.css']
})

export class AcademicTrainingComponent implements OnInit {
  academicTrainings: Academic[] = [];

  constructor(private academicService: AcademicTraningService, private router:Router, private auth:AuthService) { }

  ngOnInit() {
    this.academicService.getAcademic().subscribe(response => {
      this.academicTrainings = response.mensaje;
    });
  }

  EditAcademicTraining(academicTrainings:Academic):void{
    localStorage.setItem("id",academicTrainings.id!.toString());
    this.router.navigate(["editAcademicTraining"]);
  }
  
  DeleteAcademicTraining(academicTraining:Academic){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
     if (result.isConfirmed) {
        this.academicService.DeleteAcademic(academicTraining)
        .subscribe(data=>{
        this.academicTrainings=this.academicTrainings.filter(p=>p!==academicTraining);
    })
        Swal.fire(
          'Deleted!',
          'Your academic training has been deleted.',
          'success'
        )
      }
    })
    
  }
  logIn:Boolean = this.auth.logIn;
}


