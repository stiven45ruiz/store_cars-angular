import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UsersService} from '../../../core/services/users/users.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formSignUp: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private UsersService: UsersService,
    private router: Router
  ) {
    this.buildForm();

  }

  ngOnInit(): void {
  }



  signUp(event:Event){
    console.log("sign")
    event.preventDefault();
    if(this.formSignUp.valid){
      const user = this.formSignUp.value;

      this.UsersService.newUser(user)
      .subscribe((newUser) =>{
        console.log(newUser);
        this.router.navigate(['./signin']);
      });
    }
  }

  private buildForm(){
    this.formSignUp = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

}
