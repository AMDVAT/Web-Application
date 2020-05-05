import {Component, OnInit} from '@angular/core';
import {Utils} from '../../Utils';
import {Producto, ProductoCarrito} from '../../models/Producto';
import {CarritoService} from '../../services/carrito/carrito.service';
import {ToastController} from '@ionic/angular';
import { Compra, ProductoC } from 'src/app/models/compra';
import { TestObject } from 'protractor/built/driverProviders';
import { SessionService } from 'src/app/services/session/session.service';
import { GestionProductoService } from 'src/app/services/gestion-producto/gestion-producto.service';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
    UtilsRef = Utils;


    item: ProductoC = {
        id_producto: 0,
        cantidad: 0
    }
    detalleCompra: Compra = {
        detalle_compra: []
    }



    constructor(
        private carritoService: CarritoService,
        private toastController: ToastController,
        private sessionService: SessionService,
        private productoService: GestionProductoService
    ) {
    }

    ngOnInit() {
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Producto añadido con exito!',
            duration: 2000
        });
        toast.present();
    }

    AddProduct(producto: Producto) {
        this.carritoService.UpdateCart(producto, 1);
        this.presentToast();
    }

    add(productoRef: ProductoCarrito) {
        productoRef.cantidad++;
        this.UtilsRef.UpdateAmounts();
    }

    sub(productoRef: ProductoCarrito) {
        if (productoRef.cantidad === 0) {
            return;
        }
        productoRef.cantidad--;
        this.UtilsRef.UpdateAmounts();
    }

    delete(productoRef: ProductoCarrito) {
        this.carritoService.DeleteFromCart(productoRef.producto);
    }

    comprarProducto(){
        console.log('Elementos')
        
        const prueba: Array<any> = [];
        this.UtilsRef.products.forEach(element => {
            this.item.cantidad = element.cantidad;
            this.item.id_producto =+ element.producto.id_producto;
            console.log(this.item);
            prueba.push(this.item);
        });
        this.detalleCompra.detalle_compra = prueba;
        console.log(this.detalleCompra)

        this.sessionService.getUserToken(token => {
            this.productoService.buyProducto(token,this.detalleCompra).subscribe(
              res =>{
               alert('Compra realizada')
              }, error => console.log(error)
            );
    
          });


    }
}
