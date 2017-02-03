import { Injectable } from '@angular/core';
import { MyDataService } from './mydata.service';
import { Product } from '../_models/product';

@Injectable()
export class BasketGuestService {

  constructor(
        private myDataService : MyDataService
  ) { }
  
  addToCart(product: Product){
    let itemAlreadyInBasket:boolean = false;
    for(let x = 0; x < this.myDataService.basketList.length; x++){
      if(product.name == this.myDataService.basketList[x].name ){
        this.myDataService.basketList[x].qty++;
        itemAlreadyInBasket = true;
      }
    }
    if(itemAlreadyInBasket == false){       
      this.myDataService.basketList.push(product);    
    }
    this.myDataService.updateNumberInBasket();
  }
  removeFromCart(product: Product){
    for(let x = 0 ; x < this.myDataService.basketList.length; x++){
      if(product.name == this.myDataService.basketList[x].name){
        if(this.myDataService.basketList[x].qty >= 1){
          this.myDataService.basketList[x].qty--;
        }
        if(this.myDataService.basketList[x].qty == 0){
          this.myDataService.basketList.splice(x, 1)
        }
      }
    }
    this.myDataService.updateNumberInBasket();
  }

}

