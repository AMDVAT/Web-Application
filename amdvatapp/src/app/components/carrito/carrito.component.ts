import {Component, OnInit} from '@angular/core';
import {Utils} from '../../Utils';
import {Producto} from '../../models/Producto';
import {CarritoService} from '../../services/carrito/carrito.service';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
    UtilsRef = Utils;

    constructor(
        private carritoService: CarritoService,
        private toastController: ToastController
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
}
