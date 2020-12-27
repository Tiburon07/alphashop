import { Component, OnInit } from '@angular/core';
import { ArticoliDataService } from '../services/data/articoli-data.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

export class Articoli {

  constructor(
    public codArt: string,
    public descrizione: string,
    public um: string,
    public pzCart: number,
    public pesoNetto: number,
    public prezzo: number,
    public isactive: boolean,
    public dataCreazione: Date,
    public idStatoArt: number

  ) { }

}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  NumArt = 0;
  pagina = 1;
  righe = 10;
  articoli: Articoli[] = [];
  filter: string = '';
  articolo: Articoli | undefined;

  constructor(private route: ActivatedRoute, private articoliService: ArticoliDataService) { }


  ngOnInit(): void {
    this.filter = this.route.snapshot.params['filter'];
    if (this.filter != undefined)
      this.getArticoli(this.filter);
  }

  refresh() {
    this.getArticoli(this.filter);
  }

  getArticoli(filter: string) {
    console.log('Ricerchiamo articoli per codice articolo ' + filter);
    this.articoliService.getArticoliByCodArt(filter).subscribe(
      response => {

        this.articoli = [];

        this.articolo = response;
        console.log(this.articolo);

        this.articoli.push(this.articolo);
        this.NumArt = this.articoli.length;
        console.log(this.NumArt);
      },
      error => {
        console.log(error);
        console.log(error.error.messaggio);

        console.log('Ricerchiamo per barcode con il filtro ' + filter);
        this.articoliService.getArticoliByEan(filter).subscribe(
          response => {

            this.articolo = response;
            console.log(this.articolo);

            this.articoli.push(this.articolo);
            this.NumArt = this.articoli.length;
            console.log(this.NumArt);
          },
          error => {
            console.log(error);
            console.log(error.error.messaggio);

            console.log('Ricerchiamo per descrizione con il filtro ' + filter);
            this.articoliService.getArticoliByDescr(filter).subscribe(
              response => {

                this.articoli = response;
                console.log(this.articoli);

                this.NumArt = this.articoli.length;
                console.log(this.NumArt);
              },
              error => {
                console.log(error);
                console.log(error.error.messaggio);
              }
            )
          }
        )
      }
    )
  }
}
