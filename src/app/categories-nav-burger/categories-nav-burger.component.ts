import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-categories-nav-burger',
  templateUrl: './categories-nav-burger.component.html',
  styleUrls: ['./categories-nav-burger.component.css']
})
export class CategoriesNavBurgerComponent implements OnInit {

  constructor(
      private myDataService: MyDataService,
      private routingService: RoutingService
  ) { }

  ngOnInit() {
  }
  
  toCategory(category){
    this.myDataService.setActiveCategory(category);
    this.routingService.toProductGrid(category.name)
  }
}
