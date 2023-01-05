import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { my_nav } from './components/nav/nav';
import { footer } from './components/footer/footer';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './components/header/header.component';
import { AdditemComponent } from './components/additem/additem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectosComponent } from './components/proyectos/listar-Proyect/listar-proyectos.component';
import { ProyectoJavaComponent } from './components/proyecto-java/proyecto-java.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProyectComponent } from './components/proyectos/add-Proyect/add-proyect.component';
import { EditProyectComponent } from './components/proyectos/edit-proyect/edit-proyect.component';
 
//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptorService } from './services/auth-interceptor/auth-interceptor.service.service';
import { LoginComponent } from './components/auth/login/login/login.component';

//components Desde Angular Matereal 
 
@NgModule({
  declarations: [
    AppComponent,
    my_nav,
    footer,
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
    
   ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'contact' , component:ContactComponent},
      { path: 'home' , component:HomeComponent},
      { path: 'proyect' , component:ProyectosComponent},
      
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
