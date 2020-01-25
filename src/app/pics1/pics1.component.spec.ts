import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pics1Component } from './pics1.component';

describe('Pics1Component', () => {
  let component: Pics1Component;
  let fixture: ComponentFixture<Pics1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pics1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
