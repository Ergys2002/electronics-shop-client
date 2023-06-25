import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeSliderComponent } from './pages/home-page/home-slider/home-slider.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { NewProductsComponent } from './pages/home-page/new-products/new-products.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    PaymentComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    HomeSliderComponent,
    NewProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    NgbModule,
    FontAwesomeModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
