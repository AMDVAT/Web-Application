import {Component, OnInit} from '@angular/core';
import {Categoria} from '../../models/Categoria';
import {CategoriaService} from '../../services/categoria/categoria.service';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

    categorias: Array<Categoria>;
    categoriasMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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
