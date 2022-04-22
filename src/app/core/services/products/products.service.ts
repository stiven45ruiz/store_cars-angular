import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';

import { environment } from './../../../../environments/environment'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[]= [];

  constructor(
    private http: HttpClient){}


  getAllProducts():Observable<any>{
    console.log(`${environment.urlAPI}/products`)
    return this.http.get<Product[]>(`${environment.urlAPI}/products`);
  }
  getProduct(id: string){
    return this.http.get<Product[]>(`${environment.urlAPI}/products/${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.urlAPI}/product`, product);
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.urlAPI}/products/${id}`, {changes});
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.urlAPI}/products/${id}`);
  }
}
