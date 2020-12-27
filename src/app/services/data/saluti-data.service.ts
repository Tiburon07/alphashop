import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(public httpClient: HttpClient) { }

  getSaluti() {
    return this.httpClient.get('http://localhost:5000/api/saluti/Marco')
  }

}
