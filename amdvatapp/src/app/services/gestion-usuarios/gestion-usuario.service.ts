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

  saveUser(usuario: User){
    return this.http.post(`${this.env.API_URI}usuario/registrar`,usuario);
  }

  deleteUser(id:string){
    const headers = new HttpHeaders().set('token', this.session.getUserToken());
    return this.http.put(`${this.env.API_URI}usuario/eliminar/${id}`,{headers});
  }

  updateUser(id: string, updateUser: User){
    const headers = new HttpHeaders().set('token', this.session.getUserToken());
    return this.http.put(`${this.env.API_URI}usuario/editar/${id}`,updateUser,{headers});
  }

}
