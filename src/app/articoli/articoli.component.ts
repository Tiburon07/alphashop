import { Component, OnInit } from '@angular/core';
import { ArticoliDataService } from '../services/data/articoli-data.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private articoliService: ArticoliDataService) { }


  ngOnInit(): void {
    this.filter = this.route.snapshot.params['filter'];
    if (this.filter != undefined)
      this.getArticoli(this.filter);
  }

  getArticoli(filter: string) {
    this.articoliService.getArticoli(filter).subscribe(
      response => {
        console.log('Ricerchiamo articoli con filtro ' + filter);

        this.articoli = response;
        console.log(this.articoli);

        this.NumArt = this.articoli.length;
        console.log(this.NumArt);
      }
    )
  }
}
