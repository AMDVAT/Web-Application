import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Categoria} from '../../models/Categoria';
import {categoria} from '../../mocks/mock-categoria';
import {categorias} from '../../mocks/mock-categorias';
import {HttpClient} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    constructor(
        private http: HttpClient,
        private env: EnviromentService
    ) {
    }



    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`${this.env.API_URI}producto/categoria/listar`);
    }
}
