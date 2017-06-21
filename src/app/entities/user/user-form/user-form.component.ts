import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { MdDialog, MdSnackBar, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { GlobalValidator } from '../../../validators/validators';

import { CompanyService } from "../../company/company.service";
import { UserService } from "../../user/user.service";
import { ProfileService } from "../../../profile/profile.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public title = "Nuevo usuario";

  private busy: boolean;
  public set Busy(value: boolean) {
    if (value) {
      this.userForm.disable();
    }
    else {
      this.userForm.enable();
      if (this.userLoaded) this.controls.email.disable();
    }
    this.busy = value;
  }
  public get Busy(): boolean { return this.busy; }

  private submitted: boolean = false;

  public userID: string;

  public errorMessages: any = {};

  public controls = {
    name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.compose([Validators.required, GlobalValidator.mailFormat])),
    role_key: new FormControl("", Validators.required),
    company_uuid: new FormControl("")
  }
  public userForm: FormGroup = this.fb.group(this.controls);

  constructor(
    private dialog: MdDialog,
    private fb: FormBuilder,
    private snackBar: MdSnackBar,
    private companyService: CompanyService,
    private userService: UserService,
    private profileService: ProfileService,
    public dialogRef: MdDialogRef<UserFormComponent>,
    @Inject(MD_DIALOG_DATA)
    public data: any
  ) {
    this.Busy = true;

    let promises = [];
    promises.push(this.profileService.GetProfile().then((profile) => { this.profile = profile; }));
    promises.push(this.companyService.getMap().then((companyMap) => { this.companyMap = companyMap; }));
    promises.push(this.userService.getAllowedRolesList().then((allowedRoles) => { this.allowedRoles = allowedRoles; }));

    if (this.data && this.data.userId) {
      this.title = "Editar usuario";
      promises.push(this.userService.getUser(this.data.userId).then((userLoaded) => {
        this.userLoaded = userLoaded;

        this.controls.email.setValue(userLoaded["email"]);
        this.controls.name.setValue(userLoaded["name"]);
        this.controls.last_name.setValue(userLoaded["last_name"]);

        this.controls.role_key.setValue(userLoaded["role_key"]);

        this.controls.company_uuid.setValue(userLoaded["company_key"]);
        // ToDo: asignar hoteles a chosen;
      }));
    }

    Promise.all(promises).then((result) => {
      this.controls.company_uuid.setValue(this.profile.company_key);

      this.Busy = false
    });
  }
  public showCompany = true;
  private profile;
  public userLoaded;
  ngOnInit() {
  }

  public save() {
    if (this.Busy) return;
    this.markAsTouched(true);
    let invalid = false;

    this.userForm.updateValueAndValidity();
    if (this.userForm.invalid) invalid = true;;
    this.errorMessages.hotels = undefined;
    if (this.controls.role_key.value == "CO_manager" || this.controls.role_key.value == "CO_concierge") {
      if (!this.hotel_uuid || this.hotel_uuid.length == 0) {
        this.errorMessages.hotels = "error";
        invalid = true;
      }
    }
    if (invalid) return;

    // this.Busy = true;
    this.submitted = true;

    let value = this.userForm.value;
    value.hotel_uuid = this.hotel_uuid;

    console.log("value", value);


    if (!this.userLoaded)
      this.userService.newUser(value)
        .then((response) => {
          this.snackBar.open("Usuario creado con éxito.", undefined, { duration: 4000 });
          this.dialogRef.close(response);
        })
        .catch((err) => this.handleError(err));
    else
      this.userService.updateUser(value)
        .then((response) => {
          this.snackBar.open("Usuario editado con éxito.", undefined, { duration: 4000 });
          this.dialogRef.close(response);
        })
        .catch((err) => this.handleError(err));
  }

  public cancel() {
    this.dialogRef.close();
  }

  private handleError(err) {
    if (err.code == "UsernameExistsException")
      this.errorMessages["email"] = "La cuenta de usuario ya existe."
    this.Busy = false;
  }

  public allowedRoles = [];


  public companyMap: any = {};

  public typeChange() {
    for (let controlName in this.controls) {
      if (this.controls.hasOwnProperty(controlName)) {
        let required = this.userRequires[this.controls.role_key.value][controlName];
        if (required != undefined) {
          if (required)
            this.controls[controlName].setValidators(Validators.required);
          else
            this.controls[controlName].clearValidators();
        }
      }
    }

    if (this.controls.role_key.value == "HG_admin") {
      this.controls.company_uuid.reset("");
      this.company_keyChange();
    }

    this.userForm.updateValueAndValidity();
  }
  public company_keyChangeEventEmitter = new EventEmitter();
  public company_keyChange() {
    this.company_keyChangeEventEmitter.emit();
  }

  private hotel_uuid = [];
  public hotels_keysChangue(event) {
    this.hotel_uuid = event;
    this.errorMessages.hotels = undefined;
  }

  private userRequires = {
    HG_admin: {
      company_uuid: false,
      hotel_uuid: false
    },
    CO_admin: {
      company_uuid: true,
      hotel_uuid: false
    },
    CO_manager: {
      company_uuid: true,
      hotel_uuid: true
    },
    CO_concierge: {
      company_uuid: true,
      hotel_uuid: true
    }
  }


  public showControl(controlName: string) {
    if (this.controls.role_key.value == "") return false;
    if (controlName == "company_uuid" && this.profile.role_key != "HG_admin") return false;
    return this.userRequires[this.controls.role_key.value][controlName];
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