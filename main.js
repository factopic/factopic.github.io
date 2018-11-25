(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    display: inline-block;\r\n\r\n\r\n}\r\n\r\nbody{\r\n    background-color: rgb(218, 140, 23);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-header class=\"\"></app-header>\r\n<app-koinex class=\"all\"> </app-koinex>\r\n<app-coindelta class=\"all\"> </app-coindelta>\r\n<app-footer></app-footer>\r\n\r\n\r\n<!--\r\n<app-zebpay class=\"all\"> </app-zebpay>\r\n\r\n-->\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_coindelta_coindelta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/coindelta/coindelta.component */ "./src/app/component/coindelta/coindelta.component.ts");
/* harmony import */ var _component_koinex_koinex_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/koinex/koinex.component */ "./src/app/component/koinex/koinex.component.ts");
/* harmony import */ var _component_zebpay_zebpay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/zebpay/zebpay.component */ "./src/app/component/zebpay/zebpay.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { ServiceWorkerModule } from '@angular/service-worker';
//import { environment } from '../environments/environment';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _component_coindelta_coindelta_component__WEBPACK_IMPORTED_MODULE_4__["CoindeltaComponent"],
                _component_koinex_koinex_component__WEBPACK_IMPORTED_MODULE_5__["KoinexComponent"],
                _component_zebpay_zebpay_component__WEBPACK_IMPORTED_MODULE_6__["ZebpayComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/coindelta/coindelta.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/coindelta/coindelta.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-wrapper{\r\n   \r\n    width: 600px;\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n    overflow: scroll;\r\n}\r\n\r\n   \r\ntd{\r\n    text-transform: uppercase;\r\n}\r\n\r\n   \r\ntable th, td{\r\n\r\n    margin: 5px;\r\n    padding: 12px;\r\n    \r\n    text-align : center;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 20px;  \r\n      \r\n}\r\n\r\n   \r\ntr:hover {background-color: #f5f5f5;}\r\n\r\n   \r\n@media only screen and (max-device-width: 480px)\t\t/* styles for mobile browsers smaller than 480px; (iPhone) */\r\n  {\r\n  \r\n    table {\r\n        width: 100%\r\n    }\r\n\r\n    \r\n\r\n\t}\r\n\r\n   \r\n@media only screen and (device-width:768px)\t\t/* default iPad screens */\r\n\t{\r\n      \r\n        table {\r\n            width: 100%\r\n        }\r\n    \r\n    }\r\n\r\n   \r\n@media (min-width:961px) \t\t\t/* tablet, landscape iPad, lo-res laptops ands desktops */\r\n        {\r\n            table {\r\n                width: 100%\r\n            }\r\n        \r\n    \r\n    }\r\n\r\n   \r\n@media only screen and (min-width: 1140px)     /*  ipad pro \t*/\r\n    {\r\n        table {\r\n            width: 100%\r\n        }\r\n    \r\n\r\n    }"

/***/ }),

/***/ "./src/app/component/coindelta/coindelta.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/coindelta/coindelta.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> COINDELTA</h2>\n\n<div style=\"overflow-y:auto;  max-height: 500px !important;\">\n<table class=\"table-wrapper\" >\n \n  <tr>\n      <th>MarketName</th>\n      <th>Last Price</th>\n      <th>Ask</th>\n      <th>Bid</th>   \n  </tr>\n\n \n  <tr *ngFor=\"let bird of varCoindelta\">\n    <td>{{bird.MarketName}} </td>\n    <td>{{bird.Last}}</td>   \n    <td>{{bird.Ask}}</td>\n    <td>{{bird.Bid}}</td>\n  </tr>\n  \n</table>\n</div>\n\n<!--\n\n\n\n<div style=\"overflow-y:auto;  max-height: 500px !important;\">\n  \n<table mat-table [dataSource]=\"varCoindelta\" class=\"  table-wrapper \">\n\n  <!-- - Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n\n <!-- Weight Column ->\n <ng-container matColumnDef=\"MarketName\">\n  <th mat-header-cell *matHeaderCellDef> MarketName </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.MarketName}} </td>\n</ng-container>\n\n  <!-- Position Column ->\n  <ng-container matColumnDef=\"Ask\">\n    <th mat-header-cell *matHeaderCellDef> Ask. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.Ask}} </td>\n  </ng-container>\n\n  <!-- Name Column ->\n  <ng-container matColumnDef=\"Bid\">\n    <th mat-header-cell *matHeaderCellDef> Bid </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.Bid}} </td>\n  </ng-container>\n\n \n\n  <!-- Symbol Column ->\n  <ng-container matColumnDef=\"Last\">\n    <th mat-header-cell *matHeaderCellDef> Last </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.Last}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table>\n</div>\n\n\n//-->"

