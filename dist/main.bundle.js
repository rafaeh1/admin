webpackJsonp([2,6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var _this = this;
        var promise = this.authService.isLoggedIn();
        promise.then(function (isLoggedIn) {
            if (isLoggedIn)
                return;
            _this.authService.redirectUrl = url;
            _this.router.navigate(['/login']);
        });
        return promise;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyComponent = (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__(267),
        styles: [__webpack_require__(248)]
    }),
    __metadata("design:paramtypes", [])
], CompanyComponent);

//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_routing_module__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__company_routing_module__["a" /* CompanyRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__company_component__["a" /* CompanyComponent */]]
    })
], CompanyModule);

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_validators__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_company_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserFormComponent = (function () {
    function UserFormComponent(dialog, fb, companyService, userService) {
        var _this = this;
        this.dialog = dialog;
        this.fb = fb;
        this.companyService = companyService;
        this.userService = userService;
        this.title = "Nuevo usuario";
        this.submitted = false;
        this.controls = {
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            last_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_validators__["a" /* GlobalValidator */].mailFormat])),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            company_key: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](""),
            group_key: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](""),
            hotel_key: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](""),
        };
        this.userForm = this.fb.group(this.controls);
        this.allowedRoles = [];
        this.companyMap = {};
        this.userRequires = {
            HG_admin: {
                company_key: false,
                group_key: false,
                hotel_key: false
            },
            CO_admin: {
                company_key: true,
                group_key: false,
                hotel_key: false
            },
            CO_manager: {
                company_key: true,
                group_key: true,
                hotel_key: true
            },
            CO_concierge: {
                company_key: true,
                group_key: true,
                hotel_key: true
            }
        };
        this.Busy = true;
        var promises = [];
        promises.push(this.companyService.getMap().then(function (companyMap) { _this.companyMap = companyMap; }));
        promises.push(this.userService.getAllowedRolesList().then(function (allowedRoles) { _this.allowedRoles = allowedRoles; }));
        Promise.all(promises).then(function (result) { return _this.Busy = false; });
    }
    Object.defineProperty(UserFormComponent.prototype, "Busy", {
        get: function () { return this.busy; },
        set: function (value) {
            if (value) {
                this.userForm.disable();
            }
            else {
                this.userForm.enable();
            }
            this.busy = value;
        },
        enumerable: true,
        configurable: true
    });
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.save = function () {
        if (this.Busy)
            return;
        this.markAsTouched(true);
        this.userForm.updateValueAndValidity();
        if (this.userForm.invalid)
            return;
        this.Busy = true;
        this.submitted = true;
        console.log("save");
        this.userService.newUserR();
    };
    UserFormComponent.prototype.cancel = function () {
        this.dialog.closeAll();
    };
    UserFormComponent.prototype.handleError = function () {
    };
    UserFormComponent.prototype.typeChange = function () {
        for (var controlName in this.controls) {
            if (this.controls.hasOwnProperty(controlName)) {
                var required = this.userRequires[this.controls.type.value][controlName];
                if (required != undefined) {
                    if (required)
                        this.controls[controlName].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
                    else
                        this.controls[controlName].clearValidators();
                }
            }
        }
        if (this.controls.type.value == "HG_admin") {
            this.controls.company_key.reset("");
            this.company_keyChange();
        }
        if (this.controls.type.value == "CO_admin") {
            this.controls.group_key.reset("");
            this.group_keyChange();
        }
        this.userForm.updateValueAndValidity();
    };
    UserFormComponent.prototype.company_keyChange = function () {
        this.controls.group_key.reset("");
        this.group_keyChange();
    };
    UserFormComponent.prototype.group_keyChange = function () {
        this.controls.hotel_key.reset("");
    };
    UserFormComponent.prototype.showControl = function (controlName) {
        if (this.controls.type.value == "")
            return false;
        return this.userRequires[this.controls.type.value][controlName];
    };
    UserFormComponent.prototype.markAsTouched = function (b) {
        for (var controlKey in this.controls) {
            if (this.controls.hasOwnProperty(controlKey)) {
                var control = this.controls[controlKey];
                control.markAsTouched(b);
            }
        }
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-user-form',
        template: __webpack_require__(268),
        styles: [__webpack_require__(249)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], UserFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_form_user_form_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(dialog) {
        this.dialog = dialog;
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.new = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__user_form_user_form_component__["a" /* UserFormComponent */], { disableClose: true });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__(269),
        styles: [__webpack_require__(250)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_routing_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_form_user_form_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__user_routing_module__["a" /* UserRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_form_user_form_component__["a" /* UserFormComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__user_form_user_form_component__["a" /* UserFormComponent */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.loginForm = this.fb.group({
            email: ["sergio.garcia@happyguest.mx", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ["HappyGuest2017*", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
        });
    }
    Object.defineProperty(LoginFormComponent.prototype, "Busy", {
        get: function () { return this.busy; },
        set: function (value) {
            if (value) {
                this.loginForm.disable();
            }
            else {
                this.loginForm.enable();
            }
            this.busy = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.doLogin = function (event) {
        if (this.Busy)
            return;
        if (this.loginForm.invalid) {
            this.errorMessage = "Todos los campos son requeridos";
            return;
        }
        this.Busy = true;
        this.authService.authenticate(this.loginForm.controls.email.value, this.loginForm.controls.password.value, this);
    };
    LoginFormComponent.prototype.authServiceCallback = function (result, errorMessage) {
        this.errorMessage = errorMessage;
        if (result)
            this.router.navigate([this.authService.redirectUrl ? this.authService.redirectUrl : "/main"]);
        else
            this.Busy = false;
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__(271),
        styles: [__webpack_require__(252)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], LoginFormComponent);

var _a, _b, _c;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(272),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_routing_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_form_login_form_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reset_password_form_reset_password_form_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_password_form_new_password_form_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__login_routing_module__["a" /* LoginRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__reset_password_form_reset_password_form_component__["a" /* ResetPasswordFormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__new_password_form_new_password_form_component__["a" /* NewPasswordFormComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPasswordFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPasswordFormComponent = (function () {
    function NewPasswordFormComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.title = "Restablecer contraseña";
        this.newPasswordForm = this.fb.group({
            newPassword: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            confirmPassword: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
        });
    }
    Object.defineProperty(NewPasswordFormComponent.prototype, "Busy", {
        get: function () { return this.busy; },
        set: function (value) {
            if (value) {
                this.newPasswordForm.disable();
            }
            else {
                this.newPasswordForm.enable();
            }
            this.busy = value;
        },
        enumerable: true,
        configurable: true
    });
    NewPasswordFormComponent.prototype.ngOnInit = function () {
    };
    NewPasswordFormComponent.prototype.newPassword = function (event) {
        if (this.Busy)
            return;
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
    };
    NewPasswordFormComponent.prototype.authServiceCallback = function (result, errorMessage) {
        this.errorMessage = errorMessage;
        if (result)
            this.router.navigate([this.authService.redirectUrl ? this.authService.redirectUrl : "/login"]);
        else
            this.Busy = false;
    };
    return NewPasswordFormComponent;
}());
NewPasswordFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-new-password-form',
        template: __webpack_require__(273),
        styles: [__webpack_require__(254)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], NewPasswordFormComponent);

var _a, _b, _c;
//# sourceMappingURL=new-password-form.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetPasswordFormComponent = (function () {
    function ResetPasswordFormComponent() {
    }
    ResetPasswordFormComponent.prototype.ngOnInit = function () {
    };
    return ResetPasswordFormComponent;
}());
ResetPasswordFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-reset-password-form',
        template: __webpack_require__(274),
        styles: [__webpack_require__(255)]
    }),
    __metadata("design:paramtypes", [])
], ResetPasswordFormComponent);

//# sourceMappingURL=reset-password-form.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__(275),
        styles: [__webpack_require__(256)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aws_cognito_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = (function () {
    function ProfileService(cognitoService) {
        this.cognitoService = cognitoService;
        this.profile = undefined;
    }
    ProfileService.prototype.refreshProfile = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cognitoService.getUserAttributes().then(function (result) {
                _this.profile = {};
                result.forEach(function (element) {
                    var key = element.Name;
                    switch (key) {
                        case "custom:name":
                            {
                                _this.profile.name = element.Value;
                            }
                            break;
                        case "custom:lastName":
                            {
                                _this.profile.lastName = element.Value;
                            }
                            break;
                    }
                });
                resolve(_this.profile);
            }, function (error) {
                console.error(error);
                reject(error);
            });
        });
    };
    ProfileService.prototype.subscribe = function (f) {
        var _this = this;
        if (this.profile != undefined)
            f.call(undefined, this.profile);
        else {
            this.refreshProfile()
                .then(function () { f.call(undefined, _this.profile); })
                .catch(function () { f.call(undefined, undefined); });
        }
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__aws_cognito_service__["a" /* CognitoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__aws_cognito_service__["a" /* CognitoService */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.36154bbec560611d7ace.png";

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/entities/company/company.module": [
		104
	],
	"app/entities/user/user.module": [
		107
	],
	"app/login/login.module": [
		110
	],
	"app/main/main.module": [
		333,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 148;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(43);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DataService = (function () {
    function DataService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    DataService.prototype.list = function (url, params, headers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.getSession().then(function (session) {
                console.log("session", session.refreshToken.token);
                // if (!headers) headers = new Headers();
                // headers.set("token", session);
                // this.http.get("environment.url" + url, { search: params, headers: headers })
                //     .map(response => { response.json(); resolve(response) });
                resolve([
                    { key: "HG_admin", name: "SuperAdmin" },
                    { key: "CO_admin", name: "Administrador" },
                    { key: "CO_manager", name: "Gerente" },
                    { key: "CO_concierge", name: "Concierge" }
                ]);
            });
        });
    };
    // https://wld60e999j.execute-api.us-west-2.amazonaws.com/users/signup
    // {
    //   "email": "rafah.larios@gmail.com",
    //   "password": "123456",
    //   "name": "Rafael",
    //   "last_name": "Hernandez"
    // }
    DataService.prototype.UserR = function () {
        // this.http.get("https://wld60e999j.execute-api.us-west-2.amazonaws.com/users/signup", { search: params, headers: headers })
        //     .map(response => { response.json(); resolve(response) });
        console.log("UserR");
        var observable = this.http.post("https://cf20ke2wm7.execute-api.us-west-2.amazonaws.com/HappyGuestDev/%7Busers+%7D", {
            "email": "rafael.hernandez@happyguest.mx",
            "password": "HappyGuest2017*",
            "name": "Sergio",
            "last_name": "Garcia"
        })
            .toPromise()
            .then(function (response) { console.log("response", response.json()); })
            .catch(function (err) { console.log("response", err); });
        //         observable.do((d) => {
        //             console.log("do", d);
        //         });
        // return this.http.get(this.heroesUrl)
        //            .toPromise()
        //            .then(response => response.json().data as Hero[])
        //            .catch(this.handleError);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyService = (function () {
    function CompanyService() {
    }
    CompanyService.prototype.getMap = function () {
        return new Promise(function (resolve, reject) {
            resolve({
                companies: [
                    { key: "C1", name: "Compañia 1" },
                    { key: "C2", name: "Compañia 2" },
                ],
                groups: {
                    C1: [
                        { key: "G1", name: "Grupo 1" },
                        { key: "G2", name: "Grupo 2" },
                        { key: "G3", name: "Grupo 3" },
                        { key: "G4", name: "Grupo 4" }
                    ],
                    C2: [
                        { key: "G5", name: "Grupo 5" },
                        { key: "G6", name: "Grupo 6" },
                        { key: "G7", name: "Grupo 7" },
                        { key: "G8", name: "Grupo 8" }
                    ]
                },
                hotels: {
                    G1: [
                        { key: "H1", name: "Hotel 1" },
                        { key: "H2", name: "Hotel 2" },
                        { key: "H3", name: "Hotel 3" },
                        { key: "H4", name: "Hotel 4" }
                    ],
                    G2: [
                        { key: "H5", name: "Hotel 5" },
                        { key: "H6", name: "Hotel 6" },
                        { key: "H7", name: "Hotel 7" },
                        { key: "H8", name: "Hotel 8" }
                    ],
                    G3: [
                        { key: "H9", name: "Hotel 9" },
                        { key: "H10", name: "Hotel 10" },
                        { key: "H11", name: "Hotel 11" },
                        { key: "H12", name: "Hotel 12" }
                    ],
                    G4: [
                        { key: "H13", name: "Hotel 32" },
                        { key: "H14", name: "Hotel 14" },
                        { key: "H15", name: "Hotel 15" },
                        { key: "H16", name: "Hotel 16" }
                    ],
                    G5: [
                        { key: "H17", name: "Hotel 17" },
                        { key: "H18", name: "Hotel 18" },
                        { key: "H19", name: "Hotel 19" },
                        { key: "H20", name: "Hotel 20" }
                    ],
                    G6: [
                        { key: "H21", name: "Hotel 21" },
                        { key: "H22", name: "Hotel 22" },
                        { key: "H23", name: "Hotel 23" },
                        { key: "H24", name: "Hotel 24" }
                    ],
                    G7: [
                        { key: "H25", name: "Hotel 25" },
                        { key: "H26", name: "Hotel 25" },
                        { key: "H27", name: "Hotel 27" },
                        { key: "H28", name: "Hotel 28" }
                    ],
                    G8: [
                        { key: "H29", name: "Hotel 29" },
                        { key: "H30", name: "Hotel 30" },
                        { key: "H31", name: "Hotel 31" },
                        { key: "H32", name: "Hotel 32" }
                    ],
                }
            });
        });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CompanyService);

//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(dataService) {
        this.dataService = dataService;
    }
    UserService.prototype.getAllowedRolesList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataService.list("").then(function (response) {
                resolve(response);
            });
        });
    };
    UserService.prototype.newUserR = function () {
        this.dataService.UserR();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainService = (function () {
    function MainService() {
        this.heroesUrl = 'api/heroes'; // URL to web api
    }
    MainService.prototype.getHamburgerMenuNavs = function () {
        return new Promise(function (resolve, reject) {
            resolve([
                { name: "Usuarios", uri: "/admin/users" },
                { name: "Compañias", uri: "/admin/companies" },
                { name: "Grupos", uri: "/admin/groups" },
                { name: "Hoteles", uri: "/admin/hotels" },
            ]);
        });
    };
    MainService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return MainService;
}());
MainService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MainService);

//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WellcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WellcomeComponent = (function () {
    function WellcomeComponent() {
    }
    WellcomeComponent.prototype.ngOnInit = function () {
    };
    return WellcomeComponent;
}());
WellcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-wellcome',
        template: __webpack_require__(276),
        styles: [__webpack_require__(257)]
    }),
    __metadata("design:paramtypes", [])
], WellcomeComponent);

