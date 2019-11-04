import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSustenidasBComponent } from './notas-sustenidas-b.component';

describe('NotasSustenidasBComponent', () => {
  let component: NotasSustenidasBComponent;
  let fixture: ComponentFixture<NotasSustenidasBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasSustenidasBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasSustenidasBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