/***/ }),

/***/ "./src/app/component/coindelta/coindelta.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/coindelta/coindelta.component.ts ***!
  \************************************************************/
/*! exports provided: CoindeltaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoindeltaComponent", function() { return CoindeltaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coindelta_coindelta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/coindelta/coindelta.service */ "./src/app/services/coindelta/coindelta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoindeltaComponent = /** @class */ (function () {
    function CoindeltaComponent(coindeltaService) {
        this.coindeltaService = coindeltaService;
        this.displayedColumns = ['MarketName', 'Ask', 'Bid', 'Last'];
    }
    CoindeltaComponent.prototype.ngOnInit = function () { this.showCoindelta(); };
    CoindeltaComponent.prototype.showCoindelta = function () {
        var _this = this;
        this.coindeltaService.getCoindelta().subscribe(function (data) {
            console.log(data);
            //Observable.interval(3000).take(4).subscribe(() => this.timer());
            //  setTimeout(() => {
            _this.varCoindelta = data;
            // }, 2000);
        });
    };
    CoindeltaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coindelta',
            template: __webpack_require__(/*! ./coindelta.component.html */ "./src/app/component/coindelta/coindelta.component.html"),
            styles: [__webpack_require__(/*! ./coindelta.component.css */ "./src/app/component/coindelta/coindelta.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coindelta_coindelta_service__WEBPACK_IMPORTED_MODULE_1__["CoindeltaService"]])
    ], CoindeltaComponent);
    return CoindeltaComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color:rgb(85, 87, 90);\r\n    color: white;\r\n    text-align: center;\r\n }\r\n\r\n\r\n\r\nheader{\r\n   \r\n    font-size: 50px;\r\n    color: rgb(100, 241, 35);\r\n    \r\n    font-weight: 900;\r\n    font-family:  'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <header> Footer </header>\n</div>"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar{\r\n  \r\n    background-color:rgb(85, 87, 90);\r\n    width: 100%;\r\n    height: 120px;\r\n    margin: 0 , 0 , 10 ,0px;\r\n    \r\n  }\r\n\r\n\r\n\r\nheader{\r\n   \r\n    font-size: 50px;\r\n    color: rgb(100, 241, 35);\r\n    \r\n    font-weight: 900;\r\n    font-family:  'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\n    <header> Header </header>\n</div>"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/koinex/koinex.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/koinex/koinex.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-wrapper{\r\n   \r\n    width: 390px;\r\n    border: 1px solid black;\r\n    overflow-x: scroll;\r\n    \r\n}\r\n\r\n\r\ntr { display: block; float: left; }\r\n\r\n\r\ntable th, td{\r\n\r\n\r\n    margin: 5px;\r\n    padding: 9px;\r\n    width: 150px;\r\n\r\n    text-align : center;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n    display: block;\r\n    \r\n   \r\n   \r\n}\r\n\r\n\r\ntr:hover {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n\r\n@media only screen and (max-device-width: 480px)\t\t/* styles for mobile browsers smaller than 480px; (iPhone) */\r\n  {\r\n  \r\n    table {\r\n        width: 100%\r\n    }\r\n\r\n    \r\n\r\n\t}\r\n\r\n\r\n@media only screen and (device-width:768px)\t\t/* default iPad screens */\r\n\t{\r\n      \r\n        table {\r\n            width: 100%\r\n        }\r\n    \r\n    }\r\n\r\n\r\n@media (min-width:961px) \t\t\t/* tablet, landscape iPad, lo-res laptops ands desktops */\r\n        {\r\n            table {\r\n                width: 100%\r\n            }\r\n        \r\n    \r\n    }\r\n\r\n\r\n@media only screen and (min-width: 1140px)     /*  ipad pro \t*/\r\n    {\r\n        table {\r\n            width: 100%\r\n        }\r\n    \r\n\r\n    }"

/***/ }),

