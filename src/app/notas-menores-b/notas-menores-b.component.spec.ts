import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMenoresBComponent } from './notas-menores-b.component';

describe('NotasMenoresBComponent', () => {
  let component: NotasMenoresBComponent;
  let fixture: ComponentFixture<NotasMenoresBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMenoresBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMenoresBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
