import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

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


  constructor(private usuarioService: GestionUsuarioService, 
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {}

  saveUser(){
    //Registrar Usuario
    this.usuarioService.saveUser(this.usuario)
    .subscribe( 
      res =>{ 
        this.messageSave();
        //LOGEARLO AUTOMATICAMENTE

        //GUARDAR EL TOKEN

        //REDIRIGIR AL HOME
        this.router.navigate(['home']); //<-----Esto ponerlo adentro del res del login 
      }, 
      err => {console.error(err); this.errorMessageSave();}
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
