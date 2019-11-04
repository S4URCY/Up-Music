import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMenoresAComponent } from './notas-menores-a.component';

describe('NotasMenoresAComponent', () => {
  let component: NotasMenoresAComponent;
  let fixture: ComponentFixture<NotasMenoresAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMenoresAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMenoresAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
