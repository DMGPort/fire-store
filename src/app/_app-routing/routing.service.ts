import { Injectable } from '@angular/core';
import { Router }   from '@angular/router';

@Injectable()
export class RoutingService {

  constructor(
    private router: Router
  ) { }
  
  goHome(){
    this.router.navigate(["store/"]);
  }

  toProductGrid(category){
    this.router.navigate(["store/" + category ]);
  }

}
