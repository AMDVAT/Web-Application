import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import {ActivatedRoute, Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


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
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) { 
    this.presentLoading();
  }

  ngOnInit() {

    this.obtenerListadoUsuarios();
  }

  async obtenerListadoUsuarios(){
    console.log('Obtener lista de usuarios')
    this.userService.getListUser().subscribe(
      res => {
        this.usersList = res;
      }, error => console.log(error)
    );
  }

  agregarUsuario(){
    console.log('se desea almacenar un usuario');
    this.router.navigate(['gestion/usuario/lista/datos']);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentActionSheet() {
    console.log('Hola');
    const actionSheet = await this.actionSheetController.create({
      header: 'Usuarios',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.eliminarCategoria();
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log('Favorite clicked');

        }
      }, {
        text: 'Cancel',
        icon: 'exit',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async eliminarCategoria() {
    const alert = await this.alertController.create({
      header: '¡Advertencia!',
      message: '<strong>¿Desea eliminar el usuario? </strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
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
