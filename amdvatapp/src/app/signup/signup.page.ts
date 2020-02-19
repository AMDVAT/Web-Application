import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(form: NgForm) {
    console.log(form.value.fName);
    console.log(form.value.lName);
    console.log(form.value.email);
    console.log(form.value.password);
  }

}
