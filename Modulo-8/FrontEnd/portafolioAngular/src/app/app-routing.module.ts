import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './components/shared/skills/additem/additem.component';
import { EditItemComponent } from './components/shared/skills/edit-item/edit-item.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AddProyectComponent } from './components/shared/projects/add-Project/add-proyect.component';
import { EditProyectComponent } from './components/shared/projects/edit-Project/edit-proyect.component';
import { LoginComponent } from './components/auth/login/login/login.component';
import { ContactComponent } from './components/shared/contact/listar-contact/contact.component';
import { ProyectosComponent } from './components/shared/projects/listar-Project/listar-proyectos.component';
import { ItemsComponent } from './components/shared/skills/items/items.component';
import { WorkExperienceComponent } from './components/shared/work-experience/work-experience.component';
import { AcademicTrainingComponent } from './components/shared/academic-training/listar-academic-training/academic-training.component';
import { EditAcademicComponent } from './components/shared/academic-training/edit-academic-training/edit-academic.component';
import { AddAcademicComponent } from './components/shared/academic-training/add-academic-training/add-academic.component';
import { EditComponent } from './components/shared/contact/edit-contact/edit.component';


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'home' , component:HomeComponent},
  { path: 'workExperience' , component:WorkExperienceComponent},
  { path: 'academicTraining' , component:AcademicTrainingComponent},
  { path: 'skills' , component:ItemsComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'proyect' , component:ProyectosComponent},
  { path: 'add', component: AdditemComponent },
  { path: 'addAcademic', component: AddAcademicComponent },
  { path: 'edit', component:EditItemComponent},
  { path: 'editAcademicTraining', component:EditAcademicComponent},
  { path: 'editContact', component:EditComponent},
  { path: 'addProyect', component:AddProyectComponent},
  { path: 'editProyect', component:EditProyectComponent},
  { path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
