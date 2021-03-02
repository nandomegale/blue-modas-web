import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blue-modas';

  cart = JSON.parse(sessionStorage.getItem('cart'));
  cartQuantity = this.cart ? this.cart.length : 0; //se inscrever num observable

}
