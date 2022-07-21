import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoSoloVistaComponent } from './encabezado-solo-vista.component';

describe('EncabezadoSoloVistaComponent', () => {
  let component: EncabezadoSoloVistaComponent;
  let fixture: ComponentFixture<EncabezadoSoloVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoSoloVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoSoloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