/***/ "./src/app/component/koinex/koinex.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/koinex/koinex.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>KOINEX</h2>\n\n<div style=\"overflow-y:auto;  max-height: 500px !important;\">\n<table class=\"table-wrapper\" >\n  <!-- ADD HEADERS -->\n  <thead>\n    <tr> <th><strong>Coins</strong> </th> </tr>\n    <tr> <th><strong>Price</strong></th> </tr>\n  </thead>\n  <tr>\n        <th>ETH-INR </th>\n        <th>BTC-INR</th>\n        <th>LTC-INR</th>\n        <th>XRP-INR</th>\n        <th>BCH-INR</th>\n        <th>OMG-INR</th>\n        <th>REQ-INR</th>\n        <th>ZRX-INR</th>\n        <th>GNT-INR</th>\n        <th>BAT-INR</th>\n        <th>AE-INR</th>\n        <th>TRX-INR</th>\n        <th>XLM-INR</th>\n        <th>NEO-INR</th>\n        <th>GAS-INR</th>\n  </tr>\n\n  <!-- BIND ARRAY TO TABLE -->\n  <tr>\n    <td>{{varKoinex?.prices.inr.ETH}}</td>   \n    <td>{{varKoinex?.prices.inr.BTC}}</td>\n    <td>{{varKoinex?.prices.inr.LTC}}</td>\n    <td>{{varKoinex?.prices.inr.XRP}}</td>\n    <td>{{varKoinex?.prices.inr.BCH}}</td>\n    <td>{{varKoinex?.prices.inr.OMG}}</td>\n    <td>{{varKoinex?.prices.inr.REQ}}</td>\n    <td>{{varKoinex?.prices.inr.ZRX}}</td>\n    <td>{{varKoinex?.prices.inr.GNT}}</td>\n    <td>{{varKoinex?.prices.inr.BAT}}</td>\n    <td>{{varKoinex?.prices.inr.AE}}</td>\n    <td>{{varKoinex?.prices.inr.TRX}}</td>\n    <td>{{varKoinex?.prices.inr.XLM}}</td>\n    <td>{{varKoinex?.prices.inr.NEO}}</td>\n    <td>{{varKoinex?.prices.inr.GAS}}</td>\n  </tr>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/component/koinex/koinex.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/koinex/koinex.component.ts ***!
  \******************************************************/
/*! exports provided: KoinexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KoinexComponent", function() { return KoinexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_koinex_koinex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/koinex/koinex.service */ "./src/app/services/koinex/koinex.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KoinexComponent = /** @class */ (function () {
    function KoinexComponent(koinexService) {
        this.koinexService = koinexService;
    }
    KoinexComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("OnInit Started..........");
        this.showKoinex();
        this.id = setInterval(function (a) {
            _this.showKoinex();
        }, 30000, []);
        console.log("OnInit Ended..........");
    };
    KoinexComponent.prototype.showKoinex = function () {
        var _this = this;
        this.koinexService.getKoinex().subscribe(function (data) {
            console.log("hello buddy");
            _this.varKoinex = data;
        });
    };
    /*stop setInterval() when user navigate away (by routing) to another component?
    https://stackoverflow.com/questions/37116619/angular-2-setinterval-keep-running-on-other-component

    */
    KoinexComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    ;
    KoinexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-koinex',
            template: __webpack_require__(/*! ./koinex.component.html */ "./src/app/component/koinex/koinex.component.html"),
            styles: [__webpack_require__(/*! ./koinex.component.css */ "./src/app/component/koinex/koinex.component.css")]
        }),
        __metadata("design:paramtypes", [_services_koinex_koinex_service__WEBPACK_IMPORTED_MODULE_1__["KoinexService"]])
    ], KoinexComponent);
    return KoinexComponent;
}());



/***/ }),

