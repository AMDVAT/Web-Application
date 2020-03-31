import { Injectable } from '@angular/core';
import {EnviromentService} from '../enviroment/enviroment.service';
import { HttpClient } from '@angular/common/http';

import {Sucursal} from '../../models/sucursal'

@Injectable({
  providedIn: 'root'
})
export class GestionSucursalService {

  constructor(
    private http: HttpClient,
    private env: EnviromentService
  ) { }

  getListSucursal(){
    return this.http.get(`${this.env.API_URI}sucursal/listar`);
  }

  getOneSucursal(id: string){

  }

  saveSucursal(sucursal: Sucursal){

  }

  deleteSucursal(id: string){

  }

  updateSucursal(id:string, updateSucursal: Sucursal){

  }



}
