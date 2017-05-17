import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService, AuthServiceCallback } from "../../auth/auth.service";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements AuthServiceCallback, OnInit {

    private busy: boolean;
    public set Busy(value: boolean) {
        if (value) {
            this.loginForm.disable();
        }
        else {
            this.loginForm.enable();
        }
        this.busy = value;
    }
    public get Busy(): boolean { return this.busy; }

    public errorMessage: string;

    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required],
    });


    constructor(
        public fb: FormBuilder,
        public router: Router,
        public authService: AuthService
    ) { }
    ngOnInit() { }


    private doLogin(event) {
        if (this.Busy) return;
        if (this.loginForm.invalid) {
            this.errorMessage = "Todos los campos son requeridos";
            return;
        }

        this.Busy = true;
        this.authService.authenticate(this.loginForm.controls.email.value, this.loginForm.controls.password.value, this);
    }

    public authServiceCallback(result: any, errorMessage: string) {
        this.errorMessage = errorMessage;

        if (result)
            this.router.navigate([this.authService.redirectUrl ? this.authService.redirectUrl : "/main"]);
        else
            this.Busy = false;
    }

}
