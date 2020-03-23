import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {LogInService} from '../../services/log-in/log-in.service';
import { Platform } from '@ionic/angular';
import {SessionService} from '../../services/session/session.service';

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

  constructor(
      private nativeStorage: NativeStorage,
      private loginService: LogInService,
      private sessionService: SessionService,
      public platform: Platform
  ) { }


  ngOnInit() {

  }

  login(){
    /*
    this.nativeStorage.getItem('freakyItem1')
        .then(
            data => console.log(data),
            error => console.error(error)
        );*/
    this.loginService.login(this.user.email,this.user.password).subscribe(
        res => {
          this.sessionService.setUser(res);
        },err => console.log(err)
    );

  }

  ionViewWillEnter() {
    console.log('hola');
  }

}
