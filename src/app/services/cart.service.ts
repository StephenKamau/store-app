import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart[] = [];

  private STORE_KEY = 'cart';

  cartItemQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  getCartItems(): Observable<Cart[]> {
    if (localStorage.getItem(this.STORE_KEY)) {
      this.cart = JSON.parse(localStorage.getItem(this.STORE_KEY)!);
    }
    return of(this.cart);
  }

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
    this.cartItemQuantity$.next(this.cart.length);
    localStorage.setItem(this.STORE_KEY, JSON.stringify(this.cart));
  }

  update(cart: Cart): void {
    // filter out the item from the cart for reinsertion
    if (cart.quantity < 1) {
      this.cart = [...this.cart.filter(c => c.product.id !== cart.product.id)];
    }
    if (cart.quantity > 0) {
      this.cart = [...this.cart.filter(c => c.product.id !== cart.product.id), cart];
    }
    localStorage.setItem(this.STORE_KEY, JSON.stringify(this.cart));
    this.cartItemQuantity$.next(this.cart.length);
  }
}
