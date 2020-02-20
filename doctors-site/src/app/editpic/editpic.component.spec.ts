import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpicComponent } from './editpic.component';

describe('EditpicComponent', () => {
  let component: EditpicComponent;
  let fixture: ComponentFixture<EditpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
