import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegiuserComponent } from './regiuser/regiuser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


console.warn("admin module loaded");
@NgModule({
  declarations: [
    RegiuserComponent,
    LoginuserComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
