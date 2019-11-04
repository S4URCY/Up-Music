import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMenoresFComponent } from './notas-menores-f.component';

describe('NotasMenoresFComponent', () => {
  let component: NotasMenoresFComponent;
  let fixture: ComponentFixture<NotasMenoresFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMenoresFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMenoresFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
