import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastingArrayDemoComponent } from './multicasting-array-demo.component';

describe('MulticastingArrayDemoComponent', () => {
  let component: MulticastingArrayDemoComponent;
  let fixture: ComponentFixture<MulticastingArrayDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MulticastingArrayDemoComponent]
    });
    fixture = TestBed.createComponent(MulticastingArrayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
