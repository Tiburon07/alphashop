import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../services/authapp.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  autenticato = true
  //consentito = false
  errorMsg = 'Spiacente, la userid o la password sono errati!'
  //infoMsg = 'Accesso Consentito'

  constructor(private route: Router, private BasiAuth: AuthappService) { }

  ngOnInit() {
  }

  gestAut() {
    if (this.BasiAuth.autentica(this.userid, this.password)) {
      this.autenticato = true;
      this.route.navigate(['welcome', this.userid])
    } else this.autenticato = false;
  }
}
