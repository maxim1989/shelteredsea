webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(37);
	var platform_browser_dynamic_1 = __webpack_require__(319);
	var http_1 = __webpack_require__(311);
	// import {enableProdMode} from '@angular/core';
	var routes_1 = __webpack_require__(488);
	var app_1 = __webpack_require__(486);
	// enableProdMode()
	platform_browser_dynamic_1.bootstrap(app_1.App, [
	    http_1.HTTP_PROVIDERS,
	    routes_1.APP_ROUTER_PROVIDERS,
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	])
	    .catch(function (err) { return console.error(err); });
	

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(141);
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            pipes: [],
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(653),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	exports.App = App;
	

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var GameDispute = (function () {
	    function GameDispute() {
	    }
	    GameDispute = __decorate([
	        core_1.Component({
	            selector: 'pfg',
	            pipes: [],
	            providers: [],
	            directives: [],
	            template: __webpack_require__(654)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GameDispute);
	    return GameDispute;
	}());
	exports.GameDispute = GameDispute;
	

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(141);
	var main_1 = __webpack_require__(489);
	var main_2 = __webpack_require__(487);
	var routes = [
	    {
	        path: '',
	        component: main_1.StartPage
	    },
	    {
	        path: 'pfg',
	        component: main_2.GameDispute
	    }
	];
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(routes)
	];
	

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(141);
	var StartPage = (function () {
	    function StartPage() {
	    }
	    StartPage = __decorate([
	        core_1.Component({
	            selector: 'start_page',
	            pipes: [],
	            providers: [],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(655),
	            animations: [
	                core_1.trigger('pageState', [
	                    core_1.state('in-from-left', core_1.style({
	                        transform: 'translateX(0)'
	                    })),
	                    core_1.state('in-from-right', core_1.style({
	                        transform: 'translateX(0)'
	                    })),
	                    core_1.transition('void => in-from-left', [
	                        core_1.style({ transform: 'translateX(-100%)' }),
	                        core_1.animate(500)
	                    ]),
	                    core_1.transition('void => in-from-right', [
	                        core_1.style({ transform: 'translateX(100%)' }),
	                        core_1.animate(500)
	                    ])
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StartPage);
	    return StartPage;
	}());
	exports.StartPage = StartPage;
	

/***/ },

/***/ 653:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-md-offset-3 col-md-6\">\n        <a class=\"logo\"\n           [routerLink]=\"['/']\">&nbsp;</a>\n    </div>\n    <div class=\"col-md-offset-2 col-md-1 text-right\">\n        <a class=\"log-in\">\n           <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n        </a>\n    </div>\n</div>\n\n<main>\n    <router-outlet></router-outlet>\n</main>\n\n"

/***/ },

/***/ 654:
/***/ function(module, exports) {

	module.exports = "<h3>Home Component</h3>\n<p>Welcome to Angular Seed</p>\n"

/***/ },

/***/ 655:
/***/ function(module, exports) {

	module.exports = "<div class=\"start-page row\">\n    <div class=\"col-md-offset-1 col-md-4\">\n        <a class=\"thumbnail text-center\"\n           @pageState=\"'in-from-left'\"\n           href=\"#\">\n            <div class=\"pfe-logo\"></div>\n            <div class=\"caption\">\n                <p>PfE</p>\n            </div>\n        </a>\n    </div>\n    <div class=\"col-md-offset-2 col-md-4\">\n        <a class=\"thumbnail text-center\"\n           @pageState=\"'in-from-right'\"\n           [routerLink]=\"['/pfg']\">\n            <div class=\"pfg-logo\"></div>\n            <div class=\"caption\">\n                <p>PfG</p>\n            </div>\n        </a>\n    </div>\n</div>\n"

/***/ }

});
//# sourceMappingURL=main.map