import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'tale-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {

  constructor(
    private $r: Router,
    private $auth: AuthService
  ) { }

  ngOnInit() {
    this.loggedCheck();
  }

  login() {
    this.$auth.login();
  }

  newAccount() {
    console.log(2);
  }

  loggedCheck() {
    this.$auth.authorised( "dashboard", true ).then( bool => {
      console.log(bool);
    })
  }

}
