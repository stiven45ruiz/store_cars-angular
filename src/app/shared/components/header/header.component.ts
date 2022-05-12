import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { CartService } from 'src/app/core/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  a:any;

  localStorageItem: any;
  parsedUser:any;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit(): void {
    this.localStorageItem = localStorage.getItem('user');
    this.parsedUser = JSON.parse(this.localStorageItem);

    this.a = document.getElementById('logout');
    this.a.onclick = this.logout();
  }
  logout() {
    console.log("logout")
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }



}
