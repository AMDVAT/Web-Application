import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Categoria} from '../../models/Categoria';
import {categoria} from '../../mocks/mock-categoria';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    constructor() {
    }

    getCategoria(id: number): Observable<Categoria> {
        return of(categoria);
    }
}
