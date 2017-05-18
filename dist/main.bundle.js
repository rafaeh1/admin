webpackJsonp([2,6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(41);
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
        template: __webpack_require__(252),
        styles: [__webpack_require__(236)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_routing_module__ = __webpack_require__(175);
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
        template: __webpack_require__(253),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_routing_module__ = __webpack_require__(176);
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
            __WEBPACK_IMPORTED_MODULE_3__user_routing_module__["a" /* UserRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(41);
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
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
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
        template: __webpack_require__(254),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], LoginFormComponent);

var _a, _b, _c;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 108:
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
        template: __webpack_require__(255),
        styles: [__webpack_require__(239)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_routing_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_form_login_form_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reset_password_form_reset_password_form_component__ = __webpack_require__(110);
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
            __WEBPACK_IMPORTED_MODULE_10__reset_password_form_reset_password_form_component__["a" /* ResetPasswordFormComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 110:
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
        template: __webpack_require__(256),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [])
], ResetPasswordFormComponent);

//# sourceMappingURL=reset-password-form.component.js.map

/***/ }),

/***/ 111:
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
        template: __webpack_require__(257),
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aws_cognito_service__ = __webpack_require__(58);
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

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/entities/company/company.module": [
		104
	],
	"app/entities/user/user.module": [
		106
	],
	"app/login/login.module": [
		109
	],
	"app/main/main.module": [
		316,
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
webpackAsyncContext.id = 142;


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(42);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 150:
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

/***/ 151:
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
        template: __webpack_require__(258),
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [])
], WellcomeComponent);

//# sourceMappingURL=wellcome.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_carousel_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hamburger_menu_hamburger_menu_component__ = __webpack_require__(179);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
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

/***/ 172:
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
        template: __webpack_require__(251),
        styles: [__webpack_require__(235)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aws_cognito_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aws_aws_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pages_module__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__entities_user_user_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__entities_company_company_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(172);
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginErrorMensajes; });
var LoginErrorMensajes = {
    "User does not exist.": "El usuario no existe.",
    "Incorrect username or password.": "Contraseña incorrecta.",
    "User is disabled": "El usuario está deshabilitado."
};
//# sourceMappingURL=auth.const.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var userRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */]
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_form_login_form_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_form_reset_password_form_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_not_found_not_found_component__ = __webpack_require__(111);
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
            }
        ]
    },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_5__pages_not_found_not_found_component__["a" /* NotFoundComponent */] }
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

/***/ 178:
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
        template: __webpack_require__(259),
        styles: [__webpack_require__(243)]
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_service__ = __webpack_require__(150);
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
        template: __webpack_require__(260),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_main_service__["a" /* MainService */]) === "function" && _a || Object])
], HamburgerMenuComponent);

