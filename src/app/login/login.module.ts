import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../material/material.module";

import { SharedModule } from "../shared/shared.module";
import { PagesModule } from "../pages/pages.module";
import { LoginRoutingModule } from "./login-routing.module";

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { NewPasswordFormComponent } from './new-password-form/new-password-form.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    LoginRoutingModule,
    SharedModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,
    NewPasswordFormComponent
]
})
export class LoginModule { }
