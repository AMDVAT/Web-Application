export class Reserva {
    estado: number;
    fecha: string;
    idReserva: number;
    idUsuario: number;
    detalleReserva:{
        idDetalleReserva: number;
        cantidad: number;
        idReserva: number;
        idSucursal: number;
        idProducto: number;
        producto : {
            nombre: string;
        }
    }
}
