import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoharmonicoGComponent } from './campoharmonico-g.component';

describe('CampoharmonicoGComponent', () => {
  let component: CampoharmonicoGComponent;
  let fixture: ComponentFixture<CampoharmonicoGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoharmonicoGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoharmonicoGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
