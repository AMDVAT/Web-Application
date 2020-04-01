import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {SessionService} from '../session/session.service';

import {User} from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class GestionUsuarioService {

  constructor(
    private http: HttpClient,
    private env: EnviromentService,
    private  session: SessionService
  ) { }

  getListUser(){
    return this.http.get(`${this.env.API_URI}usuario/listar`);
    //http://amdvat-be.herokuapp.com
  }

  getOneUser(id:number, token: string){
    let headers = new HttpHeaders().set('token', token);
    return this.http.get(`${this.env.API_URI}usuario/buscar/${id}`,{headers});
  }
  
  saveUser(usuario: User){
    return this.http.post(`${this.env.API_URI}usuario/registrar`,usuario);
  }

  deleteUser(id:number, token: string){
    let headers = new HttpHeaders().set('token', token);
    return this.http.delete(`${this.env.API_URI}usuario/eliminar/${id}`,{headers});
  }

  updateUser(id: number, updateUser: User, token: string){
    let headers = new HttpHeaders().set('token', token);
    return this.http.put(`${this.env.API_URI}usuario/editar/${id}`,updateUser,{headers});
  }

}
