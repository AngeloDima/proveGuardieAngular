import { Component } from '@angular/core';
import { Dati } from '../dati';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  datiLogin: Dati[] = [];

  constructor(private logServ: LoginService) {
    this.datiLogin = this.logServ.dati
  }

  nomeLOG: string;
  nomeROLE: string;

  verificoLogin(nomeLOG: string, nomeROLE: string) {
    this.logServ.login(nomeLOG, nomeROLE);
  }
}
