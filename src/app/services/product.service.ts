import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {environment} from "../../environments/environment";
import {CategoryService} from "./category.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductsForHomeSlider() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(environment.apiBaseUrl + "/api/products/on-sale")
  }

  getProductsForNewestSection() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(environment.apiBaseUrl + "/api/products/newest")
  }

}
