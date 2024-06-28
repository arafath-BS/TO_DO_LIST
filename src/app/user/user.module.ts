import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupSigninComponent } from './signup-signin/signup-signin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { TodayComponent } from './today/today.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SignupSigninComponent,
    UserDashboardComponent,
    SidebarComponent,
    UpcommingComponent,
    TodayComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ]
  ,
  exports:[
    SignupSigninComponent,
    UserDashboardComponent
  ]
})
export class UserModule { }
