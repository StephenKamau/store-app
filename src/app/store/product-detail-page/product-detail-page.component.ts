import { Component, OnInit } from '@angular/core';
import { DEFAULT_PRODUCT, Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  product: Product = DEFAULT_PRODUCT;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fetchProductById(parseInt(params['id']));
    })
  }

  fetchProductById(id: number): void {
    this.productsService.getProducts().pipe(map(products => products.filter(p => p.id === id))).subscribe(products => {
      this.product = products[0];
    });
  }

  addToCart(cart: Cart): void {
    this.cartService.save(cart.product,cart.quantity);
  }

}
