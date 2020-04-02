import { Injectable } from '@angular/core';
import {EnviromentService} from '../enviroment/enviroment.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {SessionService} from '../session/session.service';
import {delay} from 'rxjs/operators'

import {Producto} from '../../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class GestionProductoService {

  constructor(
    private http: HttpClient,
    private env: EnviromentService,
    private  session: SessionService
   ) { }

    getListProduct(){
      return this.http.get(`${this.env.API_URI}producto/listar`)
      .pipe(
        delay(1000)
      );
    }

    getCategoriaProduct(){
      return this.http.get(`${this.env.API_URI}producto/categoria/listar`);
    }

    getOneProduct(id_producto: number){
      //https://amdvat-be.herokuapp.com/producto/buscar?id_producto=10
      return this.http.get(`${this.env.API_URI}producto/buscar?id_producto=${id_producto}`);
    }

    saveProduct(producto: Producto,token: string){
      let headers = new HttpHeaders().set('token', token);
      return this.http.post(`${this.env.API_URI}producto/crear`, producto, {headers});
    }
    
    deleteProduct(id: number, token: string){
      let headers = new HttpHeaders().set('token', token);
      return this.http.delete(`${this.env.API_URI}producto/eliminar/${id}`,{headers});
    }

    updateProduct(id: number, updateProducto: Producto, token: string){
      let headers = new HttpHeaders().set('token', token);
      return this.http.put(`${this.env.API_URI}producto/editar/${id}`, updateProducto,{headers});
    }




}
