(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/log-in/log-in.component */ "./src/app/comps/log-in/log-in.component.ts");



class AppComponent {
    constructor() {
        this.title = 'tic-tac';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-log-in");
    } }, directives: [_comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_screen_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/screen/screen.component */ "./src/app/comps/screen/screen.component.ts");
/* harmony import */ var _comps_x_or_o_x_or_o_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/x-or-o/x-or-o.component */ "./src/app/comps/x-or-o/x-or-o.component.ts");
/* harmony import */ var _comps_warper_warper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/warper/warper.component */ "./src/app/comps/warper/warper.component.ts");
/* harmony import */ var _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/log-in/log-in.component */ "./src/app/comps/log-in/log-in.component.ts");
/* harmony import */ var _comps_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/all-games/all-games.component */ "./src/app/comps/all-games/all-games.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _comps_screen_screen_component__WEBPACK_IMPORTED_MODULE_5__["ScreenComponent"],
        _comps_x_or_o_x_or_o_component__WEBPACK_IMPORTED_MODULE_6__["XOrOComponent"],
        _comps_warper_warper_component__WEBPACK_IMPORTED_MODULE_7__["WarperComponent"],
        _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_8__["LogInComponent"],
        _comps_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_9__["AllGamesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _comps_screen_screen_component__WEBPACK_IMPORTED_MODULE_5__["ScreenComponent"],
                    _comps_x_or_o_x_or_o_component__WEBPACK_IMPORTED_MODULE_6__["XOrOComponent"],
                    _comps_warper_warper_component__WEBPACK_IMPORTED_MODULE_7__["WarperComponent"],
                    _comps_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_8__["LogInComponent"],
                    _comps_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_9__["AllGamesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/all-games/all-games.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/all-games/all-games.component.ts ***!
  \********************************************************/
/*! exports provided: AllGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllGamesComponent", function() { return AllGamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _warper_warper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../warper/warper.component */ "./src/app/comps/warper/warper.component.ts");





function AllGamesComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2754");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllGamesComponent_div_0_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllGamesComponent_div_0_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.choose("tic-tac"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tic tac");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllGamesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "0 wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllGamesComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.choose("tic-tac"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "tic tac");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "10 wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllGamesComponent_div_0_span_12_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AllGamesComponent_div_0_button_13_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.s.player_details.name, " you have ", ctx_r0.s.player_details.wins, " wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.s.player_details.wins < 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.s.player_details.wins > 9);
} }
function AllGamesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-warper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllGamesComponent {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
    choose(game) {
        this.s.choose_game = game;
    }
}
AllGamesComponent.ɵfac = function AllGamesComponent_Factory(t) { return new (t || AllGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
AllGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllGamesComponent, selectors: [["app-all-games"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["id", "profile"], ["id", "tic-tac"], [1, "btn", "btn-black", 3, "click"], ["style", "font-size:50px;", 4, "ngIf"], ["class", "btn btn-black", 3, "click", 4, "ngIf"], [2, "font-size", "50px"]], template: function AllGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllGamesComponent_div_0_Template, 14, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllGamesComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.choose_game == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.choose_game == "tic-tac");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _warper_warper_component__WEBPACK_IMPORTED_MODULE_3__["WarperComponent"]], styles: ["#tic-tac[_ngcontent-%COMP%]{\r\n   margin: auto;\r\n    margin-top: 150px;\r\n    width: 100px;\r\n}\r\n\r\n.btn-black[_ngcontent-%COMP%]{\r\n    background-color: #000 !important;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWxsLWdhbWVzL2FsbC1nYW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csWUFBWTtJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7QUFFQSxlQUFlIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYWxsLWdhbWVzL2FsbC1nYW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpYy10YWN7XHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uYnRuLWJsYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qICNwcm9maWxle30gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllGamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-games',
                templateUrl: './all-games.component.html',
                styleUrls: ['./all-games.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/log-in/log-in.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/log-in/log-in.component.ts ***!
  \**************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _all_games_all_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-games/all-games.component */ "./src/app/comps/all-games/all-games.component.ts");





function LogInComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "games Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login or register from here to access.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.login(_r2.value, _r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.register(_r2.value, _r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-all-games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LogInComponent {
    constructor(s) {
        this.s = s;
        this.exists = false;
    }
    ngOnInit() {
    }
    register(name, p) {
        this.s.newregister(name, p);
        this.exists = true;
        this.s.player_details = { "name": name, "code": p, "wins": 0 };
    }
    login(name, p) {
        for (let i of this.s.profiles) {
            if (name == i.name && p == i.code) {
                this.exists = true;
                this.s.player_details = i;
            }
            console.log(i.name);
            console.log(i.code);
        }
        if (!this.exists) {
            alert("the code or the name are not coreccrt");
            console.log("alert");
        }
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["app-log-in"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "sidenav"], [1, "login-main-text"], [1, "main"], [1, "col-md-6", "col-sm-12"], [1, "login-form"], [1, "form-group"], ["type", "text", "placeholder", "User Name", 1, "form-control"], ["User_Name", ""], ["type", "password", "placeholder", "Password", 1, "form-control"], ["Password", ""], ["type", "submit", 1, "btn", "btn-black", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogInComponent_div_0_Template, 26, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogInComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.exists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _all_games_all_games_component__WEBPACK_IMPORTED_MODULE_3__["AllGamesComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n\r\n\r\n.main-head[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    background: #FFF;\r\n   \r\n}\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: #000;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    padding: 0px 10px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 450px) {\r\n    .login-form[_ngcontent-%COMP%]{\r\n        margin-top: 10%;\r\n    }\r\n\r\n    .register-form[_ngcontent-%COMP%]{\r\n        margin-top: 10%;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 768px){\r\n    .main[_ngcontent-%COMP%]{\r\n        margin-left: 40%; \r\n    }\r\n\r\n    .sidenav[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .login-form[_ngcontent-%COMP%]{\r\n        margin-top: 80%;\r\n    }\r\n\r\n    .register-form[_ngcontent-%COMP%]{\r\n        margin-top: 20%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.login-main-text[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    padding: 60px;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n}\r\n\r\n\r\n\r\n.btn-black[_ngcontent-%COMP%]{\r\n    background-color: #000 !important;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7Ozs7QUFFQTtJQUNJLFVBQVUsaUJBQWlCLENBQUM7QUFDaEM7Ozs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7OztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7UUFDVixNQUFNO1FBQ04sT0FBTztJQUNYOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYWluLWhlYWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgXHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAubG9naW4tZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlOyBcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZW5hdntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXItZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubG9naW4tbWFpbi10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi10ZXh0IGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmJ0bi1ibGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-log-in',
                templateUrl: './log-in.component.html',
                styleUrls: ['./log-in.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/screen/screen.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/screen/screen.component.ts ***!
  \**************************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ScreenComponent {
    // place=[1,2,3,4,5,6,7,8,9]
    constructor(s, http) {
        this.s = s;
        this.http = http;
        this.playr = "0";
        // setInterval(this.updeates,3000)
        // setInterval(this.updeates,3000)
    }
    //  document.querySelectorAll('[data-foo="value"]')
    ngOnInit() {
        this.playr = this.s.chose_x_or_o.toString();
    }
    chose(place) {
        this.s.check_turns();
        if (!place.activate && this.s.yourturn) {
            console.log(place.id);
            this.updeate(place.id);
            // this.updeates()
            // setTimeout(this.updeates, 15000);
            // setInterval(this.updeates,3000)
            this.s.yourturn = false;
        }
        else {
            console.log("not your turn");
        }
    }
    updeates() {
        console.log(this.s.arr1);
        let a = this.s.arr1;
        for (let place of this.s.arr1) {
            if (place.activate) {
                console.log("updeates");
                // document.querySelector(`div[place="${place.id}"]`).innerHTML += (this.playr == "x") ? this.x() : this.o()
                let element = document.querySelector(`div[place="${place.id}"`);
                if (element.childNodes.length < 1) {
                    element.innerHTML += (place.playr == "x") ? this.x() : this.o();
                }
                console.log(document.querySelector(`div[place="${place.id}"`));
            }
        }
    }
    updeate(id) {
        this.httpGet(`http://localhost:8080/tic-tac-data.json?id=${id}&playr=${this.s.chose_x_or_o}&name=${this.s.player_details.name}`)
            .subscribe((result) => {
            this.s.arr1 = result;
            console.log(this.s.arr1);
            console.log(this.s.arr1[0].id);
            console.log("updeate working");
            this.updeates();
            // this.isPaused = false
        });
        this.updeates();
        this.check(this.s.arr1, "o");
        this.check(this.s.arr1, "x");
    }
    httpGet(url) {
        return this.http.get(url);
    }
    check(a, b) {
        if (a[0].playr == b && a[1].playr == b && a[2].playr == b ||
            a[3].playr == b && a[4].playr == b && a[5].playr == b ||
            a[6].playr == b && a[7].playr == b && a[8].playr == b ||
            a[0].playr == b && a[3].playr == b && a[6].playr == b ||
            a[1].playr == b && a[4].playr == b && a[7].playr == b ||
            a[2].playr == b && a[5].playr == b && a[8].playr == b ||
            a[0].playr == b && a[4].playr == b && a[8].playr == b ||
            a[2].playr == b && a[4].playr == b && a[6].playr == b) {
            this.s.restart();
            this.s.refresh();
            for (let i of this.s.profiles) {
                if (this.s.player_details.name == i.name && this.s.player_details.code == i.code) {
                    this.s.player_details.wins = i.wins;
                }
            }
            console.log(b + " win");
        }
    }
    o() {
        return `<svg  width="5em" height="6em" viewBox="0 0 16 16" class="bi bi-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>`;
    }
    x() {
        return `<svg width="10em" height="10em" viewBox="0 3 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
    }
}
ScreenComponent.ɵfac = function ScreenComponent_Factory(t) { return new (t || ScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScreenComponent, selectors: [["app-screen"]], decls: 22, vars: 0, consts: [[1, "container"], ["src", "../assets/img/tic.png", "alt", "Snow", 2, "width", "100%", "height", "400px"], ["id", "top-left", "place", "1", 3, "click"], ["name3", ""], ["id", "top-centered", "place", "2", 3, "click"], ["name2", ""], ["id", "top-right", "place", "3", 3, "click"], ["name6", ""], ["id", "centered-left", "place", "4", 3, "click"], ["name4", ""], ["id", "centered", "place", "5", 3, "click"], ["name8", ""], ["id", "centered-right", "place", "6", 3, "click"], ["name5", ""], ["id", "bottom-left", "place", "7", 3, "click"], ["name", ""], ["id", "bottom-centered", "place", "8", 3, "click"], ["name1", ""], ["id", "bottom-right", "place", "9", 3, "click"], ["name7", ""], [3, "click"]], template: function ScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_2_listener() { return ctx.chose(ctx.s.arr1[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_4_listener() { return ctx.chose(ctx.s.arr1[1]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_6_listener() { return ctx.chose(ctx.s.arr1[2]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_8_listener() { return ctx.chose(ctx.s.arr1[3]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_10_listener() { return ctx.chose(ctx.s.arr1[4]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_12_listener() { return ctx.chose(ctx.s.arr1[5]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_14_listener() { return ctx.chose(ctx.s.arr1[6]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_16_listener() { return ctx.chose(ctx.s.arr1[7]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_div_click_18_listener() { return ctx.chose(ctx.s.arr1[8]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScreenComponent_Template_button_click_20_listener() { return ctx.s.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "restart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    \r\n    text-align: center;\r\n    \r\n  }\r\n  #bottom-left[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: red;\r\n    position: absolute;\r\n    width: 170px;\r\n    height:  100px;\r\n    bottom: 62px;\r\n    left: 162px;\r\n  }\r\n  #top-left[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: green;\r\n    position: absolute;\r\n    width: 170px;\r\n    height:  100px;\r\n    top: 30px;\r\n    left: 160px;\r\n  }\r\n  #top-right[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: violet;\r\n    position: absolute;\r\n    width: 170px;\r\n    height:  100px;\r\n    top: 30px;\r\n    right: 160px;\r\n  }\r\n  #bottom-right[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: black;\r\n    position: absolute;\r\n    width: 170px;\r\n    height:  100px;\r\n    bottom: 62px;\r\n    right: 160px;\r\n  }\r\n  #centered[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: blue;\r\n    position: absolute;\r\n    width: 180px;\r\n    height:  110px;\r\n    top: 200px;\r\n    left: 450px;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  #bottom-centered[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-color: blue;\r\n    position: absolute;\r\n    width: 180px;\r\n    height:  110px;\r\n    bottom: 10px;\r\n    left: 450px;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  #top-centered[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-color: blue;\r\n    position: absolute;\r\n    width: 180px;\r\n    height:  110px;\r\n    top: 80px;\r\n    left: 450px;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  #centered-left[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-color: green;\r\n    position: absolute;\r\n    width: 170px;\r\n    height:  100px;\r\n    top: 150px;\r\n    left: 160px;\r\n  }\r\n  #centered-right[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-color: green;\r\n    position: absolute;\r\n    width: 170px;\r\n    height:  100px;\r\n    top: 150px;\r\n    right: 160px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvc2NyZWVuL3NjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUdBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxTQUFTO0lBQ1QsV0FBVztFQUNiO0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxTQUFTO0lBQ1QsV0FBVztJQUNYLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9zY3JlZW4vc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICB9XHJcbiAgI2JvdHRvbS1sZWZ0IHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogIDEwMHB4O1xyXG4gICAgYm90dG9tOiA2MnB4O1xyXG4gICAgbGVmdDogMTYycHg7XHJcbiAgfVxyXG4gXHJcbiAgXHJcbiAgI3RvcC1sZWZ0IHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiAgMTAwcHg7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAxNjBweDtcclxuICB9XHJcbiAgXHJcbiAgI3RvcC1yaWdodCB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2aW9sZXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6ICAxMDBweDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHJpZ2h0OiAxNjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2JvdHRvbS1yaWdodCB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogIDEwMHB4O1xyXG4gICAgYm90dG9tOiA2MnB4O1xyXG4gICAgcmlnaHQ6IDE2MHB4O1xyXG4gIH1cclxuICBcclxuICAjY2VudGVyZWQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogIDExMHB4O1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIGxlZnQ6IDQ1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gICNib3R0b20tY2VudGVyZWR7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAgMTEwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiA0NTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAjdG9wLWNlbnRlcmVke1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogIDExMHB4O1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogNDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgI2NlbnRlcmVkLWxlZnR7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogIDEwMHB4O1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIGxlZnQ6IDE2MHB4O1xyXG4gIH1cclxuICAjY2VudGVyZWQtcmlnaHR7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogIDEwMHB4O1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIHJpZ2h0OiAxNjBweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-screen',
                templateUrl: './screen.component.html',
                styleUrls: ['./screen.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/warper/warper.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/warper/warper.component.ts ***!
  \**************************************************/
/*! exports provided: WarperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarperComponent", function() { return WarperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _x_or_o_x_or_o_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../x-or-o/x-or-o.component */ "./src/app/comps/x-or-o/x-or-o.component.ts");
/* harmony import */ var _screen_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../screen/screen.component */ "./src/app/comps/screen/screen.component.ts");






function WarperComponent_app_x_or_o_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-x-or-o");
} }
function WarperComponent_app_screen_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-screen");
} }
class WarperComponent {
    constructor(s) {
        this.s = s;
        this.empty = "";
    }
    ngOnInit() {
    }
}
WarperComponent.ɵfac = function WarperComponent_Factory(t) { return new (t || WarperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
WarperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarperComponent, selectors: [["app-warper"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function WarperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WarperComponent_app_x_or_o_0_Template, 1, 0, "app-x-or-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WarperComponent_app_screen_1_Template, 1, 0, "app-screen", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.chose_x_or_o == ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.s.chose_x_or_o !== ctx.empty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _x_or_o_x_or_o_component__WEBPACK_IMPORTED_MODULE_3__["XOrOComponent"], _screen_screen_component__WEBPACK_IMPORTED_MODULE_4__["ScreenComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3dhcnBlci93YXJwZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warper',
                templateUrl: './warper.component.html',
                styleUrls: ['./warper.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/x-or-o/x-or-o.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/x-or-o/x-or-o.component.ts ***!
  \**************************************************/
/*! exports provided: XOrOComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XOrOComponent", function() { return XOrOComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");



class XOrOComponent {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
    playrx() {
        this.s.chose_x_or_o = "x";
        this.s.yourturn = true;
    }
    playro() { this.s.chose_x_or_o = "o"; }
}
XOrOComponent.ɵfac = function XOrOComponent_Factory(t) { return new (t || XOrOComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
XOrOComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XOrOComponent, selectors: [["app-x-or-o"]], decls: 9, vars: 0, consts: [[3, "click"]], template: function XOrOComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XOrOComponent_Template_button_click_0_listener() { return ctx.playrx(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XOrOComponent_Template_button_click_2_listener() { return ctx.playro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XOrOComponent_Template_button_click_7_listener() { return ctx.s.choose_game = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3gtb3Itby94LW9yLW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XOrOComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-x-or-o',
                templateUrl: './x-or-o.component.html',
                styleUrls: ['./x-or-o.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/s/s1.service.ts":
/*!*********************************!*\
  !*** ./src/app/s/s1.service.ts ***!
  \*********************************/
/*! exports provided: S1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1Service", function() { return S1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class S1Service {
    constructor(http) {
        this.http = http;
        this.yourturn = false;
        this.activate = true;
        this.isPaused = true;
        this.chose_x_or_o = "";
        this.choose_game = '';
        this.httpGet(`http://localhost:8080/tic-tac-data.json`)
            .subscribe((result) => {
            this.arr1 = result;
            console.log(this.arr1);
            console.log(this.arr1[0].id);
            // ?id=1
            // ?playr
        });
        this.httpGet(`http://localhost:8080/profile.json`)
            .subscribe((result) => {
            this.profiles = result;
            console.log(this.profiles);
            console.log(this.arr1[0].id);
        });
    }
    // updeate(id) {
    //   this.httpGet(`http://localhost:8080/tic-tac-data.json?id=${id}&playr=${this.chose_x_or_o}&name=${this.player_details.name}`)
    //   .subscribe((result) => {
    //     this.arr1 = result
    //     console.log(this.arr1);
    //     console.log(this.arr1[0].id);
    //     console.log("updeate working");
    //     this.isPaused = false
    //   })
    // }
    restart() {
        this.httpGet(`http://localhost:8080/tic-tac-data.json?restart=true`)
            .subscribe((result) => {
            this.arr1 = result;
            console.log(this.arr1);
            console.log(this.arr1[0].id);
            console.log("restart working");
        });
        this.chose_x_or_o = "";
    }
    refresh() {
        this.httpGet(`http://localhost:8080/profile.json`)
            .subscribe((result) => {
            this.profiles = result;
            console.log(this.profiles);
            console.log(this.arr1[0].id);
        });
    }
    newregister(name, p) {
        this.httpGet(`http://localhost:8080/profile.json?name=${name}&code=${p}`)
            .subscribe((result) => {
            this.profiles = result;
            console.log(this.profiles);
            console.log("updet profiles working");
        });
    }
    check_turns() {
        let o = 0;
        let x = 0;
        this.httpGet(`http://localhost:8080/tic-tac-data.json`)
            .subscribe((result) => {
            this.arr1 = result;
            console.log(this.arr1);
            for (let turns of this.arr1) {
                if (turns.playr == "o") {
                    o++;
                }
                if (turns.playr == "x") {
                    x++;
                }
            }
            console.log("o=" + o);
            console.log("x=" + x);
            if (o >= x && this.chose_x_or_o == "x") {
                this.yourturn = true;
                console.log("o>x");
            }
            else if (o < x && this.chose_x_or_o == "o") {
                this.yourturn = true;
            }
        });
    }
    httpGet(url) {
        return this.http.get(url);
    }
}
S1Service.ɵfac = function S1Service_Factory(t) { return new (t || S1Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
S1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: S1Service, factory: S1Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](S1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\angular game\tic-tac\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map