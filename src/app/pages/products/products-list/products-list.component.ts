import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

  products : Product[] | any;



  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

  }


}
