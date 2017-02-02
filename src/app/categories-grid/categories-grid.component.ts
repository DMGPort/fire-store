import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-categories-grid',
  templateUrl: './categories-grid.component.html',
  styleUrls: ['./categories-grid.component.css']
})
export class CategoriesGridComponent implements OnInit {

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
