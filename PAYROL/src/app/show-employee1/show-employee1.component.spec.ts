import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmployee1Component } from './show-employee1.component';

describe('ShowEmployee1Component', () => {
  let component: ShowEmployee1Component;
  let fixture: ComponentFixture<ShowEmployee1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEmployee1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmployee1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
