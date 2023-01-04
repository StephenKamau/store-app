import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() addProductEvent: EventEmitter<Product> = new EventEmitter<Product>();

  addToCart(product: Product): void {
    this.addProductEvent.emit(product);
    alert(`${product.name} added to cart`);
  }

}
