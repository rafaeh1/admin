import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

const components = [
  CarouselComponent,
  NavBarComponent,
  HamburgerMenuComponent
];

@NgModule({ imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule], declarations: components, exports: components })
export class SharedModule { }
