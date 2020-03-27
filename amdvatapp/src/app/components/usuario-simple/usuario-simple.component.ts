import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'


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
      password: ''  
  }


  constructor( private usuarioService: GestionUsuarioService) 
  { }

  ngOnInit() {}

  saveUser(){
    console.log(this.usuario);
  }

}
