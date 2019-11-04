import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisAComponent } from './notas-musicais-a.component';

describe('NotasMusicaisAComponent', () => {
  let component: NotasMusicaisAComponent;
  let fixture: ComponentFixture<NotasMusicaisAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
