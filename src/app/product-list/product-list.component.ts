import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private myDataService: MyDataService
    ) {}
  
  ngOnInit() {
  }

}
