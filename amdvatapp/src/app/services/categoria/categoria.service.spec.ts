import {TestBed} from '@angular/core/testing';

import {CategoriaService} from './categoria.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('CategoriaService', () => {
    let categoriaService: CategoriaService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [CategoriaService]
        });

        categoriaService = TestBed.get(CategoriaService);
    });

    it('Creacion de instancia de Servicio - Categoria', () => {
        expect(categoriaService).toBeTruthy();
    });

    it('Respuesta Valida, Categoria', (done: DoneFn) => {
        categoriaService.getCategoria(1)
            .subscribe(res => {
                expect(res).toBeTruthy();
                done();
            });
    });

    it('Respuesta Valida, Categorias', (done: DoneFn) => {
        categoriaService.getCategorias()
            .subscribe(res => {
                expect(res.length).toEqual(5);
                done();
            });
    });

});
