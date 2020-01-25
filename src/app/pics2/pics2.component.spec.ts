import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pics2Component } from './pics2.component';

describe('Pics2Component', () => {
  let component: Pics2Component;
  let fixture: ComponentFixture<Pics2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pics2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pics2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
