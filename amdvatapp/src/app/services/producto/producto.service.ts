import {Injectable} from '@angular/core';
import {Producto} from '../../models/Producto';
import {productos} from '../../mocks/mock-productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() {
  }

  getProducto(id: number): Producto {
    return productos.find(prod => prod.idProducto === id);
  }
}
