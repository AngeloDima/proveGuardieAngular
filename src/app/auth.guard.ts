import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const authGuard: CanActivateFn = (route, state) => {
  //metto i vari Service
  const logServ = inject(LoginService)
  const router = inject(Router)

  console.log('controllo la rotta');




  if (logServ.utenteValido) {

    return true;
  } else {
    return router.navigate(['/'])
  }



};




