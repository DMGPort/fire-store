import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
        private httpService : HttpService
  ) { }

  ngOnInit() {
  }

  onSubmit(name, photo, price, discount){
    if(name.value != "" && photo.value != ""){
      if(price.value != 0 && discount.value >= 0){
        this.httpService.addProduct(name.value, photo.value, price.value, discount.value);
          setTimeout(() => {
            name.value = "";
            photo.value = "";
            name.focus();
          }, 300)
      }
    }

  }
}
