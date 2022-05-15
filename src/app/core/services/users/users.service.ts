import { Injectable } from '@angular/core';
import { HttpClient, HttpContext} from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { User } from '../../models/user.model';

import { environment } from './../../../../environments/environment'

import { Observable } from 'rxjs';
import { BYPASS_JW_TOKEN } from '../token/toke-interceptor.service';

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
    return this.http.post(`${environment.urlAPI}/signup`,user,{
      context: new HttpContext().set(BYPASS_JW_TOKEN, true),
    });
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
