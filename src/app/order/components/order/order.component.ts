import { Component, OnInit } from '@angular/core';

import { Product } from './../../../core/models/product.model'
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FormControl, FormBuilder, FormGroup,  Validators } from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  formPersonalData: FormGroup;
  products$: Observable<Product[]>;
  localStorageItem: any;
  parsedCart:any;
  totalPrice:any;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.buildForm();
    this.products$ = this.cartService.cart$ ;
    console.log(this.products$)

    this.cartService.cart$.pipe(map((products:[]) => {
      const distintos = [...new Set(products)];
      return distintos;

    }));

  }

  ngOnInit(): void {
    this.localStorageItem = localStorage.getItem('ShopingCart');
    this.parsedCart = JSON.parse(this.localStorageItem);

    console.log(this.parsedCart)


    // this.parsedCart.forEach((item)=> {

    //   console.log('Price for item',item.price)
    //   this.totalPrice += item.price

    // });

    // console.log('totalprice', this.totalPrice)

    // for (let i = 0; i < this.parsedCart.length; i++) {
    //   this.totalPrice += this.parsedCart[i].price;

    // }
    // console.log('totalprice', this.totalPrice)

    this.totalPrice = this.parsedCart
      .map(item => item.price)
      .reduce((prev, curr) => prev + curr, 0);

    console.log('totalprice', this.totalPrice)
  }


  private buildForm(){
    this.formPersonalData = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

}
