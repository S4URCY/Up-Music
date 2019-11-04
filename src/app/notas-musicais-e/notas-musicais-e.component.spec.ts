import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisEComponent } from './notas-musicais-e.component';

describe('NotasMusicaisEComponent', () => {
  let component: NotasMusicaisEComponent;
  let fixture: ComponentFixture<NotasMusicaisEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
