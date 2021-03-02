import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  products: Array<any> = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    //this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      // console.log(this.products)
    });
  }


}
