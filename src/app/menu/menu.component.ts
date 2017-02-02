import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MyDataService } from '../_services/mydata.service';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductAddCategoryComponent } from '../product-add-category/product-add-category.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private dialog: MdDialog,
    private myDataService: MyDataService
    ) {}

  ngOnInit() {
  }

  openAddProduct(){
    this.dialog.open(ProductAddComponent);
  }

  openAddCategory(){
    this.dialog.open(ProductAddCategoryComponent);
  }

  test(){
  }

}