/***/ "./src/app/component/zebpay/zebpay.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/zebpay/zebpay.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-wrapper{\r\n   \r\n    width: 450px;\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n    overflow: scroll;\r\n}\r\n\r\n   \r\ntd{\r\n    text-transform: uppercase;\r\n}\r\n\r\n   \r\ntable th, td{\r\n\r\n\r\n    margin: 5px;\r\n    padding: 15px;\r\n    \r\n\r\n    text-align : center;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 20px;\r\n\r\n   \r\n   \r\n}\r\n\r\n   \r\ntr:hover {background-color: #f5f5f5;}\r\n\r\n   \r\n@media only screen and (max-device-width: 480px)\t\t/* styles for mobile browsers smaller than 480px; (iPhone) */\r\n  {\r\n  \r\n    table {\r\n        width: 100%\r\n    }\r\n\r\n    \r\n\r\n\t}\r\n\r\n   \r\n@media only screen and (device-width:768px)\t\t/* default iPad screens */\r\n\t{\r\n      \r\n        table {\r\n            width: 100%\r\n        }\r\n    \r\n    }\r\n\r\n   \r\n@media (min-width:961px) \t\t\t/* tablet, landscape iPad, lo-res laptops ands desktops */\r\n        {\r\n            table {\r\n                width: 100%\r\n            }\r\n        \r\n    \r\n    }\r\n\r\n   \r\n@media only screen and (min-width: 1140px)     /*  ipad pro \t*/\r\n    {\r\n        table {\r\n            width: 100%\r\n        }\r\n    \r\n\r\n    }"

/***/ }),

/***/ "./src/app/component/zebpay/zebpay.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/zebpay/zebpay.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> ZEBPAY</h2>\n\n<div style=\"overflow-y:auto;  max-height: 500px !important;\">\n  <table class=\"table-wrapper\">\n    <tr>\n      <th> Coin </th>\n      <th> Price</th>\n      <th> Volume</th>\n    </tr>\n\n\n    <!--   ///////////////////////////////////////////////////////////////////////      -->\n\n    <tr>\n      <td style=\" font-variant: small-caps \">{{varZebBTC?.pair}} </td>\n      <td>{{varZebBTC?.buy}} {{errorMsg}}</td>\n      <td>{{varZebBTC?.volume}}</td>\n     \n    </tr>\n  \n\n    <tr>\n      <td style=\" font-variant: small-caps \">{{varZebETH?.pair}}</td>\n      <td>{{varZebETH?.buy}}</td>\n      <td>{{varZebETH?.volume}}</td>\n  </tr>\n\n\n\n\n\n\n  <!--   ///////////////////////////////////////////////////////////////////////      -->\n\n\n\n\n\n\n  <tr>\n      <td style=\" font-variant: small-caps \">{{varZebXRP?.pair}}</td>\n      <td>{{varZebXRP?.buy}}</td>\n      <td>{{varZebXRP?.volume}}</td>\n  </tr>\n\n\n  <tr>\n      <td style=\" font-variant: small-caps \">{{varZebOMG?.pair}}</td>\n      <td>{{varZebOMG?.buy}}</td>\n      <td>{{varZebOMG?.volume}}</td>\n  </tr>\n\n\n  <tr>\n      <td style=\" font-variant: small-caps \">{{varZebTRX?.pair}}</td>\n      <td>{{varZebTRX?.buy}}</td>\n      <td>{{varZebTRX?.volume}}</td>\n  </tr>\n\n\n  <!--   ///////////////////////////////////////////////////////////////////////      -->\n\n  <tr>\n      <td style=\" font-variant: small-caps \">{{varZebEOS?.pair}}</td>\n      <td>{{varZebEOS?.buy}}</td>\n      <td>{{varZebEOS?.volume}}</td>\n  </tr>\n\n\n\n\n  <tr>\n      <td style=\" font-variant: small-caps \">{{varZebGNT?.pair}}</td>\n      <td>{{varZebGNT?.buy}}</td>\n      <td>{{varZebGNT?.volume}}</td>\n  </tr>\n\n\n\n  <tr>\n      <td style=\" font-variant: small-caps \">{{varZebAE?.pair}}</td>\n      <td>{{varZebAE?.buy}}</td>\n      <td>{{varZebAE?.volume}}</td>\n  </tr>\n\n\n\n  <tr>\n      <td style=\" font-variant: small-caps \">{{varZebZRX?.pair}}</td>\n      <td>{{varZebZRX?.buy}}</td>\n      <td>{{varZebZRX?.volume}}</td>\n  </tr>\n\n\n\n\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/component/zebpay/zebpay.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/zebpay/zebpay.component.ts ***!
  \******************************************************/
