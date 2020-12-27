import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  saluti = 'Benvenuti nel sito Alphashop';
  titolo2 = 'Seleziona gli articoli da acquistare';
  messaggio = '';
  utente = '';

  constructor(private route: ActivatedRoute, public salutiSrv: SalutiDataService ) { }

  ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid'];

  }

  getSaluti() {
    console.log();
    this.salutiSrv.getSaluti().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  handleResponse(response: Object) {
    this.messaggio = response.toString();
  }

  handleError(error: { error: { message: string; }; }) {
    this.messaggio = error.error.message;
  }

}
