import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRDetailsComponent } from './hr-details.component';

describe('HRDetailsComponent', () => {
  let component: HRDetailsComponent;
  let fixture: ComponentFixture<HRDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
