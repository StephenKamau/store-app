import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cart!: Cart;
  @Output() cartUpdateEvent: EventEmitter<Cart> = new EventEmitter<Cart>();

  quantity: number = 1;

  ngOnInit(): void {
    this.quantity = this.cart.quantity;
  }

  updateCart(cart: Cart) :void{
    cart.quantity = this.quantity;
    this.cartUpdateEvent.emit(cart);
  }

  updateCartWithQuantity(quantity: number, cart: Cart):void {
    cart.quantity = quantity;
    this.cartUpdateEvent.emit(cart);
  }
}
