/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyDataService } from './mydata.service';

describe('MydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDataService]
    });
  });

  it('should ...', inject([MyDataService], (service: MyDataService) => {
    expect(service).toBeTruthy();
  }));
});
