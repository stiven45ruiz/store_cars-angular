import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user.model';

import { environment } from './../../../../environments/environment'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[]= [];

  constructor(
    private http: HttpClient
  ) { }

  newUser(user: User){
    return this.http.post(`${environment.urlAPI}/user`, user);
  }
}
