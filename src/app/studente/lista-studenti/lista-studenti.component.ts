import { Component } from '@angular/core';
import { ClassStudente } from 'src/app/models/class-studente';
import { ScuolaService } from '../scuola.service';

@Component({
  selector: 'app-lista-studenti',
  templateUrl: './lista-studenti.component.html',
  styleUrls: ['./lista-studenti.component.scss']
})
export class ListaStudentiComponent {

  listaStudenti: ClassStudente[] = []
  constructor(private LeonardoServ: ScuolaService) {
    this.listaStudenti = this.LeonardoServ.listaStudenti
  }

}
