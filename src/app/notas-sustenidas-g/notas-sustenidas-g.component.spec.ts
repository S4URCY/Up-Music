import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSustenidasGComponent } from './notas-sustenidas-g.component';

describe('NotasSustenidasGComponent', () => {
  let component: NotasSustenidasGComponent;
  let fixture: ComponentFixture<NotasSustenidasGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasSustenidasGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasSustenidasGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
