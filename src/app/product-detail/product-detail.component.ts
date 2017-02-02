import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private myDataService:  MyDataService,
    private routingService: RoutingService
  ) { }
  
  ngOnInit() {
    this.myDataService.activeProduct.value ? null : this.routingService.goHome();
  }

  goBack(){
    this.routingService.goBack();
  }
}
