import { Component, OnInit } from '@angular/core';
import { Location }  from '@angular/common';
import { MyDataService } from '../_services/mydata.service';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private location: Location,
    private myDataService:  MyDataService
  ) { }

  product: Product;
  ngOnInit() {
    this.product = this.myDataService.activeProduct.value;
    this.product ? null : this.goBack();
  }

  goBack(){
    this.location.back();
  }

}
