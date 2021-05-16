import { Component, OnInit } from '@angular/core';

import { UserLoginModel} from '../../core/user/auth'
import { UserLoginService } from '../services/user-login/user-login.service';
import { Router } from '@angular/router';
import Message from '../../utils/message';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserForgotPasswordComponent implements OnInit {

  userSignInModel=new UserLoginModel()

  errorMsg:string=''

  message=new Message()

  constructor(
    private userLoginServive:UserLoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  closeAlert(){
    this.errorMsg=''
  }

  sendOtp(){
    const data={
      emailOrMobile:this.userSignInModel.emailOrMobile
    }
    console.log(data);
    this.userLoginServive.forgotPassword(data).subscribe(response=>{
      if(response.status){
        console.log(response)
        localStorage.setItem('userId',response.userId)
        this.router.navigateByUrl('/confirm-forgot-password');
      }
      else{
        this.errorMsg=response.error;
       console.log(response.error)
      }
    },error=>{
      this.errorMsg=this.message.error;
    })
  }

}
