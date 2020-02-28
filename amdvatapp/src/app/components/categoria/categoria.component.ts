import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CategoriaService} from "../../services/categoria/categoria.service";
import {Categoria} from "../../models/Categoria";
import {Producto} from "../../models/Producto";
import {ProductoService} from "../../services/producto/producto.service";

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
    categoria: Categoria;
    productos: Array<Producto>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private categoriaService: CategoriaService,
        private productoService: ProductoService
    ) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.categoria = this.categoriaService.getCategoria(parseInt(id, 10));
        this.productos = this.productoService.getProductos(parseInt(id, 10));
    }

}
