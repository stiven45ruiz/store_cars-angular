import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { User } from '../../models/user.model';

import { environment } from './../../../../environments/environment'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[]= [];
  token;
  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  newUser(user: User){
    return this.http.post(`${environment.urlAPI}/signup`, user);
  }

  login(user: User){
    return this.http.post(`${environment.urlAPI}/login`, user);
  }

  setToken(token: 'Any') {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}
