import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent, AboutComponent, ContactComponent, NavComponent, HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule],
  providers: [Title],
  bootstrap: [AppComponent]


})
export class AppModule { }
