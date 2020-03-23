import { TestBed } from '@angular/core/testing';

import { BuscarProductoService } from './buscar-producto.service';

describe('BuscarProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscarProductoService = TestBed.get(BuscarProductoService);
    expect(service).toBeTruthy();
  });
});
