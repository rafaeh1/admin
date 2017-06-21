import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';


@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {
  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

  constructor(
    public dialogRef: MdDialogRef<EditPhotoComponent>,
    @Inject(MD_DIALOG_DATA)
    public data: any
  ) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 360;
    this.cropperSettings.height = 360;
    this.cropperSettings.croppedWidth = 360;
    this.cropperSettings.croppedHeight = 360;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;

    this.cropperSettings.fileType = "image/png";

    this.cropperSettings.noFileInput = true;
  }

  public out = {};


  public cropperSettings: CropperSettings;

  ngOnInit() {
    let image = new Image();
    image.src = this.data.imageSrc;
    setTimeout(() => { this.cropper.setImage(image); }, "500");
  }

  public done() {
    this.dialogRef.close(this.out["image"]);
  }

  public cancel() {
    this.dialogRef.close();
  }

}