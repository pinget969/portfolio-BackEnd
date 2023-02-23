import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicTraningService } from 'src/app/services/academicTrainingService/academic-traning.service';
import { Academic } from 'src/app/models/academic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-academic',
  templateUrl: './add-academic.component.html',
  styleUrls: ['./add-academic.component.css']
})
export class AddAcademicComponent implements OnInit{
  id:number=0;
  nameTitleTraining:string ='';
  conditionState:string ='';
  imgTrainingAcademic:string ='';

  constructor(private router:Router, private serviceAcademic:AcademicTraningService){}
  ngOnInit(): void {
  }
  onSubmit(){
  }
  
  add_newAcademicTraining(){
    const academicTraining = new Academic();
    academicTraining.nameTitleTraining=this.nameTitleTraining;
    academicTraining.conditionState=this.conditionState;
    academicTraining.imgTrainingAcademic=this.imgTrainingAcademic;
    this.serviceAcademic.createAcademic(academicTraining)
    .subscribe(i =>{
      Swal.fire({
        position: 'top-start',
        icon: 'success',
        title: 'Your academic training has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    });
    this.router.navigate(['/academicTraining']);
    
  }
  Cancel_AddNewAcademicTraining(){
    Swal.fire({
      title: 'Are you sure?',
      text: "If you made changes they will not be applied!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'cancelled!',
          'Your academic training has been cancelled..',
          'success'
        )
        this.router.navigate(['/academicTraining']);
      }
    }) 
  }
} 
