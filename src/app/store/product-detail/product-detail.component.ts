import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  @Input() product!: Product;
  @Output() addToCartEvent: EventEmitter<Cart> = new EventEmitter<Cart>();

  quantity: string = '1';

  addToCart(product: Product): void {
    this.addToCartEvent.emit({ quantity: parseInt(this.quantity), product });
    alert(`${this.quantity} ${product.name}(s) added to cart`);
  }

}
