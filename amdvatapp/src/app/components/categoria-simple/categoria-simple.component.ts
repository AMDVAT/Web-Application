import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-simple',
  templateUrl: './categoria-simple.component.html',
  styleUrls: ['./categoria-simple.component.scss'],
})
export class CategoriaSimpleComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

  save() {
    console.log('save');
  }
}
