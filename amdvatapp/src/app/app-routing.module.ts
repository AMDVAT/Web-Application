import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {CategoriasComponent} from './components/categorias/categorias.component';
import { HomeComponent } from './components/home/home.component';
import {CategoriaComponent} from './components/categoria/categoria.component';
import {ProductoComponent} from './components/producto/producto.component';
import {ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';
import {UsuarioSimpleComponent} from './components/usuario-simple/usuario-simple.component';
import { from } from 'rxjs';


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
        component: UsuarioSimpleComponent
    },{
        path: 'gestion/sucursal/lista',
        component: ListaUsuariosComponent
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
