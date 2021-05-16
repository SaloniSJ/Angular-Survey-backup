import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserModule } from '@angular/platform-browser'
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServeMonstaAuthenticationRoutingModule } from './serve-monsta-authentication-routing.module';

// Components under Serve-monsta-authentication
import { UserSignupComponent } from './user-signup/user-signup.component'
import { UserLoginComponent } from './user-login/user-login.component'
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component'
import { UserVerifyEmailComponent } from './user-verify-email/user-verify-email.component'
import { UserVerifyPhonenumberComponent } from './user-verify-phonenumber/user-verify-phonenumber.component'
import { UserConfirmForgotPasswordComponent } from './user-confirm-forgot-password/user-confirm-forgot-password.component'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent,
    UserVerifyEmailComponent,
    UserVerifyPhonenumberComponent,
    UserForgotPasswordComponent,
    UserConfirmForgotPasswordComponent,
  ],
  exports: [
    UserLoginComponent,
    UserSignupComponent,
    UserVerifyEmailComponent,
    UserVerifyPhonenumberComponent,
    UserForgotPasswordComponent,
    UserConfirmForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ServeMonstaAuthenticationRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    NgxSpinnerModule
  ],
  providers:[
  ]
})
export class ServeMonstaAuthenticationModule { }
