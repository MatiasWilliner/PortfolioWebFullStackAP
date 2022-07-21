import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesSoloVistaComponent } from './habilidades-solo-vista.component';

describe('HabilidadesSoloVistaComponent', () => {
  let component: HabilidadesSoloVistaComponent;
  let fixture: ComponentFixture<HabilidadesSoloVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesSoloVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesSoloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
