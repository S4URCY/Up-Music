import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisSustenidasComponent } from './notas-musicais-sustenidas.component';

describe('NotasMusicaisSustenidasComponent', () => {
  let component: NotasMusicaisSustenidasComponent;
  let fixture: ComponentFixture<NotasMusicaisSustenidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisSustenidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisSustenidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
