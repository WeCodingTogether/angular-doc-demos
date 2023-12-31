import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRouteComponent } from './activated-route.component';

describe('ActivatedRouteComponent', () => {
  let component: ActivatedRouteComponent;
  let fixture: ComponentFixture<ActivatedRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatedRouteComponent]
    });
    fixture = TestBed.createComponent(ActivatedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
