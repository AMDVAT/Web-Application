import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class GestionUsuarioService {

  constructor(
    private http: HttpClient,
    private env: EnviromentService
  ) { }

  getListUser(){
    return this.http.get(`${this.env.API_URI}usuario/listar`);
    //http://amdvat-be.herokuapp.com
  }

  


}
