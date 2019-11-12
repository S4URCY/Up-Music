import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoharmonicoBComponent } from './campoharmonico-b.component';

describe('CampoharmonicoBComponent', () => {
  let component: CampoharmonicoBComponent;
  let fixture: ComponentFixture<CampoharmonicoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoharmonicoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoharmonicoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
