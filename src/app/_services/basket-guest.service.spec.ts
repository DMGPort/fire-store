/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BasketGuestService } from './basket-guest.service';

describe('BasketGuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketGuestService]
    });
  });

  it('should ...', inject([BasketGuestService], (service: BasketGuestService) => {
    expect(service).toBeTruthy();
  }));
});
