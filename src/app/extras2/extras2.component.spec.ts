import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Extras2Component } from './extras2.component';

describe('Extras2Component', () => {
  let component: Extras2Component;
  let fixture: ComponentFixture<Extras2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Extras2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Extras2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
