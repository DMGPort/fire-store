/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MydataService } from './mydata.service';

describe('MydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MydataService]
    });
  });

  it('should ...', inject([MydataService], (service: MydataService) => {
    expect(service).toBeTruthy();
  }));
});
