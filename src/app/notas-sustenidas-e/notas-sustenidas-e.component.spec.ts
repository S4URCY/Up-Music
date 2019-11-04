import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSustenidasEComponent } from './notas-sustenidas-e.component';

describe('NotasSustenidasEComponent', () => {
  let component: NotasSustenidasEComponent;
  let fixture: ComponentFixture<NotasSustenidasEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasSustenidasEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasSustenidasEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