//# sourceMappingURL=wellcome.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hamburger_menu_hamburger_menu_component__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var components = [
    __WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__["a" /* CarouselComponent */],
    __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
    __WEBPACK_IMPORTED_MODULE_7__hamburger_menu_hamburger_menu_component__["a" /* HamburgerMenuComponent */]
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]], declarations: components, exports: components })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* App Guards */

var appRoutes = [
    {
        path: "login",
        loadChildren: 'app/login/login.module#LoginModule',
    },
    {
        path: "admin",
        loadChildren: 'app/main/main.module#MainModule',
        canLoad: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: "", redirectTo: "/admin", pathMatch: 'full' },
    { path: "main", redirectTo: "/admin", pathMatch: 'full' },
    { path: "home", redirectTo: "/admin", pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(266),
        styles: [__webpack_require__(247)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aws_cognito_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aws_aws_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pages_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__entities_user_user_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__entities_company_company_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/* Angular Modules */







/* AWS Services */


/* App Modules */



/* App Entities Modules */


/* App Services */


/* App Guards */

/* App Components */

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_module__["LoginModule"],
            __WEBPACK_IMPORTED_MODULE_12__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_13__entities_user_user_module__["UserModule"],
            __WEBPACK_IMPORTED_MODULE_14__entities_company_company_module__["CompanyModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__aws_aws_service__["a" /* AWSService */],
            __WEBPACK_IMPORTED_MODULE_8__aws_cognito_service__["a" /* CognitoService */],
            __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginErrorMensajes; });
var LoginErrorMensajes = {
    "User does not exist.": "El usuario no existe.",
    "Incorrect username or password.": "Contraseña incorrecta.",
    "User is disabled": "El usuario está deshabilitado.",
    "Password does not conform to policy: Password not long enough": "El password debe de contener mínimo 8 caracteres",
    "Password does not conform to policy: Password must have lowercase characters": "El password debe de contener al menos una minuscula",
    "Password does not conform to policy: Password must have uppercase characters": "El password debe de contener al menos una mayuscula",
    "Password does not conform to policy: Password must have numeric characters": "El password debe de contener al menos un numero",
    "Password does not conform to policy: Password must have symbol characters": "El password debe de contener al menos un simbolo"
};
//# sourceMappingURL=auth.const.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var companyRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__company_component__["a" /* CompanyComponent */]
    }
];
var CompanyRoutingModule = (function () {
    function CompanyRoutingModule() {
    }
    return CompanyRoutingModule;
}());
CompanyRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(companyRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], CompanyRoutingModule);

