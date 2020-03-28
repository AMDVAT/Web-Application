import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {User} from '../../models/user'

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

  getOneUser(id: string){
    return this.http.get(`${this.env.API_URI}usuario/`);
  }
  
  saveUser(usuario: User){
    return this.http.post(`${this.env.API_URI}usuario/registrar`,usuario);
  }

  deleteUser(){

  }

  updateUser(id: string, updateUser: User){
    return this.http.put(`${this.env.API_URI}/usuario/editar/${id}`,updateUser);
  }

}
