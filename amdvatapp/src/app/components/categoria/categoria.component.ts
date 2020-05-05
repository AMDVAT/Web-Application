import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {Categoria} from '../../models/Categoria';
import {Producto} from '../../models/Producto';
import {ProductoService} from '../../services/producto/producto.service';
import {CarritoService} from '../../services/carrito/carrito.service';
import {ToastController} from '@ionic/angular';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
    categoria: Categoria;
    productos: Array<Producto>;
    productosSkeleton = [1, 2, 3, 4, 5];
    isLogin = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private categoriaService: CategoriaService,
        private productoService: ProductoService,
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
        this.categoriaService.getCategorias()
            .subscribe(categorias => {
                console.log(categorias);
                this.categoria = categorias.find(cat => cat.id_categoria === parseInt(id, 10));
            });

        this.productoService.getProductos(parseInt(id, 10))
            .subscribe(productos => {
                this.productos = productos;
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
}
