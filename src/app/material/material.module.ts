import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdSidenavModule
} from '@angular/material';

let modules = [
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule,
  MdInputModule,
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdSidenavModule
];

@NgModule({ imports: modules, exports: modules })
export class MaterialModule { }
