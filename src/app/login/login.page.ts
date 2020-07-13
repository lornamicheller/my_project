import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private navigate: NavController) { }

  ngOnInit() {
  }

  goToRegister() {
    return this.router.navigateByUrl('/register');
  }


}
