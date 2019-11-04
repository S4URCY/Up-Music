import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMusicaisComponent } from './notas-musicais.component';

describe('NotasMusicaisComponent', () => {
  let component: NotasMusicaisComponent;
  let fixture: ComponentFixture<NotasMusicaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasMusicaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasMusicaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
