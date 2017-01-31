import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { MyDataService } from './_services/mydata.service';
import { HttpService } from './_services/http.service';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC5eoS2hvtGAmhYIo_XoQkmxgvNHtSTvbw",
      authDomain: "simplestore-2d8ff.firebaseapp.com",
      databaseURL: "https://simplestore-2d8ff.firebaseio.com/",
      storageBucket: ""
    })
  ],
  providers: [ MyDataService, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
