import {Injectable} from '@angular/core';
import {Producto} from '../../models/Producto';
import {productos} from '../../mocks/mock-productos';
import {HttpClient} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {Categoria} from '../../models/Categoria';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
      private http: HttpClient,
      private env: EnviromentService
  ) {
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.env.API_URI}producto/buscar?id_producto=${id}`);
  }

  getProductos(cateoria: number): Observable<Producto []> {
    return this.http.get<Producto[]>(`${this.env.API_URI}producto/buscar?id_categoria=${cateoria}`);
  }
}
