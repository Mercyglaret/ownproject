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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adddetail/adddetail.component.html":
/*!****************************************************!*\
  !*** ./src/app/adddetail/adddetail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\"> \n<div class=\"row mt-3\">\n  <div class=\"col-lg-4\">\n      <br>\n        <h3 class=\"\">Add<span> Detail</span></h3>\n    </div>\n    <div class=\"col-lg-6\">\n    </div>\n    <div class=\"col-lg-2 text-center\">\n      <br>\n        <div class=\"modal fade\" id=\"modalDetailForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n           <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n              <h4 class=\"modal-title w-100 font-weight-bold\">Add Other<span> Details</span></h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeBtn>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <form name=\"data\" #data=\"ngForm\" (ngSubmit)=\"addDetail(data.value)\">\n            <div class=\"modal-body mx-5\" ng-scrollbar>\n            <div class=\"md-form mb-3 mt-3\">\n                <input type=\"text\"  class=\"form-control\" placeholder=\"Customer Name\" name=\"name\" #name=\"ngModel\" ngModel>\n                <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            <div class=\"md-form mb-3 mt-3\">\n                <input type=\"text\"  class=\"form-control\" placeholder=\"Address\" name=\"address\" #address=\"ngModel\" ngModel>\n                <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            <div class=\"md-form mb-3 mt-3\">\n                <input type=\"text\"  class=\"form-control\" placeholder=\"Phone Number\" name=\"phnno\" #phnno=\"ngModel\" ngModel>\n                  <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            <div class=\"md-form mb-3 mt-3\">\n                 <input type=\"text\"  class=\"form-control\" placeholder=\"VLAN\" name=\"vlan\" #vlan=\"ngModel\" ngModel>\n                    <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            <div class=\"md-form mb-3 mt-3\">\n                  <input type=\"text\"  class=\"form-control\" placeholder=\"Port ID\" name=\"portid\" #portid=\"ngModel\" ngModel>\n                      <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            <div class=\"md-form mb-3 mt-3\">\n                  <input type=\"text\"  class=\"form-control\" placeholder=\"Tele-Phone IP\" name=\"telephnip\" #telephnip=\"ngModel\" ngModel>\n                        <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            <div class=\"md-form mb-3 mt-3\">\n                  <input type=\"text\"  class=\"form-control\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\" ngModel>\n                    <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            <div class=\"md-form mb-3 mt-3\">\n                  <input type=\"text\"  class=\"form-control\" placeholder=\"User ID\" name=\"userid\" #userid=\"ngModel\" ngModel>\n                      <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            <div class=\"md-form mb-3 mt-3\">\n                  <input type=\"text\"  class=\"form-control\" placeholder=\"MAC ID\" name=\"macid\" #macid=\"ngModel\" ngModel>\n                        <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n            </div>\n            \n            </div>\n            <div class=\"modal-footer d-flex justify-content-center\">\n              <!-- <button class=\"btn btn-dark\">Submit</button> -->\n            <button type=\"submit\" class=\"btn btn-dark\">Submit</button>\n              <!-- <a class=\"btn btn-dark\" routerLink=\"/dashboard/peer\">Submit</a> -->\n            </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-right\">\n        <a class=\"btn btn-success text-white btn-rounded mb-4\" [ngClass]=\"isSubmittingForm ?  'disabled-link' : ''\" data-toggle=\"modal\" data-target=\"#modalDetailForm\">Add New</a>\n      </div>\n      </div>\n</div>\n\n\n\n\n\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\"></div>\n        <div class=\"col-lg-4\"></div>\n        <div class=\"col-lg-4\">\n            <form>\n                <div>\n                  <input class=\"form-control\" name=\"searchInput\" #searchInput=\"ngModel\" placeholder=\"Search using VLAN...\" [(ngModel)]=\"searchTest\" >\n                </div>\n            </form>\n        </div>\n\n      </div>\n      <br>\n     \n\n        <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>VLAN</th>\n                <th>Phone-Numebr</th>\n                <th>View</th>\n                <!-- <th>Edit</th>-- -->\n                <th>Delete</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let data of Bind\">\n              <tr  *ngIf=\"filter(data)\" >\n                <td class=\"text-capitalize\">{{data.name}}</td>\n                <td>{{data.vlan}}</td>\n                <td>{{data.phnno}}</td>\n                <td><i routerLink=\"/home/viewdetail/{{data.id}}\" class=\"material-icons text-primary font\">\tremove_red_eye</i></td>\n                <!-- <td [ngClass]=\"isSubmittingForm ? 'disabled-link' : ''\" (click)=\"delAorg(data.id)\"><i class=\"material-icons text-success font\">edit</i></td> -->\n                <td [ngClass]=\"isSubmittingForm ? 'disabled-link' : ''\" (click)=\"deldata(data.id)\"><i class=\"material-icons text-danger font\">delete_forever</i></td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/adddetail/adddetail.component.scss":
/*!****************************************************!*\
  !*** ./src/app/adddetail/adddetail.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  color: green; }\n\n.btn-dark {\n  background-color: #262626 !important; }\n\n.modal {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  z-index: 1100;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n\nh3 {\n  font-weight: bolder; }\n\n.disabled-link {\n  pointer-events: none;\n  opacity: 0.6; }\n\na {\n  color: #262626;\n  text-decoration: underline; }\n\n.modal-body {\n  max-height: 350px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkZGV0YWlsL0M6XFxVc2Vyc1xcdGVjaHlcXERlc2t0b3BcXG93bnByb2plY3Qvc3JjXFxhcHBcXGFkZGRldGFpbFxcYWRkZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLG9DQUFvQyxFQUFBOztBQUV2QztFQUNPLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUVsQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7O0FBSWQ7RUFDSSxjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGRkZXRhaWwvYWRkZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4uYnRuLWRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuIC5tb2RhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDExMDA7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uZGlzYWJsZWQtbGluayB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuXHJcbiAgYXtcclxuICAgICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICB9XHJcbiAgLm1vZGFsLWJvZHkgeyBcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4OyBcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/adddetail/adddetail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adddetail/adddetail.component.ts ***!
  \**************************************************/
