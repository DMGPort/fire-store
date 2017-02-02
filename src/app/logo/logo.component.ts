import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../_app-routing/routing.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit() {
  }

  home(){
    this.routingService.goHome();
  }

}
