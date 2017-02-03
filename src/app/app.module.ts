import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { SearchPipe } from './product-search/search-filter.pipe';

import { AppComponent } from './app.component';
import { BasketGuestService } from './_services/basket-guest.service';
import { HttpService } from './_services/http.service';
import { MyDataService } from './_services/mydata.service';
import { RoutingService } from './_app-routing/routing.service';
import { AppRoutingModule } from './_app-routing/app-routing.module';

import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { CategoriesNavComponent } from './categories-nav/categories-nav.component';
import { CategoriesNavBurgerComponent } from './categories-nav-burger/categories-nav-burger.component';
import { ProductAddCategoryComponent } from './product-add-category/product-add-category.component';
import { CategoriesGridComponent } from './categories-grid/categories-grid.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { BasketPreviewComponent } from './basket-preview/basket-preview.component';
import { BasketListComponent } from './basket-list/basket-list.component';

@NgModule({
  declarations: [
    SearchPipe,
    AppComponent,
    ProductAddComponent,
    ProductGridComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    CategoriesNavComponent,
    CategoriesNavBurgerComponent,
    ProductAddCategoryComponent,
    CategoriesGridComponent,
    LogoComponent,
    MenuComponent,
    BasketPreviewComponent,
    BasketListComponent
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
  providers: [ BasketGuestService, MyDataService, HttpService, RoutingService ],
  bootstrap: [AppComponent],
  entryComponents: [ 
                    ProductAddComponent,
                    ProductAddCategoryComponent  
                   ]
})
export class AppModule { }
