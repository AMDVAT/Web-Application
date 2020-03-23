import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
      private http: HttpClient,
      private env: EnviromentService
  ) { }

  getTopCategorias() {
    return this.http.get(`${this.env.API_URI}producto/topCategorias`);
  }
}
