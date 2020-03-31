import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Demo} from '../models/demo';
import {Demos} from '../mocks/mock-demo';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  getDemos(): Observable<Demo[]> {
    return of(Demos);
  }
}
