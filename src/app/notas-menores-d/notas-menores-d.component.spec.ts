import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMenoresDComponent } from './notas-menores-d.component';

describe('NotasMenoresDComponent', () => {
  let component: NotasMenoresDComponent;
  let fixture: ComponentFixture<NotasMenoresDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMenoresDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMenoresDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
