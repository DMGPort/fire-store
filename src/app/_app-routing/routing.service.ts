import { Injectable } from '@angular/core';
import { Router }   from '@angular/router';
import { Location }  from '@angular/common';

@Injectable()
export class RoutingService {

  constructor(
    private location: Location,
    private router: Router
  ) { }
  
  goHome(){
    this.router.navigate(["store/"]);
  }

  toProductGrid(category){
    this.router.navigate(["store/" + category.toLowerCase() ]);
  }

  toDetails(category){
    this.router.navigate(["/store/" + category.toLowerCase() + "/details" ]);
  }
  toBasket(){
    this.router.navigate(["basket/"]);
  }
  
  goBack(){
     this.location.back();
  }
}
