import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSource = new Subject<any>();

  cart$ = this.cartSource.asObservable();

  constructor() { }

  addToCart(product): void {
    this.cartSource.next(product);
  }

}
