import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-valoration',
  templateUrl: './valoration.component.html',
  styleUrls: ['./valoration.component.scss'],
})
export class ValorationComponent implements OnInit {
  @Input()
  valoration: number;

  stars: Array<string> = [
  ];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      if (i <=this.valoration) {
        this.stars.push('star');
      } else {
        this.stars.push('star-outline');
      }
    }
  }

}
