import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoharmonicoCComponent } from './campoharmonico-c.component';

describe('CampoharmonicoCComponent', () => {
  let component: CampoharmonicoCComponent;
  let fixture: ComponentFixture<CampoharmonicoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoharmonicoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoharmonicoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
