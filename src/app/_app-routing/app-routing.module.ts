import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CategoriesGridComponent } from '../categories-grid/categories-grid.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';

const routes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', component: CategoriesGridComponent },
    { path: 'store/:category', component: ProductGridComponent },
    { path: 'store/:category/details', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
