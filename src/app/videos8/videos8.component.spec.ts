import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos8Component } from './videos8.component';

describe('Videos8Component', () => {
  let component: Videos8Component;
  let fixture: ComponentFixture<Videos8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videos8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
