import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { my_nav } from './components/shared/nav/nav';
import { ItemsComponent } from './components/shared/skills/items/items.component';
import { ItemComponent } from './components/shared/skills/item/item.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AdditemComponent } from './components/shared/skills/additem/additem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectosComponent } from './components/shared/projects/listar-Project/listar-proyectos.component';
import { ProyectoJavaComponent } from './components/shared/proyecto-java/proyecto-java.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { EditItemComponent } from './components/shared/skills/edit-item/edit-item.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactComponent } from './components/shared/contact/listar-contact/contact.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { AddProyectComponent } from './components/shared/projects/add-Project/add-proyect.component';
import { EditProyectComponent } from './components/shared/projects/edit-Project/edit-proyect.component';

import { AuthInterceptorService } from './services/auth-interceptor/auth-interceptor.service.service';
import { LoginComponent } from './components/auth/login/login/login.component';
import { WorkExperienceComponent } from './components/shared/work-experience/work-experience.component';
import { AcademicTrainingComponent } from './components/shared/academic-training/listar-academic-training/academic-training.component';
import { EditAcademicComponent } from './components/shared/academic-training/edit-academic-training/edit-academic.component';
import { AddAcademicComponent } from './components/shared/academic-training/add-academic-training/add-academic.component';
import { EditComponent } from './components/shared/contact/edit-contact/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    my_nav,
    ItemsComponent,
    ItemComponent,
    HeaderComponent,
    AdditemComponent,
    ProyectosComponent,
    ProyectoJavaComponent,
    EditItemComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AddProyectComponent,
    EditProyectComponent,
    LoginComponent,
    WorkExperienceComponent,
    AcademicTrainingComponent,
    EditAcademicComponent,
    AddAcademicComponent,
    EditComponent,
    
   ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent] 
})
export class AppModule { }
