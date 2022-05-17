import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formContact: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }
  send(){
    console.log('mensaje enviado')
  }


  private buildForm(){
    this.formContact = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      textArea: ['',[Validators.required, Validators.minLength(30)]]

    })
  }

}
