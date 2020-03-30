import { Injectable } from '@angular/core';
import {EnviromentService} from '../enviroment/enviroment.service';
import { HttpClient } from '@angular/common/http';
import {Producto} from '../../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class GestionProductoService {

  constructor(
    private http: HttpClient,
    private env: EnviromentService
   ) { }

    getListProduct(){
      return this.http.get(`${this.env.API_URI}producto/listar`);
    }

    getCategoriaProduct(){
      return this.http.get(`${this.env.API_URI}producto/categoria/listar`);
    }

    getOneProduct(id: string){

    }

    saveProduct(producto: Producto){

    }
    
    deleteProduct(id: string){

    }

    updateProduct(id: string, updateProducto: Producto){

    }




}
