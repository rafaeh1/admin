import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdSidenavModule,
  MdDialogModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdButtonToggleModule,
  MdSnackBarModule,
  MdProgressBarModule
} from '@angular/material';

let modules = [
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdSidenavModule,
  MdDialogModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdButtonToggleModule,
  MdSnackBarModule,
  MdProgressBarModule
];

@NgModule({ imports: modules, exports: modules })
export class MaterialModule { }
