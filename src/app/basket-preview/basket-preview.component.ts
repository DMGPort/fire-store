import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket-preview.component.html',
  styleUrls: ['./basket-preview.component.css']
})
export class BasketPreviewComponent implements OnInit {

  constructor(
    private myDataService: MyDataService,
    private routingService: RoutingService
  ) { }

  ngOnInit() {
  }

  toBasket(){
    this.routingService.toBasket();
  }

}
