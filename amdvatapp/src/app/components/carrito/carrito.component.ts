import {Component, OnInit} from '@angular/core';
import {Utils} from '../../Utils';
import {Producto, ProductoCarrito} from '../../models/Producto';
import {CarritoService} from '../../services/carrito/carrito.service';
import {ToastController} from '@ionic/angular';
import { Compra, ProductoC } from 'src/app/models/compra';
import { TestObject } from 'protractor/built/driverProviders';
import { SessionService } from 'src/app/services/session/session.service';
import { GestionProductoService } from 'src/app/services/gestion-producto/gestion-producto.service';
import { ProductoR, Reservar } from 'src/app/models/detalleReserva';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
    UtilsRef = Utils;

    detalleCompra: Compra = {
        detalle_compra: []
    }

    detalleReserva: Reservar = {
        detalle_reserva: []
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
        console.log('Compra')
        this.UtilsRef.products.forEach(element => {
            const it: ProductoC = {
                id_producto: 0,
                cantidad: 0
            };

            it.cantidad = element.cantidad;
            it.id_producto =+ element.producto.id_producto;
            console.log(it);
            prueba.push(it);
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

    reservarProducto(){
        console.log('Elementos')
        const prueba: Array<any> = [];
        this.UtilsRef.products.forEach(element => {
            const it: ProductoR = {
                id_producto: 0,
                cantidad: 0,
                id_sucursal: 1
            };
            it.cantidad = element.cantidad;
            it.id_producto =+ element.producto.id_producto;
            console.log(it);
            prueba.push(it);
        });
        this.detalleReserva.detalle_reserva = prueba;
        console.log('Reserva')
        console.log(this.detalleReserva)

        this.sessionService.getUserToken(token => {
            this.productoService.reservarProducto(token,this.detalleReserva).subscribe(
              res =>{
               console.log(res)
                alert('Reserva realizada')
               
              }, error => console.log(error)
            );
    
        });
    }
}
