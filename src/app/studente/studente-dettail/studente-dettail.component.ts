import { Component, OnInit } from '@angular/core';
import { ClassStudente } from 'src/app/models/class-studente';
import { ScuolaService } from '../scuola.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studente-dettail',
  templateUrl: './studente-dettail.component.html',
  styleUrls: ['./studente-dettail.component.scss']
})
export class StudenteDettailComponent implements OnInit {

  dettail?: ClassStudente;

  constructor(private studServ: ScuolaService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    const nome = this.route.snapshot.paramMap.get('nome')
    if (nome) {
      this.studServ.getByNome(nome).subscribe(
        dettail => this.dettail = dettail,
        error => console.error(error)
      )
    }

  }

}
