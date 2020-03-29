import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {GCategoria} from '../../models/g-categoria';

@Injectable({
  providedIn: 'root'
})
export class GestionCategoriaService {

  constructor(
      private http: HttpClient,
      private  env: EnviromentService
  ) { }

  getCategorias() {
    return this.http.get(`${this.env.API_URI}producto/categoria/listar`);
  }

  getCategoriasPadre() {
    return this.http.get(`${this.env.API_URI}producto/categoria/listar/padre`);
  }

  postCategoria(categoria: GCategoria){
    return this.http.post(`${this.env.API_URI}producto/categoria/crear`, categoria);
  }

  putCategoria(categoria: GCategoria, idCategoria:number){
    return this.http.put(`${this.env.API_URI}producto/categoria/editar/${idCategoria}`, categoria);
  }
}
