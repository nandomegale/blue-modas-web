import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: Array<any> = [];

  orderId: any;

  order: any = {
    client: {},
    items: []
  };

  // order: any = {
  //   id: 2,
  //   client: {
  //     name: "Luiz Fernando",
  //     email: "luiz@luiz.com",
  //     tel: "123456789"
  //   },
  //   items: [
  //     {
  //       id: 1,
  //       idProduct: 1,
  //       name: "Mochila",
  //       price: 10,
  //       quantity: 4
  //     }
  //   ]
  // }

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {

    this.getOrderId();
    this.getOrder();

  }

  getOrderId(): void {
    setTimeout(() => {
      this.orderId = sessionStorage.getItem('orderId');
    }, 1000);

  }

  getOrder(): void {
    setTimeout(() => {

      this.orderService.getOrder(this.orderId).subscribe(data => {
        this.order = data;
        this.products = this.order.items;
      })
    }, 1000);
  }

}
