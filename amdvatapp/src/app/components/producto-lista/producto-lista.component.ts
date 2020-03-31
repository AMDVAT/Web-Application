import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import {Producto} from '../../models/Producto';
import {GestionProductoService} from '../../services/gestion-producto/gestion-producto.service'

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.scss'],
})
export class ProductoListaComponent implements OnInit {

  productos : Array<any>
  producto: Producto;

  productoList: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private productService: GestionProductoService
  ) { 
    this.presentLoading();
  }

  ngOnInit() {
    this.obtenerListadoProductos();
  }

  async obtenerListadoProductos(){
    console.log('Obtenes lista de productos');
    this.productService.getListProduct().subscribe(
      res => {
        this.productoList = res;
      }, error => console.log('Ocurrio el siguiente error',error)
    );
  }

  agregarProducto(){
    console.log('se desea almacenar un producto');
    this.router.navigate(['gestion/producto/lista/datos']);
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
      header: 'Productos',
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
      message: '<strong>¿Desea eliminar el producto? </strong>',
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