/*! exports provided: ZebpayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZebpayComponent", function() { return ZebpayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_zebpay_zebpay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/zebpay/zebpay.service */ "./src/app/services/zebpay/zebpay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZebpayComponent = /** @class */ (function () {
    function ZebpayComponent(zebService) {
        this.zebService = zebService;
    }
    ZebpayComponent.prototype.ngOnInit = function () {
        this.showZebBTC();
        /*   this.showZebETH();
           this.showZebLTC();
       
           this.showZebXRP();
           this.showZebTRX();
           this.showZebOMG();
       
           this.showZebEOS();
           this.showZebAE();
           this.showZebGNT();
           this.showZebZRX();
           */
    };
    ZebpayComponent.prototype.showZebBTC = function () {
        var _this = this;
        this.zebService.getZebBTC().subscribe(function (data) {
            console.log("Hi Zebpay BTC");
            _this.varZebBTC = data,
                function (error) { return _this.errorMsg = error; };
            document.write(_this.errorMsg);
            window.alert(_this.errorMsg);
        });
    };
    ZebpayComponent.prototype.showZebETH = function () {
        var _this = this;
        this.zebService.getZebEth().subscribe(function (data) {
            console.log("Hi Zebpay ETH");
            _this.varZebETH = data;
        });
    };
    ZebpayComponent.prototype.showZebLTC = function () {
        var _this = this;
        this.zebService.getZebLtc().subscribe(function (data) {
            console.log("Hi Zebpay LTC");
            _this.varZebLTC = data;
        });
    };
    ZebpayComponent.prototype.showZebXRP = function () {
        var _this = this;
        this.zebService.getZebXrp().subscribe(function (data) {
            console.log("Hi Zebpay xrp");
            _this.varZebXRP = data;
        });
    };
    ZebpayComponent.prototype.showZebTRX = function () {
        var _this = this;
        this.zebService.getZebTrx().subscribe(function (data) {
            console.log("Hi Zebpay TRX");
            _this.varZebTRX = data;
        });
    };
    ZebpayComponent.prototype.showZebOMG = function () {
        var _this = this;
        this.zebService.getZebOmg().subscribe(function (data) {
            console.log("Hi Zebpay OMG");
            _this.varZebOMG = data;
        });
    };
    ZebpayComponent.prototype.showZebGNT = function () {
        var _this = this;
        this.zebService.getZebGnt().subscribe(function (data) {
            console.log("Hi Zebpay LTC");
            _this.varZebGNT = data;
        });
    };
    ZebpayComponent.prototype.showZebAE = function () {
        var _this = this;
        this.zebService.getZebAe().subscribe(function (data) {
            console.log("Hi Zebpay AE");
            _this.varZebAE = data;
        });
    };
    ZebpayComponent.prototype.showZebEOS = function () {
        var _this = this;
        this.zebService.getZebEos().subscribe(function (data) {
            console.log("Hi Zebpay EOS");
            _this.varZebEOS = data;
        });
    };
    ZebpayComponent.prototype.showZebZRX = function () {
        var _this = this;
        this.zebService.getZebZrx().subscribe(function (data) {
            console.log("Hi Zebpay ZRX");
            _this.varZebZRX = data;
        });
    };
    ZebpayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zebpay',
            template: __webpack_require__(/*! ./zebpay.component.html */ "./src/app/component/zebpay/zebpay.component.html"),
            styles: [__webpack_require__(/*! ./zebpay.component.css */ "./src/app/component/zebpay/zebpay.component.css")]
        }),
        __metadata("design:paramtypes", [_services_zebpay_zebpay_service__WEBPACK_IMPORTED_MODULE_1__["ZebpayService"]])
    ], ZebpayComponent);
    return ZebpayComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: MATERIAL_MODULES,
            exports: MATERIAL_MODULES,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/coindelta/coindelta.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/coindelta/coindelta.service.ts ***!
  \*********************************************************/
