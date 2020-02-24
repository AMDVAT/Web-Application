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
});
