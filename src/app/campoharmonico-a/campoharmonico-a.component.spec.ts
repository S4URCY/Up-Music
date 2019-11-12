import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoharmonicoAComponent } from './campoharmonico-a.component';

describe('CampoharmonicoAComponent', () => {
  let component: CampoharmonicoAComponent;
  let fixture: ComponentFixture<CampoharmonicoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoharmonicoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoharmonicoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
