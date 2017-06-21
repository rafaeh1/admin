import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { TextMaskModule } from 'angular2-text-mask';

import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from "./company-routing.module";
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';

import { SharedModule } from "../../shared/shared.module";
import { EditPhotoComponent } from "../../shared/edit-photo/edit-photo.component";

import { CompanyGuard } from "./company-guard.service";

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    SharedModule
  ],
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyFormComponent
  ],
  entryComponents: [
    CompanyFormComponent,
    EditPhotoComponent
  ],
  providers: [
    CompanyGuard
  ]
})
export class CompanyModule { }