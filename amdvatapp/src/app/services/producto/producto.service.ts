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
    return productos.find(prod => prod.id_producto === id);
  }

  getProductos(cateoria: number): Producto [] {
    return productos.filter(prod => prod.id_categoria === cateoria);
  }
}