var _a;
//# sourceMappingURL=hamburger-menu.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__(41);
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdSidenav */]) === "function" && _a || Object)
], NavBarComponent.prototype, "sidenav", void 0);
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__(261),
        styles: [__webpack_require__(245)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__profile_profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], NavBarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* component */\n:host{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n}\n\n\n/* logo */\n.logo{\n  background-image: url(" + __webpack_require__(310) + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;    \n\n  min-height: 100px;\n  margin-bottom: 40px;\n}\n\n\n/* login-card */\n.login-card{\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 18px;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n}\n.login-card div:nth-child(1){\n  color:#03a9f4;\n  font-size: 24px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.login-card div:nth-child(2){\n  margin-top: 30px;\n}\n.login-card div:nth-child(3){\n  color:red;\n  text-align: center;\n}\n.login-card div:nth-child(4){\n  margin-top: 20px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n/* forgot-password */\n.forgot-password{\n  padding-top: 20px\n}\n.forgot-password a{\n  color: black;\n}\n.forgot-password a:visited{\n  color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* background */\n.background{\n    background-size: cover;\n    background-position: center; \n}\n\n\n/* testimony */\n.testimony{\n    margin-left: 40px;\n    margin-right: 40px;\n    color: white;\n}\n.testimony div{\n    padding-top: 4px;\n    padding-left: 4px;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.testimony div :first-child{\n    font-weight: bold;\n    font-size: large;\n}\n\n\n/* radio_button */\ninput[type=radio]{\n  visibility: hidden;\n  position: absolute;\n}\ninput[type=radio] + label:before{\n  display:inline-block;\n\n  border-radius:50%;\n  height:12px;\n  width:12px;\n  content: \" \";\n  background:white;  \n  opacity: 0.5;\n\n  margin-right: 10px;\n}\ninput[type=radio]:checked + label:before{\n  opacity: 1;\n}\n\n\n/* testimony_logo */\n.testimony_logo{\n    width: 100px;\n    height: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "a {\n    color:#889495;\n    text-transform: uppercase;\n    font-size: 15px;\n    font-weight: bold;\n    text-align: left;\n    padding-left: 50px;\n}\na div {\n    margin-top: -3px;\n    margin-bottom: 4px;\n}\n\n.active{\n    background-color: #e8e8e8\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "md-toolbar {\n    box-shadow: 0px 2px 5px #888888;\n}\n\nmd-toolbar div{\n    width: 100%;\n    height: 100%;\n}\n\nmd-toolbar img{\n    height: 70%;\n}\n\n.hamburger-button {\n    min-width: 40px;\n    line-height: 0px;\n    width: 40px;\n    height: 40px;\n}\n.hamburger-button md-icon {\n    padding: 0px;\n    font-size: 38px;\n    margin-top: -15px;\n    margin-left: -15px;\n}\n\n.user-name{\n    font-size: 15px;\n}\n\n.user-name-menu{\n    margin-top: -10px;\n    margin-bottom: 8px;\n    height: 32px;\n    padding-top: 18px;\n    padding-left: 20px;\n    \n    background-color: #3f51b5;\n\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<p>\n  company works!\n</p>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"15\" fxFlex.xs=\"5\"></div>\n  <div fxFlex fxLayout=\"row\">\n    <div fxFlex=\"20\"></div>\n    <div fxFlex fxLayout=\"column\">\n\n      <div fxFlex fxFlex.xs=\"20\" class=\"logo\"></div>\n\n      <md-card fxLayout=\"column\" class=\"login-card\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin($event)\">\n          <div>Iniciar sesión</div>\n          <div fxLayout=\"column\">\n            <md-input-container>\n              <input mdInput type=\"email\" formControlName=\"email\" placeholder=\"Correo\">\n            </md-input-container>\n            <md-input-container>\n              <input mdInput type=\"password\" formControlName=\"password\" placeholder=\"Contraseña\">\n            </md-input-container>\n          </div>\n          <div><span *ngIf=\"errorMessage != null\">{{ errorMessage }}</span></div>\n          <div fxLayout=\"column\">\n            <button md-raised-button color=\"primary\" [disabled]=\"loginForm.disabled\">INICIAR SESIÓN</button>\n          </div>\n        </form>\n      </md-card>\n\n      <div fxFlex fxFlex.xs=\"0\" align=\"center\" class=\"forgot-password\">\n        <a routerLink=\"/resetpassword\">¿Olvidaste tu Contraseña?</a>\n      </div>\n\n    </div>\n    <div fxFlex=\"20\"></div>\n  </div>\n  <div fxFlex=\"15\" fxFlex.xs=\"4\"></div>\n</div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" style=\"display: flex; flex-direction: column; min-height: 100vh;\">\n    <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\">\n\n        <app-carousel fxFlex fxFlex.xs=\"200px\"></app-carousel>\n        <div fxFlex fxFlex.xs=\"100\">\n            <router-outlet></router-outlet>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<p>\n  reset-password-form works!\n</p>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<p>\n  wellcome works!\n</p>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"end\" class=\"background\" [style.background-image]=\"backgroundImage\">\n    <!--<div fxLayout=\"column\">\n        <div fxFlex=\"100px\" fxLayout class=\"testimony\">\n            <img flex class=\"testimony_logo\" src=\"{{testimonies[testimonyIndex].hotelLogolUrl}}\">\n            <div fxLayout=\"column\">\n                <div fxFlex=\"50px\">{{testimonies[testimonyIndex].personName + \" \" + testimonies[testimonyIndex].personPosition}}</div>\n                <div fxFlex=\"40px\">{{testimonies[testimonyIndex].story}}</div>\n            </div>\n        </div>\n        <div fxFlex=\"40px\" fxFlex.xs=\"20px\"></div>\n        <div fxLayout fxLayoutAlign=\"center center\">\n            <div *ngFor=\"let testimony of testimonies; let i = index\">\n                <input type=\"radio\" name=\"group\" id=\"{{i}}\" [checked]=\"i == testimonyIndex\">\n                <label for=\"{{i}}\" (click)=\"changeTestimony(i)\"></label>\n            </div>\n        </div>\n        <div fxFlex=\"40px\" fxFlex.xs=\"20px\"></div>\n    </div>-->\n</div>"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<nav fxLayout=\"column\">\n  <a md-button routerLink=\"{{nav.uri}}\" routerLinkActive=\"active\" *ngFor=\"let nav of navs\"><div>{{nav.name}}</div></a>\n</nav>"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <div fxLayout fxLayoutAlign=\" center\">\n    <img src=\"../../assets/img/logo_white.png\">\n    <div fxFlex=\"30px\" fxFlex.xs=\"5\"></div>\n    <button md-button class=\"hamburger-button\" (click)=\"sidenavToggle()\"><md-icon>menu</md-icon></button>\n    <div fxFlex=\"30px\" fxFlex.xs=\"5\"></div>\n    <span>{{Title}}</span>\n    <div fxFlex></div>\n    <span fxHide.xs class=\"user-name\">{{UserName}}</span>\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\"><md-icon>arrow_drop_down</md-icon></button>\n    <div fxFlex=\"30px\" fxFlex.xs=\"0px\"></div>\n  </div>\n</md-toolbar>\n\n<md-menu #menu=\"mdMenu\">\n  <div fxHide fxShow.xs class=\"user-name-menu\">{{UserName}}</div>\n  <button md-menu-item (click)=\"logout()\">\n    <md-icon>exit_to_app</md-icon>\n    <span>Cerrar sesión</span>\n  </button>\n</md-menu>"

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.36154bbec560611d7ace.png";

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSidenavModule */]
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_const__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aws_aws_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aws_cognito_service__ = __webpack_require__(58);
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
            onFailure: function (err) { return callback.authServiceCallback(null, _this.handleError(err)); }
        });
    };
    AuthService.prototype.logout = function () {
        this.cognitoService.CurrentUser.signOut();
        this.router.navigate(["/login"]);
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
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__aws_aws_service__["a" /* AWSService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__aws_aws_service__["a" /* AWSService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__aws_cognito_service__["a" /* CognitoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__aws_cognito_service__["a" /* CognitoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 42:
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
        userPoolId: 'us-west-2_969JpsBxu',
        clientId: '29ahu54vur39lmubibr0r5bkvd',
        rekognitionBucket: 'rekognition-pics',
        albumName: "usercontent",
        bucketRegion: 'us-west-2',
        ddbTableName: 'LoginTrailhappyguestdev'
    },
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(42);
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aws_service__ = __webpack_require__(57);
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wellcome_wellcome_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__(111);
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

},[312]);
//# sourceMappingURL=main.bundle.js.map