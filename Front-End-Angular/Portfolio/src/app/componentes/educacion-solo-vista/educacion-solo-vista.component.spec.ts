import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionSoloVistaComponent } from './educacion-solo-vista.component';

describe('EducacionSoloVistaComponent', () => {
  let component: EducacionSoloVistaComponent;
  let fixture: ComponentFixture<EducacionSoloVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionSoloVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionSoloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
