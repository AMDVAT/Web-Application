import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/Categoria';
import {Producto} from '../../models/Producto';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {ProductoService} from '../../services/producto/producto.service';
import {BuscarProductoService} from '../../services/bucar-producto/buscar-producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  categoria: Categoria;
  productos: Array<Producto>;
  productoTitle: string;
  resProductos : any = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private categoriaService: CategoriaService,
      private productoService: ProductoService,
      private buscarProducto: BuscarProductoService
  ) {
  }

  ngOnInit() {
    const producto = this.route.snapshot.paramMap.get('producto');
    this.productoTitle = producto;
    console.log(producto);
    this.buscarProducto.buscarProducto(producto).subscribe(
        res => {

          this.resProductos = res;
          console.log(this.resProductos);
        }, error => console.log(error)
    );

    this.categoriaService.getCategorias()
        .subscribe(categorias => {
          console.log(categorias);
          this.categoria = categorias.find(cat => cat.id_categoria === 1);
        });
    this.productoService.getProductos(1)
        .subscribe(productos => {
          this.productos = productos;
        });
  }

}