/*! exports provided: AdddetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddetailComponent", function() { return AdddetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var AdddetailComponent = /** @class */ (function () {
    function AdddetailComponent(dataService) {
        this.dataService = dataService;
        this.isSubmittingForm = false;
        this.searchTest = "";
    }
    AdddetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (data5) {
            _this.Bind = data5;
            console.log(_this.Bind);
        });
    };
    AdddetailComponent.prototype.closemodal = function () {
        this.closeBtn.nativeElement.click();
    };
    AdddetailComponent.prototype.addDetail = function (value) {
        var _this = this;
        console.log(value);
        this.dataService.postData(value).then(function (data1) {
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.ngOnInit();
            _this.data = {};
        }).catch(function () {
            // Handle error here id anything wrong with the network
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.data = {};
        });
    };
    AdddetailComponent.prototype.deldata = function (value) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Successfully', 'success');
                _this.isSubmittingForm = true;
                _this.dataService.deleteDetail(value).subscribe(function (res) {
                    _this.isSubmittingForm = false;
                    _this.ngOnInit();
                });
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Cancelled', 'Successfully', 'error');
            }
        });
    };
    AdddetailComponent.prototype.filter = function (data) {
        return data.vlan.toString().indexOf(this.searchTest.toString()) != -1;
        // return data.name.toString().indexOf(this.searchTest.toString()) != -1;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closeBtn"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdddetailComponent.prototype, "closeBtn", void 0);
    AdddetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adddetail',
            template: __webpack_require__(/*! ./adddetail.component.html */ "./src/app/adddetail/adddetail.component.html"),
            styles: [__webpack_require__(/*! ./adddetail.component.scss */ "./src/app/adddetail/adddetail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]])
    ], AdddetailComponent);
    return AdddetailComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ownproject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _adddetail_adddetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adddetail/adddetail.component */ "./src/app/adddetail/adddetail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/billing/billing.component.ts");