//# sourceMappingURL=company-routing.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var userRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__["a" /* UserListComponent */],
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(userRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], UserRoutingModule);

//# sourceMappingURL=user-routing.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__(270),
        styles: [__webpack_require__(251)]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_form_login_form_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_form_reset_password_form_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_password_form_new_password_form_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_not_found_not_found_component__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var loginRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */],
        children: [
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_form_login_form_component__["a" /* LoginFormComponent */]
            },
            {
                path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_4__reset_password_form_reset_password_form_component__["a" /* ResetPasswordFormComponent */]
            },
            {
                path: 'newpassword', component: __WEBPACK_IMPORTED_MODULE_5__new_password_form_new_password_form_component__["a" /* NewPasswordFormComponent */]
            }
        ]
    },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_6__pages_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(loginRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
        this.backgroundIndex = 0;
        this.backgroundCount = 5;
        this.backgroundImage = "url(../../../assets/img/carousel/0.jpg)";
        this.testimonies = [
            {
                hotelLogolUrl: "http://images.all-free-download.com/images/graphiclarge/riu_85177.jpg",
                personName: "Philip Anderson",
                personPosition: "Gerente Comercial",
                story: "\"La mejor aplicación para atención a clientes en la industria hotelera\""
            },
            {
                hotelLogolUrl: "http://insidethegate.com/wp-content/uploads/2016/01/VelasResorts-big.png",
                personName: "Charlie Eighta",
                personPosition: "Designer",
                story: "\"El mejor diseño en una aplicación que he visto en mi vida\""
            }
        ];
        this.testimonyIndex = 0;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.backgroundIndex = _this.backgroundIndex < _this.backgroundCount - 1 ? _this.backgroundIndex + 1 : 0;
            _this.backgroundImage = "url(../../../assets/img/carousel/" + _this.backgroundIndex + ".jpg)";
            console.log("cambio", _this.backgroundIndex);
        }, "5000");
    };
    CarouselComponent.prototype.changeTestimony = function (index) {
        this.testimonyIndex = index;
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-carousel',
        template: __webpack_require__(277),
        styles: [__webpack_require__(258)]
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_service__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HamburgerMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HamburgerMenuComponent = (function () {
    function HamburgerMenuComponent(mainService) {
        this.mainService = mainService;
    }
    HamburgerMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.getHamburgerMenuNavs().then(function (navs) {
            _this.navs = navs;
        });
    };
    return HamburgerMenuComponent;
}());
HamburgerMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-hamburger-menu',
        template: __webpack_require__(278),
        styles: [__webpack_require__(259)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_main_service__["a" /* MainService */]) === "function" && _a || Object])
], HamburgerMenuComponent);

