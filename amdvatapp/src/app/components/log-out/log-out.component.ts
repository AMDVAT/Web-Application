import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session/session.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss'],
})
export class LogOutComponent implements OnInit {

  constructor(
      private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.sessionService.getUserToken(token => {
      if (token === undefined) {
        location.href = 'home';
      } else {
        this.sessionService.removeUser();
        this.sessionService.removeUserEmail();
        alert('Gracias por utilizar la AMDVAT')
        location.href = 'home';
      }

    });
  }

}
