import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = [];

  constructor() { }

  save(product: Product): void {
    if (this.cart.length > 0) {
      // retrieve the cart item if the array has length > 0
      const currentCart = this.cart.filter(cart => cart.product.id === product.id)[0];
      if (currentCart !== undefined && currentCart !== null) {
        currentCart.quantity += 1;
        // filter out the item from the cart for reinsertion
        this.cart = [...this.cart.filter(cart => cart.product.id !== product.id), currentCart];
      } else {
        this.cart.push({ quantity: 1, product });
      }
    } else {
      this.cart.push({ quantity: 1, product });
    }
    console.log(this.cart);
  }

  update(cart: Cart): void {
    // filter out the item from the cart for reinsertion
    this.cart = [...this.cart.filter(c => c.product.id !== cart.product.id), cart];
    console.log(this.cart);
  }
}
