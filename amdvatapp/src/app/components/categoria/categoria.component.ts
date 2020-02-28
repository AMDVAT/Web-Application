import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CategoriaService} from "../../services/categoria/categoria.service";
import {Categoria} from "../../models/Categoria";

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
    categoria: Categoria;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private categoriaService: CategoriaService
    ) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.categoria = this.categoriaService.getCategoria(parseInt(id, 10));
    }

}