/* harmony import */ var _viewdetail_viewdetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viewdetail/viewdetail.component */ "./src/app/viewdetail/viewdetail.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _adddetail_adddetail_component__WEBPACK_IMPORTED_MODULE_8__["AdddetailComponent"],
                _billing_billing_component__WEBPACK_IMPORTED_MODULE_10__["BillingComponent"],
                _viewdetail_viewdetail_component__WEBPACK_IMPORTED_MODULE_11__["ViewdetailComponent"],
                _items_items_component__WEBPACK_IMPORTED_MODULE_12__["ItemsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'home/adddetail' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                        children: [
                            { path: 'adddetail', component: _adddetail_adddetail_component__WEBPACK_IMPORTED_MODULE_8__["AdddetailComponent"] },
                            { path: 'viewdetail/:id', component: _viewdetail_viewdetail_component__WEBPACK_IMPORTED_MODULE_11__["ViewdetailComponent"] },
                            { path: 'items', component: _items_items_component__WEBPACK_IMPORTED_MODULE_12__["ItemsComponent"] },
                            { path: 'billing', component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_10__["BillingComponent"] }
                        ] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/billing/billing.component.html":
/*!************************************************!*\
  !*** ./src/app/billing/billing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n <div class=\"container\">\n   <br>\n   <br>\n   <br>\n   <div class=\"row\">\n\n     <div class=\"col-lg-6 border1\">\n      <form name=\"item\" #item=\"ngForm\" (ngSubmit)=\"selectItem(item.value)\">\n\n       <div class=\"row\">\n\n         <div class=\"col-lg-4\">\n                <select name=\"selecteditem\" #selecteditem=\"ngModel\" class=\"btn text-center btn-success dropdown-toggle dropbtn\" ngModel>\n                    <option class=\"dropdown-item dropdown-content\" *ngFor=\"let data of items\">{{data.item}}</option>\n                  </select>\n                  <br>  \n                  <br> \n         </div>\n         <div class=\"col-lg-4\">\n            <input name=\"qty\" #qty=\"ngModel\" placeholder=\"Quantity\" type=\"text\" ngModel>\n            <br>  \n               <br> \n         </div>\n         <div class=\"col-lg-4\">\n            <button class=\"btn btn-dark\">submit</button>\n         </div>\n\n       </div>\n    \n     \n      </form> \n        \n<br>\n<br>\n<hr>\n<app-items>\n  </app-items>\n\n     </div>\n     <div class=\"col-lg-6\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <table class=\"table table-hover\">\n                    <thead>\n                      <tr>\n                        <th>Item Name</th>\n                        <th>Quantity</th>\n                        <th>Delete</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let data of list\">\n                        <td>{{data.selecteditem}}</td>\n                        <td>{{data.qty}}</td>\n                        <td [ngClass]=\"isSubmittingForm ? 'disabled-link' : ''\" (click)=\"delItem(data.id)\"><i class=\"material-icons text-danger font\">delete_forever</i></td>\n                      </tr>\n                    </tbody>\n                  </table> \n            </div>\n          </div>\n     </div>\n     \n\n   </div>\n   <div class=\"row\">\n      <div class=\"col-lg-6\">\n          \n       </div>\n     <div class=\"col-lg-6\">\n\n     </div>\n\n   </div>\n\n </div>\n\n"

/***/ }),

