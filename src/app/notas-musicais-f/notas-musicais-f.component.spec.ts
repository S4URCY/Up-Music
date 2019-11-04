import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisFComponent } from './notas-musicais-f.component';

describe('NotasMusicaisFComponent', () => {
  let component: NotasMusicaisFComponent;
  let fixture: ComponentFixture<NotasMusicaisFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
