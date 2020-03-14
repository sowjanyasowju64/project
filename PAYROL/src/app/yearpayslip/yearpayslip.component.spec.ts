import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearpayslipComponent } from './yearpayslip.component';

describe('YearpayslipComponent', () => {
  let component: YearpayslipComponent;
  let fixture: ComponentFixture<YearpayslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearpayslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearpayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
