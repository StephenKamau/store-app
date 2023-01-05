import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-submited',
  templateUrl: './order-submited.component.html',
  styleUrls: ['./order-submited.component.scss']
})
export class OrderSubmitedComponent implements OnInit, OnDestroy {
  customer: string = '';
  orderTotal$: Observable<number> = new Observable<number>();
  constructor(private cartService: CartService, private router: Router) { }
  ngOnDestroy(): void {
    this.cartService.clear();
  }
  ngOnInit(): void {
    this.customer = this.cartService.getCustomer();
    this.orderTotal$ = this.cartService.getOrderTotal();
    if (!this.customer) {
      this.router.navigate(['']);
    }
  }
}
