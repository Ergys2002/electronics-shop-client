import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) { }

  // getAllCategories() : Observable<Category[]> {
  //   return this.httpClient.get<Category[]>(environment.apiBaseUrl + "/api/products/categories")
  // }

  getCategoryById(id : string) : Observable<Category>{
    return this.httpClient.get<Category>(environment.apiBaseUrl + "/api/categories/category-by-id/" + id)
  }


  getListOfCategories() :Observable<Category[]>{
    return this.httpClient.get<Category[]>(environment.apiBaseUrl + "/api/categories/all");
  }
}
