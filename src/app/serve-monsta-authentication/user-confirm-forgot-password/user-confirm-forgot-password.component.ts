import { Component, OnInit } from '@angular/core';

import { UserSignupService } from '../services/user-signup/user-signup.service'
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../services/user-login/user-login.service';
import Message from '../../utils/message';
import {OtpModel} from '../../core/user/auth';

@Component({
  selector: 'app-user-confirm-forgot-password',
  templateUrl: './user-confirm-forgot-password.component.html',
  styleUrls: ['./user-confirm-forgot-password.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserConfirmForgotPasswordComponent implements OnInit {

  private user: any

  private userId: string
  hasError: boolean = false;
  errorMsg: '';

  passwordAndConfimPasswordIsEqual:boolean=false;

  otpModel = new OtpModel();

  message = new Message()

  constructor(
    private formBuilder: FormBuilder,
    private userLoginService: UserLoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
  }

  closeAlert() {
    location.reload();
  }

  validatePasswordAndConfirmPassword(value1, value2) {
    console.log(value1,value2)
    if (value1 == value2) { 
      this.passwordAndConfimPasswordIsEqual = true } else {
      this.passwordAndConfimPasswordIsEqual = false;
    }
    console.log(this.passwordAndConfimPasswordIsEqual)
  }

  keyUpEvent(event) {
    let nextInput = event.srcElement.nextElementSibling; // get the sibling element

    console.log("Next Input element========>", nextInput)
    var target = event.target || event.srcElement;
    var id = target.id
    console.log("Current Element====>", event.srcElement.value.length)
    if (event.srcElement.value.length == 1) {
      nextInput.focus();
    } else {
      event.srcElement.focus();
    }
  }

  keyDownEvent(event) {
    let prevElement = event.srcElement.previousElementSibling;
    console.log("Previous Element====>", prevElement)
    var target = event.target || event.srcElement;
    var id = target.id
    if (event.srcElement.value.length == 0) {
      prevElement.focus();
    } else {
      event.srcElement.focus();
    }
  }

  confirmForgotPassword() {
    const data = {
      userId: this.userId,
      password: this.otpModel.password,
      forgotPasswordOtp: `${this.otpModel.id1}${this.otpModel.id2}${this.otpModel.id3}${this.otpModel.id4}${this.otpModel.id5}`,
    }
    console.log(data)
    this.userLoginService.confirmForgotPassword(data).subscribe(response => {
      console.log(response);
      if (response.status) {
        this.router.navigateByUrl('/signin')
      } else {
        this.hasError = true;
        console.log("Error====>", response)
        this.errorMsg = response.message;
        //alert(response.error);
      }
      error => {
        this.hasError = true;
        console.log("Error====>", response)
        this.errorMsg = error.message;
      }
    })
  }

}
