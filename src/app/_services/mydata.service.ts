import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }

  productUrl: string = 'https://simplestore-2d8ff.firebaseio.com/product.json';

  defaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
}
