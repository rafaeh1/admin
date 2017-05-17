import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from "./login-form/login-form.component";
import { ResetPasswordFormComponent } from "./reset-password-form/reset-password-form.component";

import { NotFoundComponent } from "../pages/not-found/not-found.component";

const loginRoutes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      {
        path: '', component: LoginFormComponent
      },
      {
        path: 'resetpassword', component: ResetPasswordFormComponent
      }
    ]
  },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }