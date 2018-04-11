webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-app',
            template: './about/about.component.html'
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Admin screen. Available for Admin users\r\n</h2>\r\n\r\n<p>Here is the data received from SpringBoot API for Admin users ONLY</p>\r\n\r\n<pre>{{users$| async | json}}</pre>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_data_service__ = __webpack_require__("./src/app/services/app-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(appDataService) {
        this.appDataService = appDataService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.users$ = this.appDataService.getUsers();
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_data_service__["a" /* AppDataService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__ = __webpack_require__("./src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_sign_up_sign_up_component__ = __webpack_require__("./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_sign_in_sign_in_component__ = __webpack_require__("./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__template_template_component__ = __webpack_require__("./src/app/template/template.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__template_template_component__["a" /* TemplateComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] }]
    },
    {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__template_template_component__["a" /* TemplateComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__["a" /* AuthGuard */]] }]
    },
    {
        path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_10__template_template_component__["a" /* TemplateComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* PostComponent */] }]
    },
    {
        path: 'user', component: __WEBPACK_IMPORTED_MODULE_10__template_template_component__["a" /* TemplateComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__["a" /* AuthGuard */]] }]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_5__user_sign_up_sign_up_component__["a" /* SignUpComponent */] }]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_6__user_sign_in_sign_in_component__["a" /* SignInComponent */] }]
    },
    {
        path: '**',
        redirectTo: '/profile'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".page{\r\n\tmargin: auto;\r\n\twidth: 1000px;\r\n\theight: 800px;\t\r\n}\r\n.page > header{\r\n\tmargin: 2px;\r\n\twidth: 1000px;\r\n\theight: 100px;\t\r\n}\r\n.page nav {\t\r\n\twidth: 20%;\t\r\n\theight: auto;\t\r\n\tfloat: right;\r\n}\r\n.posts{\t\t\r\n\twidth: 79%;\t\r\n\theight: auto;\t\r\n\tfloat: left;\r\n}\r\n.post{\t\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.4%;\r\n\tbackground-color: gray;\t\r\n}\r\n.page footer{\t\r\n\twidth: 100%;\r\n\theight: auto;\t\r\n}\r\n.separator{\r\n\tclear:both;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!DOCTYPE html>\n\n<router-outlet></router-outlet>\t"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, cdRef) {
        this.router = router;
        this.cdRef = cdRef;
        this.title = 'app';
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
        this.cdRef.detectChanges();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("./src/app/not_found/not_found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_sign_in_sign_in_component__ = __webpack_require__("./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_sign_up_sign_up_component__ = __webpack_require__("./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__template_template_component__ = __webpack_require__("./src/app/template/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guard_auth_guard__ = __webpack_require__("./src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guard_admin_auth_guard_service__ = __webpack_require__("./src/app/guard/admin-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_app_data_service__ = __webpack_require__("./src/app/services/app-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_constant__ = __webpack_require__("./src/app/services/auth.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























function authHttpServiceFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({
        headerPrefix: 'Bearer',
        tokenName: __WEBPACK_IMPORTED_MODULE_24__services_auth_constant__["c" /* TOKEN_NAME */],
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: false,
        noTokenScheme: true,
        tokenGetter: (function () { return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_24__services_auth_constant__["c" /* TOKEN_NAME */]); })
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_11__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_14__user_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__template_template_component__["a" /* TemplateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], useFactory: authHttpServiceFactory, deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]] },
                __WEBPACK_IMPORTED_MODULE_17_app_services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_18_app_services_comment_service__["a" /* CommentService */],
                __WEBPACK_IMPORTED_MODULE_19__guard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_21__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_22__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__guard_admin_auth_guard_service__["a" /* AdminAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_23__services_app_data_service__["a" /* AppDataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guard/admin-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        var isAdmin = this.userService.isAdminUser();
        if (isAdmin) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AdminAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_app_services_user_service__["a" /* UserService */]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_constant__ = __webpack_require__("./src/app/services/auth.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
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
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])(__WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["c" /* TOKEN_NAME */], this.userService.accessToken)) {
            return true;
        }
        else {
            this.router.navigate(['login'], { queryParams: { redirectTo: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/app.component.css":
/***/ (function(module, exports) {

module.exports = ".page{\r\n\tmargin: auto;\r\n\twidth: 1000px;\r\n\theight: 800px;\t\r\n}\r\n.page > header{\r\n\tmargin: 2px;\r\n\twidth: 1000px;\r\n\theight: 100px;\t\r\n}\r\n.page nav {\t\r\n\twidth: 20%;\t\r\n\theight: auto;\t\r\n\tfloat: right;\r\n}\r\n.posts{\t\t\r\n\twidth: 79%;\t\r\n\theight: auto;\t\r\n\tfloat: left;\r\n}\r\n.post{\t\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.4%;\r\n\tbackground-color: gray;\t\r\n}\r\n.page footer{\t\r\n\twidth: 100%;\r\n\theight: auto;\t\r\n}\r\n.separator{\r\n\tclear:both;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"page\">\t\n\t\n\t<article class=\"panel panel-default posts\">\n\t\t<section class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#createModal\">создать</button>\n\t\t\t</div>\n\t\t</section>\n\t\t\n\t\t<article class=\"panel panel-info\" *ngFor=\"let post of posts | async\">\n\t\t\t\t\n\t\t\t<h4 routerLink=\"/post/{{post.id}}\" class=\"panel-heading\">{{post.title}}</h4>\n\t\t\t<article class=\"panel-body\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img class=\"media-object\" [src]=\"articleImgPath\" alt=\"...\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t{{post.shortText}}\n\t\t\t\t</div>\n\t\t\t</article>\n\t\t\t\n\t\t\t<section>\n\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"...\">\t\n\t\t\t\t\t\n\t\t\t\t  <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePost(post.id)\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n\t\t\t\t  <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#updateModal\" (click)=\"loadPostToEdit(post.id)\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n\t\t\t\t  </button>\t\n\t\t\t\t  <button class=\"btn btn-primary btn-right\" type=\"button\">\n\t\t\t\t\t  <span class=\"glyphicon glyphicon-thumbs-up\" aria-hidden=\"true\"></span>\n\t\t\t\t\t  <span class=\"badge\">{{post.likes}}</span>\n\t\t\t\t   </button>\t\t\t\t  \n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</article>\n\t\t\n\t</article>\n\t\n\t\n\t\t\t\n\t<!--Modal-->\n\t<div id=\"createModal\" class=\"modal fade\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\n\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t  <div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Создать статью</h4>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"modal-body\">\n\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\n\t\t\t\t\t\t<input id=\"title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"post.title\" placeholder=\"Заголовок\" required />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\n\t\t\t\t\t\t<input id=\"shortText\" class=\"form-control\" name=\"shortText\" [(ngModel)]=\"post.shortText\" placeholder=\"Краткийй текст\" required />\n\t\t\t\t\t</div>  \n\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<textarea type=\"fullText\" id=\"fullText\" class=\"form-control\" name=\"fullText\" [(ngModel)]=\"post.fullText\" placeholder=\"Полнвй текст\" required></textarea>\n\t\t\t\t\t</div> \n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"modal-footer\">\n\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"createPost(post)\" data-dismiss=\"modal\">Cоздать</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t  </div>\n\t</div>      \n\n\t<div id=\"updateModal\" class=\"modal fade\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t  <div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">изменить статью r</h4>\n\t\t\t\t  </div>\n\t\t\t\t  <form [formGroup]=\"postForm\">\n\t\t\t\t\t  <div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"id\" hidden=\"hidden\" class=\"form-control\" name=\"title\" [(ngModel)]=\"post.id\"/>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<input formControlName=\"title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"post.title\" placeholder=\"Заголовок\" required />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<input formControlName=\"shortText\" class=\"form-control\" name=\"shortText\" [(ngModel)]=\"post.shortText\" placeholder=\"Короткий текст\" required />\n\t\t\t\t\t\t</div>   \n\t\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<input formControlName=\"fullText\" id=\"fullText\" class=\"form-control\" name=\"fullText\" [(ngModel)]=\"post.fullText\" placeholder=\"Полный текст\" required />\n\t\t\t\t\t\t</div> \t\t\t\t\t\t\n\n\t\t\t\t\t\t\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"modal-footer\">\n\t\t\t\t\t\t<button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"updatePost()\">Сохранить</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  </form>\n\t\t\t\t</div>\n\t\t  </div>\n\t</div>  \n<article>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_post__ = __webpack_require__("./src/app/models/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(postService) {
        this.postService = postService;
        this.post = new __WEBPACK_IMPORTED_MODULE_2_app_models_post__["a" /* Post */](null, "", "", "", 0); // данные вводимого пользователя   
        this.postIdToUpdate = null;
        this.done = false;
        this.postForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            shortText: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            fullText: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            likes: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required)
        });
        this.posts = postService.getPosts();
        this.articleImgPath = "./assets/images/article.png";
    }
    HomeComponent.prototype.createPost = function (post) {
        this.postService.createPost(post)
            .subscribe(function (successCode) { console.log(successCode); }, function (error) { return console.log(error); });
        window.location.reload();
    };
    HomeComponent.prototype.deletePost = function (postId) {
        var _this = this;
        this.postService.deletePostById(postId)
            .subscribe(function (successCode) {
            _this.done = true;
        }, function (error) { return console.log(error); });
        window.location.reload();
    };
    HomeComponent.prototype.loadPostToEdit = function (postid) {
        var _this = this;
        this.postService.getPostById(postid)
            .subscribe(function (post) {
            console.log(postid);
            _this.postIdToUpdate = postid;
            _this.postForm.setValue({ id: post.id, title: post.title, text: post.shortText });
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.updatePost = function () {
        var _this = this;
        var post = this.postForm.value;
        this.postService.updatePostById(post)
            .subscribe(function (successCode) {
            _this.done = true;
        }, function (error) { return console.log(error); });
        window.location.reload();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-app',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_post_service__["a" /* PostService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(id, authorName, text, post) {
        this.id = id;
        this.authorName = authorName;
        this.text = text;
        this.post = post;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/models/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(id, title, shortText, fullText, likes) {
        this.id = id;
        this.title = title;
        this.shortText = shortText;
        this.fullText = fullText;
        this.likes = likes;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/not_found/app.component.css":
/***/ (function(module, exports) {

module.exports = ".page{\r\n\tmargin: auto;\r\n\twidth: 1000px;\r\n\theight: 800px;\t\r\n}\r\n.page > header{\r\n\tmargin: 2px;\r\n\twidth: 1000px;\r\n\theight: 100px;\t\r\n}\r\n.page nav {\t\r\n\twidth: 20%;\t\r\n\theight: auto;\t\r\n\tfloat: right;\r\n}\r\n.posts{\t\t\r\n\twidth: 79%;\t\r\n\theight: auto;\t\r\n\tfloat: left;\r\n}\r\n.post{\t\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.4%;\r\n\tbackground-color: gray;\t\r\n}\r\n.page footer{\t\r\n\twidth: 100%;\r\n\theight: auto;\t\r\n}\r\n.separator{\r\n\tclear:both;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/not_found/not_found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"posts\">\n\t<img width=\"100%\" height=\"100%\" [src]=\"notFoundImage\">\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/not_found/not_found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        this.notFoundImage = '/assets/images/not_found.jpg';
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'not-found-app',
            template: __webpack_require__("./src/app/not_found/not_found.component.html"),
            styles: [__webpack_require__("./src/app/not_found/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/post/app.component.css":
/***/ (function(module, exports) {

module.exports = ".page{\r\n\tmargin: auto;\r\n\twidth: 1000px;\r\n\theight: 800px;\t\r\n}\r\n.page > header{\r\n\tmargin: 2px;\r\n\twidth: 1000px;\r\n\theight: 100px;\t\r\n}\r\n.page nav {\t\r\n\twidth: 20%;\t\r\n\theight: auto;\t\r\n\tfloat: right;\r\n}\r\n.posts{\t\t\r\n\twidth: 79%;\t\r\n\theight: auto;\t\r\n\tfloat: left;\r\n}\r\n.post{\t\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.4%;\r\n\tbackground-color: gray;\t\r\n}\r\n.page footer{\t\r\n\twidth: 100%;\r\n\theight: auto;\t\r\n}\r\n.separator{\r\n\tclear:both;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info posts\" >\n\t<div class=\"panel-heading\">{{post.title}}: </div>\n\t<div class=\"panel-body\">{{post.shortText}}</div>\n\t<div class=\"panel-body\">{{post.fullText}}</div>\t\n</div>\n\n<div class=\"panel panel-default posts\">\n\t<div class=\"panel-heading\">Комментарии:\n\t<section>\n\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\n\t\t\t\t\t\t<input id=\"title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"comment.authorName\" placeholder=\"Имя\" required />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\n\t\t\t\t\t\t<input id=\"shortText\" class=\"form-control\" name=\"shortText\" [(ngModel)]=\"comment.text\" placeholder=\"Фраза\" required />\t\t\t\t\t\t\n\t\t\t\t\t</div>  \n\t\t\t\t\t<div class=\"form-group\">\t\t\t\t\t\t\n\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"createComment(comment)\" data-dismiss=\"modal\">Отправить</button>\n\t\t\t\t\t</div>\n\t\t</section>\n\t</div>\n\t\n\t<div class=\"panel-body\">\n\t\t\n\t\t<article class=\"well well-sm\" *ngFor=\"let comment of comments | async\">\n\t\t<header>{{comment.authorName}} said:</header>\n\t\t\t{{comment.text}}\n\t\t</article>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_models_comment__ = __webpack_require__("./src/app/models/comment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = (function () {
    function PostComponent(postService, activateRoute, commentService) {
        var _this = this;
        this.postService = postService;
        this.activateRoute = activateRoute;
        this.commentService = commentService;
        this.id = activateRoute.snapshot.params['id'];
        this.postService.getPostById(this.id)
            .subscribe(function (article) {
            _this.post = article;
            _this.comment = new __WEBPACK_IMPORTED_MODULE_4_app_models_comment__["a" /* Comment */](null, "", "", article);
        }, function (errorCode) { return _this.statusCode = errorCode; });
        this.comments = postService.getCommentsByPostId(this.id);
    }
    PostComponent.prototype.createComment = function (comment) {
        this.commentService.createComment(comment)
            .subscribe(function (successCode) { console.log(successCode); }, function (error) { return console.log(error); });
        window.location.reload();
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'post-app',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_app_services_comment_service__["a" /* CommentService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".page{\r\n\tmargin: auto;\r\n\twidth: 1000px;\r\n\theight: 800px;\t\r\n}\r\n.page > header{\r\n\tmargin: 2px;\r\n\twidth: 1000px;\r\n\theight: 100px;\t\r\n}\r\n.page nav {\t\r\n\twidth: 20%;\t\r\n\theight: auto;\t\r\n\tfloat: right;\r\n}\r\n.posts{\t\t\r\n\twidth: 79%;\t\r\n\theight: auto;\t\r\n\tfloat: left;\r\n}\r\n.post{\t\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.4%;\r\n\tbackground-color: gray;\t\r\n}\r\n.page footer{\t\r\n\twidth: 100%;\r\n\theight: auto;\t\r\n}\r\n.separator{\r\n\tclear:both;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"...\" alt=\"...\">\n      <div class=\"caption\">\n        <h3>Thumbnail label</h3>\n        <p>...</p>\n        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n\t\n<div class=\"panel-body\">\n\t\t\n\t\t<article class=\"well well-sm\" *ngFor=\"let comment of comments | async\">\n\t\t<header>{{comment.authorName}} said:</header>\n\t\t\t{{comment.text}}\n\t\t</article>\n\t</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(postService, activateRoute, commentService) {
        this.postService = postService;
        this.activateRoute = activateRoute;
        this.commentService = commentService;
    }
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile-app',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_app_services_comment_service__["a" /* CommentService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/app-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppDataService = (function () {
    function AppDataService(http) {
        this.http = http;
    }
    AppDataService.prototype.getUsers = function () {
        return this.http.get('http://localhost:8090/api/users').map(function (res) { return res.json(); });
    };
    AppDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]])
    ], AppDataService);
    return AppDataService;
}());



/***/ }),

/***/ "./src/app/services/auth.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOKEN_AUTH_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOKEN_AUTH_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOKEN_NAME; });
var TOKEN_AUTH_USERNAME = 'testjwtclientid';
var TOKEN_AUTH_PASSWORD = 'XY7kmzoNzl100';
var TOKEN_NAME = 'access_token';


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_constant__ = __webpack_require__("./src/app/services/auth.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService_1 = AuthenticationService;
    AuthenticationService.prototype.login = function (username, password) {
        var body = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&grant_type=password";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa(__WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["b" /* TOKEN_AUTH_USERNAME */] + ':' + __WEBPACK_IMPORTED_MODULE_3__services_auth_constant__["a" /* TOKEN_AUTH_PASSWORD */]) });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(AuthenticationService_1.AUTH_TOKEN, body, options)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.access_token) {
                return res.access_token;
            }
            return null;
        });
    };
    AuthenticationService.prototype.loginn = function (username, password) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }));
    };
    AuthenticationService.AUTH_TOKEN = 'http://localhost:8090/oauth/token';
    AuthenticationService = AuthenticationService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
    var AuthenticationService_1;
}());



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.commentUrl = "http://localhost:8090/api/comments";
    }
    CommentService.prototype.getComments = function () {
        return this.http.get(this.commentUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.createComment = function (comment) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        return this.http.post(this.commentUrl, comment, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    CommentService.prototype.deletePostById = function (commentId) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        return this.http.delete(this.commentUrl + "/comment/" + commentId)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    CommentService.prototype.updateCommentById = function (comment) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        return this.http.put(this.commentUrl + "/comment/" + comment.id, comment, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    CommentService.prototype.getCommentById = function (commentId) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        console.log(this.commentUrl + "/comment/" + commentId);
        return this.http.get(this.commentUrl + "/comment/" + commentId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.status);
    };
    CommentService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.postUrl = "http://localhost:8090/api/posts";
    }
    PostService.prototype.getPosts = function () {
        return this.http.get(this.postUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostService.prototype.createPost = function (post) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        return this.http.post(this.postUrl, post, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    PostService.prototype.deletePostById = function (postId) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        return this.http.delete(this.postUrl + "/post/" + postId)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    PostService.prototype.updatePostById = function (post) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        return this.http.put(this.postUrl + "/post/" + post.id, post, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    PostService.prototype.getPostById = function (postId) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        console.log(this.postUrl + "/post/" + postId);
        return this.http.get(this.postUrl + "/post/" + postId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostService.prototype.getCommentsByPostId = function (postId) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: cpHeaders });
        console.log(this.postUrl + "/post/" + postId);
        return this.http.get(this.postUrl + "/post/" + postId + "/comments")
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.status);
    };
    PostService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_constant__ = __webpack_require__("./src/app/services/auth.constant.ts");
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
    function UserService() {
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
    }
    UserService.prototype.login = function (accessToken) {
        var decodedToken = this.jwtHelper.decodeToken(accessToken);
        console.log(decodedToken);
        this.isAdmin = decodedToken.authorities.some(function (el) { return el === 'ADMIN_USER'; });
        this.accessToken = accessToken;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__services_auth_constant__["c" /* TOKEN_NAME */], accessToken);
    };
    UserService.prototype.logout = function () {
        this.accessToken = null;
        this.isAdmin = false;
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__services_auth_constant__["c" /* TOKEN_NAME */]);
    };
    UserService.prototype.isAdminUser = function () {
        console.log(this.isAdmin);
        return this.isAdmin;
    };
    UserService.prototype.isUser = function () {
        return this.accessToken && !this.isAdmin;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/template/template.component.css":
/***/ (function(module, exports) {

module.exports = ".page{\r\n\tmargin: auto;\r\n\twidth: 1000px;\r\n\theight: 800px;\t\r\n}\r\n.page > header{\r\n\tmargin: 2px;\r\n\twidth: 1000px;\r\n\theight: 100px;\t\r\n}\r\n.page nav {\t\r\n\twidth: 20%;\t\r\n\theight: auto;\t\r\n\tfloat: right;\r\n}\r\n.posts{\t\t\r\n\twidth: 79%;\t\r\n\theight: auto;\t\r\n\tfloat: left;\r\n}\r\n.post{\t\r\n\twidth: 100%;\r\n\tmargin-bottom: 0.4%;\r\n\tbackground-color: gray;\t\r\n}\r\n.page footer{\t\r\n\twidth: 100%;\r\n\theight: auto;\t\r\n}\r\n.separator{\r\n\tclear:both;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/template/template.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!DOCTYPE html>\n<article class=\"page\">\n\n\t<header class=\"panel panel-default\"> \n\t\t<div class=\"panel-body\">\n\t\t\tБлог \n\t\t</div> \n\t</header>\n\t\n\t<ul class=\"nav nav-tabs\">\n\t  <li role=\"presentation\" class=\"active\"><a routerLink=\"/profile\">Profile</a></li>\n\t  <li role=\"presentation\"><a routerLink=\"/home\">Posts</a></li>\n\t  <li routerLinkActive=\"active\"><a routerLink=\"/user\">User</a></li>\n\t  <li role=\"presentation\"><a href=\"/message\">Messages</a></li>\n\t\t  <ul class=\"nav navbar-nav navbar-right\">\n\t\t\t  <p class=\"navbar-text\" *ngIf=\"isAdminUser\">You are admin!</p>\n\t\t\t  <p class=\"navbar-text\" *ngIf=\"isUser\">You are user!</p>\n\t\t\t  <li><button class=\"btn navbar-btn\" (click)=\"logout()\">Logout</button></li>\n\t\t</ul>\n\t</ul>\n\t\n\t\n\t\n\t<nav class=\"panel panel-default posts\">\t\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t<li *ngFor=\"let post of posts | async\"><a routerLink=\"/post/{{post.id}}\">{{post.title}}</a></li>\n\t\t</ul>\t\t\n\t</nav>\n\t\n\t<router-outlet></router-outlet>\n\t\n\t<div class=\"separator\"></div>\n\n\t<footer><span class=\"label label-info\">@C Alex</span></footer>\n<article>\n\n\n\n"

/***/ }),

/***/ "./src/app/template/template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TemplateComponent = (function () {
    function TemplateComponent(postService, router, userService, cdRef) {
        this.postService = postService;
        this.router = router;
        this.userService = userService;
        this.cdRef = cdRef;
        this.title = 'template';
        this.posts = postService.getPosts();
    }
    TemplateComponent.prototype.ngAfterViewChecked = function () {
        // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
        this.cdRef.detectChanges();
    };
    TemplateComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/']);
    };
    Object.defineProperty(TemplateComponent.prototype, "isAdminUser", {
        get: function () {
            return this.userService.isAdminUser();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemplateComponent.prototype, "isUser", {
        get: function () {
            return this.userService.isUser();
        },
        enumerable: true,
        configurable: true
    });
    TemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'template-root',
            template: __webpack_require__("./src/app/template/template.component.html"),
            styles: [__webpack_require__("./src/app/template/template.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/signup']\" class=\"btn btn-link\">Register</a>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = (function () {
    function SignInComponent(router, activatedRoute, authenticationService, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.userService.logout();
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            _this.loading = false;
            if (result) {
                _this.userService.login(result);
                _this.navigateAfterSuccess();
            }
            else {
                _this.error = 'Username or password is incorrect';
            }
        }, function (error) {
            _this.error = 'Username or password is incorrect';
            _this.loading = false;
        });
    };
    SignInComponent.prototype.navigateAfterSuccess = function () {
        if (this.redirectUrl) {
            this.router.navigateByUrl(this.redirectUrl);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'signIn',
            template: __webpack_require__("./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_user_service__["a" /* UserService */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Register</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"firstName\">First Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"lastName\">Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { UserService } from '../../shared/user.service';
var SignUpComponent = (function () {
    function SignUpComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    //private userService: UserService
    //private toastr: ToastrService
    SignUpComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    SignUpComponent.prototype.resetForm = function (form) {
        /*if (form != null)
          form.reset();
        this.user = {
          UserName: '',
          Password: '',
          Email: '',
          FirstName: '',
          LastName: ''
        }*/
    };
    SignUpComponent.prototype.OnSubmit = function (form) {
        /*  this.userService.registerUser(form.value)
            .subscribe((data: any) => {
              if (data.Succeeded == true) {
                this.resetForm(form);
                this.toastr.success('User registration successful');
              }
              else
                this.toastr.error(data.Errors[0]);
            });*/
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>       "

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map