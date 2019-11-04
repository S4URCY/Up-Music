import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMenoresGComponent } from './notas-menores-g.component';

describe('NotasMenoresGComponent', () => {
  let component: NotasMenoresGComponent;
  let fixture: ComponentFixture<NotasMenoresGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMenoresGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMenoresGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
