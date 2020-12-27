import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articoli } from '../../articoli/articoli.component';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  server = "localhost"
  port = "5051"

  constructor(private httpClient: HttpClient) { }

  getArticoliByDescr(descrizione: string) {
    return this.httpClient.get<Articoli[]>(`http://${this.server}:${this.port}/api/articoli/cerca/descrizione/${descrizione}`);
  }

  getArticoliByCodArt(codArt: string) {
    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/api/articoli/cerca/codice/${codArt}`);
  }

  getArticoliByEan(barcode: string) {
    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/api/articoli/cerca/ean/${barcode}`);
  }
}
