webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(37);
	var platform_browser_dynamic_1 = __webpack_require__(319);
	var http_1 = __webpack_require__(202);
	// import {enableProdMode} from '@angular/core';
	var routes_1 = __webpack_require__(491);
	var app_1 = __webpack_require__(489);
	// enableProdMode()
	platform_browser_dynamic_1.bootstrap(app_1.App, [
	    http_1.HTTP_PROVIDERS,
	    routes_1.APP_ROUTER_PROVIDERS,
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	])
	    .catch(function (err) { return console.error(err); });
	

/***/ },

/***/ 335:
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
	var http_1 = __webpack_require__(202);
	__webpack_require__(372);
	var UserService = (function () {
	    function UserService(http) {
	        this.http = http;
	        this.authUserUrl = 'auth/authenticated_user';
	    }
	    UserService.prototype.initAuthUser = function () {
	        var _this = this;
	        return this.http.get(this.authUserUrl)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            console.log(result);
	            _this.user = result;
	            _this.name = result.username;
	            return true;
	        }, function (error) {
	            console.log(error);
	            return false;
	        })
	            .catch(this.handlerError);
	    };
	    UserService.prototype.getAuthUser = function () {
	        return this.http.get(this.authUserUrl)
	            .toPromise()
	            .then(function (response) { return response.json(); })
	            .catch(this.handlerError);
	    };
	    UserService.prototype.getName = function () {
	        return (this.user) ? this.user.username : '';
	    };
	    UserService.prototype.isAutorized = function () {
	        return this.user.is_autorized;
	    };
	    UserService.prototype.handlerError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], UserService);
	    return UserService;
	    var _a;
	}());
	exports.UserService = UserService;
	

/***/ },

/***/ 488:
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
	var auth_service_1 = __webpack_require__(335);
	var Account = (function () {
	    function Account(UserService) {
	        this.UserService = UserService;
	    }
	    Account.prototype.ngOnInit = function () {
	        console.log(this.UserService.getName());
	    };
	    Account = __decorate([
	        core_1.Component({
	            selector: 'account',
	            directives: [],
	            template: __webpack_require__(656)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.UserService !== 'undefined' && auth_service_1.UserService) === 'function' && _a) || Object])
	    ], Account);
	    return Account;
	    var _a;
	}());
	exports.Account = Account;
	

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
	var auth_service_1 = __webpack_require__(335);
	var App = (function () {
	    function App(UserService) {
	        this.UserService = UserService;
	        this.URL_LOGIN = "/login/steam/";
	        this.URL_LOGOUT = "/auth/logout/";
	        this.userLoaded = false;
	        this.is_authenticated = false;
	    }
	    App.prototype.ngOnInit = function () {
	        var _this = this;
	        this.UserService.initAuthUser()
	            .then(function (isInit) {
	            _this.userLoaded = isInit;
	            _this.initAuthUser();
	        });
	        // this.getAuthUserData();
	    };
	    // getAuthUserData() {
	    //     this.UserService
	    //         .getAuthUser()
	    //         .then(
	    //             user => {
	    //                 this.userLoaded = true;
	    //                 this.initAuthUser(user);
	    //             },
	    //             error => {
	    //                 this.userLoaded = true;
	    //                 this.is_authenticated = false;
	    //                 console.log(error);
	    //             }
	    //         );
	    // }
	    App.prototype.initAuthUser = function () {
	        this.is_authenticated = this.UserService.isAutorized();
	        this.userTitle = this.UserService.getName();
	    };
	    App.prototype.goToAccount = function () {
	        console.log('redirect in account');
	    };
	    App.prototype.routeLogIn = function () {
	        location.href = this.URL_LOGIN;
	    };
	    App.prototype.routeLogOut = function () {
	        location.href = this.URL_LOGOUT;
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            pipes: [],
	            providers: [auth_service_1.UserService],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            template: __webpack_require__(657),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.UserService !== 'undefined' && auth_service_1.UserService) === 'function' && _a) || Object])
	    ], App);
	    return App;
	    var _a;
	}());
	exports.App = App;
	

/***/ },

/***/ 490:
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
	            template: __webpack_require__(658)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GameDispute);
	    return GameDispute;
	}());
	exports.GameDispute = GameDispute;
	

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(141);
	var main_1 = __webpack_require__(492);
	var main_2 = __webpack_require__(490);
	var main_3 = __webpack_require__(488);
	var routes = [
	    {
	        path: '',
	        component: main_1.StartPage
	    },
	    {
	        path: 'pfg',
	        component: main_2.GameDispute
	    },
	    {
	        path: 'account',
	        component: main_3.Account
	    }
	];
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(routes)
	];
	

/***/ },

/***/ 492:
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
	            template: __webpack_require__(659),
	            animations: [
	                core_1.trigger('pageState', [
	                    core_1.state('in-from-left', core_1.style({
	                        transform: 'translateX(0)'
	                    })),
	                    core_1.state('in-from-right', core_1.style({
	                        transform: 'translateX(0)'
	                    })),
	                    core_1.transition('void => in-from-left', [
	                        core_1.style({ transform: 'translateX(-200%)' }),
	                        core_1.animate('0.3s ease-in')
	                    ]),
	                    core_1.transition('void => in-from-right', [
	                        core_1.style({ transform: 'translateX(200%)' }),
	                        core_1.animate('0.3s ease-in')
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

/***/ 656:
/***/ function(module, exports) {

	module.exports = "<h3>Личный кабинет</h3>\n<p>Добро пожаловать на площадку</p>\n"

/***/ },

/***/ 657:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-md-offset-3 col-md-6\">\n        <a class=\"logo\"\n           [routerLink]=\"['/']\"></a>\n    </div>\n    <div class=\"col-md-3 text-right\">\n        <div *ngIf=\"!userLoaded\">\n            <em>Идет загрузка данных...</em>\n        </div>\n        <div *ngIf=\"userLoaded && is_authenticated\">\n            <a class=\"log-in\"\n                 [routerLink]=\"['account']\">\n                <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> {{userTitle}}\n            </a>\n            <a class=\"log-in\"\n                 (click)=\"routeLogOut()\">\n                <span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span> Выйти\n            </a>\n        </div>\n        <a class=\"log-in\"\n             *ngIf=\"userLoaded && !is_authenticated\"\n             (click)=\"routeLogIn()\">\n            <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span> Войти\n        </a>\n    </div>\n</div>\n\n<main>\n    <router-outlet></router-outlet>\n</main>\n\n"

/***/ },

/***/ 658:
/***/ function(module, exports) {

	module.exports = "<h3>Спор через игру</h3>\n<p>Добро пожаловать на площадку</p>\n"

/***/ },

/***/ 659:
/***/ function(module, exports) {

	module.exports = "<div class=\"start-page row\">\n    <div class=\"col-md-offset-1 col-md-4\">\n        <a class=\"thumbnail text-center\"\n           @pageState=\"'in-from-left'\"\n           href=\"#\">\n            <div class=\"caption\">\n                <p>PfE</p>\n            </div>\n            <div class=\"pfe-logo\"></div>\n        </a>\n    </div>\n    <div class=\"col-md-offset-2 col-md-4\">\n        <a class=\"thumbnail text-center\"\n           @pageState=\"'in-from-right'\"\n           [routerLink]=\"['/pfg']\">\n            <div class=\"caption\">\n                <p>PfG</p>\n            </div>\n            <div class=\"pfg-logo\"></div>\n        </a>\n    </div>\n</div>\n"

/***/ }

});
//# sourceMappingURL=main.map