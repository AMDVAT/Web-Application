import {ProductoCarrito} from './models/Producto';

export class Utils {
    public static products: Array<ProductoCarrito> = [];
    public static amounts = 0;

    public static UpdateAmounts(): void {
        Utils.amounts = 0;
        Utils.products.map(p => {
            Utils.amounts += p.cantidad;
        });
        console.log('Cantidad de productos ' + Utils.amounts);
        console.log(Utils.products);
    }
}
