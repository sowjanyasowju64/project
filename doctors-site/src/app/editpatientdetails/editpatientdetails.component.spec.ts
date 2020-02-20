import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientdetailsComponent } from './editpatientdetails.component';

describe('EditpatientdetailsComponent', () => {
  let component: EditpatientdetailsComponent;
  let fixture: ComponentFixture<EditpatientdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpatientdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpatientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
