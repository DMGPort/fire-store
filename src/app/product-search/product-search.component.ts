import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(
    private myDataService: MyDataService
    ) {}
  
  productList: Product[];
  ngOnInit() {
    this.productList = this.myDataService.searchList;
  }

  searchTerm: string;
  onBlur(){
    setTimeout(() => {
    this.myDataService.getSearchList();
    this.searchTerm = '';
    }, 200);
  }

}
