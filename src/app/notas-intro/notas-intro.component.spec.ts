import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasIntroComponent } from './notas-intro.component';

describe('NotasIntroComponent', () => {
  let component: NotasIntroComponent;
  let fixture: ComponentFixture<NotasIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
