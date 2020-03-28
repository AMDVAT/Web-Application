import { TestBed } from '@angular/core/testing';

import { GestionProductoService } from './gestion-producto.service';

describe('GestionProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionProductoService = TestBed.get(GestionProductoService);
    expect(service).toBeTruthy();
  });
});
