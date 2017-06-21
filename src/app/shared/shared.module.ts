import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { ImageCropperModule } from 'ng2-img-cropper';

import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';

const components = [
  CarouselComponent,
  NavBarComponent,
  HamburgerMenuComponent,
  EditPhotoComponent
];

@NgModule({ imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule, ImageCropperModule], declarations: components, exports: components })
export class SharedModule { }
