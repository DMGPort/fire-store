import { Injectable } from '@angular/core';
import { MyDataService } from './mydata.service';
import { Product } from '../_models/product';

@Injectable()
export class BasketGuestService {

  constructor(
        private myDataService : MyDataService
  ) { }

  addToCart(product : Product){
    this.myDataService.basketList.push(product);
    console.log(product);
    this.myDataService.updateNumberInBasket();   
  }
}
