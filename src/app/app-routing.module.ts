import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ROUTES, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {CartComponent} from "./pages/cart/cart.component";
import {LoginComponent} from "./pages/login/login.component";
import {PaymentComponent} from "./pages/payment/payment.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {ProductsComponent} from "./pages/products/products.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component:HomePageComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'sign-up', component: SignUpComponent},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
