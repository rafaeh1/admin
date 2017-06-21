import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { MdDialog, MdSnackBar, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { GlobalValidator } from '../../../validators/validators';
import { masks } from "../../../validators/masks";

import { EditPhotoComponent } from "../../../shared/edit-photo/edit-photo.component";

import { CompanyService } from "../../company/company.service";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  @ViewChild('fileUpload', undefined) fileUpload: HTMLInputElement;

  public masks = masks;

  public title = "Nueva compañía";

  private busy: boolean;
  public set Busy(value: boolean) {
    if (value) {
      this.companyForm.disable();
    }
    else {
      this.companyForm.enable();
    }
    this.busy = value;
  }
  public get Busy(): boolean { return this.busy; }

  private submitted: boolean = false;

  public errorMessages = {};

  public controls = {
    name: new FormControl("", Validators.required),
    description: new FormControl(""),
    management_full_name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.compose([Validators.required, GlobalValidator.mailFormat])),
    phone: new FormControl(""),
  }
  public companyForm: FormGroup = this.fb.group(this.controls);

  public imageSrc;

  constructor(
    public dialogRef: MdDialogRef<CompanyFormComponent>,
    private fb: FormBuilder,
    public dialog: MdDialog,
    private snackBar: MdSnackBar,
    private companyService: CompanyService,
    @Inject(MD_DIALOG_DATA)
    public data: any
  ) {
    this.Busy = true;

    let promises = [];
    if (this.data && this.data.uuid) {
      this.title = "Editar compañía";
      promises.push(this.companyService.getCompany(this.data.uuid).then((companyLoaded) => {
        this.companyLoaded = companyLoaded;

        this.controls.description.setValue(companyLoaded["description"]);
        this.controls.email.setValue(companyLoaded["email"]);
        this.controls.management_full_name.setValue(companyLoaded["management_full_name"]);
        this.controls.name.setValue(companyLoaded["name"]);
        this.controls.phone.setValue(companyLoaded["phone"]);

        this.imageSrc = companyLoaded["logo"] + "?" + new Date().getTime();
      }));
    }


    Promise.all(promises).then((result) => this.Busy = false);
  }

  public companyLoaded;
  ngOnInit() {
  }

  public save() {
    if (this.Busy) return;

    this.markAsTouched(true);
    this.companyForm.updateValueAndValidity();

    let invalid = false;

    if (this.companyForm.invalid) invalid = true;
    if (!this.imageSrc) { this.handleError({ code: "LogoRequired" }); invalid = true; }

    if (invalid) return;

    this.Busy = true;

    this.submitted = true;

    let value = this.companyForm.value;
    value.logo = this.imageSrc;

    if (!this.companyLoaded)
      this.companyService.newCompany(value)
        .then((response) => {
          this.snackBar.open("Compañía creada con éxito.", undefined, { duration: 4000 });
          this.dialogRef.close(response["Item"]);
        })
        .catch((err) => this.handleError(err));
    else
      this.companyService.updateCompany(this.data.uuid, value)
        .then((response) => {
          this.snackBar.open("Compañía editada con éxito.", undefined, { duration: 4000 });
          this.dialogRef.close(response);
        })
        .catch((err) => this.handleError(err));
  }

  public cancel() {
    this.dialogRef.close();
  }

  private handleError(err) {
    if (err.code == "LogoRequired")
      this.errorMessages["logo"] = "El logo es requerido."
    this.Busy = false;
  }

  public fileChangeListener($event) {
    let file: File = $event.target.files[0];
    let fileReader: FileReader = new FileReader();

    fileReader.onloadend = (loadEvent: any) => {
      let dialogRef = this.dialog.open(EditPhotoComponent, { disableClose: true, data: { imageSrc: loadEvent.target.result } });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.errorMessages["logo"] = undefined;
          this.imageSrc = result;
        }
        this.fileUpload["nativeElement"].value = "";
      });
    };
    fileReader.readAsDataURL(file);
  }

  private markAsTouched(b: boolean) {
    for (let controlKey in this.controls) {
      if (this.controls.hasOwnProperty(controlKey)) {
        let control = this.controls[controlKey];
        control.markAsTouched(b)
      }
    }
  }



}