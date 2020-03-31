import { Component, OnInit } from '@angular/core';
import {GCategoria} from '../../models/g-categoria';
import {GestionCategoriaService} from '../../services/gestion-categoria/gestion-categoria.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SessionService} from '../../services/session/session.service';

@Component({
  selector: 'app-categoria-simple',
  templateUrl: './categoria-simple.component.html',
  styleUrls: ['./categoria-simple.component.scss'],
})
export class CategoriaSimpleComponent implements OnInit {

  constructor(
      private gestionCategoriaService: GestionCategoriaService,
      private router: Router,
      private activeRoute: ActivatedRoute,
      private  session: SessionService
  ) { }

  categoria: GCategoria = {
    nombre: '',
    descripcion: '',
    categoria_id_categoria: null
  };

  categorias: any = [];
  editCategoria: any = [];
  edit = false;
  gender = 'm';

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    this.categoria.nombre = '';
    this.categoria.descripcion = '';
    this.gestionCategoriaService.getCategoriasPadre().subscribe(
      res => {
        this.categorias = res;
      }, error => console.log(error)
    );

    if (params.id) {
      this.gestionCategoriaService.getCategoria(params.id).subscribe(
        res => {
          this.editCategoria = res;
          this.categoria.nombre = this.editCategoria.nombre;
          this.categoria.descripcion = this.editCategoria.descripcion;
          this.categoria.categoria_id_categoria = this.editCategoria.categoria_id_categoria;
          this.edit = true;
        }, error => console.log(error)
      );
    }
  }

  save() {
    console.log(this.categoria);
      this.session.getUserToken(token => {

          this.gestionCategoriaService.postCategoria(this.categoria,token).subscribe(
              res => {
                  alert('Categoria registrada');
                  /*this.ngOnInit();
                  this.router.navigate(['/gestion/categoria/lista']);*/
                  location.href = 'gestion/categoria/lista';
              }, error => console.log(error)
          );
      });
  }

  editar() {

      console.log(this.categoria);
      this.session.getUserToken(token => {

          const params = this.activeRoute.snapshot.params;
          this.gestionCategoriaService.putCategoria(this.categoria, params.id,token).subscribe(
              res => {
                  console.log(res);
                  location.href = 'gestion/categoria/lista';
              }, error => console.log(error)
          );
      });

  }



  SetID(value: any) {
    this.categoria.categoria_id_categoria = value;
  }

}
