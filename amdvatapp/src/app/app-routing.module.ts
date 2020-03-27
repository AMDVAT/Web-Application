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
import {CategoriaListaComponent} from './components/categoria-lista/categoria-lista.component';
import {CategoriaSimpleComponent} from './components/categoria-simple/categoria-simple.component';


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
        component: ListaUsuariosComponent
    },{
        path: 'gestion/usuario/lista/datos',
        component: UsuarioSimpleComponent
    },{
        path: 'gestion/producto/lista',
        component: ProductoListaComponent
    },{
        path: 'gestion/producto/lista/datos',
        component: ProductoSimpleComponent

    },{
        path: 'gestion/sucursal/lista',
        component: SucursalListaComponent
    },{
        path: 'gestion/sucursal/lista/datos',
        component: SucursalSimpleComponent
    },{
        path: 'productos/:producto',
        component: ProductosComponent
    },{
        path: 'gestion/categoria/lista',
        component: CategoriaListaComponent
    },{
        path: 'gestion/categoria/lista/datos',
        component: CategoriaSimpleComponent
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
