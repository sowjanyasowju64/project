import { TestBed } from '@angular/core/testing';

import { SalaryServicesService } from './salary-services.service';

describe('SalaryServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalaryServicesService = TestBed.get(SalaryServicesService);
    expect(service).toBeTruthy();
  });
});
