import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  client: any;

  items: any;

  order: any;

  /*
    order: any = {
      client: {
        name: "nando",
        email: "nando@nando.com",
        tel: "123456789",
      },
      items: [{
        name: "Blusa masculina azul",
        idProduct: 5,
        price: 59.99,
        quantity: 40
      }, {
        name: "Blusa masculina",
        idProduct: 4,
        price: 49.99,
        quantity: 200
      }
      ]
    }*/

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {

    this.client = {};

    this.items = JSON.parse(sessionStorage.getItem('cart').replace(/\id/g, 'idProduct'));

  }

  sendOrder() {
    this.order = {
      client: this.client,
      items: this.items
    };
    console.log(this.order);
    this.orderService.createOrder(this.order).subscribe(resp => {
      sessionStorage.setItem('orderId', JSON.stringify(resp.id));
    });
  }

}
