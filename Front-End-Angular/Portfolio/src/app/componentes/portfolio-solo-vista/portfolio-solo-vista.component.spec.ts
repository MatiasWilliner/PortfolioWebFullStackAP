import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSoloVistaComponent } from './portfolio-solo-vista.component';

describe('PortfolioSoloVistaComponent', () => {
  let component: PortfolioSoloVistaComponent;
  let fixture: ComponentFixture<PortfolioSoloVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSoloVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSoloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
