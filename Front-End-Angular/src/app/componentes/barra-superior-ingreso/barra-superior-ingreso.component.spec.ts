import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSuperiorIngresoComponent } from './barra-superior-ingreso.component';

describe('BarraSuperiorIngresoComponent', () => {
  let component: BarraSuperiorIngresoComponent;
  let fixture: ComponentFixture<BarraSuperiorIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraSuperiorIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraSuperiorIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
