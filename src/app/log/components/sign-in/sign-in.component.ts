import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {UsersService} from '../../../core/services/users/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  formSignIn: FormGroup;
  emailField: FormControl;
  passwordField: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private UsersService: UsersService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {

  }
  signIn(event:Event){
      const user = this.formSignIn.value
      this.UsersService.login(user).subscribe((res: any) => {
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', res.token);
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }


  private buildForm(){
    this.formSignIn = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }
}
