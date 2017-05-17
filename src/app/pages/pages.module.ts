import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';


import { WellcomeComponent } from './wellcome/wellcome.component';
import { NotFoundComponent } from './not-found/not-found.component';

const modules = [
  WellcomeComponent,
  NotFoundComponent
]

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  declarations: modules, exports: modules
})
export class PagesModule { }