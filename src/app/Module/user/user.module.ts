import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordComponent } from './password/password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    PasswordComponent,
    ProfileComponent
  ]
})
export class UserModule { }
