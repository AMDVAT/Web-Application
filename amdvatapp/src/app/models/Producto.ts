export class Producto {
    id_producto?: number;
    nombre?: string;
    descripcion?: string;
    precio?: number;
    estado?: number;
    precio_oferta?: number;
    calificacion?: number;
    foto?: string;
    id_categoria?: number;
    nombre_categoria?: string;
}

export class ProductoCarrito {
    producto?: Producto;
    cantidad?: number;
}
