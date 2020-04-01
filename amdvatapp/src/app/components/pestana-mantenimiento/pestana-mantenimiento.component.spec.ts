import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PestanaMantenimientoComponent } from './pestana-mantenimiento.component';

describe('PestanaMantenimientoComponent', () => {
  let component: PestanaMantenimientoComponent;
  let fixture: ComponentFixture<PestanaMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestanaMantenimientoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PestanaMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
