import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DefaultComponent } from './layout/default/default.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports:[
    DefaultComponent
  ]
})
export class SharedModule { }
