import {Component, OnInit} from '@angular/core';
import {Producto} from '../../models/Producto';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoService} from '../../services/producto/producto.service';
import {CarritoService} from '../../services/carrito/carrito.service';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
    producto: Producto;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productoService: ProductoService,
        private carritoService: CarritoService
    ) {

    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.productoService.getProducto(parseInt(id, 10))
            .subscribe(productos => {
                this.producto = productos[0];
            });
    }

    AddProduct(producto: Producto) {
        this.carritoService.UpdateCart(producto, 1);
    }
}
