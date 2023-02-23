import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Academic } from 'src/app/models/academic';
import { AcademicTraningService } from 'src/app/services/academicTrainingService/academic-traning.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-academic',
  templateUrl: './edit-academic.component.html',
  styleUrls: ['./edit-academic.component.css']
})
export class EditAcademicComponent implements OnInit{

  academicTrainings:Academic = new Academic();
  constructor(private academicService:AcademicTraningService, private router:Router) { }

  ngOnInit() {
    this.EditAcademicTraining();
  }
  
  
  EditAcademicTraining(){
    console.log("entrando a edit academic")
    let id=localStorage.getItem("id");
    this.academicService.getAcademicId(+id!).subscribe(response => {
      this.academicTrainings = response['mensaje'];
      console.log(this.academicTrainings = response['mensaje']);
      console.log(response);
    });
  }


  ActualizarAcademicTraining(titleTraining:String, conditionState:String, imgTrainingAcademic:String){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.academicTrainings.nameTitleTraining=titleTraining;
        this.academicTrainings.conditionState=conditionState;
        this.academicTrainings.imgTrainingAcademic=imgTrainingAcademic;
        this.academicService.updateAcademic(this.academicTrainings.id, this.academicTrainings)
  .subscribe(data=>{
    this.academicTrainings=data;
    this.router.navigate(["/academicTraining"]);
  })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
} 
CancelAcademicTraining(){
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
    this.router.navigate(['/academicTraining']);
    }
  })
}


}
