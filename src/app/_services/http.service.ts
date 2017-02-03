import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { MyDataService } from './mydata.service';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(
    private http : Http,
    private myDataService : MyDataService
  ) { }

  addProduct(category: string, name :string, photo: string, price:number, discount:number, description: string, dateAdded){
    if(description == ''){
      description = this.myDataService.defaultDescription;
    }
    let dprice: number = price - (price * discount / 100);
    const body = JSON.stringify({name: name, photo: photo, price: +price, discount: +discount, dprice: dprice, description:description, dateAdded: dateAdded, qty:1 })
    return this.http.post(this.myDataService.storeUrl +"/"+ category +".json", body)
               .map((res: Response) => res.json())
               .subscribe();
  }
  addCategory(name :string, photo: string, description: string){
    if(description == ''){
      description = this.myDataService.defaultDescription;
    }
    const body = JSON.stringify({name: name, photo: photo, description:description})
    return this.http.post(this.myDataService.storeUrl +"/categories.json", body)
               .map((res: Response) => res.json())
               .subscribe(
                err => console.log(err),
                () => this.myDataService.buildSearchList()
      );
               
  }

}
