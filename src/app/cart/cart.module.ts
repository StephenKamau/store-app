import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { OrderSubmitedComponent } from './order-submited/order-submited.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartItemComponent,
    CartPageComponent,
    AddressFormComponent,
    OrderSubmitedComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }
