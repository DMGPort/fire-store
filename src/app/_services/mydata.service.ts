import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }

  productUrl: string = 'https://simplestore-2d8ff.firebaseio.com/product.json';


}
