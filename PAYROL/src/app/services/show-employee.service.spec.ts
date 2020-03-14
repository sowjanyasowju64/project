import { TestBed } from '@angular/core/testing';

import { ShowEmployeeService } from './show-employee.service';

describe('ShowEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowEmployeeService = TestBed.get(ShowEmployeeService);
    expect(service).toBeTruthy();
  });
});
