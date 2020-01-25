import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos7Component } from './videos7.component';

describe('Videos7Component', () => {
  let component: Videos7Component;
  let fixture: ComponentFixture<Videos7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videos7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
