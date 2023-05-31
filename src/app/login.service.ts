import { Injectable } from '@angular/core';
import { Dati } from './dati';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //creo il container per i dati
  dati: Dati[] = [
    {
      nome: "Angelo",
      role: "studente"
    }
  ]
  //flag
  utenteValido: boolean

  //passo i parametri NOME e ROLE
  login(nome: string, role: string) {


    //cerco uno studente che abbia NOME e ROLE uguale
    let utenteCheck = this.dati.find((utenteVER) => {
      return (utenteVER.nome == nome && utenteVER.role == role)
    })

    if (utenteCheck) {
      this.utenteValido = true
      return true
    }
    else {
      this.utenteValido = false
      return false
    }
  }

  constructor() { }

}


