import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';
import { MyDataService } from '../_services/mydata.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
        private httpService : HttpService,
        private myDataService: MyDataService
  ) { }

  ngOnInit() {
  }

  onSubmit(category, name, photo, price, discount, description){
    if(name.value != "" && photo.value != ""){
      if(price.value != 0 && discount.value >= 0){
        let dateAdded =  new Date();
        this.httpService.addProduct(category.value ,name.value, photo.value, price.value, discount.value, description.value, dateAdded);
          name.focus();         
          setTimeout(() => {
            name.value = null;
            photo.value = null;
            price.value = null;
            discount.value = null;
            description.value = null;
          }, 300)
      }
    }
  }

}
