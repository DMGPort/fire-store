import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../_services/mydata.service';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent implements OnInit {

  constructor(
    private myDataService: MyDataService
    ) {}

  ngOnInit() {
  }

}
