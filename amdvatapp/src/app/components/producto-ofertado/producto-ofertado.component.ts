import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ToastController } from '@ionic/angular';
import { GestionProductoService } from 'src/app/services/gestion-producto/gestion-producto.service';
import { Producto } from 'src/app/models/Producto';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-producto-ofertado',
  templateUrl: './producto-ofertado.component.html',
  styleUrls: ['./producto-ofertado.component.scss'],
})
export class ProductoOfertadoComponent implements OnInit {

  productos: any;
  productosSkeleton = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: GestionProductoService,
    private toastController: ToastController,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.obtenerProductos();
  }


  obtenerProductos(){
    console.log('Obtenes lista de productos');
    this.productService.getListProduct().subscribe(
      res => {
        this.productos = res;
      }, error => console.log('Ocurrio el siguiente error',error)
    );
  }

  AddProduct(producto: Producto) {
    this.carritoService.UpdateCart(producto, 1);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
        message: 'Producto añadido con exito!',
        duration: 2000
    });
    toast.present();
  }

}
