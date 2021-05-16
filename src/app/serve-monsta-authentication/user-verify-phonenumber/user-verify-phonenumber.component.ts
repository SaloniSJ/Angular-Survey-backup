import { Component, OnInit } from '@angular/core';

import { UserSignupService } from '../services/user-signup/user-signup.service'
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../core/user'
import { OtpModel } from '../../core/user/auth';

@Component({
  selector: 'app-user-verify-phonenumber',
  templateUrl: './user-verify-phonenumber.component.html',
  styleUrls: ['./user-verify-phonenumber.component.css']
})
export class UserVerifyPhonenumberComponent implements OnInit {

  private user: User;

  private userId: string

  mobileNumber: string = ''


  otpModel = new OtpModel();
  hasError: boolean = false;
  errorMsg: '';

  formInput = ['id1', 'id2', 'id3', 'id4', 'id5',];

  constructor(
    private userSignUpService: UserSignupService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId'),
      this.user = JSON.parse(localStorage.getItem('user'))
    this.mobileNumber = this.user.mobileNumber
  }
  closeAlert() {
    this.otpModel.id1 = ''
    this.otpModel.id2 = ''
    this.otpModel.id3 = ''
    this.otpModel.id4 = ''
    this.otpModel.id5 = ''
    this.errorMsg = ''
  }

  getCodeOfidBox(index) {
    return (index + 1);
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



  verifyPhone() {
    const user = {
      userId: this.userId,
      mobileNumber: this.user.mobileNumber,
      mobileOtp: `${this.otpModel.id1}${this.otpModel.id2}${this.otpModel.id3}${this.otpModel.id4}${this.otpModel.id5}`,
    }
    this.userSignUpService.verifyPhonenumber(user).subscribe(response => {
      console.log(response);
      if (response.status) this.router.navigateByUrl('/signin')
      else {
        console.log("Error====>", response)
        this.errorMsg = response.message;
      }
    }, error => {
      console.log(error)
    }
    )
  }

}
