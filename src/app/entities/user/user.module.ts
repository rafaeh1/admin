import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserComponent } from './user.component';
import { UserRoutingModule } from "./user-routing.module";
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

import { DirectivesModule } from "../../directives/directives.module";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserFormComponent
  ],
  entryComponents: [
    UserFormComponent
  ]
})
export class UserModule { }