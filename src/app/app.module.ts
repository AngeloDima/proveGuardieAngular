import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudenteComponent } from './studente/studente.component';
import { ListaStudentiComponent } from './studente/lista-studenti/lista-studenti.component';
import { StudenteDettailComponent } from './studente/studente-dettail/studente-dettail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudenteComponent,
    ListaStudentiComponent,
    StudenteDettailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