var _a;
//# sourceMappingURL=hamburger-menu.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavBarComponent = (function () {
    function NavBarComponent(profileService, authService, router, route) {
        this.profileService = profileService;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.subscribe(function (profile) {
            if (profile == undefined)
                return;
            _this.UserName = profile.name;
        });
        this.router.events.subscribe(function () {
            if (_this.route.firstChild)
                _this.Title = _this.route.firstChild.data["value"].title;
        });
    };
    NavBarComponent.prototype.sidenavToggle = function () {
        this.sidenav.toggle();
    };
    NavBarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return NavBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSidenav */]) === "function" && _a || Object)
], NavBarComponent.prototype, "sidenav", void 0);
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__(279),
        styles: [__webpack_require__(260)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__profile_profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], NavBarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regexp; });
var regexp = {
    email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
};
//# sourceMappingURL=regexp.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regexp__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalValidator; });

var GlobalValidator = (function () {
    function GlobalValidator() {
    }
    GlobalValidator.mailFormat = function (control) {
        if (control.value != "" && (control.value.length <= 5 || !__WEBPACK_IMPORTED_MODULE_0__regexp__["a" /* regexp */].email.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    return GlobalValidator;
}());

//# sourceMappingURL=validators.js.map

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".content{\r\n    padding-left: 14px;\r\n    padding-right: 14px;\r\n}\r\n.title{\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    font-size: 19px;\r\n}\r\n.close-button{\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n    color: #646464;\r\n    margin-top: -12px;\r\n    margin-right: -12px;\r\n}\r\n.close-button:active{\r\n    box-shadow: none;\r\n}\r\n.md-select-container{\r\n    height: 56px;\r\n}\r\n.md-select-container md-select{\r\n    width: 100%;\r\n    padding-top: 10px;\r\n}\r\n.actions{\r\n    margin-top: 30px;\r\n}\r\n.cancel-button{\r\n    color: #03a9f4;\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".new-button {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* component */\r\n:host{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n/* logo */\r\n.logo{\r\n  background-image: url(" + __webpack_require__(147) + ");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center center;    \r\n\r\n  min-height: 100px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n/* login-card */\r\n.login-card{\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n  padding-bottom: 18px;\r\n  min-height: -webkit-min-content;\r\n  min-height: -moz-min-content;\r\n  min-height: min-content;\r\n}\r\n.login-card div:nth-child(1){\r\n  color:#03a9f4;\r\n  font-size: 24px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n.login-card div:nth-child(2){\r\n  margin-top: 30px;\r\n}\r\n.login-card div:nth-child(3){\r\n  color:red;\r\n  text-align: center;\r\n}\r\n.login-card div:nth-child(4){\r\n  margin-top: 20px;\r\n  margin-left: 8px;\r\n  margin-right: 8px;\r\n}\r\n\r\n/* forgot-password */\r\n.forgot-password{\r\n  padding-top: 20px\r\n}\r\n.forgot-password a{\r\n  color: black;\r\n}\r\n.forgot-password a:visited{\r\n  color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* component */\r\n:host{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n/* logo */\r\n.logo{\r\n  background-image: url(" + __webpack_require__(147) + ");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center center;    \r\n\r\n  min-height: 100px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n/* login-card */\r\n.login-card{\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n  padding-bottom: 18px;\r\n  min-height: -webkit-min-content;\r\n  min-height: -moz-min-content;\r\n  min-height: min-content;\r\n}\r\n.login-card div:nth-child(1){\r\n  color:#03a9f4;\r\n  font-size: 24px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n.login-card div:nth-child(2){\r\n  margin-top: 30px;\r\n}\r\n.login-card div:nth-child(3){\r\n  color:red;\r\n  text-align: center;\r\n}\r\n.login-card div:nth-child(4){\r\n  margin-top: 20px;\r\n  margin-left: 8px;\r\n  margin-right: 8px;\r\n}\r\n\r\n/* forgot-password */\r\n.forgot-password{\r\n  padding-top: 20px\r\n}\r\n.forgot-password a{\r\n  color: black;\r\n}\r\n.forgot-password a:visited{\r\n  color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* background */\r\n.background{\r\n    background-size: cover;\r\n    background-position: center; \r\n}\r\n\r\n\r\n/* testimony */\r\n.testimony{\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n    color: white;\r\n}\r\n.testimony div{\r\n    padding-top: 4px;\r\n    padding-left: 4px;\r\n\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.testimony div :first-child{\r\n    font-weight: bold;\r\n    font-size: large;\r\n}\r\n\r\n\r\n/* radio_button */\r\ninput[type=radio]{\r\n  visibility: hidden;\r\n  position: absolute;\r\n}\r\ninput[type=radio] + label:before{\r\n  display:inline-block;\r\n\r\n  border-radius:50%;\r\n  height:12px;\r\n  width:12px;\r\n  content: \" \";\r\n  background:white;  \r\n  opacity: 0.5;\r\n\r\n  margin-right: 10px;\r\n}\r\ninput[type=radio]:checked + label:before{\r\n  opacity: 1;\r\n}\r\n\r\n\r\n/* testimony_logo */\r\n.testimony_logo{\r\n    width: 100px;\r\n    height: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "a {\r\n    color:#889495;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    padding-left: 50px;\r\n}\r\na div {\r\n    margin-top: -3px;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.active{\r\n    background-color: #e8e8e8\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "md-toolbar {\r\n    box-shadow: 0px 2px 5px #888888;\r\n}\r\n\r\nmd-toolbar div{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nmd-toolbar img{\r\n    height: 70%;\r\n}\r\n\r\n.hamburger-button {\r\n    min-width: 40px;\r\n    line-height: 0px;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.hamburger-button md-icon {\r\n    padding: 0px;\r\n    font-size: 38px;\r\n    margin-top: -15px;\r\n    margin-left: -15px;\r\n}\r\n\r\n.user-name{\r\n    font-size: 15px;\r\n}\r\n\r\n.user-name-menu{\r\n    margin-top: -10px;\r\n    margin-bottom: 8px;\r\n    height: 32px;\r\n    padding-top: 18px;\r\n    padding-left: 20px;\r\n    \r\n    background-color: #3f51b5;\r\n\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  company works!\r\n</p>"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"450px\" fxLayout=\"column\" fxFlex.xs=\"300px\" class=\"content\">\r\n  <div fxFlex=\"60px\" fxLayout=\"row\">\r\n    <div fxFlex class=\"title\">{{title}}</div>\r\n    <button md-mini-fab class=\"close-button\" (click)=\"cancel()\"><md-icon>clear</md-icon></button>\r\n  </div>\r\n  <form fxLayout=\"column\" [formGroup]=\"userForm\">\r\n    <md-input-container>\r\n      <input mdInput formControlName=\"first_name\" placeholder=\"Nombre\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput formControlName=\"last_name\" placeholder=\"Apellido\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput type=\"email\" formControlName=\"email\" placeholder=\"Correo\">\r\n    </md-input-container>\r\n    <div class=\"md-select-container\">\r\n      <md-select formControlName=\"type\" placeholder=\"Tipo de usuario\" (change)=\"typeChange()\">\r\n        <md-option value=\"{{rol.key}}\" *ngFor=\"let rol of allowedRoles\">{{rol.name}}</md-option>\r\n      </md-select>\r\n    </div>\r\n    <div class=\"md-select-container\" *ngIf=\"showControl('company_key')\">\r\n      <md-select formControlName=\"company_key\" placeholder=\"Compañia\" (change)=\"company_keyChange()\">\r\n        <md-option value=\"{{company.key}}\" *ngFor=\"let company of companyMap.companies\">{{company.name}}</md-option>\r\n      </md-select>\r\n    </div>\r\n    <div class=\"md-select-container\" *ngIf=\"showControl('group_key')\">\r\n      <md-select formControlName=\"group_key\" placeholder=\"Grupo\" (change)=\"group_keyChange()\">\r\n        <md-option value=\"{{group.key}}\" *ngFor=\"let group of companyMap.groups[controls.company_key.value]\">{{group.name}}</md-option>\r\n      </md-select>\r\n    </div>\r\n    <div class=\"md-select-container\" *ngIf=\"showControl('hotel_key')\">\r\n      <md-select formControlName=\"hotel_key\" placeholder=\"Hotel\">\r\n        <md-option value=\"{{hotel.key}}\" *ngFor=\"let hotel of companyMap.hotels[controls.group_key.value]\">{{hotel.name}}</md-option>\r\n      </md-select>\r\n    </div>\r\n  </form>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"actions\">\r\n    <button md-button class=\"cancel-button\" [disabled]=\"userForm.disabled\" (click)=\"cancel()\">Cancelar</button>\r\n    <button md-raised-button fxFlex=\"40\" color=\"primary\" [disabled]=\"userForm.disabled\" (click)=\"save()\">Guardar</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-list works!\r\n</p>\r\n\r\n<button md-fab class=\"new-button\" (click)=\"new()\">\r\n    <md-icon>add</md-icon>\r\n</button>"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user works!\r\n</p>"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n  <div fxFlex=\"15\" fxFlex.xs=\"5\"></div>\r\n  <div fxFlex fxLayout=\"row\">\r\n    <div fxFlex=\"20\"></div>\r\n    <div fxFlex fxLayout=\"column\">\r\n\r\n      <div fxFlex fxFlex.xs=\"20\" class=\"logo\"></div>\r\n\r\n      <md-card fxLayout=\"column\" class=\"login-card\">\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin($event)\">\r\n          <div>Iniciar sesión</div>\r\n          <div fxLayout=\"column\">\r\n            <md-input-container>\r\n              <input mdInput type=\"email\" formControlName=\"email\" placeholder=\"Correo\">\r\n            </md-input-container>\r\n            <md-input-container>\r\n              <input mdInput type=\"password\" formControlName=\"password\" placeholder=\"Contraseña\">\r\n            </md-input-container>\r\n          </div>\r\n          <div><span *ngIf=\"errorMessage != null\">{{ errorMessage }}</span></div>\r\n          <div fxLayout=\"column\">\r\n            <button md-raised-button color=\"primary\" [disabled]=\"loginForm.disabled\">INICIAR SESIÓN</button>\r\n          </div>\r\n        </form>\r\n      </md-card>\r\n\r\n      <div fxFlex fxFlex.xs=\"0\" align=\"center\" class=\"forgot-password\">\r\n        <a routerLink=\"/resetpassword\">¿Olvidaste tu Contraseña?</a>\r\n      </div>\r\n\r\n    </div>\r\n    <div fxFlex=\"20\"></div>\r\n  </div>\r\n  <div fxFlex=\"15\" fxFlex.xs=\"4\"></div>\r\n</div>"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" style=\"display: flex; flex-direction: column; min-height: 100vh;\">\r\n    <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\">\r\n\r\n        <app-carousel fxFlex fxFlex.xs=\"200px\"></app-carousel>\r\n        <div fxFlex fxFlex.xs=\"100\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"15\" fxFlex.xs=\"5\"></div>\n  <div fxFlex fxLayout=\"row\">\n    <div fxFlex=\"20\"></div>\n    <div fxFlex fxLayout=\"column\">\n\n      <div fxFlex fxFlex.xs=\"20\" class=\"logo\"></div>\n\n      <md-card fxLayout=\"column\" class=\"login-card\">\n        <form [formGroup]=\"newPasswordForm\" (ngSubmit)=\"newPassword($event)\">\n          <div>{{title}}</div>\n          <div fxLayout=\"column\">\n            <md-input-container>\n              <input mdInput type=\"password\" formControlName=\"newPassword\" placeholder=\"Nueva contraseña\">\n            </md-input-container>\n            <md-input-container>\n              <input mdInput type=\"password\" formControlName=\"confirmPassword\" placeholder=\"Confirmar contraseña\">\n            </md-input-container>\n          </div>\n          <div><span *ngIf=\"errorMessage != null\">{{ errorMessage }}</span></div>\n          <div fxLayout=\"column\">\n            <button md-raised-button color=\"primary\" [disabled]=\"newPasswordForm.disabled\">CONTINUAR</button>\n          </div>\n        </form>\n      </md-card>\n\n      <div fxFlex fxFlex.xs=\"0\" align=\"center\" class=\"forgot-password\">\n        <a routerLink=\"/login\">Volver al inicio de sesión</a>\n      </div>\n\n    </div>\n    <div fxFlex=\"20\"></div>\n  </div>\n  <div fxFlex=\"15\" fxFlex.xs=\"4\"></div>\n</div>"

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reset-password-form works!\r\n</p>"

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  wellcome works!\r\n</p>"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"end\" class=\"background\" [style.background-image]=\"backgroundImage\">\r\n    <!--<div fxLayout=\"column\">\r\n        <div fxFlex=\"100px\" fxLayout class=\"testimony\">\r\n            <img flex class=\"testimony_logo\" src=\"{{testimonies[testimonyIndex].hotelLogolUrl}}\">\r\n            <div fxLayout=\"column\">\r\n                <div fxFlex=\"50px\">{{testimonies[testimonyIndex].personName + \" \" + testimonies[testimonyIndex].personPosition}}</div>\r\n                <div fxFlex=\"40px\">{{testimonies[testimonyIndex].story}}</div>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"40px\" fxFlex.xs=\"20px\"></div>\r\n        <div fxLayout fxLayoutAlign=\"center center\">\r\n            <div *ngFor=\"let testimony of testimonies; let i = index\">\r\n                <input type=\"radio\" name=\"group\" id=\"{{i}}\" [checked]=\"i == testimonyIndex\">\r\n                <label for=\"{{i}}\" (click)=\"changeTestimony(i)\"></label>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"40px\" fxFlex.xs=\"20px\"></div>\r\n    </div>-->\r\n</div>"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<nav fxLayout=\"column\">\r\n  <a md-button routerLink=\"{{nav.uri}}\" routerLinkActive=\"active\" *ngFor=\"let nav of navs\"><div>{{nav.name}}</div></a>\r\n</nav>"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n  <div fxLayout fxLayoutAlign=\" center\">\r\n    <img src=\"../../assets/img/logo_white.png\">\r\n    <div fxFlex=\"30px\" fxFlex.xs=\"5\"></div>\r\n    <button md-button class=\"hamburger-button\" (click)=\"sidenavToggle()\"><md-icon>menu</md-icon></button>\r\n    <div fxFlex=\"30px\" fxFlex.xs=\"5\"></div>\r\n    <span>{{Title}}</span>\r\n    <div fxFlex></div>\r\n    <span fxHide.xs class=\"user-name\">{{UserName}}</span>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\"><md-icon>arrow_drop_down</md-icon></button>\r\n    <div fxFlex=\"30px\" fxFlex.xs=\"0px\"></div>\r\n  </div>\r\n</md-toolbar>\r\n\r\n<md-menu #menu=\"mdMenu\">\r\n  <div fxHide fxShow.xs class=\"user-name-menu\">{{UserName}}</div>\r\n  <button md-menu-item (click)=\"logout()\">\r\n    <md-icon>exit_to_app</md-icon>\r\n    <span>Cerrar sesión</span>\r\n  </button>\r\n</md-menu>"

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_const__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aws_aws_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aws_cognito_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(awsService, cognitoService, router) {
        this.awsService = awsService;
        this.cognitoService = cognitoService;
        this.router = router;
    }
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.cognitoService.CurrentSession.then(function (session) {
                if (session)
                    resolve(session.isValid());
                else
                    resolve(false);
            });
        });
    };
    AuthService.prototype.authenticate = function (user, password, callback) {
        var _this = this;
        this.cognitoService.configUpdate("anything", "anything");
        var authenticationDetails = this.cognitoService.newAuthenticationDetails(user, password);
        var cognitoUser = this.cognitoService.newCognitoUser(user);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                var logins = {};
                logins["cognito-idp." + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].AWS.region + ".amazonaws.com/" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].AWS.userPoolId] = result.getIdToken().getJwtToken();
                _this.awsService.AWS.config.credentials = new _this.awsService.AWS.CognitoIdentityCredentials({
                    IdentityPoolId: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].AWS.identityPoolId,
                    Logins: logins
                });
                _this.awsService.AWS.config.credentials.get(function (err) {
                    if (!err) {
                        callback.authServiceCallback(result, null);
                    }
                    else
                        callback.authServiceCallback(null, _this.handleError(err));
                });
            },
            onFailure: function (err) { return callback.authServiceCallback(null, _this.handleError(err)); },
            newPasswordRequired: function (userAttributes, requiredAttributes) {
                _this.newPasswordChallengeUser = cognitoUser;
                _this.router.navigate(["/newpassword"]);
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.cognitoService.CurrentUser.signOut();
        this.router.navigate(["/login"]);
    };
    AuthService.prototype.newPasswordChallenge = function (newPassword, callback) {
        var _this = this;
        if (!this.newPasswordChallengeUser) {
            callback.authServiceCallback(null, "");
            return;
        }
        this.newPasswordChallengeUser.completeNewPasswordChallenge(newPassword, undefined, {
            onSuccess: function (result) { return callback.authServiceCallback(result, null); },
            onFailure: function (err) { return callback.authServiceCallback(null, _this.handleError(err)); }
        });
    };
    AuthService.prototype.handleError = function (error) {
        var errorMessage = __WEBPACK_IMPORTED_MODULE_3__auth_const__["a" /* LoginErrorMensajes */][error.message];
        if (errorMessage)
            return errorMessage;
        else {
            console.error(error);
            return "Error inesperado.";
        }
    };
    AuthService.prototype.getSession = function () {
        return this.cognitoService.CurrentSession;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__aws_aws_service__["a" /* AWSService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__aws_aws_service__["a" /* AWSService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__aws_cognito_service__["a" /* CognitoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__aws_cognito_service__["a" /* CognitoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdSelectModule */]
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({ imports: modules, exports: modules })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    AWS: {
        region: 'us-west-2',
        identityPoolId: 'us-west-2:1923ed5f-b76c-4daa-8598-13011aff165e',
        userPoolId: 'us-west-2_g416lREjb',
        clientId: '8sqnmt4qjhmct1mp1i83mq6il',
        rekognitionBucket: 'rekognition-pics',
        albumName: "usercontent",
        bucketRegion: 'us-west-2',
        ddbTableName: 'LoginTrailhappyguestdev'
    },
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AWSService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AWSService = (function () {
    function AWSService() {
        AWS.config.update({ region: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].AWS.bucketRegion });
    }
    Object.defineProperty(AWSService.prototype, "AWS", {
        get: function () { return AWS; },
        enumerable: true,
        configurable: true
    });
    return AWSService;
}());
AWSService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AWSService);

