import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryShowComponent } from './salary-show.component';

describe('SalaryShowComponent', () => {
  let component: SalaryShowComponent;
  let fixture: ComponentFixture<SalaryShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
