import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeedAuthAdminPageComponent } from './need-auth-admin-page.component';

describe('NeedAuthAdminPageComponent', () => {
  let component: NeedAuthAdminPageComponent;
  let fixture: ComponentFixture<NeedAuthAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedAuthAdminPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeedAuthAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
