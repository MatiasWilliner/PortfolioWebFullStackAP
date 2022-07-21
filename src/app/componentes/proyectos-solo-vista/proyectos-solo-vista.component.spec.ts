import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSoloVistaComponent } from './proyectos-solo-vista.component';

describe('ProyectosSoloVistaComponent', () => {
  let component: ProyectosSoloVistaComponent;
  let fixture: ComponentFixture<ProyectosSoloVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosSoloVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosSoloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
