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
    this.shirts = af.database.list('/store/T-Shirts');
    this.hoodies = af.database.list('/store/Hoodies');
    this.misc = af.database.list('/store/Misc');
   }

  storeUrl: string = 'https://simplestore-2d8ff.firebaseio.com/store';
  defaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
 
  activeList: FirebaseListObservable<Product[]>;
  shirts: FirebaseListObservable<Product[]>;
  hoodies: FirebaseListObservable<Product[]>;
  misc: FirebaseListObservable<Product[]>;
  categories: FirebaseListObservable<Categories[]>;

  public activeProduct:BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  setActiveProduct(product: Product){
    this.activeProduct.next(product);
  }

  basketList: Product[] = [];
  numberInBasket: number = 0;
  updateNumberInBasket(){
    this.numberInBasket = 0;
    for(let x = 0; x < this.basketList.length; x++){
        this.numberInBasket += this.basketList[x].qty;
    }
  }
/*---------------Active Category Start ---------------*/
  categoryName: string = "";
  public activeCategory:BehaviorSubject<Categories> = new BehaviorSubject<Categories>(null);
  setActiveCategory(category: Categories){
    this.activeCategory.next(category);
    this.categoryName = this.activeCategory.value.name;
    this.setList(this.categoryName);
  }
  setList(name){
    if(name == "Hoodies"){
      this.activeList = this.hoodies;
    }
    if(name == "T-Shirts"){
      this.activeList = this.shirts;
    }
    if(name == "Misc"){
      this.activeList = this.misc;
    }

  }
/*---------------Active Category End ---------------*/
  
/*-------------------- Search Service Start ------- */
  searchArray: Product[];
  buildSearchList(){
    this.searchArray = [];
      this.getCat()
        .subscribe(category =>{
          for(let x = 0; x < category.length ; x++ ){
            this.getProductList(category[x].name)
              .subscribe(list => {
                if(list.length > 0){
                  for(let y = 0; y < list.length ; y++ ){
                    this.searchArray.push(list[y]);
                  }
                }
              })
          }
        })
  }
  getCat(){
    return this.af.database.list('/store/categories');
  }

  getProductList(category: string){
    return this.af.database.list('/store/'+ category);
  }
/*----------------------- Search Service End ------- */


}
