import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  API_URI = `https://amdvat-be.herokuapp.com/`;
  constructor() { }
}
