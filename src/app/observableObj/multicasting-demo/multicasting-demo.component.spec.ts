import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastingDemoComponent } from './multicasting-demo.component';

describe('MulticastingDemoComponent', () => {
  let component: MulticastingDemoComponent;
  let fixture: ComponentFixture<MulticastingDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MulticastingDemoComponent]
    });
    fixture = TestBed.createComponent(MulticastingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
