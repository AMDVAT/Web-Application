import { Injectable } from '@angular/core';
import {EnviromentService} from '../enviroment/enviroment.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarProductoService {

  constructor(
      private htt: HttpClient,
      private env: EnviromentService
  ) { }

  buscarProducto ( producto: string ){
    return this.htt.get(`${this.env.API_URI}producto/buscar?nombre=${producto}`);
  }
}
