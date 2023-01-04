import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart: Cart[] = [];

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(cart => this.cart = cart);
  }

  updateCart(cart: Cart): void {
    this.cartService.update(cart);
    // update cart
    this.cartService.getCartItems().subscribe(cart => this.cart = cart);
  }

}
