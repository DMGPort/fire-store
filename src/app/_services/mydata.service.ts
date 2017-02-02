import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../_models/product';
import { Categories } from '../_models/categories';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MyDataService {

  constructor(
        private http : Http,
        private af: AngularFire
  ) {
    //this.af.database.list('/store/categories').map(list=>list.length).subscribe(length=> this.catlength = length )        
    this.categories = af.database.list('/store/categories');
   }

  storeUrl: string = 'https://simplestore-2d8ff.firebaseio.com/store';
  defaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  products: FirebaseListObservable<Product[]>;
  categories: FirebaseListObservable<Categories[]>;
  categoryName: string = "";

  public activeProduct:BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  setActiveProduct(product: Product){
    this.activeProduct.next(product);
  }

  public activeCategory:BehaviorSubject<Categories> = new BehaviorSubject<Categories>(null);
  setActiveCategory(category: Categories){
    this.activeCategory.next(category);
    this.categoryName == this.activeCategory.value.name;
  }

  getCat(){
    return this.af.database.list('/store/categories');
  }

  getProductList(category: string){
    return this.af.database.list('/store/'+ category);
  }
  /*----------------------------- Search Service Start ------- */
  searchArray: Product[] = [];
  buildSearchList(){
      this.getCat()
        .subscribe(category =>{
        for(let x = 0; x < category.length ; x++ ){
          this.getProductList(category[x].name)
            .subscribe(list => {
              if(list.length != 0){
                this.searchArray.push(list[0]);                
              }
            })
        }
      })
  }
  /*----------------------------- Search Service End ------- */


}
