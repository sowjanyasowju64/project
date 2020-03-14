import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForgotpasswordComponent } from './admin-forgotpassword.component';

describe('AdminForgotpasswordComponent', () => {
  let component: AdminForgotpasswordComponent;
  let fixture: ComponentFixture<AdminForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminForgotpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
