import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClinicalConditionsComponent } from './edit-clinical-conditions.component';

describe('EditClinicalConditionsComponent', () => {
  let component: EditClinicalConditionsComponent;
  let fixture: ComponentFixture<EditClinicalConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClinicalConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClinicalConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
