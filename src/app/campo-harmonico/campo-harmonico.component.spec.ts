import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoHarmonicoComponent } from './campo-harmonico.component';

describe('CampoHarmonicoComponent', () => {
  let component: CampoHarmonicoComponent;
  let fixture: ComponentFixture<CampoHarmonicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoHarmonicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoHarmonicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
