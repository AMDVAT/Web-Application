import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import { AlertController } from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import {SessionService} from '../../services/session/session.service';

@Component({
  selector: 'app-usuario-simple',
  templateUrl: './usuario-simple.component.html',
  styleUrls: ['./usuario-simple.component.scss'],
})
export class UsuarioSimpleComponent implements OnInit {

  usuario: User = {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      tipo_usuario: 4
  }

  usuarioP: User;
  edit = false;

  constructor( 
        private usuarioService: GestionUsuarioService, 
        private alertController: AlertController,
        private activeRoute: ActivatedRoute,
        private session: SessionService,
        private router: Router) 
  { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;

    if (params.id) {
      this.edit = true;
      console.log('Entro aca ' + params.id)
    }
  }

  saveUser(){
    this.usuarioService.saveUser(this.usuario)
    .subscribe( 
      res =>{ 
        alert('Producto registrada');
        this.messageSave();
        location.href= 'gestion/usuario/lista';
      }, 
      err => {console.error(err); this.errorMessageSave();}
      );
    console.log(this.usuario);
  }

  editUser(){
    console.log(this.usuario);
    this.session.getUserToken(token => {

        const params = this.activeRoute.snapshot.params;
        this.usuarioService.updateUser(params.id,this.usuario,token).subscribe(
            res => {
                console.log(res);
                location.href = 'gestion/usuario/lista';
            }, error => console.log(error)
        );
    });
  }

  async messageSave() {
    const alert = await this.alertController.create({
      header: 'Almacenado',
      message: '<strong>El usuario ha sido creado con exito </strong>',
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
      message: '<strong>No se ha logrado crear el usuario,revise los datos </strong>',
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
