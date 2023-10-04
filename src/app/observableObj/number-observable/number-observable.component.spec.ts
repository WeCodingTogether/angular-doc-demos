import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberObservableComponent } from './number-observable.component';

describe('NumberObservableComponent', () => {
  let component: NumberObservableComponent;
  let fixture: ComponentFixture<NumberObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberObservableComponent]
    });
    fixture = TestBed.createComponent(NumberObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
