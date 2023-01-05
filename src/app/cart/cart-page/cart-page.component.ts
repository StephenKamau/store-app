import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/Address';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart: Cart[] = [];
  total$: Observable<number> = new Observable<number>();

  constructor(private cartService: CartService, private router: Router) { }
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(cart => this.cart = cart);
    this.total$ = this.cartService.getOrderTotal();
  }

  updateCart(cart: Cart): void {
    this.cartService.update(cart);
    // update cart
    this.cartService.getCartItems().subscribe(cart => { this.cart = cart; this.total$ = this.cartService.getOrderTotal() });
  }

  placeOrder(address: Address): void {
    this.cartService.addAddress(address);
    this.router.navigate(['/cart/success'],);
  }

}
