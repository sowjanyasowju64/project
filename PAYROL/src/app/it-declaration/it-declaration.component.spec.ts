import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITDeclarationComponent } from './it-declaration.component';

describe('ITDeclarationComponent', () => {
  let component: ITDeclarationComponent;
  let fixture: ComponentFixture<ITDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
