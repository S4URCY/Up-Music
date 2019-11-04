import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisGComponent } from './notas-musicais-g.component';

describe('NotasMusicaisGComponent', () => {
  let component: NotasMusicaisGComponent;
  let fixture: ComponentFixture<NotasMusicaisGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
