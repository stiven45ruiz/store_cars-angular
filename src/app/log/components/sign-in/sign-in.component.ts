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
  mensajeError : any;

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
      console.log("signIn")
      event.preventDefault();
      const user = this.formSignIn.value
      console.log(user)
      this.UsersService.login(user).subscribe((res: any) => {

      this.router.navigate(['products']);
      localStorage.setItem( 'user', JSON.stringify(res))
      localStorage.setItem('auth_token', res.token);
    },err => {
      console.log(err)
      this.mensajeError = err.error;

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
