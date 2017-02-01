import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../_models/product';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MyDataService {

  constructor(
        private http : Http,
        private af: AngularFire
  ) {
    this.products = af.database.list('/product');
   }

  productUrl: string = 'https://simplestore-2d8ff.firebaseio.com/product.json';
  defaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  products: FirebaseListObservable<Product[]>;

  public activeProduct:BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  setActiveProduct(product: Product){
    this.activeProduct.next(product);
  }

  searchList: Product[];
  getSearchList(){
    return this.http.get(this.productUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.searchList = list;
        console.log(list);
        console.log(this.searchList);
      }) 
  }

}
