import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { UserSignUpModel } from '../../core/user/auth';
import Message from '../../utils/message';
import { UserSignupService } from '../services/user-signup/user-signup.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserSignupComponent implements OnInit {
  userSignUpModel = new UserSignUpModel();
  birthDate: string = '';

  message = new Message();

  showOrhidePassword: boolean = false;
  passwordTextBoxValue: string = 'password';

  showOrhideConfirmPassword: boolean = false;
  confirmPasswordTextBoxValue: string = 'password';

  genderHasError: boolean = false;
  errorMsg: string = '';

  passwordAndConfimPasswordIsEqual: boolean = false;

  constructor(
    public userSignUpService: UserSignupService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  validateGender(value) {
    if (value === 'default') {
      this.genderHasError = true;
    } else {
      this.genderHasError = false;
    }
  }

  closeAlert() {
    this.errorMsg = '';
  }

  validatePasswordAndConfirmPassword(value1, value2) {
    console.log(value1, value2);
    if (value1 == value2) {
      this.passwordAndConfimPasswordIsEqual = true;
    } else {
      this.passwordAndConfimPasswordIsEqual = false;
    }
    console.log(this.passwordAndConfimPasswordIsEqual);
  }

  togglePasswordEye() {
    console.log('toggle Password Clicked');
    this.showOrhidePassword = !this.showOrhidePassword;
    if (this.showOrhidePassword) {
      this.passwordTextBoxValue = 'text';
    } else {
      this.passwordTextBoxValue = 'password';
    }
  }

  toggleConfirmPasswordEye() {
    this.showOrhideConfirmPassword = !this.showOrhideConfirmPassword;
    if (this.showOrhideConfirmPassword) {
      this.confirmPasswordTextBoxValue = 'text';
    } else {
      this.confirmPasswordTextBoxValue = 'password';
    }
  }

  getDateOfBirthFormat() {
    let dob = new Date(this.userSignUpModel.dateOfBirth);
    let dd = dob.getDate();
    let mm = dob.getMonth() + 1;
    let yyyy = dob.getFullYear();
    this.birthDate = dd + '/' + mm + '/' + yyyy;
  }

  signup() {
    this.spinner.show();
    this.getDateOfBirthFormat();
    const data = {
      name: this.userSignUpModel.name,
      emailId: this.userSignUpModel.emailId,
      mobileNumber: this.userSignUpModel.mobileNumber,
      countryCode: '+91',
      dateOfBirth: this.birthDate,
      gender: this.userSignUpModel.gender,
      password: this.userSignUpModel.password,
    };
    console.log(data);
    this.userSignUpService.signUp(data).subscribe(
      (response) => {
        console.log(this.userSignUpModel.emailId);
        console.log('Response==>', response.userId);
        if (response.status) {
          // localStorage.setItem('user', JSON.stringify(this.userSignUpModel))
          localStorage.setItem('userId', response.userId);
          this.router.navigateByUrl('/verify-email');
          this.spinner.hide();
        } else {
          console.log(response);
          this.errorMsg = response.message;
          this.spinner.hide();
          this.router.navigateByUrl('/signup');
        }
      },
      (error) => {
        this.errorMsg = this.message.error;
        this.spinner.hide();
      }
    );
  }
}
