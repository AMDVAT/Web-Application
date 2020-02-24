import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Categoria} from '../../models/Categoria';
import {categoria} from '../../mocks/mock-categoria';
import {categorias} from '../../mocks/mock-categorias';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    constructor() {
    }

    getCategoria(id: number): Observable<Categoria> {
        return of(categoria);
    }

    getCategorias(): Observable<Categoria[]> {
        return of(categorias);
    }
}
