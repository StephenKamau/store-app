import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { StoreRoutingModule } from './store-routing.module';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
