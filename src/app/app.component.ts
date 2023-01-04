import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'store-app';

  constructor(public cartService: CartService) { }
  ngOnInit(): void {

  }

}
