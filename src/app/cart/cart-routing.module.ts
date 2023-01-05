import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderSubmitedComponent } from './order-submited/order-submited.component';

const routes: Routes = [
  { path: '', component: CartPageComponent },
  { path: 'success', component: OrderSubmitedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
