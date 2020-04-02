import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {GestionUsuarioService} from '../../services/gestion-usuarios/gestion-usuario.service'
import {ActivatedRoute, Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import {SessionService} from '../../services/session/session.service';

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
    public alertController: AlertController,
    private  session: SessionService
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
      duration: 1000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentActionSheet(id_usuario: number, nombre: string, apellido: string, usuPrueba: User) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Usuarios',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.eliminarUsuario(id_usuario,nombre,apellido);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log('Favorite clicked ' + usuPrueba.nombre);
          this.router.navigate([`/gestion/usuario/lista/editar/${id_usuario}`]);
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

  async eliminarUsuario(id_usuario: number,nombre: string, apellido: string) {
    const alert = await this.alertController.create({
      header: '¡Advertencia!',
      message: '<strong>¿Desea eliminar a ' +nombre + ' ' + apellido +'? </strong>',
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
            //ELIMINARLO
            this.deleteUser(id_usuario);
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteUser(id_usuario: number){
    console.log('Delete '+ id_usuario);
    this.session.getUserToken(token =>{
      this.userService.deleteUser(id_usuario,token).subscribe(
        res => {
          alert('Usuario eliminado');
          //console.log(res, + ' ' + token)
          location.href = 'gestion/usuario/lista';
        },
        error => console.log(error)
      );
    });
  }
}
