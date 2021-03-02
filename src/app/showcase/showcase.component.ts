import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  products: Array<any> = [];

  cart: Array<any> = [];

  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      id: [null, Validators.required],
      price: [null, Validators.required],
      img: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      //console.log(this.products);
    })
  }

  public addToCart(product) {
    //this.cartService.addToCart(product);
    this.cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
