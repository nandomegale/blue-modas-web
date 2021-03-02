import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { IdentificationComponent } from './identification/identification.component';
import { OrderComponent } from './order/order.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    IdentificationComponent,
    OrderComponent,
    ShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
