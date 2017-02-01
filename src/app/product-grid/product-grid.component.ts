import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor(
    private myDataService: MyDataService
    ) {}

  ngOnInit() {

  }

  toDetails(product){
    this.myDataService.setActiveProduct(product);
  }

}