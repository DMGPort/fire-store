import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {

  constructor(
      private myDataService: MyDataService
  ) { }

  ngOnInit() {
  }

}
