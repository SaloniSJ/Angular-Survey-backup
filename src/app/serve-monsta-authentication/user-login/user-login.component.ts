import { Component, OnInit } from '@angular/core';
import {UserLoginService} from '../services/user-login/user-login.service'

import {Router} from '@angular/router'
import { ViewEncapsulation } from '@angular/core';
import Message from '../../utils/message'
import { NgxSpinnerService } from 'ngx-spinner'
import {UserLoginModel} from '../../core/user/auth'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserLoginComponent implements OnInit {

  userSignInModel=new UserLoginModel();
  message=new Message();
  hasError:boolean=false;
  errorMsg:string='';

  showOrhidePassword: boolean = false;
  passwordTextBoxValue:string='password';

  constructor(
    private userLoginService:UserLoginService,
    private router:Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  togglePasswordEye(){
    this.showOrhidePassword=!this.showOrhidePassword;
    if(this.showOrhidePassword){
      this.passwordTextBoxValue='text'
    }else{this.passwordTextBoxValue='password'}
  }

  closeAlert(){
    this.errorMsg='';
  }

  signin(){
    this.spinner.show()
    console.log("User data===>",this.userSignInModel)
    this.userLoginService.signIn(this.userSignInModel).subscribe(
      response=>{
        console.log(response);
        if(response.status){
        localStorage.setItem('userId',response.userid);
        localStorage.setItem('access_token',response.token)
        this.spinner.hide();
        this.router.navigateByUrl('survey/dashboard')
        }else{
          this.hasError=true;
          console.log("Error====>",response)
          this.spinner.hide();
          this.errorMsg=response.message;
          //alert(response.error);
        }
  },error=>{
    this.spinner.hide();
    this.errorMsg==this.message.error
  })
}
}
