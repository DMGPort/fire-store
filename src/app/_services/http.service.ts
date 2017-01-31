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

  addProduct(name :string, photo: string, price:number, discount:number){
    const body = JSON.stringify({name: name, photo: photo, price: price, discount: discount})
    return this.http.post(this.myDataService.productUrl, body)
               .map((res: Response) => res.json())
               .subscribe();
  }

}
