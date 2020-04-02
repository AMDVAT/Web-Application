import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import {SessionService} from '../../services/session/session.service';
import {LogInService} from '../../services/log-in/log-in.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss'],
})
export class UsuarioPerfilComponent implements OnInit {

  usuario: User = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    tipo_usuario: 5
  }


  usuarioP: User;
  editUsuario: any = [];

  constructor(
      private usuarioService: GestionUsuarioService,
      private loginService: LogInService,
      private alertController: AlertController,
      private router: Router,
      private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.mostrarPerfil();
  }


  mostrarPerfil() {
    this.sessionService.getUserEmail(email => {
      this.sessionService.getUserToken(token => {
        this.usuarioService.getUserByEmail(email,token).subscribe(
          res =>{
            this.editUsuario = res;
            this.usuario.nombre = this.editUsuario.nombre;
            this.usuario.apellido = this.editUsuario.apellido;
            this.usuario.email = this.editUsuario.email;
            this.usuario.password = this.editUsuario.password;
            this.usuario.tipo_usuario = this.editUsuario.tipo_usuario;
           console.log(this.usuario.nombre)
          }, error => console.log(error)
        );

      });
    });
  }

}
