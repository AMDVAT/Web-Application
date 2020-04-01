import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import { AlertController, Platform } from '@ionic/angular';
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
      tipo_usuario: null
  }

  usuarioP: User;
  edit = false;
  editUsuario: any = [];
  categorias: any = [];
  id_tipo_usuario: number;

  users1: any[] = [
    {
      tipo_usuario: 1,
      nombre: 'Administrador',
    },
    {
      tipo_usuario: 2,
      nombre: 'Dueño',
    },
    {
      tipo_usuario: 3,
      nombre: 'Gerente',
    },
    {
      tipo_usuario: 4,
      nombre: 'Empleado',
    },
    {
      tipo_usuario: 5,
      nombre: 'Cliente',
    },
    {
      tipo_usuario: 6,
      nombre: 'Cliente Frecuente',
    }
  ];

  constructor( 
        private platform: Platform,
        private usuarioService: GestionUsuarioService, 
        private alertController: AlertController,
        private activeRoute: ActivatedRoute,
        private session: SessionService,
        private router: Router) 
  { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;

    if (params.id) {
      this.session.getUserToken(token => {
        console.log('Entro aca edit ' + params.id + ', ' + token)
        this.usuarioService.getOneUser(params.id,token).subscribe(
            res => {
              this.editUsuario = res;
              this.usuario.nombre = this.editUsuario.nombre;
              this.usuario.apellido = this.editUsuario.apellido;
              this.usuario.email = this.editUsuario.email;
              this.usuario.password = this.editUsuario.password;
              this.usuario.tipo_usuario = this.editUsuario.tipo_usuario;
              console.log(this.usuario.nombre)
              console.log(res);
            }, error => console.log(error)
        );
      });
      this.edit = true;
    }

  }

  OnChange(event){
    this.usuario.tipo_usuario = event.target.value;
    //console.log(this.usuario.tipo_usuario);
  }

  menuAccion(){
    if(this.edit)
      this.editUser();
    else
    this.saveUser();
  }

  saveUser(){
    console.log('Se registrara');
    this.usuarioService.saveUser(this.usuario)
    .subscribe( 
      res =>{ 
        alert('Usuario registrada');
        this.messageSave();
        location.href= 'gestion/usuario/lista';
      }, 
      err => {console.error(err); this.errorMessageSave();}
      );
    console.log(this.usuario);
  }

  editUser(){
    console.log('Se editara');
    console.log(this.usuario);
    this.session.getUserToken(token => {
        const params = this.activeRoute.snapshot.params;
        this.usuarioService.updateUser(params.id,this.usuario,token).subscribe(
            res => {
                console.log(res);
                alert('Usuario editado');
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
