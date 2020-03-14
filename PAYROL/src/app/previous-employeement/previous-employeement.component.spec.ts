import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEmployeementComponent } from './previous-employeement.component';

describe('PreviousEmployeementComponent', () => {
  let component: PreviousEmployeementComponent;
  let fixture: ComponentFixture<PreviousEmployeementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousEmployeementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousEmployeementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
