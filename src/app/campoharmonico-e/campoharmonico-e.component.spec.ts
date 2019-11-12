import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoharmonicoEComponent } from './campoharmonico-e.component';

describe('CampoharmonicoEComponent', () => {
  let component: CampoharmonicoEComponent;
  let fixture: ComponentFixture<CampoharmonicoEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoharmonicoEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoharmonicoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
