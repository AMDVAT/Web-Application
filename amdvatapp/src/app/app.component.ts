import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Utils} from './Utils';
import {SessionService} from './services/session/session.service';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  private UtilsRef = Utils;
  public selectedIndex = 0;
  public appPages = [
    // {
    //   title: 'Productos',
    //   url: '/productos',
    //   icon: 'cube'
    // },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sessionService: SessionService,
    private firebaseX: FirebaseX
  ) {
    this.initializeApp();
    this.sessionService.setRoutes(() => {
      this.appPages = this.UtilsRef.routes;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.firebaseX.getToken()
          .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
          .catch(error => console.error('Error getting token', error));

      this.firebaseX.onMessageReceived()
          .subscribe(data => console.log(`User opened a notification ${data}`));
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
