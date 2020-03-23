import {Component, OnInit} from '@angular/core';
import {Categoria} from '../../models/Categoria';
import {CategoriaService} from '../../services/categoria/categoria.service';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

    categorias: Array<Categoria> = [];

    constructor(
        private categoriaService: CategoriaService
    ) {
    }

    ngOnInit() {
        this.categoriaService.getCategorias()
            .subscribe(categorias => {
                this.categorias = categorias;
            });
    }

}
