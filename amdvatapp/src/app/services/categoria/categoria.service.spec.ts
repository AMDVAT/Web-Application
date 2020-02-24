import {TestBed} from '@angular/core/testing';

import {CategoriaService} from './categoria.service';
import {HttpClient} from '@angular/common/http';

describe('CategoriaService', () => {
    let categoriaService: CategoriaService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClient],
            providers: [CategoriaService]
        });

        categoriaService = TestBed.get(CategoriaService);
    });

    it('should be created', () => {
        const service: CategoriaService = TestBed.get(CategoriaService);
        expect(service).toBeTruthy();
    });
});