/***/ "./src/app/billing/billing.component.scss":
/*!************************************************!*\
  !*** ./src/app/billing/billing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  width: 100%;\n  outline: none; }\n\ninput {\n  width: 100%; }\n\n.border1 {\n  padding: 10px;\n  border-right: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy9DOlxcVXNlcnNcXHRlY2h5XFxEZXNrdG9wXFxvd25wcm9qZWN0L3NyY1xcYXBwXFxiaWxsaW5nXFxiaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxhQUFhO0VBQ2QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iaWxsaW5nL2JpbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJvcmRlcjF7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICBib3JkZXItcmlnaHQ6IDJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/billing/billing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/billing/billing.component.ts ***!
  \**********************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");



var BillingComponent = /** @class */ (function () {
    function BillingComponent(dataservice) {
        this.dataservice = dataservice;
        this.list = [];
    }
    BillingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataitem = JSON.parse(localStorage.getItem("selectedItem"));
        console.log(this.dataitem);
        this.dataservice.getItem().subscribe(function (data) {
            _this.items = data;
            console.log(_this.items);
        });
    };
    BillingComponent.prototype.selectItem = function (value) {
        console.log(value);
        // for(let i=0; i<this.dataitem[i].length; i++){
        //   if(value.selecteditem=this.dataitem[i].item){
        //   }
        // }\
        this.list.push(value);
        console.log(this.list);
        localStorage.setItem("selectedItem", JSON.stringify(this.list));
        this.ngOnInit();
    };
    BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.scss */ "./src/app/billing/billing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/dataservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/dataservice.service.ts ***!
  \****************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataserviceService = /** @class */ (function () {
    function DataserviceService(_httpClient) {
        this._httpClient = _httpClient;
    }
    DataserviceService.prototype.postData = function (value) {
        return this._httpClient.post("https://5d3fa8a1a42af00014869221.mockapi.io/datadetail", value).toPromise()
            .then(function (data) {
            Object(q__WEBPACK_IMPORTED_MODULE_3__["resolve"])(data);
        });
    };
    DataserviceService.prototype.getData = function () {
        var _this = this;
        return this._httpClient.get("https://5d3fa8a1a42af00014869221.mockapi.io/datadetail")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            // console.log('res --------------------------', res)
            _this.data1 = res;
            return _this.data1;
        }));
    };
    DataserviceService.prototype.deleteDetail = function (value) {
        var _this = this;
        return this._httpClient.delete('https://5d3fa8a1a42af00014869221.mockapi.io/datadetail/' + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.deldata = res;
            return _this.deldata;
        }));
    };
    DataserviceService.prototype.postItem = function (value) {
        return this._httpClient.post("https://5d3fa8a1a42af00014869221.mockapi.io/itemdetail", value).toPromise()
            .then(function (data) {
            Object(q__WEBPACK_IMPORTED_MODULE_3__["resolve"])(data);
        });
    };
    DataserviceService.prototype.getItem = function () {
        var _this = this;
        return this._httpClient.get("https://5d3fa8a1a42af00014869221.mockapi.io/itemdetail")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            // console.log('res --------------------------', res)
            _this.data1 = res;
            return _this.data1;
        }));
    };
    DataserviceService.prototype.deleteItem = function (value) {
        var _this = this;
        return this._httpClient.delete('https://5d3fa8a1a42af00014869221.mockapi.io/itemdetail/' + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.deldata = res;
            return _this.deldata;
        }));
    };
    DataserviceService.prototype.updated = function (id, value) {
        var _this = this;
        return this._httpClient.put("https://5d3fa8a1a42af00014869221.mockapi.io/datadetail/" + id, value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editdata = res;
            return _this.editdata;
        }));
    };
    DataserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataserviceService);
    return DataserviceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg back navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Charles<span class=\"col\">Dhanaraj</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li><a class=\"navbar-brand\" href=\"#\"></a></li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home/adddetail\">Add Details</a>\n        </li> \n        <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/home/items\">Items</a>\n          </li> -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home/billing\">Billing</a>\n        </li>\n        \n      <li class=\"nav-item\">\n        <!-- <a routerLink=\"/signup\"><button class=\"btn\">Logout<i class=\"fa fa-sign-in ml-2\"></i></button></a> -->\n        <div class=\"navigation\">\n            <a class=\"button\" routerLink=\"/login\">\n              <img src=\"https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg\">\n            <div class=\"logout\">LOGOUT</div>\n            </a>\n          </div>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n  background-color: #262626; }\n\n.col {\n  color: green;\n  margin-left: -10px !important;\n  font-weight: bolder; }\n\n.btn {\n  background-color: #262626;\n  border: 2px solid white !important;\n  color: white;\n  outline: none !important;\n  padding: 5px 8px;\n  font-size: 14px;\n  cursor: pointer; }\n\n.navigation {\n  width: 100%;\n  background-color: black; }\n\nimg {\n  width: 25px;\n  border-radius: 50px;\n  float: left; }\n\n.logout {\n  font-size: .8em;\n  font-family: 'Oswald', sans-serif;\n  position: relative;\n  right: -18px;\n  bottom: -4px;\n  overflow: hidden;\n  letter-spacing: 3px;\n  opacity: 0;\n  transition: opacity .45s;\n  -webkit-transition: opacity .35s; }\n\n.button {\n  text-decoration: none;\n  float: right;\n  padding: 12px;\n  margin: 0px;\n  color: white;\n  width: 50px;\n  background-color: black;\n  transition: width .35s;\n  -webkit-transition: width .35s;\n  overflow: hidden; }\n\na.button:hover {\n  width: 150px; }\n\na:hover .logout {\n  opacity: .9; }\n\na {\n  text-decoration: none; }\n\n.nav-link {\n  margin-top: 5px;\n  margin-right: 20px; }\n\n.navbar {\n  overflow: hidden;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHRlY2h5XFxEZXNrdG9wXFxvd25wcm9qZWN0L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsV0FBVztFQUNYLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQztFQUMvQixrQkFBa0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsZ0NBQWdDLEVBQUE7O0FBSWxDO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDZCxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZ0JBQ0YsRUFBQTs7QUFFRDtFQUNHLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHFCQUFxQixFQUFBOztBQUd6QjtFQUNBLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG59XHJcbi5jb2x7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ291dCB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAtMThweDtcclxuICAgIGJvdHRvbTogLTRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjQ1cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMzVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuMzVzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gIH1cclxuICBcclxuIGEuYnV0dG9uOmhvdmVyIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciAubG9nb3V0e1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuLm5hdi1saW5re1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbm1hcmdpbi1yaWdodDogMjBweDtcclxufSBcclxuLm5hdmJhciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n    <div class=\"row mt-3\">\n      <div class=\"col-lg-4\">\n          <br>\n            <h3 class=\"\">Add<span> Item</span></h3>\n        </div>\n        <div class=\"col-lg-4\">\n        </div>\n        <div class=\"col-lg-4 text-center\">\n          <br>\n            <div class=\"modal fade\" id=\"modalItemForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n            aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n               <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                  <h4 class=\"modal-title w-100 font-weight-bolder\">Add<span> Item</span></h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeBtn>\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <form name=\"items\" #items=\"ngForm\" (ngSubmit)=\"addItem(items.value)\">\n                <div class=\"modal-body mx-5\" ng-scrollbar>\n                <div class=\"md-form mb-3 mt-3\">\n                    <input type=\"text\"  class=\"form-control\" placeholder=\"Item Name\" name=\"item\" #item=\"ngModel\" ngModel>\n                    <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n                </div>\n                <div class=\"md-form mb-3 mt-3\">\n                    <input type=\"text\"  class=\"form-control\" placeholder=\"Price RS/-\" name=\"price\" #price=\"ngModel\" ngModel>\n                    <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\n                </div>\n                </div>\n                <div class=\"modal-footer d-flex justify-content-center\">\n                  <!-- <button class=\"btn btn-dark\">Submit</button> -->\n                <button type=\"submit\" class=\"btn btn-dark\">Submit</button>\n                  <!-- <a class=\"btn btn-dark\" routerLink=\"/dashboard/peer\">Submit</a> -->\n                </div>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div>\n            <a class=\"btn btn-success text-white btn-rounded mb-4\" [ngClass]=\"isSubmittingForm ?  'disabled-link' : ''\" data-toggle=\"modal\" data-target=\"#modalItemForm\">Add New</a>\n          </div>\n          </div>\n    </div>\n    \n    \n    \n    \n    \n    \n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th>Item Name</th>\n                    <th>Price Rs/-</th>\n                    <th>Delete</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let data of itemDis\">\n                    <td>{{data.item}}</td>\n                    <td>{{data.price}}</td>\n                    <td [ngClass]=\"isSubmittingForm ? 'disabled-link' : ''\" (click)=\"delItem(data.id)\"><i class=\"material-icons text-danger font\">delete_forever</i></td>\n                  </tr>\n                </tbody>\n              </table>\n        </div>\n      </div>\n    </div>\n    \n"

