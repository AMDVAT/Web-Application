import { Injectable } from '@angular/core';
import {EnviromentService} from '../enviroment/enviroment.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SessionService} from '../session/session.service';
import {delay} from 'rxjs/operators'

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
    return this.http.get(`${this.env.API_URI}sucursal/listar`)
          .pipe(
            delay(1000)
          );
  }

  getOneSucursal(id: number, token: string){
    let headers = new HttpHeaders().set('token', token);
    return this.http.get(`${this.env.API_URI}sucursal/buscar/${id}`,{headers});
  }

  saveSucursal(sucursal: Sucursal, token: string){
    let headers = new HttpHeaders().set('token', token);
    return this.http.post(`${this.env.API_URI}sucursal/crear`,sucursal,{headers});
  }

  deleteSucursal(id: number, token: string){
    let headers = new HttpHeaders().set('token', token);
    return this.http.delete(`${this.env.API_URI}sucursal/eliminar/${id}`,{headers});

  }

  updateSucursal(id:number, updateSucursal: Sucursal, token: string){
    let headers = new HttpHeaders().set('token', token);
    return this.http.put(`${this.env.API_URI}sucursal/editar/${id}`,updateSucursal,{headers});

  }



}
