import {Component, OnInit} from '@angular/core';
import {Producto} from '../../models/Producto';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoService} from '../../services/producto/producto.service';
import {CarritoService} from '../../services/carrito/carrito.service';
import {ToastController} from '@ionic/angular';
import {ComentariosComponent} from '../../components/comentarios/comentarios.component';
import {SessionService} from "../../services/session/session.service";
import { GestionProductoService } from 'src/app/services/gestion-producto/gestion-producto.service';
import { Suscribe } from 'src/app/models/Suscribe';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
    producto: Producto;
    isLogin = false;

    suscrip: Suscribe = {
        id_producto: 0
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productoService: ProductoService,
        private pService: GestionProductoService,
        private carritoService: CarritoService,
        private toastController: ToastController,
        private sessionService: SessionService
    ) {

    }

    ngOnInit() {

        this.sessionService.getUserToken(token => {
            if (token === undefined) {

            } else {
                this.isLogin = true;
            }

        });

        const id = this.route.snapshot.paramMap.get('id');
        this.productoService.getProducto(parseInt(id, 10))
            .subscribe(productos => {
                this.producto = productos[0];
            });
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

    SuscribeProduct(producto: Producto){
        this.suscrip.id_producto = producto.id_producto;
        this.sessionService.getUserToken(token => {
            this.pService.suscribirProducto(token,this.suscrip).subscribe(
            res =>{
                alert('Usuario suscrito al producto')
            }, error => console.log(error)
            );
        });
    }


}
