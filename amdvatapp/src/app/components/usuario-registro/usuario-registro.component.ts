import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import {SessionService} from '../../services/session/session.service';
import {LogInService} from '../../services/log-in/log-in.service';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.scss'],
})
export class UsuarioRegistroComponent implements OnInit {

  usuario: User = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    tipo_usuario: 5
  }


  constructor(
      private usuarioService: GestionUsuarioService,
      private loginService: LogInService,
      private alertController: AlertController,
      private router: Router,
      private sessionService: SessionService
  ) { }

  ngOnInit() {}

  saveUser() {
    // TODO registrar usuario
    this.usuarioService.saveUser(this.usuario)
    .subscribe(
      res => {
        this.messageSave();
        this.loginService.login(this.usuario.email, this.usuario.password).subscribe(
            res => {
              // this.messageSave();
              this.sessionService.setUser(res);
              this.router.navigate(['home']);
            },err => {
              this.errorMessageSave();
              console.log(err)
            }
        );
      },
      err => {console.error(err); this.errorMessageSave(); }
      );
    console.log(this.usuario);
  }


  async messageSave() {
    const alert = await this.alertController.create({
      header: 'Almacenado',
      message: '<strong>Se ha registrado con exito. </strong>',
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
      header: 'Almacenado',
      message: '<strong>No se ha logrado registrar,revise los datos </strong>',
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
