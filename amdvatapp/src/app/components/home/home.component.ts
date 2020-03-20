import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/Categoria';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoService} from '../../services/producto/producto.service';
import {Producto} from '../../models/Producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public products = [
    {
      title: 'LENOVO',
      // tslint:disable-next-line: max-line-length
      url: 'https://lh4.googleusercontent.com/r7qZ-o6iZ1M1HFWmKzHRG_Plr4Xlm4DRPZ5YztmZpcl3h3QYUF9iFzUvIk9M3h2xoSUiIL66Pxh4Wt9WAq5x=w2452-h1885-rw',
      descripcion: 'IDEAPAD S340-15IWL I3-8145U 8GB RAM 128GB SSD 15.6P W10 ABYSS BLUE',
      precio: 'Q 3,199.00'
    },
    {
      title: 'LENOVO',
      // tslint:disable-next-line: max-line-length
      url: 'https://lh6.googleusercontent.com/PXOWEQ7v2jeqvqB1KE4KSbGtEsf8jD2ORVB_Q7K-BhGSaqZFA5r-gL6OFsWCIgv4WWtzJLiNvQfDcuVWU7Hv=w3840-h1885-rw',
      descripcion: 'IDEAPAD S145-15IWL CELERON 42050U 4GB RAM 128SDD 15.6P W10 GRAY',
      precio: 'Q 2,199.00'
    },
    {
      title: 'LENOVO',
      // tslint:disable-next-line: max-line-length
      url: 'https://lh5.googleusercontent.com/Vsicf_tw-UC5-2Orh82s-Gcb8bmjiUzegxYSnB4VqzOpNP89HtDPMG2Y3zODN6-1bpP-6e1R50NDenN4QnyB=w3840-h1885-rw',
      descripcion: '330S-15IKB I3-8130U 4GB RAM 128GB SSD 15.6P BLUE',
      precio: 'Q 2,949.00'
    },
    {
      title: 'HP',
      // tslint:disable-next-line: max-line-length
      url: 'https://lh5.googleusercontent.com/aqv69aLeDUAMB9By5Jv3jyo2dO8aUpFbRo3o6_Hpe9NIFS-kl0fnTkXNsNwnds9ObsRgQR8GSVVD-U-zbq2H=w3840-h1885-rw',
      descripcion: '14-DF0023CL I3-8130U 2.2GHZ 4GB 128GB SSD 14" FHD WIN 10 S',
      precio: 'Q 3,399.00'
    },
    {
      title: 'DELL',
      // tslint:disable-next-line: max-line-length
      url: 'https://lh6.googleusercontent.com/OeCIb2LM7ll2paW6Fu7SuIhzcNLdK0XsSZj2oNRlvHzfzPTwxb9U4b11troEkLXatJDCi8CTsQWMhHRa7I5W=w3840-h1885-rw',
      descripcion: 'I3493-3464BLK-PUS I3-1005G1 4GB RAM 128SSD 14P W10S',
      precio: 'Q 3,299.00'
    },
    {
      title: 'LENOVO',
      // tslint:disable-next-line: max-line-length
      url: 'https://lh5.googleusercontent.com/WyR53P-6PJY90tkKnQJXJvvU8uQj9iIeL1sxEi20i4HQ36NyGKK7SS-jHBhGS8iSeKqo48Qzx0GReGkGLiEo=w2452-h1885-rw',
      descripcion: 'IDEAPAD S145-15IWL PENTIUM 5405U 4GB RAM 500GB 15.6P W10',
      precio: 'Q 2,849.00'
    }
  ];

  categorias: Array<Categoria> = [];
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
    this.categorias = this.categoriaService.getCategorias();
    const id = 1;
    this.categoria = this.categoriaService.getCategoria(1);
    this.productos = this.productoService.getProductos(1);
  }



  search(q: string) {
    console.log(q);
    this.router.navigate(['productos']);
  }
}
