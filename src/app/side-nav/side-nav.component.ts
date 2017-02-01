import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MyDataService } from '../_services/mydata.service';
import { ProductAddComponent } from '../product-add/product-add.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(
    private dialog: MdDialog,
    private myDataService: MyDataService
    ) {}

  ngOnInit() {
  }

  openAddProduct(){
    this.dialog.open(ProductAddComponent);
  }

  test(){
    console.log("test");
    this.myDataService.getSearchList();
  }
}
