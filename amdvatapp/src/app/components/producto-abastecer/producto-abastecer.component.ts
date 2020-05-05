import { Component, OnInit } from '@angular/core';
import { GestionProductoService } from 'src/app/services/gestion-producto/gestion-producto.service';
import { ToastController } from '@ionic/angular';
import { Abastecer } from 'src/app/models/Abastecer';

@Component({
  selector: 'app-producto-abastecer',
  templateUrl: './producto-abastecer.component.html',
  styleUrls: ['./producto-abastecer.component.scss'],
})
export class ProductoAbastecerComponent implements OnInit {

  producto: Abastecer = {
    cantidad: 0,
    idProducto: 0,
    precio_unitario: 0
  }

  

  productosList: any;
  
  constructor(
    private productService: GestionProductoService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  async obtenerProductos(){
    console.log('Obtenes lista de productos');
    this.productService.getListProduct().subscribe(
      res => {
        this.productosList = res;
        console.log(this.productosList)
      }, error => console.log('Ocurrio el siguiente error',error)
    );
  }

  menuAccion(){
    console.log('Se actualizara');
    console.log(this.producto);
    this.actualizarStock();
  }

  //OBTENER EL ID DE LA CATEGORIA
  OnChange(event){
    this.producto.idProducto = event.target.value;
  }


  actualizarStock(){
    this.productService.postAbastecer(this.producto).subscribe(
      res =>{
        console.log(res)
        alert('Se actualizo el stock del producto');
        location.href = 'gestion/producto/abastecer';
      }, error => console.log('Ocurrio el siguiente error',error)
    );
  }
}
