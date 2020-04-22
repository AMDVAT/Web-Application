import { TestBed } from '@angular/core/testing';

import { GestionUsuarioService } from './gestion-usuario.service';

describe('GestionUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionUsuarioService = TestBed.get(GestionUsuarioService);
    expect(service).toBeTruthy();
  });
});
