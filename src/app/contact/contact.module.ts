import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContactComponent} from './components/contact.component';

import {ContactRoutingModule} from './contact-routing.module';
import { SharedModule} from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    ContactRoutingModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ContactModule { }
