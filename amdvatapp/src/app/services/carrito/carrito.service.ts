import { Injectable } from '@angular/core';
import {Producto} from '../../models/Producto';
import {Utils} from '../../Utils';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  public AddToCart(producto: Producto, amount: number): void{
    const prod = {
      producto,
      amount
    };
    Utils.products.push(prod);
    Utils.UpdateAmounts();
  }


}
