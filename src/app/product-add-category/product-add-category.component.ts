import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';

@Component({
  selector: 'app-product-add-category',
  templateUrl: './product-add-category.component.html',
  styleUrls: ['./product-add-category.component.css']
})
export class ProductAddCategoryComponent implements OnInit {

  constructor(
    private httpService : HttpService
  ) { }

  ngOnInit() {
  }

  onSubmit(name, photo, description){
    if(name.value != "" && photo.value != ""){
        this.httpService.addCategory(name.value, photo.value, description.value);
          name.focus();         
          setTimeout(() => {
            name.value = null;
            photo.value = null;
            description.value = null;
          }, 300)
      
    }
  }
}
