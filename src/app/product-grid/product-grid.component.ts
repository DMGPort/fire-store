import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  products: FirebaseListObservable<Product[]>;

  constructor(
    private af: AngularFire
    ) {
    this.products = af.database.list('/product');
  }

  ngOnInit() {

  }

  toDetails(name: string){
    console.log(name);
  }

}