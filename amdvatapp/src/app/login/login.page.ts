import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  async registerModal() {
    console.log("REGISTRAR");
  }

  login(form: NgForm) {
    console.log(form.value.email);
    console.log(form.value.password);
  }

}
