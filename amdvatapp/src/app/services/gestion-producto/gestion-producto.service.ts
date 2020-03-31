import { Injectable } from '@angular/core';
import {EnviromentService} from '../enviroment/enviroment.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {SessionService} from '../session/session.service';

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
      return this.http.get(`${this.env.API_URI}producto/listar`);
    }

    getCategoriaProduct(){
      return this.http.get(`${this.env.API_URI}producto/categoria/listar`);
    }

    saveProduct(producto: Producto){
      const headers = new HttpHeaders().set('token', this.session.getUserToken());
      return this.http.post(`${this.env.API_URI}producto/crear`, producto, {headers});
    }
    
    deleteProduct(id: string){
      const headers = new HttpHeaders().set('token', this.session.getUserToken());
      return this.http.put(`${this.env.API_URI}producto/eliminar/${id}`,{headers});
    }

    updateProduct(id: string, updateProducto: Producto){
      const headers = new HttpHeaders().set('token', this.session.getUserToken());
      return this.http.put(`${this.env.API_URI}producto/editar/${id}`, updateProducto,{headers});
    }




}
