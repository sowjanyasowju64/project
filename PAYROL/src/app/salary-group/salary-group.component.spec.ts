import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryGroupComponent } from './salary-group.component';

describe('SalaryGroupComponent', () => {
  let component: SalaryGroupComponent;
  let fixture: ComponentFixture<SalaryGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