/***/ }),

/***/ "./src/app/items/items.component.scss":
/*!********************************************!*\
  !*** ./src/app/items/items.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  color: green; }\n\n.btn-dark {\n  background-color: #262626 !important; }\n\n.modal {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  z-index: 1100;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n\nh3 {\n  font-weight: bolder; }\n\n.disabled-link {\n  pointer-events: none;\n  opacity: 0.6; }\n\na {\n  color: #262626;\n  text-decoration: underline; }\n\n.modal-body {\n  max-height: 350px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvQzpcXFVzZXJzXFx0ZWNoeVxcRGVza3RvcFxcb3ducHJvamVjdC9zcmNcXGFwcFxcaXRlbXNcXGl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLG9DQUFvQyxFQUFBOztBQUd2QztFQUNPLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUVsQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7O0FBSWQ7RUFDSSxjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pdGVtcy9pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmJ0bi1kYXJre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gLm1vZGFsIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTEwMDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5kaXNhYmxlZC1saW5rIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG5cclxuICBhe1xyXG4gICAgICBjb2xvcjogIzI2MjYyNjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gIH1cclxuICAubW9kYWwtYm9keSB7IFxyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7IFxyXG4gICAgb3ZlcmZsb3cteTphdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.isSubmittingForm = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getItem().subscribe(function (data) {
            _this.itemDis = data;
            console.log(_this.itemDis);
        });
    };
    ItemsComponent.prototype.closemodal = function () {
        this.closeBtn.nativeElement.click();
    };
    ItemsComponent.prototype.addItem = function (value) {
        var _this = this;
        console.log(value);
        this.dataservice.postItem(value).then(function (data1) {
            _this.router.navigate(['/billing']);
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.ngOnInit();
            _this.data2 = {};
        }).catch(function () {
            // Handle error here id anything wrong with the network
            _this.isSubmittingForm = false;
            _this.closemodal();
            _this.data2 = {};
        });
    };
    ItemsComponent.prototype.delItem = function (value) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Successfully', 'success');
                _this.isSubmittingForm = true;
                _this.dataservice.deleteItem(value).subscribe(function (res) {
                    _this.isSubmittingForm = false;
                    _this.ngOnInit();
                });
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Cancelled', 'Successfully', 'error');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closeBtn"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ItemsComponent.prototype, "closeBtn", void 0);
    ItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.scss */ "./src/app/items/items.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/viewdetail/viewdetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/viewdetail/viewdetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br> \r\n<br>\r\n<br>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n\r\n            <div class=\"modal fade\" id=\"modalDetailForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n               <div class=\"modal-content\">\r\n                <div class=\"modal-header text-center\">\r\n                  <h4 class=\"modal-title w-100 font-weight-bold\">Edit<span> Details</span></h4>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeBtn>\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <form name=\"data\" #data=\"ngForm\" (ngSubmit)=\"updateDetail(data.value)\">\r\n                <div class=\"modal-body mx-5\" ng-scrollbar >\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                    <input type=\"text\"  class=\"form-control\" placeholder=\"Customer Name\" name=\"name\" [(ngModel)]=\"result.Name\">\r\n                    <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                    <input type=\"text\"  class=\"form-control\" placeholder=\"Address\" name=\"address\" [(ngModel)]=\"result.Address\">\r\n                    <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                    <input type=\"text\"  class=\"form-control\" placeholder=\"Phone Number\" name=\"phnno\" [(ngModel)]=\"result.Phnno\">\r\n                      <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                     <input type=\"text\"  class=\"form-control\" placeholder=\"VLAN\" name=\"vlan\" [(ngModel)]=\"result.Vlan\">\r\n                        <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                      <input type=\"text\"  class=\"form-control\" placeholder=\"Port ID\" name=\"portid\" [(ngModel)]=\"result.Portid\">\r\n                          <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                      <input type=\"text\"  class=\"form-control\" placeholder=\"Tele-Phone IP\" name=\"telephnip\" [(ngModel)]=\"result.Telephnip\">\r\n                            <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                      <input type=\"text\"  class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"result.Password\">\r\n                        <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                      <input type=\"text\"  class=\"form-control\" placeholder=\"User ID\" name=\"userid\" [(ngModel)]=\"result.Userid\">\r\n                          <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                <div class=\"md-form mb-3 mt-3\">\r\n                      <input type=\"text\"  class=\"form-control\" placeholder=\"MAC ID\" name=\"macid\" [(ngModel)]=\"result.Macid\">\r\n                            <!-- <label data-error=\"wrong\" data-success=\"right\" for=\"defaultForm-email\">Your email</label> -->\r\n                </div>\r\n                \r\n                </div>\r\n                <div class=\"modal-footer d-flex justify-content-center\">\r\n                  <!-- <button class=\"btn btn-dark\">Submit</button> -->\r\n                <button type=\"submit\" class=\"btn btn-dark\">Update</button>\r\n                  <!-- <a class=\"btn btn-dark\" routerLink=\"/dashboard/peer\">Submit</a> -->\r\n                </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-right\">\r\n            <a class=\"btn btn-success text-white btn-rounded mb-4\" [ngClass]=\"isSubmittingForm ?  'disabled-link' : ''\" data-toggle=\"modal\" data-target=\"#modalDetailForm\">Edit detail</a>\r\n          </div>\r\n\r\n          <div class=\"card\">\r\n        <h2 class=\"card-title text-center mt-2\">{{result.Name}}</h2>\r\n       </div>\r\n       <br>\r\n\r\n<div class=\"card-group\">\r\n\r\n      <div class=\"card\">\r\n      <div class=\"card-body\" >\r\n        <h4 class=\"card-title text\">Address</h4>\r\n      </div>\r\n      <div>\r\n        <br>\r\n        <p class=\"card-text text-center\">{{result.Address}}</p>\r\n        <br>\r\n      </div>\r\n    </div>\r\n  \r\n      <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text\">Phone No</h4>\r\n      </div>\r\n      <div>\r\n            <br>\r\n        <p class=\"card-text text-center\">{{result.Phnno}}</p>\r\n        <br>\r\n      </div>\r\n    </div>\r\n    \r\n        <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text\">VLAN</h4>\r\n      </div>\r\n      <div>\r\n            <br>\r\n        <p class=\"card-text text-center\">{{result.Vlan}}</p>\r\n        <br>\r\n      </div>\r\n    </div>\r\n    \r\n        <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text\">Port ID</h4>\r\n      </div>\r\n      <div>\r\n            <br>\r\n        <p class=\"card-text text-center\">{{result.Portid}}</p>\r\n        <br>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n</div>\r\n \r\n        </div>\r\n\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <br>\r\n                <br>\r\n    <div class=\"card-group\">\r\n     \r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title text\">Tele-Phone IP</h4>\r\n        </div>\r\n        <div>\r\n            <br>\r\n                <p class=\"card-text text-center\">{{result.Telephnip}}</p>\r\n            <br>\r\n    \r\n        </div>\r\n        </div>\r\n      \r\n          <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title text\">Password</h4>\r\n          </div>\r\n          <div>\r\n            <br>\r\n            <p class=\"card-text text-center\">{{result.Password}}</p>\r\n            <br>\r\n          </div>\r\n        </div>\r\n      \r\n          <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title text\">User ID</h4>\r\n          </div>\r\n          <div>\r\n                <br>\r\n            <p class=\"card-text text-center\">{{result.Userid}}</p>\r\n            <br>\r\n          </div>\r\n        </div>\r\n        \r\n            <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title text\">MAC ID</h4>\r\n          </div>\r\n          <div>\r\n                <br>\r\n            <p class=\"card-text text-center\">{{result.Macid}}</p>\r\n            <br>\r\n          </div>\r\n        </div>\r\n        \r\n    </div>\r\n    <br>\r\n     \r\n            </div>\r\n    \r\n        </div>\r\n\r\n</div>\r\n\r\n "

