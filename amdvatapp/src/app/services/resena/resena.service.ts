import { Injectable } from '@angular/core';
import {EnviromentService} from '../enviroment/enviroment.service';
import {HttpClient} from '@angular/common/http';
import {Resena} from '../../models/resena';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {

  constructor(
      private env: EnviromentService,
      private http: HttpClient
  ) { }

  getResenaProducto(idProducto: string) {
    return this.http.get(`${this.env.API_URI}resena/${idProducto}`);
  }

  postResena(resena: Resena) {
    return this.http.post(`${this.env.API_URI}resena/crear`, resena);
  }
}
