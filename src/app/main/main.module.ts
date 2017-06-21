import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from "./main-routing.module";

import { MainComponent } from './main.component';

import { MaterialModule } from "../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesModule } from "../pages/pages.module";
import { SharedModule } from "../shared/shared.module";

import { DataService } from "../data/data.service";
import { MainService } from "./main.service";
import { CompanyService } from "../entities/company/company.service";
import { UserService } from "../entities/user/user.service";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    PagesModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [MainComponent],
  providers: [
    DataService,
    MainService,
    CompanyService,
    UserService
  ]
})
export class MainModule { }