import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoharmonicoFComponent } from './campoharmonico-f.component';

describe('CampoharmonicoFComponent', () => {
  let component: CampoharmonicoFComponent;
  let fixture: ComponentFixture<CampoharmonicoFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoharmonicoFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoharmonicoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
