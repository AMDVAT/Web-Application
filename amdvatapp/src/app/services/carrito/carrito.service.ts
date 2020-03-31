import {Injectable} from '@angular/core';
import {Producto} from '../../models/Producto';
import {Utils} from '../../Utils';

@Injectable({
    providedIn: 'root'
})
export class CarritoService {

    constructor() {
    }

    public UpdateCart(producto: Producto, amount: number): void {
        const prod = {
            producto,
            amount
        };
        const index = Utils.products.findIndex((p) =>
            p.producto.id_producto === producto.id_producto
        );
        if (index === -1) {
            Utils.products.push(prod);
        } else {
            Utils.products[index].cantidad = amount;
        }
        Utils.UpdateAmounts();
    }

    public DeleteFromCart(producto: Producto): void {
        Utils.products = Utils.products.filter((p) => p.producto.id_producto !== producto.id_producto);
    }
}
