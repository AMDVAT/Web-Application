import {Component, Input, OnInit} from '@angular/core';
import {Categoria} from "../../models/Categoria";

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
    @Input()
    categoria: Categoria;

    constructor() {
    }

    ngOnInit() {
    }

}
