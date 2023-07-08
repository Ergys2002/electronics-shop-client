import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product.model";
import {environment} from "../../../../environments/environment";
import {ToastService} from "../../../shared/toast/toast-service";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../models/category.model";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit{

  products : Product[] | any;
  //product : Product |any;
  public env: any;

  constructor(private productService: ProductService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.env = environment;
    this.productService.getProductsForNewestSection().subscribe({
      next: result => {this.products = result},
      error: err => {this.toastService.show("Error: " + err, { classname: 'bg-danger text-light', delay: 15000 });}
    })
  }



}
