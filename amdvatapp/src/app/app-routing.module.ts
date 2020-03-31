import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {CategoriasComponent} from './components/categorias/categorias.component';
import { HomeComponent } from './components/home/home.component';
import {CategoriaComponent} from './components/categoria/categoria.component';
import {ProductoComponent} from './components/producto/producto.component';
import {ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';
import {UsuarioSimpleComponent} from './components/usuario-simple/usuario-simple.component';
import {SucursalListaComponent} from './components/sucursal-lista/sucursal-lista.component';
import {SucursalSimpleComponent} from './components/sucursal-simple/sucursal-simple.component';
import {ProductoListaComponent} from './components/producto-lista/producto-lista.component';
import {ProductoSimpleComponent} from './components/producto-simple/producto-simple.component';
import { from } from 'rxjs';
import {ProductosComponent} from './components/productos/productos.component';
import {NeedAuthUser} from './auths/validations/NeedAuthUser';
import {NeedAuthAdmin} from './auths/validations/NeedAuthAdmin';
import {NeedAuthAdminPageComponent} from './auths/pages/need-auth-admin-page/need-auth-admin-page.component';
import {NeedAuthUserPageComponent} from './auths/pages/need-auth-user-page/need-auth-user-page.component';
import {CategoriaListaComponent} from './components/categoria-lista/categoria-lista.component';
import {CategoriaSimpleComponent} from './components/categoria-simple/categoria-simple.component';
import {CarritoComponent} from './components/carrito/carrito.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'login',
        component: LogInComponent
    }, {
        path: 'categorias',
        component: CategoriasComponent
    }, {
        path: 'categorias/categoria/:id',
        component: CategoriaComponent
    }, {
        path: 'producto/:id',
        component: ProductoComponent
    },{
        path: 'gestion/usuario/lista',
        component: ListaUsuariosComponent,
        //canActivate: [NeedAuthAdmin]
    },{
        path: 'gestion/usuario/lista/datos',
        component: UsuarioSimpleComponent,
        //canActivate: [NeedAuthAdmin]
    },{
        path: 'gestion/producto/lista',
        component: ProductoListaComponent,
        //canActivate: [NeedAuthAdmin]
    },{
        path: 'gestion/producto/lista/datos',
        component: ProductoSimpleComponent,
       //canActivate: [NeedAuthAdmin]

    },{
        path: 'gestion/sucursal/lista',
        component: SucursalListaComponent,
        canActivate: [NeedAuthAdmin]
    },{
        path: 'gestion/sucursal/lista/datos',
        component: SucursalSimpleComponent,
        canActivate: [NeedAuthAdmin]
    },{
        path: 'productos/:producto',
        component: ProductosComponent,
        canActivate: [NeedAuthAdmin]
    },{
        path: 'needAuthAdmin',
        component: NeedAuthAdminPageComponent,
    },{
        path: 'needAuthUser',
        component: NeedAuthUserPageComponent,
    },{
        path: 'gestion/categoria/lista',
        component: CategoriaListaComponent,
        // canActivate: [NeedAuthAdmin]
    },{
        path: 'gestion/categoria/lista/datos',
        component: CategoriaSimpleComponent,
        // canActivate: [NeedAuthAdmin]
    },{
        path: 'gestion/categoria/lista/editar/:id',
        component: CategoriaSimpleComponent,
        // canActivate: [NeedAuthAdmin]
    },{
        path: 'cart',
        component: CarritoComponent,
        // canActivate: [NeedAuthAdmin]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
