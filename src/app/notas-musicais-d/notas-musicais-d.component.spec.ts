import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisDComponent } from './notas-musicais-d.component';

describe('NotasMusicaisDComponent', () => {
  let component: NotasMusicaisDComponent;
  let fixture: ComponentFixture<NotasMusicaisDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
