import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {ToastService} from "../../../shared/toast/toast-service";
import {Category} from "../../../models/category.model";

// @ts-ignore
@Component({
  selector: 'app-category-choice',
  templateUrl: './category-choice.component.html',
  styleUrls: ['./category-choice.component.css']
})

export class CategoryChoiceComponent implements OnInit{

  categories : Category[] | any;

  env: any;

  constructor(private categoryService: CategoryService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.categoryService.getListOfCategories().subscribe({
      next: result => {this.categories = result},
      error: err => {this.toastService.show("Error: " + err, { classname: 'bg-danger text-light', delay: 15000 });}
    })
  }



}
