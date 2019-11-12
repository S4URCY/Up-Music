import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoharmonicoIntroComponent } from './campoharmonico-intro.component';

describe('CampoharmonicoIntroComponent', () => {
  let component: CampoharmonicoIntroComponent;
  let fixture: ComponentFixture<CampoharmonicoIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoharmonicoIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoharmonicoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
