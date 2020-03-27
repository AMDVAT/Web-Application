import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import {ActivatedRoute, Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';


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
    private userService: GestionUsuarioService,
    public loadingController: LoadingController
  ) { 
    this.presentLoading();
  }

  ngOnInit() {
    this.userService.getListUser().subscribe(
      res => {
        this.usersList = res;
      }, error => console.log(error)
    );
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
