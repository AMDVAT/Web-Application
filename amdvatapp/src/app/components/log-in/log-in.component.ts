import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {LogInService} from '../../services/log-in/log-in.service';
import { Platform } from '@ionic/angular';
import {SessionService} from '../../services/session/session.service';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';


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
      private alertController: AlertController,
      public platform: Platform,
      private router: Router
  ) { 
  }


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
          this.messageSave();
          this.sessionService.setUser(res);
          this.router.navigate(['home']);
        },err => {
          this.errorMessageSave();
          console.log(err)
        }
    );
  }

  ionViewWillEnter() {
    console.log('hola');
  }

  async messageSave() {
    const alert = await this.alertController.create({
      header: 'ACEPTADO',
      message: '<strong>Inicio de sesión exitoso </strong>',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async errorMessageSave() {
    const alert = await this.alertController.create({
      header: 'DENEGADO',
      message: '<strong> No se ha logrado iniciar sesion. Revise los datos </strong>',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }


}
