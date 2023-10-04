import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBoostCaculatorComponent } from './power-boost-caculator.component';

describe('PowerBoostCaculatorComponent', () => {
  let component: PowerBoostCaculatorComponent;
  let fixture: ComponentFixture<PowerBoostCaculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerBoostCaculatorComponent]
    });
    fixture = TestBed.createComponent(PowerBoostCaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
