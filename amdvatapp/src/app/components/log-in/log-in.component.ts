import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {


  user: User = {
    nombre : "",
    apellido : "",
    email : "",
    password :""
};

  constructor() { }


  ngOnInit() {}

  login():void{
    console.log(this.user);
  }

}
