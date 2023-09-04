import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


var myRoutes:Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"contact-us",component:ContactUSComponent },
  {path:"services", component:ServicesComponent }
];

var myRoutes2 = RouterModule.forRoot(myRoutes);



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUSComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    myRoutes2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
