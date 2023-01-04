import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = [];

  constructor() { }

  save(product: Product, quantity: number): void {
    if (this.cart.length > 0) {
      // retrieve the cart item if the array has length > 0
      const currentCart = this.cart.filter(cart => cart.product.id === product.id)[0];
      if (currentCart !== undefined && currentCart !== null) {
        currentCart.quantity += quantity;
        // filter out the item from the cart for reinsertion
        this.cart = [...this.cart.filter(cart => cart.product.id !== product.id), currentCart];
      } else {
        this.cart.push({ quantity: quantity, product });
      }
    } else {
      this.cart.push({ quantity: quantity, product });
    }
  }

  update(cart: Cart): void {
    // filter out the item from the cart for reinsertion
    this.cart = [...this.cart.filter(c => c.product.id !== cart.product.id), cart];
  }
}
