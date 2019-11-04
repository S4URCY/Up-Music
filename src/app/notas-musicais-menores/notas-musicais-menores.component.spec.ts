import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisMenoresComponent } from './notas-musicais-menores.component';

describe('NotasMusicaisMenoresComponent', () => {
  let component: NotasMusicaisMenoresComponent;
  let fixture: ComponentFixture<NotasMusicaisMenoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisMenoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisMenoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
