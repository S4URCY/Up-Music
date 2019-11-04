import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMenoresEComponent } from './notas-menores-e.component';

describe('NotasMenoresEComponent', () => {
  let component: NotasMenoresEComponent;
  let fixture: ComponentFixture<NotasMenoresEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMenoresEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMenoresEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
