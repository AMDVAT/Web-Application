import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    const headers = new HttpHeaders().set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsImVtYWlsIjoiZGxvcmVuY2UwQG5ldHNjYXBlLmNvbSIsInRpcG9Vc3VhcmlvIjoxLCJpYXQiOjE1ODU0NzA4NzgsImV4cCI6MTU4NTQ3MjMxOH0.A8cRpoFcyAkwMNt9yPguXi5TsuL0THlHiRZ1bTXwMmY');
    return this.http.post(`${this.env.API_URI}producto/categoria/crear`, categoria, {headers});
  }

  putCategoria(categoria: GCategoria, idCategoria: number) {
    const headers = new HttpHeaders().set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsImVtYWlsIjoiZGxvcmVuY2UwQG5ldHNjYXBlLmNvbSIsInRpcG9Vc3VhcmlvIjoxLCJpYXQiOjE1ODU0NzA4NzgsImV4cCI6MTU4NTQ3MjMxOH0.A8cRpoFcyAkwMNt9yPguXi5TsuL0THlHiRZ1bTXwMmY');
    return this.http.put(`${this.env.API_URI}producto/categoria/editar/${idCategoria}`, categoria,{headers});
  }
}
