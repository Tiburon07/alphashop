import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  autenticato = false
  consentito = false
  errorMsg = ''

  constructor( private route: Router) {

  }

  ngOnInit(): void {
  }

  gestAut(): void {
    if (this.userid === 'Tiburon' && this.password === '123_Stella') {
      this.route.navigate(['welcome', this.userid])
    } else this.errorMsg = 'Spiacente, la userid o la password sono errati!';
  }
}
