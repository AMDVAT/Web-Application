import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/Categoria';
import {Producto} from '../../models/Producto';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {ProductoService} from '../../services/producto/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

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
    this.categoria = this.categoriaService.getCategoria(1);
    this.productos = this.productoService.getProductos(1);
  }

}
