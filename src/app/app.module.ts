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
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import {MapComponent} from "./pages/contact-us/map/map.component";
import { ContactFormComponent } from './pages/contact-us/contact-form/contact-form.component';
import { CartDropdownComponent } from './shared/header/cart-dropdown/cart-dropdown.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './shared/product/product.component';
import {ToastsContainer} from "./shared/toast/toast-container.component";
import { CategoryChoiceComponent } from './pages/products/category-choice/category-choice.component';
import { PriceIndicatorComponent } from './pages/products/price-indicator/price-indicator.component';
import {FormsModule} from "@angular/forms";




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
    ProductsListComponent,
    MapComponent,
    ContactFormComponent,
    CartDropdownComponent,
    ProductComponent,
    CategoryChoiceComponent,
    PriceIndicatorComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        NgbModule,
        FontAwesomeModule,
        NgbCarouselModule,
        HttpClientModule,
        ToastsContainer,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
