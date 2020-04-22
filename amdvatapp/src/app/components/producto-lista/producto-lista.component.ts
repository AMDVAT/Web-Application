import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import {Producto} from '../../models/Producto';
import {GestionProductoService} from '../../services/gestion-producto/gestion-producto.service'
import { SessionService } from 'src/app/services/session/session.service';

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
    private session: SessionService,
    private productService: GestionProductoService
  ) { 

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
      duration: 1000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentActionSheet(id_producto: number, productoP: Producto) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Productos',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.eliminarProducto(id_producto,productoP);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log('Favorite clicked '+ productoP.nombre);
          this.router.navigate([`/gestion/producto/lista/editar/${id_producto}`]);
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

  async eliminarProducto(id: number, productoP : Producto) {
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
            this.deleteProducto(id,productoP);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteProducto(id: number, productoP : Producto){
    console.log('Delete '+ id);
    this.session.getUserToken(token =>{
      this.productService.deleteProduct(id,token).subscribe(
        res => {
          alert('Producto eliminado');
          location.href = 'gestion/producto/lista';
        },
        error => console.log(error)
      );
    });
  }


}
