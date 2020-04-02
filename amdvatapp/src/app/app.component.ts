import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Utils} from './Utils';
import {SessionService} from './services/session/session.service';




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
    private sessionService: SessionService
  ) {
    this.initializeApp();
    this.sessionService.setRoutes();
    this.appPages = this.UtilsRef.routes;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
