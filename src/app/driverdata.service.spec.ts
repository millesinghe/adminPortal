import { TestBed, inject } from '@angular/core/testing';

import { DriverdataService } from './driverdata.service';

describe('DriverdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverdataService]
    });
  });

  it('should be created', inject([DriverdataService], (service: DriverdataService) => {
    expect(service).toBeTruthy();
  }));
});
