import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSustenidasCComponent } from './notas-sustenidas-c.component';

describe('NotasSustenidasCComponent', () => {
  let component: NotasSustenidasCComponent;
  let fixture: ComponentFixture<NotasSustenidasCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasSustenidasCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasSustenidasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
