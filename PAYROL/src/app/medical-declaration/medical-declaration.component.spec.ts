import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDeclarationComponent } from './medical-declaration.component';

describe('MedicalDeclarationComponent', () => {
  let component: MedicalDeclarationComponent;
  let fixture: ComponentFixture<MedicalDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
