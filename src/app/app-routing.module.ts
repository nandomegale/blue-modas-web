import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { IdentificationComponent } from './identification/identification.component';
import { OrderComponent } from './order/order.component';
import { ShowcaseComponent } from './showcase/showcase.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/showcase',
    pathMatch: 'full',
  },
  {
    path: 'showcase',
    pathMatch: 'full',
    component: ShowcaseComponent
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: CartComponent
  },
  {
    path: 'identification',
    pathMatch: 'full',
    component: IdentificationComponent
  },
  {
    path: 'order',
    pathMatch: 'full',
    component: OrderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
