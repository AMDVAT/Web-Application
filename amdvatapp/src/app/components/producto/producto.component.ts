import {Component, OnInit} from '@angular/core';
import {Producto} from '../../models/Producto';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoService} from '../../services/producto/producto.service';

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
        private productoService: ProductoService
    ) {

    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.productoService.getProducto(parseInt(id, 10))
            .subscribe(productos => {
                this.producto = productos[0];
            });
    }

}
