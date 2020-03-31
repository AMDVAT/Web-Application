import { TestBed } from '@angular/core/testing';

import { GestionCategoriaService } from './gestion-categoria.service';

describe('GestionCategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionCategoriaService = TestBed.get(GestionCategoriaService);
    expect(service).toBeTruthy();
  });
});
