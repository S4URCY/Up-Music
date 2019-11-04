import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMenoresCComponent } from './notas-menores-c.component';

describe('NotasMenoresCComponent', () => {
  let component: NotasMenoresCComponent;
  let fixture: ComponentFixture<NotasMenoresCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMenoresCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMenoresCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
