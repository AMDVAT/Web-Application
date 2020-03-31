import {ProductoCarrito} from './models/Producto';

export class Utils {
    public static products: Array<ProductoCarrito> = [];
    public static amounts = 0;

    public UpdateAmounts(): void {
        Utils.amounts = 0;
        for (const prod of Utils.products) {
            Utils.amounts += prod.cantidad;
        }
    }
}
