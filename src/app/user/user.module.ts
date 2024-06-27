import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupSigninComponent } from './signup-signin/signup-signin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    SignupSigninComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports:[
    SignupSigninComponent,
    UserDashboardComponent
  ]
})
export class UserModule { }
