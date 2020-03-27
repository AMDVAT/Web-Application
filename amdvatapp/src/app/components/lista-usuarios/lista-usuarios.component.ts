import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import {ActivatedRoute, Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


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
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController
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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'person',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
