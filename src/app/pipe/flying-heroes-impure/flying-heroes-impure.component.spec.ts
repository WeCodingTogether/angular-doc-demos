import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingHeroesImpureComponent } from './flying-heroes-impure.component';

describe('FlyingHeroesImpureComponent', () => {
  let component: FlyingHeroesImpureComponent;
  let fixture: ComponentFixture<FlyingHeroesImpureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyingHeroesImpureComponent]
    });
    fixture = TestBed.createComponent(FlyingHeroesImpureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
