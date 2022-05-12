import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  localStorageItem: any;
  parsedUser:any;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();

    this.localStorageItem = localStorage.getItem('user');
    this.parsedUser = JSON.parse(this.localStorageItem);

    console.log("localS ",this.parsedUser)
  }



  clickProduct(id: string) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products =>{
      this.products = products;
    });
  }

}
