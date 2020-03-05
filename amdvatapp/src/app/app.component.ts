import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    // {
    //   title: 'Productos',
    //   url: '/productos',
    //   icon: 'cube'
    // },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Categorias',
      url: '/categorias',
      icon: 'apps'
    },
    {
      title: 'Log In',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Usuarios',
      url: 'usuario/lista',
      icon: 'person'
    },
    {
      title: 'Productos',
      url: 'producto',
      icon: 'rocket'
    },
    {
      title: 'Sucursales',
      url: 'sucursal',
      icon: 'business'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
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
