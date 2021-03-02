import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  createOrder(order: any): any {
    return this.http.post(environment.order.orderEndPoint, order)
  }

  getOrder(orderId: any): Observable<any> {
    return this.http.get(environment.order.orderEndPoint + `/${orderId}`);
  }

}
