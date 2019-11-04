import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisBComponent } from './notas-musicais-b.component';

describe('NotasMusicaisBComponent', () => {
  let component: NotasMusicaisBComponent;
  let fixture: ComponentFixture<NotasMusicaisBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
