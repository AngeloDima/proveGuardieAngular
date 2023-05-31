import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudenteComponent } from './studente/studente.component';
import { StudenteDettailComponent } from './studente/studente-dettail/studente-dettail.component';

import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: LoginComponent },                     //metto la guardia
  { path: "studente", component: StudenteComponent, canActivate: [authGuard] },
  { path: "studente/:nome", component: StudenteDettailComponent, canActivate: [authGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
