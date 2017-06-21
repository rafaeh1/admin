import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService, AuthServiceCallback } from "../../auth/auth.service";

@Component({
  selector: 'app-new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.css']
})
export class NewPasswordFormComponent implements OnInit, AuthServiceCallback {
  public title = "Restablecer contraseña"

  private busy: boolean;
  public set Busy(value: boolean) {
    if (value) {
      this.newPasswordForm.disable();
    }
    else {
      this.newPasswordForm.enable();
    }
    this.busy = value;
  }
  public get Busy(): boolean { return this.busy; }

  public errorMessage: string;

  public newPasswordForm = this.fb.group({
    newPassword: ["", Validators.required],
    confirmPassword: ["", Validators.required],
  });

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  private newPassword(event) {
    if (this.Busy) return;
    if (this.newPasswordForm.invalid) {
      this.errorMessage = "Todos los campos son requeridos";
      return;
    }
    if (this.newPasswordForm.controls.newPassword.value != this.newPasswordForm.controls.confirmPassword.value) {
      this.errorMessage = "Las contraseñas no coinciden";
      return;
    }
    this.errorMessage = "";

    this.Busy = true;

    this.authService.newPasswordChallenge(this.newPasswordForm.controls.newPassword.value, this);
  }

  public authServiceCallback(result: any, errorMessage: string) {
    this.errorMessage = errorMessage;

    if (result)
      this.router.navigate([this.authService.redirectUrl ? this.authService.redirectUrl : "/login"]);
    else
      this.Busy = false;
  }

}