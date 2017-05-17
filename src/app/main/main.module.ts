import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from "./main-routing.module";

import { MainComponent } from './main.component';

import { MaterialModule } from "../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesModule } from "../pages/pages.module";
import { SharedModule } from "../shared/shared.module";

import { MainService } from "./main.service";

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
  providers: [MainService]
})
export class MainModule { }