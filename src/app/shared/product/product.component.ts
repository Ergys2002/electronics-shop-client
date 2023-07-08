import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {environment} from "../../../environments/environment";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {ToastService} from "../toast/toast-service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  @Input() product: Product | any;

  category: Category | any;
  env: any;

  constructor(private categoryService: CategoryService, private toastService: ToastService) {
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  ngOnInit(): void {
    this.env = environment;
    this.categoryService.getCategoryById(this.product.categoryId).subscribe({
      next: result => {this.category = result},
      error: err => {this.toastService.show("Error: " + err, {classname: 'bg-danger text-light', delay: 15000});}
    })
  }





}
