import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoharmonicoDComponent } from './campoharmonico-d.component';

describe('CampoharmonicoDComponent', () => {
  let component: CampoharmonicoDComponent;
  let fixture: ComponentFixture<CampoharmonicoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoharmonicoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoharmonicoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
