import { Component, OnInit } from '@angular/core';

import {UserSignupService} from '../services/user-signup/user-signup.service'
import {Router} from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../core/user'
import { UserVerifyEmailModel, OtpModel } from "../../core/user/auth";


@Component({
  selector: 'app-user-verify-email',
  templateUrl: './user-verify-email.component.html',
  styleUrls: ['./user-verify-email.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserVerifyEmailComponent implements OnInit {

  private user:User

  private userId:string
  emailId:string=''

  otpModel=new OtpModel();
  hasError:boolean=false;
  errorMsg:'';
  userVerifyEmailModel=new UserVerifyEmailModel()


  constructor(
    private userSignUpService:UserSignupService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem('userId'),
    this.user=JSON.parse(localStorage.getItem('user'))
    this.emailId=this.user.emailId
   
  }

  closeAlert(){
    this.otpModel.id1=''
    this.otpModel.id2=''
    this.otpModel.id3=''
    this.otpModel.id4=''
    this.otpModel.id5=''
    this.errorMsg=''
  }

  verifyEmail(){
    const data={
      userId:this.userId,
      emailOtp:`${this.otpModel.id1}${this.otpModel.id2}${this.otpModel.id3}${this.otpModel.id4}${this.otpModel.id5}`,
      emailId:this.user.emailId
    }
    console.log(data)
    this.userSignUpService.verifyEmail(data).subscribe(response=>{
      console.log(response);
      if(response.status){
        this.router.navigateByUrl('/verify-phone')
      }else{
        console.log("Error====>",response)
        this.errorMsg=response.message;
      }
    },error=>{
      console.log("Something Went Wrong")
      this.errorMsg=error.message;
    })
   }
   keyUpEvent(event){
    let nextInput = event.srcElement.nextElementSibling; // get the sibling element
   
    console.log("Next Input element========>",nextInput)
    var target = event.target || event.srcElement;
    var id = target.id
    console.log("Current Element====>", event.srcElement.value.length)
      if(event.srcElement.value.length==1){
        nextInput.focus();
      }else{
        event.srcElement.focus();
      }
}

    keyDownEvent(event){
      let prevElement= event.srcElement.previousElementSibling;
      console.log("Previous Element====>",prevElement)
      var target = event.target || event.srcElement;
      var id = target.id
      if(event.srcElement.value.length==0){
        prevElement.focus();
      }else{
        event.srcElement.focus();
      }
    }

  
}
