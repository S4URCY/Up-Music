import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSustenidasAComponent } from './notas-sustenidas-a.component';

describe('NotasSustenidasAComponent', () => {
  let component: NotasSustenidasAComponent;
  let fixture: ComponentFixture<NotasSustenidasAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasSustenidasAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasSustenidasAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
