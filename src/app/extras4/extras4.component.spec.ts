import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Extras4Component } from './extras4.component';

describe('Extras4Component', () => {
  let component: Extras4Component;
  let fixture: ComponentFixture<Extras4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Extras4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Extras4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
