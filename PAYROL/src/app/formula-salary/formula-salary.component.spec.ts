import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaSalaryComponent } from './formula-salary.component';

describe('FormulaSalaryComponent', () => {
  let component: FormulaSalaryComponent;
  let fixture: ComponentFixture<FormulaSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
