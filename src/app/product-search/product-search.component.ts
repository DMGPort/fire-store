import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { Product } from '../_models/product';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(
    private myDataService: MyDataService,
    private routingService: RoutingService
    ) {}
  
  productList: Product[];
  ngOnInit() {
    this.myDataService.buildSearchList();
  }

  searchTerm: string;
  onBlur(){  
    setTimeout(() => {
    this.searchTerm = '';
    }, 200);
  }

  gotoDetail(product){
    this.myDataService.setActiveProduct(product);
    this.routingService.toDetails();
  }
}
