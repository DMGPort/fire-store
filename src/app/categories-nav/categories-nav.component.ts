import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent implements OnInit {

  constructor(
    private myDataService: MyDataService,
    private routingService: RoutingService
    ) {}

  ngOnInit() {
  }

  toCategory(category){
    this.myDataService.setActiveCategory(category);
    this.routingService.toProductGrid(category.name)
  }

}
