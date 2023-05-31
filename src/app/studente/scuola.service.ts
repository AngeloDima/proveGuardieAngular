import { Injectable } from '@angular/core';
import { ClassStudente } from '../models/class-studente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScuolaService {

  listaStudenti: ClassStudente[] = [
    {
      nome: "Leonardo",
      cognome: "Licen",
      corso: "Angular",
      stato: false
    },

    {
      nome: "Maria",
      cognome: "Cristina Scripciuc",
      corso: "Angular",
      stato: true
    },
    {
      nome: "Angelo",
      cognome: "Di Mauro",
      corso: "Angular",
      stato: true
    },

    {
      nome: "Dario",
      cognome: "Boh",
      corso: "Angular",
      stato: false
    },
  ]


  getByNome(nome: string): Observable<ClassStudente | undefined> {
    const studente = this.listaStudenti.find(studente => studente.nome === nome)
    if (studente) {
      return of(studente)
    } else {
      return new Observable(observer => {
        observer.error("Leonardo non ha un nome")
        observer.complete()
      })
    }
  }

  constructor() { }
}
