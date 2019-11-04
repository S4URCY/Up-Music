import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasSustenidasIntroComponent } from './notas-sustenidas-intro.component';

describe('NotasSustenidasIntroComponent', () => {
  let component: NotasSustenidasIntroComponent;
  let fixture: ComponentFixture<NotasSustenidasIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasSustenidasIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasSustenidasIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
