import { Component, OnInit } from '@angular/core';
import { AlertController,Platform } from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';

import {Producto} from '../../models/Producto';
import {GestionProductoService} from '../../services/gestion-producto/gestion-producto.service'
import { Categoria } from 'src/app/models/Categoria';
import {SessionService} from '../../services/session/session.service';

@Component({
  selector: 'app-producto-simple',
  templateUrl: './producto-simple.component.html',
  styleUrls: ['./producto-simple.component.scss'],
})
export class ProductoSimpleComponent implements OnInit {

  categorias: Array<any>;
  categoria: Categoria;
  categoriaList: any;
  selectedVal: Number = 100;
  edit = false;

  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    precio_oferta: 0,
    foto: '',
    calificacion: 0,
    id_categoria: 0,
    nombre_categoria: ''
  }

  editProducto: any = [];

  constructor(
    private platform: Platform,
      private alertController: AlertController,
      private router: Router,
      private session : SessionService,
      private productoService: GestionProductoService,
      private activeRoute: ActivatedRoute
  ) { 
    //this.platform.ready().then(()=>{
      //this.obtenerCategorias();
    //})
  }

  ngOnInit() {
    this.obtenerCategorias();
    const params = this.activeRoute.snapshot.params;

    if (params.id) {
      const params = this.activeRoute.snapshot.params;
      this.productoService.getOneProduct(params.id).subscribe(
          res => {
            this.editProducto = res;
            this.producto.nombre = this.editProducto.nombre;
            this.producto.descripcion = this.editProducto.descripcion;
            this.producto.precio = this.editProducto.precio;
            this.producto.precio_oferta = this.editProducto.precio_oferta;
            this.producto.foto = this.editProducto.foto;
            this.producto.calificacion = this.editProducto.calificacion;
            this.producto.id_categoria = this.editProducto.id_categoria;
            console.log(res);
          }, error => console.log(error)
      );
      this.edit = true;
      console.log('Entro aca ' + params.id)
    }
  }

  //OBTENER EL ID DE LA CATEGORIA
  OnChange(event){
    this.producto.id_categoria = event.target.value;
  }

  menuAccion(){
    if(this.edit)
      this.editProduct();
    else
      this.saveProduct();
  }


  saveProduct(){
    delete this.producto.nombre_categoria;
      this.session.getUserToken(token => {
          this.productoService.saveProduct(this.producto,token).subscribe(
              res => {
                  alert('Producto registrada');
                  location.href = 'gestion/producto/lista';
              }, error => console.log(error)
          );
      });
  }

  editProduct(){

  }
  async obtenerCategorias(){
    console.log('Obtenes lista de productos');
    this.productoService.getCategoriaProduct().subscribe(
      res => {
        this.categoriaList = res;
      }, error => console.log('Ocurrio el siguiente error',error)
    );
  }

  async messageSave() {
    const alert = await this.alertController.create({
      header: 'Almacenado',
      message: '<strong>El producto ha sido registrado con exito </strong>',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
  async errorMessageSave() {
    const alert = await this.alertController.create({
      header: 'No almacenado',
      message: '<strong>No se ha logrado registrar el producto ,revise los datos </strong>',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

}
