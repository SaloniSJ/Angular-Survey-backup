import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing for Components under serve-monsta-authentication
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserVerifyEmailComponent } from './user-verify-email/user-verify-email.component';
import { UserVerifyPhonenumberComponent } from './user-verify-phonenumber/user-verify-phonenumber.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { UserConfirmForgotPasswordComponent } from './user-confirm-forgot-password/user-confirm-forgot-password.component';

const authRoutes: Routes = [
  {path:'', redirectTo:'signup', pathMatch:'full'},
  {path:'signin', component: UserLoginComponent},
  {path:'signup', component : UserSignupComponent},
  {path:'verify-email', component : UserVerifyEmailComponent},
  {path:'verify-phone', component : UserVerifyPhonenumberComponent},
  {path:'forgot-password', component : UserForgotPasswordComponent},
  {path:'confirm-forgot-password', component : UserConfirmForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class ServeMonstaAuthenticationRoutingModule { }
