import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const authGuard: CanActivateFn = (route, state) => {
  //metto i vari Service
  const logServ = inject(LoginService)
  const router = inject(Router)


  if (logServ.utenteValido) {
    console.log('VERIFICATO');
    return true
  } else {
    console.log('LEONARDo');

    return router.navigate(['/'])
  }

};




