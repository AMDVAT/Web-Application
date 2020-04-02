import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Utils} from './Utils';



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
    {
      title: 'Log In',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Perfil',
      url: '/gestion/usuario/perfil',
      icon: 'person'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },{
      title: 'Carrito',
      url: 'cart',
      icon: 'cart'
    },
    {
      title: 'Categorias',
      url: '/categorias',
      icon: 'apps'
    },
    {
      title: 'Gestion usuarios',
      url: 'gestion/usuario/lista',
      icon: 'people'
    },
    {
      title: 'Gestion productos',
      url: 'gestion/producto/lista',
      icon: 'rocket'
    },
    {
      title: 'Gestion sucursales',
      url: 'gestion/sucursal/lista',
      icon: 'business'
    },
    {
      title: 'Gestionar Categorias',
      url: 'gestion/categoria/lista',
      icon: 'grid'
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
