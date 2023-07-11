import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthRoutingModule } from './auth-layout.routing';
// import {ButtonModule} from 'primeng/button';
// import {DropdownModule} from 'primeng/dropdown';
// import {PasswordModule} from 'primeng/password';
// import {InputTextModule} from 'primeng/inputtext';
import { LoginPageComponent } from 'src/app/features/login-page/login-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    // BrowserModule,
    // ButtonModule,
    // InputTextModule,
    // DropdownModule,
    // PasswordModule
  ],
  exports:[
  ]
})
export class AuthLayoutModule { }
