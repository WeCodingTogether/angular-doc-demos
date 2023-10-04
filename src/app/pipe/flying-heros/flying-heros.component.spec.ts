import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingHerosComponent } from './flying-heros.component';

describe('FlyingHerosComponent', () => {
  let component: FlyingHerosComponent;
  let fixture: ComponentFixture<FlyingHerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyingHerosComponent]
    });
    fixture = TestBed.createComponent(FlyingHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
