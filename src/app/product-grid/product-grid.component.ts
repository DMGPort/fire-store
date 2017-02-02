import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor(
    private myDataService: MyDataService,
    private routingService: RoutingService
    ) {}

  ngOnInit() {
    this.myDataService.activeCategory.value ? null : this.routingService.goHome();
  }

  toDetails(product){
    this.myDataService.setActiveProduct(product);
  }

}