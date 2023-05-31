import { Injectable } from '@angular/core';
import { Dati } from './dati';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dati: Dati[] = [
    {
      nome: "Angelo",
      role: "studente"
    }
  ]
  //flag
  utenteValido: boolean


  login(nomeLOG: string, nomeROLE: string) {

    let utenteCheck = this.dati.find((dati) => {
      return (dati.nome == nomeLOG && dati.role == nomeROLE)
    })
    if (utenteCheck) {
      this.utenteValido = true
    } else {
      this.utenteValido = false
    }
  }














  constructor() { }

}


