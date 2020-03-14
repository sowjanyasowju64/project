import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningTabsComponent } from './joining-tabs.component';

describe('JoiningTabsComponent', () => {
  let component: JoiningTabsComponent;
  let fixture: ComponentFixture<JoiningTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoiningTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoiningTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
