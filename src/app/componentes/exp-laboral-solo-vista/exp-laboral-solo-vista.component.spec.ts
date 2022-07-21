import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpLaboralSoloVistaComponent } from './exp-laboral-solo-vista.component';

describe('ExpLaboralSoloVistaComponent', () => {
  let component: ExpLaboralSoloVistaComponent;
  let fixture: ComponentFixture<ExpLaboralSoloVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpLaboralSoloVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpLaboralSoloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
