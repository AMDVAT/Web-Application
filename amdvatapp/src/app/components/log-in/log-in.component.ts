import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {LogInService} from '../../services/log-in/log-in.service';

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
      private loginService: LogInService
  ) { }


  ngOnInit() {}

  login(){
    /*
    this.nativeStorage.getItem('freakyItem1')
        .then(
            data => console.log(data),
            error => console.error(error)
        );*/
    this.loginService.login(this.user.email,this.user.password).subscribe(
        res => {
          localStorage.setItem('user', JSON.stringify(res));
          this.nativeStorage.setItem('user', res)
              .then(
                  (data) => console.log('Stored first item!', data),
                  error => console.error('Error storing item', error)
              );
        },err => console.log(err)
    );

  }

  ionViewWillEnter() {
    console.log('hola');
  }

}
