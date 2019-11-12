import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Extras3Component } from './extras3.component';

describe('Extras3Component', () => {
  let component: Extras3Component;
  let fixture: ComponentFixture<Extras3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Extras3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Extras3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
