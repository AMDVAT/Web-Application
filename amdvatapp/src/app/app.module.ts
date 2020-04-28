import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicRatingModule } from 'ionic-rating';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import {CategoriasComponent} from './components/categorias/categorias.component';
import { HomeComponent } from './components/home/home.component';
import {CategoriaComponent} from './components/categoria/categoria.component';
import {ValorationComponent} from './components/categoria/valoration/valoration.component';
import {ProductoComponent} from './components/producto/producto.component';
import {ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';
import {UsuarioSimpleComponent} from './components/usuario-simple/usuario-simple.component';
import {SucursalListaComponent} from './components/sucursal-lista/sucursal-lista.component';
import {SucursalSimpleComponent} from './components/sucursal-simple/sucursal-simple.component';
import {ProductoListaComponent} from './components/producto-lista/producto-lista.component';
import {ProductoSimpleComponent} from './components/producto-simple/producto-simple.component';
import {ProductosComponent} from './components/productos/productos.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {HttpClientModule} from '@angular/common/http';
import {NeedAuthUser} from './auths/validations/NeedAuthUser';
import {NeedAuthAdmin} from './auths/validations/NeedAuthAdmin';
import {NeedAuthAdminPageComponent} from './auths/pages/need-auth-admin-page/need-auth-admin-page.component';
import {NeedAuthUserPageComponent} from './auths/pages/need-auth-user-page/need-auth-user-page.component';
import {CategoriaListaComponent} from './components/categoria-lista/categoria-lista.component';
import {CategoriaSimpleComponent} from './components/categoria-simple/categoria-simple.component';
import {CarritoComponent} from './components/carrito/carrito.component';
import {UsuarioRegistroComponent} from './components/usuario-registro/usuario-registro.component';
import {PestanaMantenimientoComponent} from './components/pestana-mantenimiento/pestana-mantenimiento.component';
import { UsuarioPerfilComponent } from './components/usuario-perfil/usuario-perfil.component';
import {ComentariosComponent} from './components/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CategoriasComponent,
    HomeComponent,
    CategoriaComponent,
    ValorationComponent,
    ProductoComponent,
    ListaUsuariosComponent,
    UsuarioSimpleComponent,
    SucursalListaComponent,
    SucursalSimpleComponent,
    ProductoListaComponent,
    ProductoSimpleComponent,
    ProductosComponent,
    NeedAuthAdminPageComponent,
    NeedAuthUserPageComponent,
    CategoriaListaComponent,
    CategoriaSimpleComponent,
    CarritoComponent,
    UsuarioRegistroComponent,
    PestanaMantenimientoComponent,
    UsuarioPerfilComponent,
    ComentariosComponent

  ],
  entryComponents: [],
  imports: [
      HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicRatingModule
  ],
  providers: [
    NeedAuthUser,
    NeedAuthAdmin,
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
