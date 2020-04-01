import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {SessionService} from '../../services/session/session.service';

import {Sucursal} from '../../models/sucursal';
import {GestionSucursalService} from '../../services/gestion-sucursal/gestion-sucursal.service'

@Component({
  selector: 'app-sucursal-lista',
  templateUrl: './sucursal-lista.component.html',
  styleUrls: ['./sucursal-lista.component.scss'],
})
export class SucursalListaComponent implements OnInit {

  sucursales: Array<any> = [];
  sucursal: Sucursal;
  sucursalList: any;

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private sucursalService: GestionSucursalService,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private  session: SessionService) { 
      this.presentLoading();
    }


  ngOnInit() {
    this.obtenerListadoUsuarios();
  }

  async obtenerListadoUsuarios(){
    console.log('Obtener lista de sucursales')
    this.sucursalService.getListSucursal().subscribe(
      res => {
        this.sucursalList = res;
        console.log(res)
      }, error => console.log(error)
    );
  }

  async deleteSucursal(idSucursal: number){
    console.log('Delete '+ idSucursal);
    this.session.getUserToken(token =>{
      this.sucursalService.deleteSucursal(idSucursal,token).subscribe(
        res => {
          alert('Sucursal eliminada');
          location.href = 'gestion/sucursal/lista';
          //location.href = '../..';
        },
        error => console.log(error)
      );
    });
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

  async presentActionSheet(idSucursal: number, sucuPru: Sucursal) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Usuarios',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.eliminarSucursal(idSucursal,sucuPru.nombre);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log('Favorite clicked ' + sucuPru.nombre);
          this.router.navigate([`gestion/sucursal/lista/editar/${idSucursal}`]);
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

  async eliminarSucursal(idSucursal: number,nombre: string) {
    const alert = await this.alertController.create({
      header: '¡Advertencia!',
      message: '<strong>¿Desea eliminar la sucursal: ' +nombre +'? </strong>',
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
            this.deleteSucursal(idSucursal);
          }
        }
      ]
    });
    await alert.present();
  }

}
