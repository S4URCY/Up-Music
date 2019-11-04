import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSustenidasDComponent } from './notas-sustenidas-d.component';

describe('NotasSustenidasDComponent', () => {
  let component: NotasSustenidasDComponent;
  let fixture: ComponentFixture<NotasSustenidasDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasSustenidasDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasSustenidasDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
