import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/Categoria';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoService} from '../../services/producto/producto.service';
import {Producto} from '../../models/Producto';
import {HomeService} from '../../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  categorias: Array<Categoria> = [];
  categoria: Categoria;
  productos: Array<Producto>;

  topCategorias: any = [];
  topProductos: any = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private categoriaService: CategoriaService,
      private productoService: ProductoService,
      private homeService: HomeService
  ) {
  }

  ngOnInit() {
    this.productos = this.productoService.getProductos(1);

    this.homeService.getTopProductos().subscribe(
        res => {
          this.topProductos = res;
        }, error => console.log(error)
    );
    this.homeService.getTopCategorias().subscribe(
      res => {
        this.topCategorias = res;
      }, error => console.log(error)
    );
  }



  search(q: string) {
    console.log(q);
    this.router.navigate([`productos/${q}`]);
  }

}