/***/ }),

/***/ "./src/app/viewdetail/viewdetail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/viewdetail/viewdetail.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-weight: bolder;\n  color: #05771f; }\n\n.card-body {\n  background-color: #262626 !important;\n  color: white; }\n\n.card-text {\n  color: #262626;\n  height: 40px;\n  background-color: white; }\n\n.text {\n  color: white; }\n\nspan {\n  color: green; }\n\n.btn-dark {\n  background-color: #262626 !important; }\n\n.modal {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  z-index: 1100;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n\nh3 {\n  font-weight: bolder; }\n\n.disabled-link {\n  pointer-events: none;\n  opacity: 0.6; }\n\na {\n  color: #262626;\n  text-decoration: underline; }\n\n.modal-body {\n  max-height: 350px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2RldGFpbC9DOlxcVXNlcnNcXHRlY2h5XFxEZXNrdG9wXFxvd25wcm9qZWN0L3NyY1xcYXBwXFx2aWV3ZGV0YWlsXFx2aWV3ZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFFZjtFQUNDLG9DQUFvQztFQUNqQyxZQUFXLEVBQUE7O0FBRWY7RUFDQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQWN4QjtFQUNBLFlBQVcsRUFBQTs7QUFHWDtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxvQ0FBb0MsRUFBQTs7QUFFdkM7RUFDTyxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFFbEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxvQkFBb0I7RUFDcEIsWUFBWSxFQUFBOztBQUlkO0VBQ0ksY0FBYztFQUNkLDBCQUEwQixFQUFBOztBQUc5QjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld2RldGFpbC92aWV3ZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0Y29sb3I6ICMwNTc3MWY7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2ICFpbXBvcnRhbnQ7IFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuXHRjb2xvcjogIzI2MjYyNjtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLy8gOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDRkUyOyB9XHJcblxyXG4vLyBib2R5IHtcclxuLy8gXHR3aWR0aDogMTAwJTtcclxuLy8gXHRoZWlnaHQ6IDEwMHZoO1xyXG4vLyBcdGRpc3BsYXk6IGZsZXg7XHJcbi8vIFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcclxuLy8gXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGREZCRkIsICNFQkVERUUgNzAlKTtcclxuLy8gfVxyXG5cclxuLnRleHQge1xyXG5jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4uYnRuLWRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuIC5tb2RhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDExMDA7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG59XHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uZGlzYWJsZWQtbGluayB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuXHJcbiAgYXtcclxuICAgICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICB9XHJcbiAgLm1vZGFsLWJvZHkgeyBcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4OyBcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/viewdetail/viewdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/viewdetail/viewdetail.component.ts ***!
  \****************************************************/
