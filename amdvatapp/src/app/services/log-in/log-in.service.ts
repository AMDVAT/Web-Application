import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EnviromentService} from '../../services/enviroment/enviroment.service'

@Injectable({
  providedIn: 'root'
})
export class LogInService {
    isLoggedIn = false;


    constructor(
        private http: HttpClient,
        private env: EnviromentService
    ) { }



    login(email: string, contrasena: string){
        return this.http.post(`${this.env.API_URI}usuario/autenticar`,{"email": email, "contrasena": contrasena});
    }
}
