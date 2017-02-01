import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { SearchPipe } from './product-search/search-filter.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './_app-routing/app-routing.module';

import { MyDataService } from './_services/mydata.service';
import { HttpService } from './_services/http.service';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { StoreComponent } from './store/store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { CategoriesNavComponent } from './categories-nav/categories-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    SearchPipe,
    AppComponent,
    StoreComponent,
    ProductAddComponent,
    ProductGridComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    CategoriesNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdDialogModule.forRoot(),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC5eoS2hvtGAmhYIo_XoQkmxgvNHtSTvbw",
      authDomain: "simplestore-2d8ff.firebaseapp.com",
      databaseURL: "https://simplestore-2d8ff.firebaseio.com/",
      storageBucket: ""
    })
  ],
  providers: [ MyDataService, HttpService ],
  bootstrap: [AppComponent],
  entryComponents: [ 
                      ProductAddComponent    
                      ]
})
export class AppModule { }
