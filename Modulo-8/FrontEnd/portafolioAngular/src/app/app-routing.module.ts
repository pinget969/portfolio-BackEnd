import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './components/additem/additem.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { HomeComponent } from './components/home/home.component';
import { AddProyectComponent } from './components/proyectos/add-Proyect/add-proyect.component';
import {EditProyectComponent} from './components/proyectos/edit-proyect/edit-proyect.component';
import { LoginComponent } from './components/auth/login/login/login.component';


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'add', component: AdditemComponent },
  { path: 'edit', component:EditItemComponent},
  { path: 'addProyect', component:AddProyectComponent},
  { path: 'editProyect', component:EditProyectComponent},
  { path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
