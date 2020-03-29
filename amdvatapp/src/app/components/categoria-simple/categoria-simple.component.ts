import { Component, OnInit } from '@angular/core';
import {GCategoria} from '../../models/g-categoria';
import {GestionCategoriaService} from '../../services/gestion-categoria/gestion-categoria.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categoria-simple',
  templateUrl: './categoria-simple.component.html',
  styleUrls: ['./categoria-simple.component.scss'],
})
export class CategoriaSimpleComponent implements OnInit {

  constructor(
      private gestionCategoriaService: GestionCategoriaService,
      private router: Router
  ) { }

  categoria: GCategoria = {
    nombre: '',
    descripcion: '',
    categoria_id_categoria: null
  };

  categorias: any = [];


  ngOnInit() {
    this.categoria.nombre = '';
    this.categoria.descripcion = '';
    this.gestionCategoriaService.getCategoriasPadre().subscribe(
      res => {
        this.categorias = res;
      }, error => console.log(error)
    );
  }

  save() {
    console.log(this.categoria);
    this.gestionCategoriaService.postCategoria(this.categoria).subscribe(
      res => {
        alert('Categoria registrada');
        this.ngOnInit();
        this.router.navigate(['/gestion/categoria/lista']);
      }, error => console.log(error)
    );
  }

  SetID(value: any) {
    this.categoria.categoria_id_categoria = value;
  }
}
