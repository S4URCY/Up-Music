import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSustenidasFComponent } from './notas-sustenidas-f.component';

describe('NotasSustenidasFComponent', () => {
  let component: NotasSustenidasFComponent;
  let fixture: ComponentFixture<NotasSustenidasFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasSustenidasFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasSustenidasFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
