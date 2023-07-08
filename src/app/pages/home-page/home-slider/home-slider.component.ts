import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductService} from "../../../services/product.service";
import {environment} from "../../../../environments/environment";
import {ToastService} from "../../../shared/toast/toast-service";


@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit{
  products: Product[] | any;
  public env: any;

  constructor(private productService: ProductService, public toastService: ToastService) {
  }
  ngOnInit(): void {
    this.env = environment;
    this.productService.getProductsForHomeSlider().subscribe({
      next: result => {this.products = result},
      error: err => {this.toastService.show("Error: " + err, { classname: 'bg-danger text-light', delay: 15000 });}
    })
  }
}
