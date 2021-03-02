import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  subscription: Subscription;
  cart: Array<any>;

  constructor(
    private cartService: CartService

  ) {

  }

  ngOnInit(): void {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
  }

  subscriptions(): void {
    this.subscription = this.cartService.cart$.subscribe(
      data => {
        console.log(data);
      }
    )
  }

  confirmOrder(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cart))
  }

}
