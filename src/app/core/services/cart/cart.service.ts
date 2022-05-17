import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Product } from './../../models/product.model';
import { HttpClient, HttpContext} from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();


  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  addCart(product: Product, ){
    this.products = [...this.products, product];
    this.cart.next(this.products);
    console.log(this.cart)

    localStorage.setItem( 'ShopingCart', JSON.stringify(this.cart.value));

  }
}

