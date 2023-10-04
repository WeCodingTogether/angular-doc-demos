import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBirthday2Component } from './hero-birthday2.component';

describe('HeroBirthday2Component', () => {
  let component: HeroBirthday2Component;
  let fixture: ComponentFixture<HeroBirthday2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBirthday2Component]
    });
    fixture = TestBed.createComponent(HeroBirthday2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
