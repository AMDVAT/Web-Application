import { Component, OnInit } from '@angular/core';
import { AlertController,Platform } from '@ionic/angular';
import {Router} from '@angular/router';

import {Producto} from '../../models/Producto';
import {GestionProductoService} from '../../services/gestion-producto/gestion-producto.service'
import { Categoria } from 'src/app/models/Categoria';

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

  constructor(
    private platform: Platform,
      private alertController: AlertController,
      private router: Router,
      private productoService: GestionProductoService
  ) { 
    this.platform.ready().then(()=>{
      this.obtenerCategorias();
    })
  }

  ngOnInit() {
    this.obtenerCategorias();
  }

  OnChange(event){
    this.producto.id_categoria = event.target.value;
    //alert("you have selected = " + event.target.value);
  }

  saveProduct(){
    /*
    this.productoService.sav(this.usuario)
    .subscribe( 
      res =>{ 
        this.messageSave();
        location.href= 'gestion/usuario/lista';
      }, 
      err => {console.error(err); this.errorMessageSave();}
      );*/
    console.log(this.producto);
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
      message: '<strong>El producto ha sido creado con exito </strong>',
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
      header: 'Almacenado',
      message: '<strong>No se ha logrado crear el producto ,revise los datos </strong>',
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
