import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralSoloVistaComponent } from './laboral-solo-vista.component';

describe('LaboralSoloVistaComponent', () => {
  let component: LaboralSoloVistaComponent;
  let fixture: ComponentFixture<LaboralSoloVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboralSoloVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboralSoloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
