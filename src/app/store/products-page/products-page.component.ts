import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => this.products = products);
  }

  addProductToCart(product: Product) {
    this.cartService.save(product, 1);
  }

}
