import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './components/additem/additem.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { HomeComponent } from './components/home/home.component';
import { AddProyectComponent } from './components/proyectos/add-Proyect/add-proyect.component';
import {EditProyectComponent} from './components/proyectos/edit-proyect/edit-proyect.component';
import { LoginComponent } from './components/auth/login/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectosComponent } from './components/proyectos/listar-Proyect/listar-proyectos.component';



const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'home' , component:HomeComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'proyect' , component:ProyectosComponent},
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
