import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})


export class ListaUsuariosComponent implements OnInit {

  users: Array<any> = [];
  user: User;

  usersList: any;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: GestionUsuarioService
  ) { }

  ngOnInit() {
    this.userService.getListUser().subscribe(
      res => {
        this.usersList = res;
      }, error => console.log(error)
    );

  }

}
