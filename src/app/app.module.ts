import 'hammerjs';

/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from "./material/material.module";

/* AWS Services */
import { CognitoService } from "./aws/cognito.service";
import { AWSService } from "./aws/aws.service";

/* App Modules */
import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./login/login.module";
import { PagesModule } from "./pages/pages.module";

/* App Entities Modules */
import { UserModule } from "./entities/user/user.module";
import { CompanyModule } from "./entities/company/company.module";

/* App Services */
import { AuthService } from "./auth/auth.service";
import { ProfileService } from "./profile/profile.service";

/* App Guards */
import { AuthGuard } from "./auth/auth-guard.service";

/* App Components */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    LoginModule,
    PagesModule,
    UserModule,
    CompanyModule
  ],
  providers: [
    AWSService,
    CognitoService,
    AuthService,
    ProfileService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
