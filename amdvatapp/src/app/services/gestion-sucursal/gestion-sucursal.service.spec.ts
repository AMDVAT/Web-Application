import { TestBed } from '@angular/core/testing';

import { GestionSucursalService } from './gestion-sucursal.service';

describe('GestionSucursalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionSucursalService = TestBed.get(GestionSucursalService);
    expect(service).toBeTruthy();
  });
});
