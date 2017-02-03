import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { BasketGuestService } from '../_services/basket-guest.service';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {

  constructor(
      private myDataService: MyDataService,
      private basketGuestService: BasketGuestService,
      private routingService: RoutingService
  ) { }

  ngOnInit() {
  }
  addToBasket(product){
    this.basketGuestService.addToCart(product);
  }
  removeFromBasket(product){
    this.basketGuestService.removeFromCart(product);
  }
  toProductDetails(product){
    this.myDataService.setActiveProduct(product);
    this.routingService.toDetails(this.myDataService.activeCategory.value.name);
  }
}
