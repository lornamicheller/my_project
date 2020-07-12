import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  register: boolean;

  ngOnInit() {
  }

  changeRegister(register: boolean) {
    this.register = register;
    console.log("statusChange");
  }

}