/*! exports provided: ViewdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdetailComponent", function() { return ViewdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewdetailComponent = /** @class */ (function () {
    function ViewdetailComponent(dataService, routing) {
        this.dataService = dataService;
        this.routing = routing;
        this.result = {
            Id: '',
            Name: '',
            Vlan: '',
            Address: '',
            Portid: '',
            Password: '',
            Userid: '',
            Macid: '',
            Telephnip: '',
            Phnno: ''
        };
    }
    ViewdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.routing.snapshot.params['id'];
        console.log(this.id);
        this.dataService.getData().subscribe(function (data5) {
            _this.bind = data5;
            console.log(_this.bind);
            for (var i = 0; i < _this.bind.length; i++) {
                if (_this.id === _this.bind[i].id) {
                    // this.result.Id=this.bind[i].id;
                    _this.result.Name = _this.bind[i].name;
                    _this.result.Address = _this.bind[i].address;
                    _this.result.Phnno = _this.bind[i].phnno;
                    _this.result.Vlan = _this.bind[i].vlan;
                    _this.result.Portid = _this.bind[i].portid;
                    _this.result.Telephnip = _this.bind[i].telephnip;
                    _this.result.Password = _this.bind[i].password;
                    _this.result.Userid = _this.bind[i].userid;
                    _this.result.Macid = _this.bind[i].macid;
                }
            }
        });
    };
    ViewdetailComponent.prototype.updateDetail = function (value) {
        var _this = this;
        console.log(value);
        this.dataService.updated(this.id, value).subscribe(function (res) {
            _this.edit = res;
        });
        this.closemodal();
    };
    ViewdetailComponent.prototype.closemodal = function () {
        this.closeBtn.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closeBtn"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ViewdetailComponent.prototype, "closeBtn", void 0);
    ViewdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewdetail',
            template: __webpack_require__(/*! ./viewdetail.component.html */ "./src/app/viewdetail/viewdetail.component.html"),
            styles: [__webpack_require__(/*! ./viewdetail.component.scss */ "./src/app/viewdetail/viewdetail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewdetailComponent);
    return ViewdetailComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\techy\Desktop\ownproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map