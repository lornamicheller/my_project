(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content forceOverscroll=\"false\">\n\n  <img class=\"logo\" src=\"assets/logo slash.png\" />\n\n  <div class=\"containers\">\n    <p>Iniciar Sesión</p>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding icon-container\">\n          <ion-icon class=\"icon\" ios=\"person-circle-outline\" md=\"person-circle-sharp\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"ion-no-padding input-container\">\n          <ion-input placeholder=\"Correo Electrónico\" type=\"email\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding icon-container\">\n          <ion-icon class=\"icon\" name=\"lock-closed-outline\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"ion-no-padding input-container\">\n          <ion-input placeholder=\"Contraseña\" type=\"password\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-button class=\"login-btn\" expand=\"block\">Iniciar Sesión</ion-button>\n\n\n    <ion-button class=\"register-btn\" expand=\"block\">Regístrate</ion-button>\n\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  width: 200px;\n  display: block;\n  margin: auto;\n  margin-top: 80px;\n}\n\n.icon {\n  text-align: center;\n  font-size: 30px;\n  color: #fff;\n  margin-left: 12px;\n  margin-top: 10px;\n}\n\nion-grid {\n  padding: 15px;\n  padding-top: 0;\n}\n\n.icon-container {\n  background: #333;\n  height: 50px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.input-container {\n  height: 50px;\n  background: #fff;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\nion-input {\n  --padding-start: 8px;\n  --padding-top: 17px;\n  font-size: 12x;\n}\n\nion-item {\n  --border-color: #333;\n  --border-bottom: 5px !important;\n  --background: transparent;\n  --padding-bottom: 5px;\n}\n\n.containers {\n  background: #FFDF02;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50%;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 10px;\n  padding-top: 30px;\n}\n\n.containers p {\n  text-align: center;\n  margin: 0;\n  margin-bottom: 10px;\n  font-size: 25px;\n  font-weight: 500;\n}\n\n.login-btn {\n  --background: #FFF;\n  --background-activated: #FFF;\n  --color: #333;\n  --color-activated: #333;\n  margin: 15px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  height: 50px;\n}\n\n.register-btn {\n  --background: #333;\n  --background-activated: #333;\n  margin: 15px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYXJpdmVyYS9Eb2N1bWVudHMvR2l0SHViL215X3Byb2plY3Qvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLmljb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxN3B4O1xuICAgIGZvbnQtc2l6ZTogMTJ4O1xufVxuXG5pb24taXRlbXsgXG4gICAgLS1ib3JkZXItY29sb3I6ICMzMzM7IFxuICAgIC0tYm9yZGVyLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jb250YWluZXJzIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZERjAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uY29udGFpbmVycyBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2dpbi1idG4ge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGRjtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkZGO1xuICAgIC0tY29sb3I6ICMzMzM7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzMzM7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLnJlZ2lzdGVyLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMzMzO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMzMzM7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGhlaWdodDogNTBweDtcbn0iLCIubG9nbyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLmljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMTJ4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMzMzO1xuICAtLWJvcmRlci1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jb250YWluZXJzIHtcbiAgYmFja2dyb3VuZDogI0ZGREYwMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uY29udGFpbmVycyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGRjtcbiAgLS1jb2xvcjogIzMzMztcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzMzM7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5yZWdpc3Rlci1idG4ge1xuICAtLWJhY2tncm91bmQ6ICMzMzM7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMzMzM7XG4gIG1hcmdpbjogMTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
    changeRegister(register) {
        this.register = register;
        console.log("statusChange");
    }
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map