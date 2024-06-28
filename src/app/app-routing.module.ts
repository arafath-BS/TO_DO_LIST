import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { TodayComponent } from './user/today/today.component';
import { UpcommingComponent } from './user/upcomming/upcomming.component';
import { SignupSigninComponent } from './user/signup-signin/signup-signin.component';
import { LandingComponent } from './user/landing/landing.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  
  {path:"today", component:TodayComponent},
  {path:"upcoming",component:UpcommingComponent},

  {path:"user",component:UserDashboardComponent,
    children:[
      {path:"landing",component:LandingComponent},
      {path:"today",component:TodayComponent},
      {path:"upcoming",component:UpcommingComponent},
    ]
  },


  {path:"sign-in",component:SignupSigninComponent},
  {path:"sign-up",component:SignupSigninComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
