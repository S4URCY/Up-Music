import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RitmicaComponent } from './ritmica.component';

describe('RitmicaComponent', () => {
  let component: RitmicaComponent;
  let fixture: ComponentFixture<RitmicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RitmicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RitmicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
