import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private navigate: NavController) { }

  ngOnInit() {
  }

  goToHome() {
    return this.router.navigateByUrl('/tabs/tabs/tab1');
  }


}
