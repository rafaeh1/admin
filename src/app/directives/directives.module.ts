import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";

import { ChosenDirective } from "./chosen/chosen.directive";


const directives = [
  ChosenDirective
];

@NgModule({ imports: [CommonModule, MaterialModule], declarations: directives, exports: directives })
export class DirectivesModule { }
