import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMenoresIntroComponent } from './notas-menores-intro.component';

describe('NotasMenoresIntroComponent', () => {
  let component: NotasMenoresIntroComponent;
  let fixture: ComponentFixture<NotasMenoresIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMenoresIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMenoresIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