/*! exports provided: CoindeltaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoindeltaService", function() { return CoindeltaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoindeltaService = /** @class */ (function () {
    function CoindeltaService(http) {
        this.http = http;
        this.coindeltaUrl = 'https://api.coindelta.com/api/v1/public/getticker/';
    }
    CoindeltaService.prototype.getCoindelta = function () {
        return this.http.get(this.coindeltaUrl);
    };
    CoindeltaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CoindeltaService);
    return CoindeltaService;
}());



/***/ }),

/***/ "./src/app/services/koinex/koinex.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/koinex/koinex.service.ts ***!
  \***************************************************/
/*! exports provided: KoinexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KoinexService", function() { return KoinexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KoinexService = /** @class */ (function () {
    function KoinexService(http) {
        this.http = http;
        this.koinexUrl = 'https://koinex.in/api/ticker';
    }
    KoinexService.prototype.getKoinex = function () {
        return this.http.get(this.koinexUrl);
    };
    KoinexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KoinexService);
    return KoinexService;
}());



/***/ }),

/***/ "./src/app/services/zebpay/zebpay.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/zebpay/zebpay.service.ts ***!
  \***************************************************/
/*! exports provided: ZebpayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZebpayService", function() { return ZebpayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ZebpayService = /** @class */ (function () {
    function ZebpayService(http) {
        this.http = http;
        this.varZebBtcUrl = 'https://www.zebapi.com/api/v1/market/ticker/btc/inr';
        this.varZebEthUrl = 'https://www.zebapi.com/api/v1/market/ticker/eth/inr';
        this.varZebLtcUrl = 'https://www.zebapi.com/api/v1/market/ticker/ltc/inr';
        this.varZebXrpUrl = 'https://www.zebapi.com/api/v1/market/ticker/xrp/inr';
        this.varZebOmgUrl = 'https://www.zebapi.com/api/v1/market/ticker/omg/inr';
        this.varZebTrxUrl = 'https://www.zebapi.com/api/v1/market/ticker/trx/inr';
        this.varZebEosUrl = 'https://www.zebapi.com/api/v1/market/ticker/eos/inr';
        this.varZebGntUrl = 'https://www.zebapi.com/api/v1/market/ticker/gnt/inr';
        this.varZebAeUrl = 'https://www.zebapi.com/api/v1/market/ticker/ae/inr';
        this.varZebZrxUrl = 'https://www.zebapi.com/api/v1/market/ticker/zrx/inr';
    }
    //------------------------------------------------------------------------
    ZebpayService.prototype.getZebBTC = function () {
        return this.http.get(this.varZebBtcUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ;
    ZebpayService.prototype.getZebEth = function () {
        return this.http.get(this.varZebEthUrl);
    };
    ZebpayService.prototype.getZebLtc = function () {
        return this.http.get(this.varZebLtcUrl);
    };
    //------------------------------------------------------------------------
    ZebpayService.prototype.getZebXrp = function () {
        return this.http.get(this.varZebXrpUrl);
    };
    ZebpayService.prototype.getZebTrx = function () {
        return this.http.get(this.varZebTrxUrl);
    };
    ZebpayService.prototype.getZebOmg = function () {
        return this.http.get(this.varZebOmgUrl);
    };
    //------------------------------------------------------------------------
    ZebpayService.prototype.getZebEos = function () {
        return this.http.get(this.varZebEosUrl);
    };
    ZebpayService.prototype.getZebAe = function () {
        return this.http.get(this.varZebAeUrl);
    };
    ZebpayService.prototype.getZebZrx = function () {
        return this.http.get(this.varZebZrxUrl);
    };
    ZebpayService.prototype.getZebGnt = function () {
        return this.http.get(this.varZebGntUrl);
    };
    ZebpayService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            // return  error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            //   return error.error;
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ZebpayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ZebpayService);
    return ZebpayService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Eclipse kayaka\angular\table\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map