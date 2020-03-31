import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {GCategoria} from '../../models/g-categoria';
import {SessionService} from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class GestionCategoriaService {

  constructor(
      private http: HttpClient,
      private  env: EnviromentService,
      private  session: SessionService
  ) { }


  getCategorias() {
    return this.http.get(`${this.env.API_URI}producto/categoria/listar`);
  }

  getCategoriasPadre() {
    return this.http.get(`${this.env.API_URI}producto/categoria/listar/padre`);
  }

  getCategoria(id: string) {
    return this.http.get(`${this.env.API_URI}producto/categoria/buscar/${id}`);
  }

  postCategoria(categoria: GCategoria, token: string) {
    let headers = new HttpHeaders().set('token', token);
    return this.http.post(`${this.env.API_URI}producto/categoria/crear`, categoria, { headers });
  }

  putCategoria(categoria: GCategoria, idCategoria: number, token: string) {
    let headers = new HttpHeaders().set('token', token);
    return this.http.put(`${this.env.API_URI}producto/categoria/editar/${idCategoria}`, categoria, { headers });
  }
}
