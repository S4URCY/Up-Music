import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Extras1Component } from './extras1.component';

describe('Extras1Component', () => {
  let component: Extras1Component;
  let fixture: ComponentFixture<Extras1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Extras1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Extras1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
