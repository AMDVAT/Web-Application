import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  API_URI = `http://64.225.24.183:9250/`;
  constructor() { }
}