//# sourceMappingURL=aws.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aws_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CognitoService = (function () {
    function CognitoService(awsService) {
        this.awsService = awsService;
    }
    Object.defineProperty(CognitoService.prototype, "AWSCognito", {
        get: function () { return AWSCognito; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CognitoService.prototype, "UserPool", {
        get: function () {
            return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool({
                UserPoolId: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].AWS.userPoolId,
                ClientId: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].AWS.clientId
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CognitoService.prototype, "CurrentUser", {
        get: function () {
            return this.UserPool.getCurrentUser();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CognitoService.prototype, "CurrentSession", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve) {
                var cognitoUser = _this.CurrentUser;
                if (cognitoUser) {
                    cognitoUser.getSession(function (error, session) {
                        if (error)
                            resolve(false);
                        else
                            resolve(session);
                    });
                }
                else
                    resolve(false);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CognitoService.prototype, "CognitoIdentity", {
        get: function () {
            return this.awsService.AWS.config.credentials.identityId;
        },
        enumerable: true,
        configurable: true
    });
    CognitoService.prototype.getAccessToken = function (callback) {
        if (this.CurrentUser != null)
            this.CurrentUser.getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getAccessToken().getJwtToken());
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoService.prototype.getIdToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getIdToken is null...returning");
        }
        if (this.CurrentUser != null)
            this.CurrentUser.getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getIdToken().getJwtToken());
                    }
                    else {
                        console.log("CognitoUtil: Got the id token, but the session isn't valid");
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoService.prototype.getRefreshToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getRefreshToken is null...returning");
        }
        if (this.CurrentUser != null)
            this.CurrentUser.getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getRefreshToken());
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoService.prototype.refresh = function () {
        this.CurrentUser.getSession(function (err, session) {
            if (err) {
                console.log("CognitoUtil: Can't set the credentials:" + err);
            }
            else {
                if (session.isValid()) {
                    console.log("CognitoUtil: refreshed successfully");
                }
                else {
                    console.log("CognitoUtil: refreshed but session is still not valid");
                }
            }
        });
    };
    /////////
    CognitoService.prototype.configUpdate = function (accessKeyId, secretAccessKey) {
        AWSCognito.config.update({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });
    };
    CognitoService.prototype.newAuthenticationDetails = function (username, password) {
        return new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails({ Username: username, Password: password });
    };
    CognitoService.prototype.newCognitoUser = function (username) {
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUser({
            Username: username,
            Pool: this.UserPool
        });
    };
    CognitoService.prototype.getUserAttributes = function () {
        var _this = this;
        return new Promise(function (resolve, error) {
            var cognitoUser = _this.CurrentUser;
            if (cognitoUser != null) {
                cognitoUser.getSession(function (err, session) {
                    if (err)
                        error();
                    else {
                        cognitoUser.getUserAttributes(function (err, result) {
                            if (err) {
                                error();
                            }
                            else {
                                resolve(result);
                            }
                        });
                    }
                });
            }
            else
                error();
        });
    };
    return CognitoService;
}());
CognitoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__aws_service__["a" /* AWSService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__aws_service__["a" /* AWSService */]) === "function" && _a || Object])
], CognitoService);

var _a;
//# sourceMappingURL=cognito.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wellcome_wellcome_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var modules = [
    __WEBPACK_IMPORTED_MODULE_4__wellcome_wellcome_component__["a" /* WellcomeComponent */],
    __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */]
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]],
        declarations: modules, exports: modules
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.bundle.js.map