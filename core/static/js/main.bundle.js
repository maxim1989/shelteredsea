webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(96);
	var app_module_1 = __webpack_require__(169);
	//noinspection TypeScriptValidateTypes
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(11);
	var toPromise_1 = __webpack_require__(149);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },

/***/ 47:
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
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(24);
	__webpack_require__(42);
	var UserService = (function () {
	    // private isInit: Promise = new Promise( this.initAuthUser );
	    function UserService(http) {
	        this.http = http;
	        this.AUTH_USER_URL = 'auth/authenticated_user';
	    }
	    UserService.prototype.initAuthUser = function () {
	        var _this = this;
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.get(this.AUTH_USER_URL)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            _this.user = result;
	            return true;
	        }, function (error) {
	            console.log(error);
	            return false;
	        })
	            .catch(this.handlerError);
	    };
	    UserService.prototype.getUser = function () {
	        return this.user;
	    };
	    UserService.prototype.getName = function () {
	        return (this.user) ? this.user.username : "";
	    };
	    UserService.prototype.isAutorized = function () {
	        return (this.user) ? this.user.is_autorized : false;
	    };
	    UserService.prototype.getUid = function () {
	        return (this.user) ? this.user.uid_for_client.name : "";
	    };
	    UserService.prototype.getDisputeName = function () {
	        return (this.user) ? this.user.dispute_name.name : "";
	    };
	    UserService.prototype.getStatisticName = function () {
	        return (this.user) ? this.user.statistic_name.name : "";
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

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2), __webpack_require__(97), __webpack_require__(45)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular2-material/core', '@angular/platform-browser'], factory) :
	    (factory((global.md = global.md || {}, global.md.core = global.md.core || {}),global.ng.core,global.md.core,global.ng.platformBrowser));
	}(this, (function (exports,_angular_core,_angular2Material_core,_angular_platformBrowser) { 'use strict';

	var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$1 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Shared directive to count lines inside a text area, such as a list item.
	 * Line elements can be extracted with a @ContentChildren(MdLine) query, then
	 * counted by checking the query list's length.
	 */
	var MdLine = (function () {
	    function MdLine() {
	    }
	    MdLine = __decorate$1([
	        _angular_core.Directive({ selector: '[md-line]' }), 
	        __metadata$1('design:paramtypes', [])
	    ], MdLine);
	    return MdLine;
	}());
	/* Helper that takes a query list of lines and sets the correct class on the host */
	var MdLineSetter = (function () {
	    function MdLineSetter(_lines, _renderer, _element) {
	        var _this = this;
	        this._lines = _lines;
	        this._renderer = _renderer;
	        this._element = _element;
	        this._setLineClass(this._lines.length);
	        this._lines.changes.subscribe(function () {
	            _this._setLineClass(_this._lines.length);
	        });
	    }
	    MdLineSetter.prototype._setLineClass = function (count) {
	        this._resetClasses();
	        if (count === 2 || count === 3) {
	            this._setClass("md-" + count + "-line", true);
	        }
	    };
	    MdLineSetter.prototype._resetClasses = function () {
	        this._setClass('md-2-line', false);
	        this._setClass('md-3-line', false);
	    };
	    MdLineSetter.prototype._setClass = function (className, bool) {
	        this._renderer.setElementClass(this._element.nativeElement, className, bool);
	    };
	    return MdLineSetter;
	}());
	var MdLineModule = (function () {
	    function MdLineModule() {
	    }
	    MdLineModule = __decorate$1([
	        _angular_core.NgModule({
	            exports: [MdLine],
	            declarations: [MdLine],
	        }), 
	        __metadata$1('design:paramtypes', [])
	    ], MdLineModule);
	    return MdLineModule;
	}());

	var __decorate$2 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$2 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Directive to listen to changes of direction of part of the DOM.
	 *
	 * Applications should use this directive instead of the native attribute so that Material
	 * components can listen on changes of direction.
	 */
	var Dir = (function () {
	    function Dir() {
	        this._dir = 'ltr';
	        this.dirChange = new _angular_core.EventEmitter();
	    }
	    Object.defineProperty(Dir.prototype, "dir", {
	        get: function () {
	            return this._dir;
	        },
	        set: function (v) {
	            var old = this._dir;
	            this._dir = v;
	            if (old != this._dir) {
	                this.dirChange.emit(null);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Dir.prototype, "value", {
	        get: function () { return this.dir; },
	        set: function (v) { this.dir = v; },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate$2([
	        _angular_core.Input('dir'), 
	        __metadata$2('design:type', String)
	    ], Dir.prototype, "_dir", void 0);
	    __decorate$2([
	        _angular_core.Output(), 
	        __metadata$2('design:type', Object)
	    ], Dir.prototype, "dirChange", void 0);
	    __decorate$2([
	        _angular_core.HostBinding('attr.dir'), 
	        __metadata$2('design:type', String)
	    ], Dir.prototype, "dir", null);
	    Dir = __decorate$2([
	        _angular_core.Directive({
	            selector: '[dir]',
	            // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
	            exportAs: '$implicit'
	        }), 
	        __metadata$2('design:paramtypes', [])
	    ], Dir);
	    return Dir;
	}());
	var RtlModule = (function () {
	    function RtlModule() {
	    }
	    RtlModule.forRoot = function () {
	        return {
	            ngModule: RtlModule,
	            providers: []
	        };
	    };
	    RtlModule = __decorate$2([
	        _angular_core.NgModule({
	            exports: [Dir],
	            declarations: [Dir]
	        }), 
	        __metadata$2('design:paramtypes', [])
	    ], RtlModule);
	    return RtlModule;
	}());

	/** TODO: internal */
	var ForegroundRippleState;
	(function (ForegroundRippleState) {
	    ForegroundRippleState[ForegroundRippleState["NEW"] = 0] = "NEW";
	    ForegroundRippleState[ForegroundRippleState["EXPANDING"] = 1] = "EXPANDING";
	    ForegroundRippleState[ForegroundRippleState["FADING_OUT"] = 2] = "FADING_OUT";
	})(ForegroundRippleState || (ForegroundRippleState = {}));
	/**
	 * Wrapper for a foreground ripple DOM element and its animation state.
	 * TODO: internal
	 */
	var ForegroundRipple = (function () {
	    function ForegroundRipple(rippleElement) {
	        this.rippleElement = rippleElement;
	        this.state = ForegroundRippleState.NEW;
	    }
	    return ForegroundRipple;
	}());
	var RIPPLE_SPEED_PX_PER_SECOND = 1000;
	var MIN_RIPPLE_FILL_TIME_SECONDS = 0.1;
	var MAX_RIPPLE_FILL_TIME_SECONDS = 0.3;
	/**
	 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
	 */
	var distanceToFurthestCorner = function (x, y, rect) {
	    var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
	    var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
	    return Math.sqrt(distX * distX + distY * distY);
	};
	/**
	 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
	 * The constructor takes a reference to the ripple directive's host element and a map of DOM
	 * event handlers to be installed on the element that triggers ripple animations.
	 * This will eventually become a custom renderer once Angular support exists.
	 * TODO: internal
	 */
	var RippleRenderer = (function () {
	    function RippleRenderer(_elementRef, _eventHandlers) {
	        this._eventHandlers = _eventHandlers;
	        this._rippleElement = _elementRef.nativeElement;
	        // It might be nice to delay creating the background until it's needed, but doing this in
	        // fadeInRippleBackground causes the first click event to not be handled reliably.
	        this._backgroundDiv = document.createElement('div');
	        this._backgroundDiv.classList.add('md-ripple-background');
	        this._rippleElement.appendChild(this._backgroundDiv);
	    }
	    /**
	     * Installs event handlers on the given trigger element, and removes event handlers from the
	     * previous trigger if needed.
	     */
	    RippleRenderer.prototype.setTriggerElement = function (newTrigger) {
	        var _this = this;
	        if (this._triggerElement !== newTrigger) {
	            if (this._triggerElement) {
	                this._eventHandlers.forEach(function (eventHandler, eventName) {
	                    _this._triggerElement.removeEventListener(eventName, eventHandler);
	                });
	            }
	            this._triggerElement = newTrigger;
	            if (this._triggerElement) {
	                this._eventHandlers.forEach(function (eventHandler, eventName) {
	                    _this._triggerElement.addEventListener(eventName, eventHandler);
	                });
	            }
	        }
	    };
	    /**
	     * Installs event handlers on the host element of the md-ripple directive.
	     */
	    RippleRenderer.prototype.setTriggerElementToHost = function () {
	        this.setTriggerElement(this._rippleElement);
	    };
	    /**
	     * Removes event handlers from the current trigger element if needed.
	     */
	    RippleRenderer.prototype.clearTriggerElement = function () {
	        this.setTriggerElement(null);
	    };
	    /**
	     * Creates a foreground ripple and sets its animation to expand and fade in from the position
	     * given by rippleOriginLeft and rippleOriginTop (or from the center of the <md-ripple>
	     * bounding rect if centered is true).
	     */
	    RippleRenderer.prototype.createForegroundRipple = function (rippleOriginLeft, rippleOriginTop, color, centered, radius, speedFactor, transitionEndCallback) {
	        var parentRect = this._rippleElement.getBoundingClientRect();
	        // Create a foreground ripple div with the size and position of the fully expanded ripple.
	        // When the div is created, it's given a transform style that causes the ripple to be displayed
	        // small and centered on the event location (or the center of the bounding rect if the centered
	        // argument is true). Removing that transform causes the ripple to animate to its natural size.
	        var startX = centered ? (parentRect.left + parentRect.width / 2) : rippleOriginLeft;
	        var startY = centered ? (parentRect.top + parentRect.height / 2) : rippleOriginTop;
	        var offsetX = startX - parentRect.left;
	        var offsetY = startY - parentRect.top;
	        var maxRadius = radius > 0 ? radius : distanceToFurthestCorner(startX, startY, parentRect);
	        var rippleDiv = document.createElement('div');
	        this._rippleElement.appendChild(rippleDiv);
	        rippleDiv.classList.add('md-ripple-foreground');
	        rippleDiv.style.left = (offsetX - maxRadius) + "px";
	        rippleDiv.style.top = (offsetY - maxRadius) + "px";
	        rippleDiv.style.width = 2 * maxRadius + "px";
	        rippleDiv.style.height = rippleDiv.style.width;
	        // If color input is not set, this will default to the background color defined in CSS.
	        rippleDiv.style.backgroundColor = color;
	        // Start the ripple tiny.
	        rippleDiv.style.transform = "scale(0.001)";
	        var fadeInSeconds = (1 / (speedFactor || 1)) * Math.max(MIN_RIPPLE_FILL_TIME_SECONDS, Math.min(MAX_RIPPLE_FILL_TIME_SECONDS, maxRadius / RIPPLE_SPEED_PX_PER_SECOND));
	        rippleDiv.style.transitionDuration = fadeInSeconds + "s";
	        // https://timtaubert.de/blog/2012/09/css-transitions-for-dynamically-created-dom-elements/
	        window.getComputedStyle(rippleDiv).opacity;
	        rippleDiv.classList.add('md-ripple-fade-in');
	        // Clearing the transform property causes the ripple to animate to its full size.
	        rippleDiv.style.transform = '';
	        var ripple = new ForegroundRipple(rippleDiv);
	        ripple.state = ForegroundRippleState.EXPANDING;
	        rippleDiv.addEventListener('transitionend', function (event) { return transitionEndCallback(ripple, event); });
	    };
	    /**
	     * Fades out a foreground ripple after it has fully expanded and faded in.
	     */
	    RippleRenderer.prototype.fadeOutForegroundRipple = function (ripple) {
	        ripple.classList.remove('md-ripple-fade-in');
	        ripple.classList.add('md-ripple-fade-out');
	    };
	    /**
	     * Removes a foreground ripple from the DOM after it has faded out.
	     */
	    RippleRenderer.prototype.removeRippleFromDom = function (ripple) {
	        ripple.parentElement.removeChild(ripple);
	    };
	    /**
	     * Fades in the ripple background.
	     */
	    RippleRenderer.prototype.fadeInRippleBackground = function (color) {
	        this._backgroundDiv.classList.add('md-ripple-active');
	        // If color is not set, this will default to the background color defined in CSS.
	        this._backgroundDiv.style.backgroundColor = color;
	    };
	    /**
	     * Fades out the ripple background.
	     */
	    RippleRenderer.prototype.fadeOutRippleBackground = function () {
	        if (this._backgroundDiv) {
	            this._backgroundDiv.classList.remove('md-ripple-active');
	        }
	    };
	    return RippleRenderer;
	}());

	var __decorate$3 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$3 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var MdRipple = (function () {
	    function MdRipple(_elementRef) {
	        var _this = this;
	        /**
	         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
	         * will be the distance from the center of the ripple to the furthest corner of the host element's
	         * bounding rectangle.
	         */
	        this.maxRadius = 0;
	        /**
	         * If set, the normal duration of ripple animations is divided by this value. For example,
	         * setting it to 0.5 will cause the animations to take twice as long.
	         */
	        this.speedFactor = 1;
	        // These event handlers are attached to the element that triggers the ripple animations.
	        var eventHandlers = new Map();
	        eventHandlers.set('mousedown', function (event) { return _this._mouseDown(event); });
	        eventHandlers.set('click', function (event) { return _this._click(event); });
	        eventHandlers.set('mouseleave', function (event) { return _this._mouseLeave(event); });
	        this._rippleRenderer = new RippleRenderer(_elementRef, eventHandlers);
	    }
	    /** TODO: internal */
	    MdRipple.prototype.ngOnInit = function () {
	        // If no trigger element was explicity set, use the host element
	        if (!this.trigger) {
	            this._rippleRenderer.setTriggerElementToHost();
	        }
	    };
	    /** TODO: internal */
	    MdRipple.prototype.ngOnDestroy = function () {
	        // Remove event listeners on the trigger element.
	        this._rippleRenderer.clearTriggerElement();
	    };
	    /** TODO: internal */
	    MdRipple.prototype.ngOnChanges = function (changes) {
	        // If the trigger element changed (or is being initially set), add event listeners to it.
	        var changedInputs = Object.keys(changes);
	        if (changedInputs.indexOf('trigger') !== -1) {
	            this._rippleRenderer.setTriggerElement(this.trigger);
	        }
	    };
	    /**
	     * Responds to the start of a ripple animation trigger by fading the background in.
	     */
	    MdRipple.prototype.start = function () {
	        this._rippleRenderer.fadeInRippleBackground(this.backgroundColor);
	    };
	    /**
	     * Responds to the end of a ripple animation trigger by fading the background out, and creating a
	     * foreground ripple that expands from the event location (or from the center of the element if
	     * the "centered" property is set or forceCenter is true).
	     */
	    MdRipple.prototype.end = function (left, top, forceCenter) {
	        var _this = this;
	        if (forceCenter === void 0) { forceCenter = true; }
	        this._rippleRenderer.createForegroundRipple(left, top, this.color, this.centered || forceCenter, this.maxRadius, this.speedFactor, function (ripple, e) { return _this._rippleTransitionEnded(ripple, e); });
	        this._rippleRenderer.fadeOutRippleBackground();
	    };
	    MdRipple.prototype._rippleTransitionEnded = function (ripple, event) {
	        if (event.propertyName === 'opacity') {
	            // If the ripple finished expanding, start fading it out. If it finished fading out,
	            // remove it from the DOM.
	            switch (ripple.state) {
	                case ForegroundRippleState.EXPANDING:
	                    this._rippleRenderer.fadeOutForegroundRipple(ripple.rippleElement);
	                    ripple.state = ForegroundRippleState.FADING_OUT;
	                    break;
	                case ForegroundRippleState.FADING_OUT:
	                    this._rippleRenderer.removeRippleFromDom(ripple.rippleElement);
	                    break;
	            }
	        }
	    };
	    /**
	     * Called when the trigger element receives a mousedown event. Starts the ripple animation by
	     * fading in the background.
	     */
	    MdRipple.prototype._mouseDown = function (event) {
	        if (!this.disabled && event.button === 0) {
	            this.start();
	        }
	    };
	    /**
	     * Called when the trigger element receives a click event. Creates a foreground ripple and
	     * runs its animation.
	     */
	    MdRipple.prototype._click = function (event) {
	        if (!this.disabled && event.button === 0) {
	            // If screen and page positions are all 0, this was probably triggered by a keypress.
	            // In that case, use the center of the bounding rect as the ripple origin.
	            // FIXME: This fails on IE11, which still sets pageX/Y and screenX/Y on keyboard clicks.
	            var isKeyEvent = (event.screenX === 0 && event.screenY === 0 && event.pageX === 0 && event.pageY === 0);
	            this.end(event.pageX, event.pageY, isKeyEvent);
	        }
	    };
	    /**
	     * Called when the trigger element receives a mouseleave event. Fades out the background.
	     */
	    MdRipple.prototype._mouseLeave = function (event) {
	        // We can always fade out the background here; It's a no-op if it was already inactive.
	        this._rippleRenderer.fadeOutRippleBackground();
	    };
	    __decorate$3([
	        _angular_core.Input('md-ripple-trigger'), 
	        __metadata$3('design:type', Object)
	    ], MdRipple.prototype, "trigger", void 0);
	    __decorate$3([
	        _angular_core.Input('md-ripple-centered'), 
	        __metadata$3('design:type', Boolean)
	    ], MdRipple.prototype, "centered", void 0);
	    __decorate$3([
	        _angular_core.Input('md-ripple-disabled'), 
	        __metadata$3('design:type', Boolean)
	    ], MdRipple.prototype, "disabled", void 0);
	    __decorate$3([
	        _angular_core.Input('md-ripple-max-radius'), 
	        __metadata$3('design:type', Number)
	    ], MdRipple.prototype, "maxRadius", void 0);
	    __decorate$3([
	        _angular_core.Input('md-ripple-speed-factor'), 
	        __metadata$3('design:type', Number)
	    ], MdRipple.prototype, "speedFactor", void 0);
	    __decorate$3([
	        _angular_core.Input('md-ripple-color'), 
	        __metadata$3('design:type', String)
	    ], MdRipple.prototype, "color", void 0);
	    __decorate$3([
	        _angular_core.Input('md-ripple-background-color'), 
	        __metadata$3('design:type', String)
	    ], MdRipple.prototype, "backgroundColor", void 0);
	    __decorate$3([
	        _angular_core.HostBinding('class.md-ripple-focused'),
	        _angular_core.Input('md-ripple-focused'), 
	        __metadata$3('design:type', Boolean)
	    ], MdRipple.prototype, "focused", void 0);
	    __decorate$3([
	        _angular_core.HostBinding('class.md-ripple-unbounded'),
	        _angular_core.Input('md-ripple-unbounded'), 
	        __metadata$3('design:type', Boolean)
	    ], MdRipple.prototype, "unbounded", void 0);
	    MdRipple = __decorate$3([
	        _angular_core.Directive({
	            selector: '[md-ripple]',
	        }), 
	        __metadata$3('design:paramtypes', [_angular_core.ElementRef])
	    ], MdRipple);
	    return MdRipple;
	}());
	var MdRippleModule = (function () {
	    function MdRippleModule() {
	    }
	    MdRippleModule.forRoot = function () {
	        return {
	            ngModule: MdRippleModule,
	            providers: []
	        };
	    };
	    MdRippleModule = __decorate$3([
	        _angular_core.NgModule({
	            exports: [MdRipple],
	            declarations: [MdRipple],
	        }), 
	        __metadata$3('design:paramtypes', [])
	    ], MdRippleModule);
	    return MdRippleModule;
	}());

	// TODO(kara): Revisit why error messages are not being properly set.
	var __extends$3 = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Wrapper around Error that sets the error message.
	 */
	var MdError = (function (_super) {
	    __extends$3(MdError, _super);
	    function MdError(value) {
	        _super.call(this);
	        this.message = value;
	    }
	    return MdError;
	}(Error));

	var __extends$2 = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
	var MdComponentPortalAttachedToDomWithoutOriginError = (function (_super) {
	    __extends$2(MdComponentPortalAttachedToDomWithoutOriginError, _super);
	    function MdComponentPortalAttachedToDomWithoutOriginError() {
	        _super.call(this, 'A ComponentPortal must have an origin set when attached to a DomPortalHost ' +
	            'because the DOM element is not part of the Angular application context.');
	    }
	    return MdComponentPortalAttachedToDomWithoutOriginError;
	}(MdError));
	/** Exception thrown when attempting to attach a null portal to a host. */
	var MdNullPortalError = (function (_super) {
	    __extends$2(MdNullPortalError, _super);
	    function MdNullPortalError() {
	        _super.call(this, 'Must provide a portal to attach');
	    }
	    return MdNullPortalError;
	}(MdError));
	/** Exception thrown when attempting to attach a portal to a host that is already attached. */
	var MdPortalAlreadyAttachedError = (function (_super) {
	    __extends$2(MdPortalAlreadyAttachedError, _super);
	    function MdPortalAlreadyAttachedError() {
	        _super.call(this, 'Host already has a portal attached');
	    }
	    return MdPortalAlreadyAttachedError;
	}(MdError));
	/** Exception thrown when attempting to attach a portal to an already-disposed host. */
	var MdPortalHostAlreadyDisposedError = (function (_super) {
	    __extends$2(MdPortalHostAlreadyDisposedError, _super);
	    function MdPortalHostAlreadyDisposedError() {
	        _super.call(this, 'This PortalHost has already been disposed');
	    }
	    return MdPortalHostAlreadyDisposedError;
	}(MdError));
	/** Exception thrown when attempting to attach an unknown portal type. */
	var MdUnknownPortalTypeError = (function (_super) {
	    __extends$2(MdUnknownPortalTypeError, _super);
	    function MdUnknownPortalTypeError() {
	        _super.call(this, 'Attempting to attach an unknown Portal type. ' +
	            'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.');
	    }
	    return MdUnknownPortalTypeError;
	}(MdError));
	/** Exception thrown when attempting to attach a portal to a null host. */
	var MdNullPortalHostError = (function (_super) {
	    __extends$2(MdNullPortalHostError, _super);
	    function MdNullPortalHostError() {
	        _super.call(this, 'Attempting to attach a portal to a null PortalHost');
	    }
	    return MdNullPortalHostError;
	}(MdError));
	/** Exception thrown when attempting to detach a portal that is not attached. */
	var MdNoPortalAttachedError = (function (_super) {
	    __extends$2(MdNoPortalAttachedError, _super);
	    function MdNoPortalAttachedError() {
	        _super.call(this, 'Attempting to detach a portal that is not attached to a host');
	    }
	    return MdNoPortalAttachedError;
	}(MdError));

	var __extends$1 = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * A `Portal` is something that you want to render somewhere else.
	 * It can be attach to / detached from a `PortalHost`.
	 */
	var Portal = (function () {
	    function Portal() {
	    }
	    /** Attach this portal to a host. */
	    Portal.prototype.attach = function (host) {
	        if (host == null) {
	            throw new MdNullPortalHostError();
	        }
	        if (host.hasAttached()) {
	            throw new MdPortalAlreadyAttachedError();
	        }
	        this._attachedHost = host;
	        return host.attach(this);
	    };
	    /** Detach this portal from its host */
	    Portal.prototype.detach = function () {
	        var host = this._attachedHost;
	        if (host == null) {
	            throw new MdNoPortalAttachedError();
	        }
	        this._attachedHost = null;
	        return host.detach();
	    };
	    Object.defineProperty(Portal.prototype, "isAttached", {
	        /** Whether this portal is attached to a host. */
	        get: function () {
	            return this._attachedHost != null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Sets the PortalHost reference without performing `attach()`. This is used directly by
	     * the PortalHost when it is performing an `attach()` or `detatch()`.
	     */
	    Portal.prototype.setAttachedHost = function (host) {
	        this._attachedHost = host;
	    };
	    return Portal;
	}());
	/**
	 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
	 */
	var ComponentPortal = (function (_super) {
	    __extends$1(ComponentPortal, _super);
	    function ComponentPortal(component, viewContainerRef, injector) {
	        if (viewContainerRef === void 0) { viewContainerRef = null; }
	        if (injector === void 0) { injector = null; }
	        _super.call(this);
	        this.component = component;
	        this.viewContainerRef = viewContainerRef;
	        this.injector = injector;
	    }
	    return ComponentPortal;
	}(Portal));
	/**
	 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
	 */
	var TemplatePortal = (function (_super) {
	    __extends$1(TemplatePortal, _super);
	    function TemplatePortal(template, viewContainerRef) {
	        _super.call(this);
	        /**
	         * Additional locals for the instantiated embedded view.
	         * These locals can be seen as "exports" for the template, such as how ngFor has
	         * index / event / odd.
	         * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
	         */
	        this.locals = new Map();
	        this.templateRef = template;
	        this.viewContainerRef = viewContainerRef;
	    }
	    Object.defineProperty(TemplatePortal.prototype, "origin", {
	        get: function () {
	            return this.templateRef.elementRef;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TemplatePortal.prototype.attach = function (host, locals) {
	        this.locals = locals == null ? new Map() : locals;
	        return _super.prototype.attach.call(this, host);
	    };
	    TemplatePortal.prototype.detach = function () {
	        this.locals = new Map();
	        return _super.prototype.detach.call(this);
	    };
	    return TemplatePortal;
	}(Portal));
	/**
	 * Partial implementation of PortalHost that only deals with attaching either a
	 * ComponentPortal or a TemplatePortal.
	 */
	var BasePortalHost = (function () {
	    function BasePortalHost() {
	        /** Whether this host has already been permanently disposed. */
	        this._isDisposed = false;
	    }
	    /** Whether this host has an attached portal. */
	    BasePortalHost.prototype.hasAttached = function () {
	        return this._attachedPortal != null;
	    };
	    BasePortalHost.prototype.attach = function (portal) {
	        if (portal == null) {
	            throw new MdNullPortalError();
	        }
	        if (this.hasAttached()) {
	            throw new MdPortalAlreadyAttachedError();
	        }
	        if (this._isDisposed) {
	            throw new MdPortalHostAlreadyDisposedError();
	        }
	        if (portal instanceof ComponentPortal) {
	            this._attachedPortal = portal;
	            return this.attachComponentPortal(portal);
	        }
	        else if (portal instanceof TemplatePortal) {
	            this._attachedPortal = portal;
	            return this.attachTemplatePortal(portal);
	        }
	        throw new MdUnknownPortalTypeError();
	    };
	    BasePortalHost.prototype.detach = function () {
	        if (this._attachedPortal) {
	            this._attachedPortal.setAttachedHost(null);
	        }
	        this._attachedPortal = null;
	        if (this._disposeFn != null) {
	            this._disposeFn();
	            this._disposeFn = null;
	        }
	    };
	    BasePortalHost.prototype.dispose = function () {
	        if (this.hasAttached()) {
	            this.detach();
	        }
	        this._isDisposed = true;
	    };
	    BasePortalHost.prototype.setDisposeFn = function (fn) {
	        this._disposeFn = fn;
	    };
	    return BasePortalHost;
	}());

	var __extends = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate$4 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$4 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
	 * the directive instance itself can be attached to a host, enabling declarative use of portals.
	 *
	 * Usage:
	 * <template portal #greeting>
	 *   <p> Hello {{name}} </p>
	 * </template>
	 */
	var TemplatePortalDirective = (function (_super) {
	    __extends(TemplatePortalDirective, _super);
	    function TemplatePortalDirective(templateRef, viewContainerRef) {
	        _super.call(this, templateRef, viewContainerRef);
	    }
	    TemplatePortalDirective = __decorate$4([
	        _angular_core.Directive({
	            selector: '[portal]',
	            exportAs: 'portal',
	        }), 
	        __metadata$4('design:paramtypes', [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
	    ], TemplatePortalDirective);
	    return TemplatePortalDirective;
	}(TemplatePortal));
	/**
	 * Directive version of a PortalHost. Because the directive *is* a PortalHost, portals can be
	 * directly attached to it, enabling declarative use.
	 *
	 * Usage:
	 * <template [portalHost]="greeting"></template>
	 */
	var PortalHostDirective = (function (_super) {
	    __extends(PortalHostDirective, _super);
	    function PortalHostDirective(_componentFactoryResolver, _viewContainerRef) {
	        _super.call(this);
	        this._componentFactoryResolver = _componentFactoryResolver;
	        this._viewContainerRef = _viewContainerRef;
	    }
	    Object.defineProperty(PortalHostDirective.prototype, "portal", {
	        get: function () {
	            return this._portal;
	        },
	        set: function (p) {
	            this._replaceAttachedPortal(p);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** Attach the given ComponentPortal to this PortlHost using the ComponentFactoryResolver. */
	    PortalHostDirective.prototype.attachComponentPortal = function (portal) {
	        portal.setAttachedHost(this);
	        // If the portal specifies an origin, use that as the logical location of the component
	        // in the application tree. Otherwise use the location of this PortalHost.
	        var viewContainerRef = portal.viewContainerRef != null ?
	            portal.viewContainerRef :
	            this._viewContainerRef;
	        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
	        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
	        this.setDisposeFn(function () { return ref.destroy(); });
	        return ref;
	    };
	    /** Attach the given TemplatePortal to this PortlHost as an embedded View. */
	    PortalHostDirective.prototype.attachTemplatePortal = function (portal) {
	        var _this = this;
	        portal.setAttachedHost(this);
	        this._viewContainerRef.createEmbeddedView(portal.templateRef);
	        this.setDisposeFn(function () { return _this._viewContainerRef.clear(); });
	        // TODO(jelbourn): return locals from view
	        return new Map();
	    };
	    /** Detatches the currently attached Portal (if there is one) and attaches the given Portal. */
	    PortalHostDirective.prototype._replaceAttachedPortal = function (p) {
	        if (this.hasAttached()) {
	            this.detach();
	        }
	        if (p) {
	            this.attach(p);
	            this._portal = p;
	        }
	    };
	    PortalHostDirective = __decorate$4([
	        _angular_core.Directive({
	            selector: '[portalHost]',
	            inputs: ['portal: portalHost']
	        }), 
	        __metadata$4('design:paramtypes', [_angular_core.ComponentFactoryResolver, _angular_core.ViewContainerRef])
	    ], PortalHostDirective);
	    return PortalHostDirective;
	}(BasePortalHost));
	var PortalModule = (function () {
	    function PortalModule() {
	    }
	    PortalModule.forRoot = function () {
	        return {
	            ngModule: PortalModule,
	            providers: []
	        };
	    };
	    PortalModule = __decorate$4([
	        _angular_core.NgModule({
	            exports: [TemplatePortalDirective, PortalHostDirective],
	            declarations: [TemplatePortalDirective, PortalHostDirective],
	        }), 
	        __metadata$4('design:paramtypes', [])
	    ], PortalModule);
	    return PortalModule;
	}());

	/**
	 * OverlayState is a bag of values for either the initial configuration or current state of an
	 * overlay.
	 */
	var OverlayState = (function () {
	    function OverlayState() {
	    }
	    return OverlayState;
	}());

	var __extends$4 = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
	 * application context.
	 *
	 * This is the only part of the portal core that directly touches the DOM.
	 */
	var DomPortalHost = (function (_super) {
	    __extends$4(DomPortalHost, _super);
	    function DomPortalHost(_hostDomElement, _componentFactoryResolver) {
	        _super.call(this);
	        this._hostDomElement = _hostDomElement;
	        this._componentFactoryResolver = _componentFactoryResolver;
	    }
	    /** Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver. */
	    DomPortalHost.prototype.attachComponentPortal = function (portal) {
	        if (portal.viewContainerRef == null) {
	            throw new MdComponentPortalAttachedToDomWithoutOriginError();
	        }
	        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
	        var ref = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
	        var hostView = ref.hostView;
	        this._hostDomElement.appendChild(hostView.rootNodes[0]);
	        this.setDisposeFn(function () { return ref.destroy(); });
	        return ref;
	    };
	    DomPortalHost.prototype.attachTemplatePortal = function (portal) {
	        var _this = this;
	        var viewContainer = portal.viewContainerRef;
	        var viewRef = viewContainer.createEmbeddedView(portal.templateRef);
	        viewRef.rootNodes.forEach(function (rootNode) { return _this._hostDomElement.appendChild(rootNode); });
	        this.setDisposeFn((function () {
	            var index = viewContainer.indexOf(viewRef);
	            if (index != -1) {
	                viewContainer.remove(index);
	            }
	        }));
	        // TODO(jelbourn): Return locals from view.
	        return new Map();
	    };
	    DomPortalHost.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        if (this._hostDomElement.parentNode != null) {
	            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
	        }
	    };
	    return DomPortalHost;
	}(BasePortalHost));

	/**
	 * Reference to an overlay that has been created with the Overlay service.
	 * Used to manipulate or dispose of said overlay.
	 */
	var OverlayRef = (function () {
	    function OverlayRef(_portalHost, _pane, _state) {
	        this._portalHost = _portalHost;
	        this._pane = _pane;
	        this._state = _state;
	    }
	    OverlayRef.prototype.attach = function (portal) {
	        var attachResult = this._portalHost.attach(portal);
	        this.updatePosition();
	        return attachResult;
	    };
	    OverlayRef.prototype.detach = function () {
	        return this._portalHost.detach();
	    };
	    OverlayRef.prototype.dispose = function () {
	        this._portalHost.dispose();
	    };
	    OverlayRef.prototype.hasAttached = function () {
	        return this._portalHost.hasAttached();
	    };
	    /** Gets the current state config of the overlay. */
	    OverlayRef.prototype.getState = function () {
	        return this._state;
	    };
	    /** Updates the position of the overlay based on the position strategy. */
	    OverlayRef.prototype.updatePosition = function () {
	        if (this._state.positionStrategy) {
	            this._state.positionStrategy.apply(this._pane);
	        }
	    };
	    return OverlayRef;
	}());

	var __decorate$8 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$8 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Simple utility for getting the bounds of the browser viewport.
	 * TODO: internal
	 */
	var ViewportRuler = (function () {
	    function ViewportRuler() {
	    }
	    // TODO(jelbourn): cache the document's bounding rect and only update it when the window
	    // is resized (debounced).
	    /** Gets a ClientRect for the viewport's bounds. */
	    ViewportRuler.prototype.getViewportRect = function () {
	        // Use the document element's bounding rect rather than the window scroll properties
	        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
	        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
	        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
	        // can disagree when the page is pinch-zoomed (on devices that support touch).
	        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
	        // We use the documentElement instead of the body because, by default (without a css reset)
	        // browsers typically give the document body an 8px margin, which is not included in
	        // getBoundingClientRect().
	        var documentRect = document.documentElement.getBoundingClientRect();
	        var scrollPosition = this.getViewportScrollPosition(documentRect);
	        var height = window.innerHeight;
	        var width = window.innerWidth;
	        return {
	            top: scrollPosition.top,
	            left: scrollPosition.left,
	            bottom: scrollPosition.top + height,
	            right: scrollPosition.left + width,
	            height: height,
	            width: width,
	        };
	    };
	    /**
	     * Gets the (top, left) scroll position of the viewport.
	     * @param documentRect
	     */
	    ViewportRuler.prototype.getViewportScrollPosition = function (documentRect) {
	        if (documentRect === void 0) { documentRect = document.documentElement.getBoundingClientRect(); }
	        // The top-left-corner of the viewport is determined by the scroll position of the document
	        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
	        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
	        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
	        // `document.documentElement` works consistently, where the `top` and `left` values will
	        // equal negative the scroll position.
	        var top = documentRect.top < 0 && document.body.scrollTop == 0 ?
	            -documentRect.top :
	            document.body.scrollTop;
	        var left = documentRect.left < 0 && document.body.scrollLeft == 0 ?
	            -documentRect.left :
	            document.body.scrollLeft;
	        return { top: top, left: left };
	    };
	    ViewportRuler = __decorate$8([
	        _angular_core.Injectable(), 
	        __metadata$8('design:paramtypes', [])
	    ], ViewportRuler);
	    return ViewportRuler;
	}());

	/** The points of the origin element and the overlay element to connect. */
	var ConnectionPositionPair = (function () {
	    function ConnectionPositionPair(origin, overlay) {
	        this.originX = origin.originX;
	        this.originY = origin.originY;
	        this.overlayX = overlay.overlayX;
	        this.overlayY = overlay.overlayY;
	    }
	    return ConnectionPositionPair;
	}());

	/**
	 * A strategy for positioning overlays. Using this strategy, an overlay is given an
	 * implict position relative some origin element. The relative position is defined in terms of
	 * a point on the origin element that is connected to a point on the overlay element. For example,
	 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
	 * of the overlay.
	 */
	var ConnectedPositionStrategy = (function () {
	    function ConnectedPositionStrategy(_connectedTo, _originPos, _overlayPos, _viewportRuler) {
	        this._connectedTo = _connectedTo;
	        this._originPos = _originPos;
	        this._overlayPos = _overlayPos;
	        this._viewportRuler = _viewportRuler;
	        // TODO(jelbourn): set RTL to the actual value from the app.
	        /** Whether the we're dealing with an RTL context */
	        this._isRtl = false;
	        /** Ordered list of preferred positions, from most to least desirable. */
	        this._preferredPositions = [];
	        this._origin = this._connectedTo.nativeElement;
	        this.withFallbackPosition(_originPos, _overlayPos);
	    }
	    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
	        get: function () {
	            return this._preferredPositions;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Updates the position of the overlay element, using whichever preferred position relative
	     * to the origin fits on-screen.
	     * TODO: internal
	     */
	    ConnectedPositionStrategy.prototype.apply = function (element) {
	        // We need the bounding rects for the origin and the overlay to determine how to position
	        // the overlay relative to the origin.
	        var originRect = this._origin.getBoundingClientRect();
	        var overlayRect = element.getBoundingClientRect();
	        // We use the viewport rect to determine whether a position would go off-screen.
	        var viewportRect = this._viewportRuler.getViewportRect();
	        var firstOverlayPoint = null;
	        // We want to place the overlay in the first of the preferred positions such that the
	        // overlay fits on-screen.
	        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
	            var pos = _a[_i];
	            // Get the (x, y) point of connection on the origin, and then use that to get the
	            // (top, left) coordinate for the overlay at `pos`.
	            var originPoint = this._getOriginConnectionPoint(originRect, pos);
	            var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
	            firstOverlayPoint = firstOverlayPoint || overlayPoint;
	            // If the overlay in the calculated position fits on-screen, put it there and we're done.
	            if (this._willOverlayFitWithinViewport(overlayPoint, overlayRect, viewportRect)) {
	                this._setElementPosition(element, overlayPoint);
	                return Promise.resolve(null);
	            }
	        }
	        // TODO(jelbourn): fallback behavior for when none of the preferred positions fit on-screen.
	        // For now, just stick it in the first position and let it go off-screen.
	        this._setElementPosition(element, firstOverlayPoint);
	        return Promise.resolve(null);
	    };
	    ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos) {
	        this._preferredPositions.push(new ConnectionPositionPair(originPos, overlayPos));
	        return this;
	    };
	    /**
	     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
	     * @param rect
	     */
	    ConnectedPositionStrategy.prototype._getStartX = function (rect) {
	        return this._isRtl ? rect.right : rect.left;
	    };
	    /**
	     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
	     * @param rect
	     */
	    ConnectedPositionStrategy.prototype._getEndX = function (rect) {
	        return this._isRtl ? rect.left : rect.right;
	    };
	    /**
	     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
	     * @param originRect
	     * @param pos
	     */
	    ConnectedPositionStrategy.prototype._getOriginConnectionPoint = function (originRect, pos) {
	        var originStartX = this._getStartX(originRect);
	        var originEndX = this._getEndX(originRect);
	        var x;
	        if (pos.originX == 'center') {
	            x = originStartX + (originRect.width / 2);
	        }
	        else {
	            x = pos.originX == 'start' ? originStartX : originEndX;
	        }
	        var y;
	        if (pos.originY == 'center') {
	            y = originRect.top + (originRect.height / 2);
	        }
	        else {
	            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
	        }
	        return { x: x, y: y };
	    };
	    /**
	     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
	     * origin point to which the overlay should be connected.
	     * @param originPoint
	     * @param overlayRect
	     * @param pos
	     */
	    ConnectedPositionStrategy.prototype._getOverlayPoint = function (originPoint, overlayRect, pos) {
	        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
	        // relative to the origin point.
	        var overlayStartX;
	        if (pos.overlayX == 'center') {
	            overlayStartX = -overlayRect.width / 2;
	        }
	        else {
	            overlayStartX = pos.overlayX == 'start' ? 0 : -overlayRect.width;
	        }
	        var overlayStartY;
	        if (pos.overlayY == 'center') {
	            overlayStartY = -overlayRect.height / 2;
	        }
	        else {
	            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
	        }
	        return {
	            x: originPoint.x + overlayStartX,
	            y: originPoint.y + overlayStartY
	        };
	    };
	    /**
	     * Gets whether the overlay positioned at the given point will fit on-screen.
	     * @param overlayPoint The top-left coordinate of the overlay.
	     * @param overlayRect Bounding rect of the overlay, used to get its size.
	     * @param viewportRect The bounding viewport.
	     */
	    ConnectedPositionStrategy.prototype._willOverlayFitWithinViewport = function (overlayPoint, overlayRect, viewportRect) {
	        // TODO(jelbourn): probably also want some space between overlay edge and viewport edge.
	        return overlayPoint.x >= viewportRect.left &&
	            overlayPoint.x + overlayRect.width <= viewportRect.right &&
	            overlayPoint.y >= viewportRect.top &&
	            overlayPoint.y + overlayRect.height <= viewportRect.bottom;
	    };
	    /**
	     * Physically positions the overlay element to the given coordinate.
	     * @param element
	     * @param overlayPoint
	     */
	    ConnectedPositionStrategy.prototype._setElementPosition = function (element, overlayPoint) {
	        var scrollPos = this._viewportRuler.getViewportScrollPosition();
	        var x = overlayPoint.x + scrollPos.left;
	        var y = overlayPoint.y + scrollPos.top;
	        // TODO(jelbourn): we don't want to always overwrite the transform property here,
	        // because it will need to be used for animations.
	        _angular2Material_core.applyCssTransform(element, "translateX(" + x + "px) translateY(" + y + "px)");
	    };
	    return ConnectedPositionStrategy;
	}());

	/**
	 * A strategy for positioning overlays. Using this strategy, an overlay is given an
	 * explicit position relative to the browser's viewport.
	 */
	var GlobalPositionStrategy = (function () {
	    function GlobalPositionStrategy() {
	        this._cssPosition = 'absolute';
	        this._top = '';
	        this._bottom = '';
	        this._left = '';
	        this._right = '';
	        /** Array of individual applications of translateX(). Currently only for centering. */
	        this._translateX = [];
	        /** Array of individual applications of translateY(). Currently only for centering. */
	        this._translateY = [];
	    }
	    /** Sets the element to usee CSS position: fixed */
	    GlobalPositionStrategy.prototype.fixed = function () {
	        this._cssPosition = 'fixed';
	        return this;
	    };
	    /** Sets the element to usee CSS position: absolute. This is the default. */
	    GlobalPositionStrategy.prototype.absolute = function () {
	        this._cssPosition = 'absolute';
	        return this;
	    };
	    /** Sets the top position of the overlay. Clears any previously set vertical position. */
	    GlobalPositionStrategy.prototype.top = function (value) {
	        this._bottom = '';
	        this._translateY = [];
	        this._top = value;
	        return this;
	    };
	    /** Sets the left position of the overlay. Clears any previously set horizontal position. */
	    GlobalPositionStrategy.prototype.left = function (value) {
	        this._right = '';
	        this._translateX = [];
	        this._left = value;
	        return this;
	    };
	    /** Sets the bottom position of the overlay. Clears any previously set vertical position. */
	    GlobalPositionStrategy.prototype.bottom = function (value) {
	        this._top = '';
	        this._translateY = [];
	        this._bottom = value;
	        return this;
	    };
	    /** Sets the right position of the overlay. Clears any previously set horizontal position. */
	    GlobalPositionStrategy.prototype.right = function (value) {
	        this._left = '';
	        this._translateX = [];
	        this._right = value;
	        return this;
	    };
	    /**
	     * Centers the overlay horizontally with an optional offset.
	     * Clears any previously set horizontal position.
	     */
	    GlobalPositionStrategy.prototype.centerHorizontally = function (offset) {
	        if (offset === void 0) { offset = '0px'; }
	        this._left = '50%';
	        this._right = '';
	        this._translateX = ['-50%', offset];
	        return this;
	    };
	    /**
	     * Centers the overlay vertically with an optional offset.
	     * Clears any previously set vertical position.
	     */
	    GlobalPositionStrategy.prototype.centerVertically = function (offset) {
	        if (offset === void 0) { offset = '0px'; }
	        this._top = '50%';
	        this._bottom = '';
	        this._translateY = ['-50%', offset];
	        return this;
	    };
	    /**
	     * Apply the position to the element.
	     * TODO: internal
	     */
	    GlobalPositionStrategy.prototype.apply = function (element) {
	        element.style.position = this._cssPosition;
	        element.style.top = this._top;
	        element.style.left = this._left;
	        element.style.bottom = this._bottom;
	        element.style.right = this._right;
	        // TODO(jelbourn): we don't want to always overwrite the transform property here,
	        // because it will need to be used for animations.
	        var tranlateX = this._reduceTranslateValues('translateX', this._translateX);
	        var translateY = this._reduceTranslateValues('translateY', this._translateY);
	        _angular2Material_core.applyCssTransform(element, tranlateX + " " + translateY);
	        return Promise.resolve(null);
	    };
	    /** Reduce a list of translate values to a string that can be used in the transform property */
	    GlobalPositionStrategy.prototype._reduceTranslateValues = function (translateFn, values) {
	        return values.map(function (t) { return (translateFn + "(" + t + ")"); }).join(' ');
	    };
	    return GlobalPositionStrategy;
	}());

	var __decorate$7 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$7 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/** Builder for overlay position strategy. */
	var OverlayPositionBuilder = (function () {
	    function OverlayPositionBuilder(_viewportRuler) {
	        this._viewportRuler = _viewportRuler;
	    }
	    /** Creates a global position strategy. */
	    OverlayPositionBuilder.prototype.global = function () {
	        return new GlobalPositionStrategy();
	    };
	    /** Creates a relative position strategy. */
	    OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
	        return new ConnectedPositionStrategy(elementRef, originPos, overlayPos, this._viewportRuler);
	    };
	    OverlayPositionBuilder = __decorate$7([
	        _angular_core.Injectable(), 
	        __metadata$7('design:paramtypes', [ViewportRuler])
	    ], OverlayPositionBuilder);
	    return OverlayPositionBuilder;
	}());

	/**
	 * The OverlayContainer is the container in which all overlays will load.
	 * It should be provided in the root component to ensure it is properly shared.
	 */
	var OverlayContainer = (function () {
	    function OverlayContainer() {
	    }
	    /**
	     * This method returns the overlay container element.  It will lazily
	     * create the element the first time  it is called to facilitate using
	     * the container in non-browser environments.
	     * @returns {HTMLElement} the container element
	     */
	    OverlayContainer.prototype.getContainerElement = function () {
	        if (!this._containerElement) {
	            this._createContainer();
	        }
	        return this._containerElement;
	    };
	    /**
	     * Create the overlay container element, which is simply a div
	     * with the 'md-overlay-container' class on the document body.
	     */
	    OverlayContainer.prototype._createContainer = function () {
	        var container = document.createElement('div');
	        container.classList.add('md-overlay-container');
	        document.body.appendChild(container);
	        this._containerElement = container;
	    };
	    return OverlayContainer;
	}());

	var __decorate$6 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$6 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/** Next overlay unique ID. */
	var nextUniqueId = 0;
	/** The default state for newly created overlays. */
	var defaultState = new OverlayState();
	/**
	 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
	 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
	 * selects, etc. can all be built using overlays. The service should primarily be used by authors
	 * of re-usable components rather than developers building end-user applications.
	 *
	 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
	 */
	var Overlay = (function () {
	    function Overlay(_overlayContainer, _componentFactoryResolver, _positionBuilder) {
	        this._overlayContainer = _overlayContainer;
	        this._componentFactoryResolver = _componentFactoryResolver;
	        this._positionBuilder = _positionBuilder;
	    }
	    /**
	     * Creates an overlay.
	     * @param state State to apply to the overlay.
	     * @returns A reference to the created overlay.
	     */
	    Overlay.prototype.create = function (state) {
	        if (state === void 0) { state = defaultState; }
	        return this._createOverlayRef(this._createPaneElement(), state);
	    };
	    /**
	     * Returns a position builder that can be used, via fluent API,
	     * to construct and configure a position strategy.
	     */
	    Overlay.prototype.position = function () {
	        return this._positionBuilder;
	    };
	    /**
	     * Creates the DOM element for an overlay and appends it to the overlay container.
	     * @returns Promise resolving to the created element.
	     */
	    Overlay.prototype._createPaneElement = function () {
	        var pane = document.createElement('div');
	        pane.id = "md-overlay-" + nextUniqueId++;
	        pane.classList.add('md-overlay-pane');
	        this._overlayContainer.getContainerElement().appendChild(pane);
	        return pane;
	    };
	    /**
	     * Create a DomPortalHost into which the overlay content can be loaded.
	     * @param pane The DOM element to turn into a portal host.
	     * @returns A portal host for the given DOM element.
	     */
	    Overlay.prototype._createPortalHost = function (pane) {
	        return new DomPortalHost(pane, this._componentFactoryResolver);
	    };
	    /**
	     * Creates an OverlayRef for an overlay in the given DOM element.
	     * @param pane DOM element for the overlay
	     * @param state
	     * @returns {OverlayRef}
	     */
	    Overlay.prototype._createOverlayRef = function (pane, state) {
	        return new OverlayRef(this._createPortalHost(pane), pane, state);
	    };
	    Overlay = __decorate$6([
	        _angular_core.Injectable(), 
	        __metadata$6('design:paramtypes', [OverlayContainer, _angular_core.ComponentFactoryResolver, OverlayPositionBuilder])
	    ], Overlay);
	    return Overlay;
	}());
	/** Providers for Overlay and its related injectables. */
	var OVERLAY_PROVIDERS = [
	    ViewportRuler,
	    OverlayPositionBuilder,
	    Overlay,
	    OverlayContainer,
	];

	var __decorate$5 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$5 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
	var defaultPositionList = [
	    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
	    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
	];
	/**
	 * Directive applied to an element to make it usable as an origin for an Overlay using a
	 * ConnectedPositionStrategy.
	 */
	var OverlayOrigin = (function () {
	    function OverlayOrigin(_elementRef) {
	        this._elementRef = _elementRef;
	    }
	    Object.defineProperty(OverlayOrigin.prototype, "elementRef", {
	        get: function () {
	            return this._elementRef;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OverlayOrigin = __decorate$5([
	        _angular_core.Directive({
	            selector: '[overlay-origin]',
	            exportAs: 'overlayOrigin',
	        }), 
	        __metadata$5('design:paramtypes', [_angular_core.ElementRef])
	    ], OverlayOrigin);
	    return OverlayOrigin;
	}());
	/**
	 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
	 */
	var ConnectedOverlayDirective = (function () {
	    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
	    function ConnectedOverlayDirective(_overlay, templateRef, viewContainerRef) {
	        this._overlay = _overlay;
	        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
	    }
	    Object.defineProperty(ConnectedOverlayDirective.prototype, "overlayRef", {
	        get: function () {
	            return this._overlayRef;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** TODO: internal */
	    ConnectedOverlayDirective.prototype.ngOnInit = function () {
	        this._createOverlay();
	    };
	    /** TODO: internal */
	    ConnectedOverlayDirective.prototype.ngOnDestroy = function () {
	        this._destroyOverlay();
	    };
	    /** Creates an overlay and attaches this directive's template to it. */
	    ConnectedOverlayDirective.prototype._createOverlay = function () {
	        if (!this.positions || !this.positions.length) {
	            this.positions = defaultPositionList;
	        }
	        var overlayConfig = new OverlayState();
	        overlayConfig.positionStrategy =
	            this._overlay.position().connectedTo(this.origin.elementRef, { originX: this.positions[0].overlayX, originY: this.positions[0].originY }, { overlayX: this.positions[0].overlayX, overlayY: this.positions[0].overlayY });
	        this._overlayRef = this._overlay.create(overlayConfig);
	        this._overlayRef.attach(this._templatePortal);
	    };
	    /** Destroys the overlay created by this directive. */
	    ConnectedOverlayDirective.prototype._destroyOverlay = function () {
	        this._overlayRef.dispose();
	    };
	    __decorate$5([
	        _angular_core.Input(), 
	        __metadata$5('design:type', OverlayOrigin)
	    ], ConnectedOverlayDirective.prototype, "origin", void 0);
	    __decorate$5([
	        _angular_core.Input(), 
	        __metadata$5('design:type', Array)
	    ], ConnectedOverlayDirective.prototype, "positions", void 0);
	    ConnectedOverlayDirective = __decorate$5([
	        _angular_core.Directive({
	            selector: '[connected-overlay]'
	        }), 
	        __metadata$5('design:paramtypes', [Overlay, _angular_core.TemplateRef, _angular_core.ViewContainerRef])
	    ], ConnectedOverlayDirective);
	    return ConnectedOverlayDirective;
	}());
	var OverlayModule = (function () {
	    function OverlayModule() {
	    }
	    OverlayModule.forRoot = function () {
	        return {
	            ngModule: OverlayModule,
	            providers: OVERLAY_PROVIDERS,
	        };
	    };
	    OverlayModule = __decorate$5([
	        _angular_core.NgModule({
	            imports: [PortalModule],
	            exports: [ConnectedOverlayDirective, OverlayOrigin],
	            declarations: [ConnectedOverlayDirective, OverlayOrigin],
	        }), 
	        __metadata$5('design:paramtypes', [])
	    ], OverlayModule);
	    return OverlayModule;
	}());

	var __decorate$9 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$9 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (window && window.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core.OpaqueToken('mdLiveAnnouncerElement');
	var MdLiveAnnouncer = (function () {
	    function MdLiveAnnouncer(elementToken) {
	        // We inject the live element as `any` because the constructor signature cannot reference
	        // browser globals (HTMLElement) on non-browser environments, since having a class decorator
	        // causes TypeScript to preserve the constructor signature types.
	        this._liveElement = elementToken || this._createLiveElement();
	    }
	    /**
	     * @param message Message to be announced to the screenreader
	     * @param politeness The politeness of the announcer element.
	     */
	    MdLiveAnnouncer.prototype.announce = function (message, politeness) {
	        var _this = this;
	        if (politeness === void 0) { politeness = 'polite'; }
	        this._liveElement.textContent = '';
	        // TODO: ensure changing the politeness works on all environments we support.
	        this._liveElement.setAttribute('aria-live', politeness);
	        // This 100ms timeout is necessary for some browser + screen-reader combinations:
	        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
	        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
	        //   second time without clearing and then using a non-zero delay.
	        // (using JAWS 17 at time of this writing).
	        setTimeout(function () { return _this._liveElement.textContent = message; }, 100);
	    };
	    MdLiveAnnouncer.prototype._createLiveElement = function () {
	        var liveEl = document.createElement('div');
	        liveEl.classList.add('md-live-announcer');
	        liveEl.setAttribute('aria-atomic', 'true');
	        liveEl.setAttribute('aria-live', 'polite');
	        document.body.appendChild(liveEl);
	        return liveEl;
	    };
	    MdLiveAnnouncer = __decorate$9([
	        _angular_core.Injectable(),
	        __param(0, _angular_core.Optional()),
	        __param(0, _angular_core.Inject(LIVE_ANNOUNCER_ELEMENT_TOKEN)), 
	        __metadata$9('design:paramtypes', [Object])
	    ], MdLiveAnnouncer);
	    return MdLiveAnnouncer;
	}());

	var __extends$5 = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate$10 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$10 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/* Adjusts configuration of our gesture library, Hammer. */
	var MdGestureConfig = (function (_super) {
	    __extends$5(MdGestureConfig, _super);
	    function MdGestureConfig() {
	        _super.apply(this, arguments);
	        /* List of new event names to add to the gesture support list */
	        this.events = [
	            'drag',
	            'dragstart',
	            'dragend',
	            'dragright',
	            'dragleft',
	            'longpress',
	            'slide',
	            'slidestart',
	            'slideend',
	            'slideright',
	            'slideleft'
	        ];
	    }
	    /*
	     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
	     *
	     * Our gesture names come from the Material Design gestures spec:
	     * https://www.google.com/design/spec/patterns/gestures.html#gestures-touch-mechanics
	     *
	     * More information on default recognizers can be found in Hammer docs:
	     * http://hammerjs.github.io/recognizer-pan/
	     * http://hammerjs.github.io/recognizer-press/
	     *
	     * TODO: Confirm threshold numbers with Material Design UX Team
	     * */
	    MdGestureConfig.prototype.buildHammer = function (element) {
	        var mc = new Hammer(element);
	        // Default Hammer Recognizers.
	        var pan = new Hammer.Pan();
	        var swipe = new Hammer.Swipe();
	        var press = new Hammer.Press();
	        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
	        // Otherwise the previous `recognizeWith` will be dropped.
	        var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
	        var drag = this._createRecognizer(slide, { event: 'drag', threshold: 6 }, swipe);
	        var longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
	        // Overwrite the default `pan` event to use the swipe event.
	        pan.recognizeWith(swipe);
	        // Add customized gestures to Hammer manager
	        mc.add([swipe, press, pan, drag, slide, longpress]);
	        return mc;
	    };
	    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
	    MdGestureConfig.prototype._createRecognizer = function (base, options) {
	        var inheritances = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            inheritances[_i - 2] = arguments[_i];
	        }
	        var recognizer = new base.constructor(options);
	        inheritances.push(base);
	        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
	        return recognizer;
	    };
	    MdGestureConfig = __decorate$10([
	        _angular_core.Injectable(), 
	        __metadata$10('design:paramtypes', [])
	    ], MdGestureConfig);
	    return MdGestureConfig;
	}(_angular_platformBrowser.HammerGestureConfig));

	var __decorate$11 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$11 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Class to coordinate unique selection based on name.
	 * Intended to be consumed as an Angular service.
	 * This service is needed because native radio change events are only fired on the item currently
	 * being selected, and we still need to uncheck the previous selection.
	 *
	 * This service does not *store* any IDs and names because they may change at any time, so it is
	 * less error-prone if they are simply passed through when the events occur.
	 */
	var MdUniqueSelectionDispatcher = (function () {
	    function MdUniqueSelectionDispatcher() {
	        this._listeners = [];
	    }
	    /** Notify other items that selection for the given name has been set. */
	    MdUniqueSelectionDispatcher.prototype.notify = function (id, name) {
	        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
	            var listener = _a[_i];
	            listener(id, name);
	        }
	    };
	    /** Listen for future changes to item selection. */
	    MdUniqueSelectionDispatcher.prototype.listen = function (listener) {
	        this._listeners.push(listener);
	    };
	    MdUniqueSelectionDispatcher = __decorate$11([
	        _angular_core.Injectable(), 
	        __metadata$11('design:paramtypes', [])
	    ], MdUniqueSelectionDispatcher);
	    return MdUniqueSelectionDispatcher;
	}());

	/**
	 * Applies a CSS transform to an element, including browser-prefixed properties.
	 * @param element
	 * @param transformValue
	 */
	function applyCssTransform$1(element, transformValue) {
	    // It's important to trim the result, because the browser will ignore the set operation
	    // if the string contains only whitespace.
	    var value = transformValue.trim();
	    element.style.transform = value;
	    element.style.webkitTransform = value;
	}

	/**
	 * Annotation Factory that allows HTML style boolean attributes. For example,
	 * a field declared like this:

	 * @Directive({ selector: 'component' }) class MyComponent {
	 *   @Input() @BooleanFieldValueFactory() myField: boolean;
	 * }
	 *
	 * You could set it up this way:
	 *   <component myField>
	 * or:
	 *   <component myField="">
	 * @deprecated
	 */
	function booleanFieldValueFactory() {
	    return function booleanFieldValueMetadata(target, key) {
	        var defaultValue = target[key];
	        var localKey = "__md_private_symbol_" + key;
	        target[localKey] = defaultValue;
	        Object.defineProperty(target, key, {
	            get: function () { return this[localKey]; },
	            set: function (value) {
	                this[localKey] = value != null && "" + value !== 'false';
	            }
	        });
	    };
	}

	// Due to a bug in the ChromeDriver, Angular 2 keyboard events are not triggered by `sendKeys`
	// during E2E tests when using dot notation such as `(keydown.rightArrow)`. To get around this,
	// we are temporarily using a single (keydown) handler.
	// See: https://github.com/angular/angular/issues/9419
	var UP_ARROW = 38;
	var DOWN_ARROW = 40;
	var RIGHT_ARROW = 39;
	var LEFT_ARROW = 37;
	var ENTER = 13;
	var TAB = 9;

	var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var MdCoreModule = (function () {
	    function MdCoreModule() {
	    }
	    MdCoreModule.forRoot = function () {
	        return {
	            ngModule: MdCoreModule,
	            providers: [MdLiveAnnouncer]
	        };
	    };
	    MdCoreModule = __decorate([
	        _angular_core.NgModule({
	            imports: [MdLineModule, RtlModule, MdRippleModule, PortalModule, OverlayModule],
	            exports: [MdLineModule, RtlModule, MdRippleModule, PortalModule, OverlayModule],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCoreModule);
	    return MdCoreModule;
	}());

	exports.MdCoreModule = MdCoreModule;
	exports.Dir = Dir;
	exports.RtlModule = RtlModule;
	exports.Portal = Portal;
	exports.BasePortalHost = BasePortalHost;
	exports.ComponentPortal = ComponentPortal;
	exports.TemplatePortal = TemplatePortal;
	exports.PortalHostDirective = PortalHostDirective;
	exports.TemplatePortalDirective = TemplatePortalDirective;
	exports.PortalModule = PortalModule;
	exports.DomPortalHost = DomPortalHost;
	exports.Overlay = Overlay;
	exports.OVERLAY_PROVIDERS = OVERLAY_PROVIDERS;
	exports.OverlayContainer = OverlayContainer;
	exports.OverlayRef = OverlayRef;
	exports.OverlayState = OverlayState;
	exports.ConnectedOverlayDirective = ConnectedOverlayDirective;
	exports.OverlayOrigin = OverlayOrigin;
	exports.OverlayModule = OverlayModule;
	exports.MdGestureConfig = MdGestureConfig;
	exports.MdRipple = MdRipple;
	exports.MdRippleModule = MdRippleModule;
	exports.MdLiveAnnouncer = MdLiveAnnouncer;
	exports.LIVE_ANNOUNCER_ELEMENT_TOKEN = LIVE_ANNOUNCER_ELEMENT_TOKEN;
	exports.MdUniqueSelectionDispatcher = MdUniqueSelectionDispatcher;
	exports.MdLineModule = MdLineModule;
	exports.MdLine = MdLine;
	exports.MdLineSetter = MdLineSetter;
	exports.applyCssTransform = applyCssTransform$1;
	exports.MdError = MdError;
	exports.BooleanFieldValue = booleanFieldValueFactory;
	exports.ConnectedPositionStrategy = ConnectedPositionStrategy;
	exports.ConnectionPositionPair = ConnectionPositionPair;
	exports.UP_ARROW = UP_ARROW;
	exports.DOWN_ARROW = DOWN_ARROW;
	exports.RIGHT_ARROW = RIGHT_ARROW;
	exports.LEFT_ARROW = LEFT_ARROW;
	exports.ENTER = ENTER;
	exports.TAB = TAB;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

/***/ },

/***/ 98:
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
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(24);
	var ng2_cookies_1 = __webpack_require__(140);
	__webpack_require__(42);
	var FriendshipService = (function () {
	    function FriendshipService(http) {
	        this.http = http;
	        this.FRIENDSHIP_URL = 'personalarea/';
	        this.ACCEPT_REQUEST_BODY = '{"accept":true}';
	    }
	    FriendshipService.prototype.sendFriendRequest = function (ID) {
	        var url = this.FRIENDSHIP_URL + ID;
	        var headers = new http_1.Headers({
	            'Content-Type': 'application/json',
	            'X-CSRFToken': ng2_cookies_1.Cookie.get('csrftoken')
	        });
	        var options = new http_1.RequestOptions({ headers: headers });
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.post(url, '{}', options)
	            .toPromise()
	            .then(function (response) {
	            return response.json();
	        })
	            .catch(this.handlerError);
	    };
	    FriendshipService.prototype.getFriendList = function () {
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.get(this.FRIENDSHIP_URL)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            var friendList = result.my_friends;
	            var applicationsToFriends = result.want_be_my_friend;
	            return {
	                friendList: friendList,
	                applicationsToFriends: applicationsToFriends
	            };
	        })
	            .catch(this.handlerError);
	    };
	    FriendshipService.prototype.confirmFriendshipWith = function (ID, isAssept) {
	        var url = this.FRIENDSHIP_URL + ID + '/accept';
	        var requestBody = {
	            accept: isAssept
	        };
	        var headers = new http_1.Headers({
	            'Content-Type': 'application/json',
	            'X-CSRFToken': ng2_cookies_1.Cookie.get('csrftoken')
	        });
	        var options = new http_1.RequestOptions({ headers: headers });
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.post(url, JSON.stringify(requestBody), options)
	            .toPromise()
	            .then(function (response) {
	            return response.json();
	        })
	            .catch(this.handlerError);
	    };
	    FriendshipService.prototype.removeFriendshipWith = function (ID) {
	        var url = this.FRIENDSHIP_URL + ID + '/delete';
	        var headers = new http_1.Headers({
	            'Content-Type': 'application/json',
	            'X-CSRFToken': ng2_cookies_1.Cookie.get('csrftoken')
	        });
	        var options = new http_1.RequestOptions({ headers: headers });
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.post(url, '{}', options)
	            .toPromise()
	            .then(function (response) {
	            return response.json();
	        })
	            .catch(this.handlerError);
	    };
	    FriendshipService.prototype.handlerError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    FriendshipService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], FriendshipService);
	    return FriendshipService;
	    var _a;
	}());
	exports.FriendshipService = FriendshipService;


/***/ },

/***/ 99:
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
	var core_1 = __webpack_require__(2);
	var router_1 = __webpack_require__(46);
	var auth_service_1 = __webpack_require__(47);
	var AccountComponent = (function () {
	    function AccountComponent(UserService, router) {
	        this.UserService = UserService;
	        this.router = router;
	    }
	    AccountComponent.prototype.ngOnInit = function () {
	        if (this.UserService.isAutorized()) {
	            this.initAuthUser();
	        }
	        else {
	            this.redirectToMainPage();
	        }
	    };
	    AccountComponent.prototype.initAuthUser = function () {
	        this.user = this.UserService.getUser();
	    };
	    AccountComponent.prototype.redirectToMainPage = function () {
	        this.router.navigate(['/']);
	    };
	    AccountComponent = __decorate([
	        core_1.Component({
	            selector: 'account',
	            template: __webpack_require__(342)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.UserService !== 'undefined' && auth_service_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], AccountComponent);
	    return AccountComponent;
	    var _a, _b;
	}());
	exports.AccountComponent = AccountComponent;


/***/ },

/***/ 100:
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
	var core_1 = __webpack_require__(2);
	var auth_service_1 = __webpack_require__(47);
	var ChatHistoryComponent = (function () {
	    function ChatHistoryComponent(UserService, el) {
	        this.UserService = UserService;
	        this.el = el;
	        this.messages = [];
	    }
	    ChatHistoryComponent.prototype.postNewMessage = function (message) {
	        var _this = this;
	        message.isMyself = this.isMyselfMessage(message);
	        message.message = message.message.replace("\n", "<br>");
	        this.messages.push(message);
	        setTimeout(function () { return _this.scrollToLastMessage(); }, 0);
	    };
	    ChatHistoryComponent.prototype.scrollToLastMessage = function () {
	        var el = this.el.nativeElement;
	        el.scrollTop = el.scrollHeight - el.clientHeight;
	    };
	    ChatHistoryComponent.prototype.isMyselfMessage = function (message) {
	        return (message.user.uid_for_client.name == this.UserService.getUid());
	    };
	    ChatHistoryComponent = __decorate([
	        core_1.Component({
	            selector: 'chat-history',
	            template: __webpack_require__(347)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.UserService !== 'undefined' && auth_service_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
	    ], ChatHistoryComponent);
	    return ChatHistoryComponent;
	    var _a, _b;
	}());
	exports.ChatHistoryComponent = ChatHistoryComponent;


/***/ },

/***/ 101:
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
	var core_1 = __webpack_require__(2);
	var router_1 = __webpack_require__(46);
	var auth_service_1 = __webpack_require__(47);
	var DealOrder = (function () {
	    function DealOrder(UserService, router, route) {
	        this.UserService = UserService;
	        this.router = router;
	        this.route = route;
	    }
	    DealOrder.prototype.ngOnInit = function () {
	        if (this.UserService.isAutorized()) {
	            this.route.params.forEach(function (params) {
	                // let id = +params['id'];
	                console.log(params);
	            });
	        }
	        else {
	            this.redirectToMainPage();
	        }
	    };
	    DealOrder.prototype.redirectToMainPage = function () {
	        this.router.navigate(['/']);
	    };
	    DealOrder = __decorate([
	        core_1.Component({
	            selector: 'deal-order',
	            template: __webpack_require__(349),
	            providers: []
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.UserService !== 'undefined' && auth_service_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object])
	    ], DealOrder);
	    return DealOrder;
	    var _a, _b, _c;
	}());
	exports.DealOrder = DealOrder;


/***/ },

/***/ 102:
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
	var core_1 = __webpack_require__(2);
	var router_1 = __webpack_require__(46);
	var service_1 = __webpack_require__(174);
	var GameDispute = (function () {
	    function GameDispute(GameService, router) {
	        this.GameService = GameService;
	        this.router = router;
	    }
	    GameDispute.prototype.ngOnInit = function () {
	        this.loadGames();
	    };
	    GameDispute.prototype.loadGames = function () {
	        var _this = this;
	        this.GameService.getGames()
	            .then(function (games) {
	            _this.gameList = games;
	        })
	            .catch(function () {
	            _this.redirectToMainPage();
	        });
	    };
	    GameDispute.prototype.changeGame = function (game_namespace) {
	        var link = ['/pfg', game_namespace, 'dispute'];
	        this.router.navigate(link);
	    };
	    GameDispute.prototype.redirectToMainPage = function () {
	        this.router.navigate(['/']);
	    };
	    GameDispute = __decorate([
	        core_1.Component({
	            selector: 'pfg',
	            template: __webpack_require__(350),
	            providers: [service_1.GameService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof service_1.GameService !== 'undefined' && service_1.GameService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], GameDispute);
	    return GameDispute;
	    var _a, _b;
	}());
	exports.GameDispute = GameDispute;


/***/ },

/***/ 103:
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
	var core_1 = __webpack_require__(2);
	var StartPageComponent = (function () {
	    function StartPageComponent() {
	    }
	    StartPageComponent = __decorate([
	        core_1.Component({
	            selector: 'start_page',
	            template: __webpack_require__(351),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StartPageComponent);
	    return StartPageComponent;
	}());
	exports.StartPageComponent = StartPageComponent;


/***/ },

/***/ 104:
/***/ function(module, exports) {

	"use strict";
	var User = (function () {
	    function User() {
	        this.is_autorized = false;
	        this.is_friend = false;
	        this.is_ignore = false;
	        this.is_busy = false;
	    }
	    return User;
	}());
	exports.User = User;


/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(141));
	var services = __webpack_require__(141);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    services: services
	};
	//# sourceMappingURL=ng2-cookies.js.map

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	// Export all services
	var cookie_1 = __webpack_require__(337);
	exports.Cookie = cookie_1.Cookie;
	//# sourceMappingURL=services.js.map

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(34);
	/**
	 * @param PromiseCtor
	 * @return {Promise<T>}
	 * @method toPromise
	 * @owner Observable
	 */
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.0.1
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2), __webpack_require__(149), __webpack_require__(66), __webpack_require__(11), __webpack_require__(146)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';

	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isBlank(obj) {
	        return obj === undefined || obj === null;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isStringMap(obj) {
	        return typeof obj === 'object' && obj !== null;
	    }
	    function isArray(obj) {
	        return Array.isArray(obj);
	    }
	    var StringWrapper = (function () {
	        function StringWrapper() {
	        }
	        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	        StringWrapper.equals = function (s, s2) { return s === s2; };
	        StringWrapper.stripLeft = function (s, charVal) {
	            if (s && s.length) {
	                var pos = 0;
	                for (var i = 0; i < s.length; i++) {
	                    if (s[i] != charVal)
	                        break;
	                    pos++;
	                }
	                s = s.substring(pos);
	            }
	            return s;
	        };
	        StringWrapper.stripRight = function (s, charVal) {
	            if (s && s.length) {
	                var pos = s.length;
	                for (var i = s.length - 1; i >= 0; i--) {
	                    if (s[i] != charVal)
	                        break;
	                    pos--;
	                }
	                s = s.substring(0, pos);
	            }
	            return s;
	        };
	        StringWrapper.replace = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.replaceAll = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.slice = function (s, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return s.slice(from, to === null ? undefined : to);
	        };
	        StringWrapper.replaceAllMapped = function (s, from, cb) {
	            return s.replace(from, function () {
	                var matches = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    matches[_i - 0] = arguments[_i];
	                }
	                // Remove offset & string from the result array
	                matches.splice(-2, 2);
	                // The callback receives match, p1, ..., pn
	                return cb(matches);
	            });
	        };
	        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	        StringWrapper.compare = function (a, b) {
	            if (a < b) {
	                return -1;
	            }
	            else if (a > b) {
	                return 1;
	            }
	            else {
	                return 0;
	            }
	        };
	        return StringWrapper;
	    }());
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
	            }
	            return result;
	        };
	        NumberWrapper.parseInt = function (text, radix) {
	            if (radix == 10) {
	                if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else if (radix == 16) {
	                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else {
	                var result = parseInt(text, radix);
	                if (!isNaN(result)) {
	                    return result;
	                }
	            }
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	        };
	        Object.defineProperty(NumberWrapper, "NaN", {
	            get: function () { return NaN; },
	            enumerable: true,
	            configurable: true
	        });
	        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	        NumberWrapper.isNaN = function (value) { return isNaN(value); };
	        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	        return NumberWrapper;
	    }());
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function normalizeBool(obj) {
	        return isBlank(obj) ? false : obj;
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	    function hasConstructor(value, type) {
	        return value.constructor === type;
	    }

	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * @stable
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            get: function () { return isPresent(this.control) ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            get: function () { return isPresent(this.control) ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            get: function () { return isPresent(this.control) ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            get: function () { return isPresent(this.control) ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            get: function () {
	                return isPresent(this.control) ? this.control.errors : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            get: function () { return isPresent(this.control) ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            get: function () { return isPresent(this.control) ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            get: function () { return isPresent(this.control) ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            get: function () { return isPresent(this.control) ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            get: function () { return isPresent(this.control) ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            get: function () { return isPresent(this.control) ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.statusChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.valueChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (isPresent(this.control))
	                this.control.reset(value);
	        };
	        return AbstractControlDirective;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * @stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));

	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map()).keys().next) {
	            return function _clearValues(m) {
	                var keyIterator = m.keys();
	                var k;
	                while (!((k = keyIterator.next()).done)) {
	                    m.set(k.value, null);
	                }
	            };
	        }
	        else {
	            return function _clearValuesWithForeEach(m) {
	                m.forEach(function (v, k) { m.set(k, null); });
	            };
	        }
	    })();
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = new Array(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    var MapWrapper = (function () {
	        function MapWrapper() {
	        }
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map();
	            for (var prop in stringMap) {
	                result.set(prop, stringMap[prop]);
	            }
	            return result;
	        };
	        MapWrapper.toStringMap = function (m) {
	            var r = {};
	            m.forEach(function (v, k) { return r[k] = v; });
	            return r;
	        };
	        MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	        MapWrapper.iterable = function (m) { return m; };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.get = function (map, key) {
	            return map.hasOwnProperty(key) ? map[key] : undefined;
	        };
	        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	        StringMapWrapper.keys = function (map) { return Object.keys(map); };
	        StringMapWrapper.values = function (map) {
	            return Object.keys(map).map(function (k) { return map[k]; });
	        };
	        StringMapWrapper.isEmpty = function (map) {
	            for (var prop in map) {
	                return false;
	            }
	            return true;
	        };
	        StringMapWrapper.forEach = function (map, callback) {
	            for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	                var k = _a[_i];
	                callback(map[k], k);
	            }
	        };
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        // JS has no way to express a statically fixed size list, but dart does so we
	        // keep both methods.
	        ListWrapper.createFixedSize = function (size) { return new Array(size); };
	        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	        ListWrapper.clone = function (array) { return array.slice(0); };
	        ListWrapper.forEachWithIndex = function (array, fn) {
	            for (var i = 0; i < array.length; i++) {
	                fn(array[i], i);
	            }
	        };
	        ListWrapper.first = function (array) {
	            if (!array)
	                return null;
	            return array[0];
	        };
	        ListWrapper.last = function (array) {
	            if (!array || array.length == 0)
	                return null;
	            return array[array.length - 1];
	        };
	        ListWrapper.indexOf = function (array, value, startIndex) {
	            if (startIndex === void 0) { startIndex = 0; }
	            return array.indexOf(value, startIndex);
	        };
	        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	        ListWrapper.reversed = function (array) {
	            var a = ListWrapper.clone(array);
	            return a.reverse();
	        };
	        ListWrapper.concat = function (a, b) { return a.concat(b); };
	        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	        ListWrapper.removeAt = function (list, index) {
	            var res = list[index];
	            list.splice(index, 1);
	            return res;
	        };
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                list.splice(index, 1);
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.clear = function (list) { list.length = 0; };
	        ListWrapper.isEmpty = function (list) { return list.length == 0; };
	        ListWrapper.fill = function (list, value, start, end) {
	            if (start === void 0) { start = 0; }
	            if (end === void 0) { end = null; }
	            list.fill(value, start, end === null ? list.length : end);
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.slice = function (l, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return l.slice(from, to === null ? undefined : to);
	        };
	        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	        ListWrapper.sort = function (l, compareFn) {
	            if (isPresent(compareFn)) {
	                l.sort(compareFn);
	            }
	            else {
	                l.sort();
	            }
	        };
	        ListWrapper.toString = function (l) { return l.toString(); };
	        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (isBlank(candidate)) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        ListWrapper.addAll = function (list, source) {
	            for (var i = 0; i < source.length; i++) {
	                list.push(source[i]);
	            }
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }

	    var isPromise = _angular_core.__core_private__.isPromise;

	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * @stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         */
	        Validators.required = function (control) {
	            return isBlank(control.value) || (isString(control.value) && control.value == '') ?
	                { 'required': true } :
	                null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var v = control.value;
	                return v.length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var v = control.value;
	                return v.length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         */
	        Validators.pattern = function (pattern) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var regex = new RegExp("^" + pattern + "$");
	                var v = control.value;
	                return regex.test(v) ? null :
	                    { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	            };
	        };
	        /**
	         * No-op validator.
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         */
	        Validators.compose = function (validators) {
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _mergeErrors(arrayOfErrors) {
	        var res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return StringMapWrapper.isEmpty(res) ? null : res;
	    }

	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');

	    var CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return CheckboxControlValueAccessor;
	    }());

	    var DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var DefaultValueAccessor = (function () {
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return DefaultValueAccessor;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function normalizeValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	    function normalizeAsyncValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }

	    var NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return NumberValueAccessor;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * @stable
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgControl;
	    }(AbstractControlDirective));

	    var RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            var indexToRemove = -1;
	            for (var i = 0; i < this._accessors.length; ++i) {
	                if (this._accessors[i][1] === accessor) {
	                    indexToRemove = i;
	                }
	            }
	            ListWrapper.removeAt(this._accessors, indexToRemove);
	        };
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = [];
	        return RadioControlRegistry;
	    }());
	    /**
	     * @whatItDoes  Writes radio control values and listens to radio control changes.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any radio control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use radio buttons with form directives
	     *
	     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	     * in the same group have the same `name` attribute.  Radio buttons with different `name`
	     * attributes do not affect each other.
	     *
	     * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	     *
	     * When using radio buttons in a reactive form, radio buttons in the same group should have the
	     * same `formControlName`. You can also add a `name` attribute, but it's optional.
	     *
	     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ];
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());

	    var SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * @whatItDoes Writes values and listens to changes on a select element.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any select control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use select controls with form directives
	     *
	     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	     * attribute to the main `<select>` tag.
	     *
	     * If your option values are simple strings, you can bind to the normal `value` property
	     * on the option.  If your option values happen to be objects (and you'd like to save the
	     * selection in your form as an object), use `ngValue` instead:
	     *
	     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	     *
	     * In reactive forms, you'll also want to add your form directive (`formControlName` or
	     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	     * choice of binding to the  `value` or `ngValue` property on the select's options.
	     *
	     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	     *
	     * Note: We listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var SelectControlValueAccessor = (function () {
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var value = this._optionMap.get(_extractId(valueString));
	            return isPresent(value) ? value : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * @whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * @howToUse
	     *
	     * See docs for {@link SelectControlValueAccessor} for usage examples.
	     *
	     * @stable
	     */
	    var NgSelectOption = (function () {
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select))
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            set: function (value) {
	                this._setElementValue(value);
	                if (isPresent(this._select))
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());

	    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString$1(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (isString(value))
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * @stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            if (value == null)
	                return;
	            var values = value;
	            // convert values to ids
	            var ids = values.map(function (v) { return _this._getOptionId(v); });
	            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var options = _.selectedOptions;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var options = _.options;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        if (opt.selected) {
	                            var val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                fn(selected);
	            };
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var opt = this._optionMap.get(_extractId$1(valueString));
	            return isPresent(opt) ? opt._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select)) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            set: function (value) {
	                if (isPresent(this._select)) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /** @internal */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());

	    function controlPath(name, parent) {
	        var p = ListWrapper.clone(parent.path);
	        p.push(name);
	        return p;
	    }
	    function setUpControl(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        if (isBlank(dir.valueAccessor))
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        dir._rawAsyncValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        if (control)
	            control._clearChangeFns();
	    }
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    function _throwError(dir, message) {
	        var messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    function isBuiltInAccessor(valueAccessor) {
	        return (hasConstructor(valueAccessor, CheckboxControlValueAccessor) ||
	            hasConstructor(valueAccessor, NumberValueAccessor) ||
	            hasConstructor(valueAccessor, SelectControlValueAccessor) ||
	            hasConstructor(valueAccessor, SelectMultipleControlValueAccessor) ||
	            hasConstructor(valueAccessor, RadioControlValueAccessor));
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (isBlank(valueAccessors))
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (hasConstructor(v, DefaultValueAccessor)) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (isPresent(builtinAccessor))
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (isPresent(customAccessor))
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (isPresent(customAccessor))
	            return customAccessor;
	        if (isPresent(builtinAccessor))
	            return builtinAccessor;
	        if (isPresent(defaultAccessor))
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	     *
	     * @stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {@link FormGroup} backing this binding.
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {@link Form} to which this group belongs.
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.untouched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.touched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.pristine : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.dirty : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.valid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.invalid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid'
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var DISABLED = 'DISABLED';
	    function _find(control, path, delimiter) {
	        if (isBlank(path))
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && ListWrapper.isEmpty(path))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return isPresent(v.controls[name]) ? v.controls[name] : null;
	            }
	            else if (v instanceof FormArray) {
	                var index = name;
	                return isPresent(v.at(index)) ? v.at(index) : null;
	            }
	            else {
	                return null;
	            }
	        }, control);
	    }
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
	     * {@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * @stable
	     */
	    var AbstractControl = (function () {
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	            * A control is marked `touched` once the user has triggered
	            * a `blur` event on it.
	            */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._touched = true;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._pristine = false;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._status = PENDING;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            onlySelf = normalizeBool(onlySelf);
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        AbstractControl.prototype._runValidator = function () {
	            return isPresent(this.validator) ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (isPresent(this.asyncValidator)) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (isPresent(this._asyncValidationSubscription)) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.get(path) : this;
	            if (isPresent(control) && isPresent(control._errors)) {
	                return StringMapWrapper.get(control._errors, errorCode);
	            }
	            else {
	                return null;
	            }
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return isPresent(this.getError(errorCode, path));
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             */
	            get: function () {
	                var x = this;
	                while (isPresent(x._parent)) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent)) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (isPresent(this._errors))
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status == status; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /** @internal */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return isStringMap(formState) && Object.keys(formState).length === 2 && 'value' in formState &&
	                'disabled' in formState;
	        };
	        /** @internal */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * @whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {@link FormGroup} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     *```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	            emitViewToModelChange = isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {@link FormControl.setValue} at this level.
	         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf });
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @internal
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @internal
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {@link FormGroup.addControl} instead.
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {@link AbstractControl.get} instead.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last; 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /** @internal */
	        FormGroup.prototype._forEachChild = function (cb) {
	            StringMapWrapper.forEach(this.controls, cb);
	        };
	        /** @internal */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /** @internal */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /** @internal */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
	     * instances.
	     *
	     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormGroup}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {@link AbstractControl} at the end of the array.
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.insert = function (index, control) {
	            ListWrapper.insert(this.controls, index, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            if (control) {
	                ListWrapper.insert(this.controls, index, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /** @internal */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /** @internal */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /** @internal */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /** @internal */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /** @internal */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /** @internal */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /** @internal */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var resolvedPromise = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * @howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {@link NgModel} with a
	     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission.
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                dir._control = container.registerControl(dir.name, dir.control);
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                var group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var ctrl = _this.form.get(dir.path);
	                ctrl.setValue(value);
	            });
	        };
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        NgForm.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        return NgForm;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };

	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used as a child of {@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * @stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    var resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * @howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * To see `ngModel` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var disabledValue = changes['isDisabled'].currentValue;
	            var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));

	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	     * {@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	     * it does not require that your {@link FormControl} instance be part of any parent
	     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormControl} instance. See a full list of available properties in
	     * {@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	     * or you can set it programmatically later using {@link AbstractControl.setValue} or
	     * {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive accepts an existing {@link FormGroup} instance. It will then use this
	     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	     * and {@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var ctrl = this.form.get(dir.path);
	            ctrl.setValue(value);
	        };
	        FormGroupDirective.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        FormGroupDirective.prototype._updateValidators = function () {
	            var sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (isBlank(this.form)) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormGroup} you want to link, and
	     * will look for a {@link FormGroup} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {@link FormGroup} using the
	     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormGroup}, or you can set it programmatically later using
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormArray} you want to link, and
	     * will look for a {@link FormArray} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {@link FormArray} using the
	     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormArray}, or you can set the value programmatically later using the
	     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	     * calling its {@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            get: function () {
	                return this._parent ? this._parent.formDirective : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {@link FormControl} instance you want to
	     * link, and will look for a {@link FormControl} registered with that name in the
	     * closest {@link FormGroup} or {@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {@link FormControl} associated with
	     * this directive by using the {@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	     * See a full list of available properties in {@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {@link FormControl}, or you can set it programmatically later using
	     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * To see `formControlName` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));

	    var REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * @stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            get: function () { return this._required; },
	            set: function (value) {
	                this._required = isPresent(value) && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = [];
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * @stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['minlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MinLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.minlength) ? this._validator(c) : null;
	        };
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = [];
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * @stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['maxlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MaxLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.maxlength) ? this._validator(c) : null;
	        };
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = [];
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * @stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['pattern']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        PatternValidator.prototype.validate = function (c) {
	            return isPresent(this.pattern) ? this._validator(c) : null;
	        };
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = [];
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());

	    /**
	     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * @howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     * @stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {@link FormGroup} constructor for more details.
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var controls = this._reduceControls(controlsConfig);
	            var validator = isPresent(extra) ? StringMapWrapper.get(extra, 'validator') : null;
	            var asyncValidator = isPresent(extra) ? StringMapWrapper.get(extra, 'asyncValidator') : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	                controls[controlName] = _this._createControl(controlConfig);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (isArray(controlConfig)) {
	                var value = controlConfig[0];
	                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = [];
	        return FormBuilder;
	    }());

	    var SHARED_FORM_DIRECTIVES = [
	        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
	        CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator,
	        MinLengthValidator, MaxLengthValidator, PatternValidator
	    ];
	    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{ declarations: SHARED_FORM_DIRECTIVES, exports: SHARED_FORM_DIRECTIVES },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = [];
	        return InternalFormsSharedModule;
	    }());

	    /**
	     * The ng module for forms.
	     * @stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = [];
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * @stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = [];
	        return ReactiveFormsModule;
	    }());

	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;

	}));


/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	    (factory((global.md = global.md || {}, global.md.card = global.md.card || {}),global.ng.core));
	}(this, (function (exports,_angular_core) { 'use strict';

	var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Content of a card, needed as it's used as a selector in the API.
	 */
	var MdCardContent = (function () {
	    function MdCardContent() {
	    }
	    MdCardContent = __decorate([
	        _angular_core.Directive({
	            selector: 'md-card-content'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardContent);
	    return MdCardContent;
	}());
	/**
	 * Title of a card, needed as it's used as a selector in the API.
	 */
	var MdCardTitle = (function () {
	    function MdCardTitle() {
	    }
	    MdCardTitle = __decorate([
	        _angular_core.Directive({
	            selector: 'md-card-title'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardTitle);
	    return MdCardTitle;
	}());
	/**
	 * Sub-title of a card, needed as it's used as a selector in the API.
	 */
	var MdCardSubtitle = (function () {
	    function MdCardSubtitle() {
	    }
	    MdCardSubtitle = __decorate([
	        _angular_core.Directive({
	            selector: 'md-card-subtitle'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardSubtitle);
	    return MdCardSubtitle;
	}());
	/**
	 * Action section of a card, needed as it's used as a selector in the API.
	 */
	var MdCardActions = (function () {
	    function MdCardActions() {
	    }
	    MdCardActions = __decorate([
	        _angular_core.Directive({
	            selector: 'md-card-actions'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardActions);
	    return MdCardActions;
	}());
	/*

	<md-card> is a basic content container component that adds the styles of a material design card.

	While you can use this component alone,
	it also provides a number of preset styles for common card sections, including:
	 - md-card-title
	 - md-card-subtitle
	 - md-card-content
	 - md-card-actions
	 - md-card-footer

	 You can see some examples of cards here:
	 http://embed.plnkr.co/s5O4YcyvbLhIApSrIhtj/

	 TODO(kara): update link to demo site when it exists

	*/
	var MdCard = (function () {
	    function MdCard() {
	    }
	    MdCard = __decorate([
	        _angular_core.Component({selector: 'md-card',
	            template: "<ng-content></ng-content> ",
	            styles: ["/** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ md-card { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); will-change: box-shadow; display: block; position: relative; padding: 24px; border-radius: 2px; font-family: Roboto, \"Helvetica Neue\", sans-serif; background: white; color: black; } md-card:hover { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); } .md-card-flat { box-shadow: none; } md-card-title, md-card-subtitle, md-card-content, md-card-actions { display: block; margin-bottom: 16px; } md-card-title { font-size: 24px; font-weight: 400; } md-card-subtitle { font-size: 14px; color: rgba(0, 0, 0, 0.54); } md-card-content { font-size: 14px; } md-card-actions { margin-left: -16px; margin-right: -16px; padding: 8px 0; } md-card-actions[align='end'] { display: flex; justify-content: flex-end; } [md-card-image] { width: calc(100% + 48px); margin: 0 -24px 16px -24px; } [md-card-xl-image] { width: 240px; height: 240px; margin: -8px; } md-card-footer { position: absolute; bottom: 0; } md-card-actions [md-button], md-card-actions [md-raised-button] { margin: 0 4px; } /* HEADER STYLES */ md-card-header { display: flex; flex-direction: row; height: 40px; margin: -8px 0 16px 0; } .md-card-header-text { height: 40px; margin: 0 8px; } [md-card-avatar] { height: 40px; width: 40px; border-radius: 50%; } md-card-header md-card-title { font-size: 14px; } /* TITLE-GROUP STYLES */ [md-card-sm-image], [md-card-md-image], [md-card-lg-image] { margin: -8px 0; } md-card-title-group { display: flex; justify-content: space-between; margin: 0 -8px; } [md-card-sm-image] { width: 80px; height: 80px; } [md-card-md-image] { width: 112px; height: 112px; } [md-card-lg-image] { width: 152px; height: 152px; } /* MEDIA QUERIES */ @media (max-width: 600px) { md-card { padding: 24px 16px; } [md-card-image] { width: calc(100% + 32px); margin: 16px -16px; } md-card-title-group { margin: 0; } [md-card-xl-image] { margin-left: 0; margin-right: 0; } md-card-header { margin: -8px 0 0 0; } } /* FIRST/LAST CHILD ADJUSTMENTS */ md-card > :first-child, md-card-content > :first-child { margin-top: 0; } md-card > :last-child, md-card-content > :last-child { margin-bottom: 0; } [md-card-image]:first-child { margin-top: -24px; } md-card > md-card-actions:last-child { margin-bottom: -16px; padding-bottom: 0; } md-card-actions [md-button]:first-child, md-card-actions [md-raised-button]:first-child { margin-left: 0; margin-right: 0; } md-card-title:not(:first-child), md-card-subtitle:not(:first-child) { margin-top: -4px; } md-card-header md-card-subtitle:not(:first-child) { margin-top: -8px; } md-card > [md-card-xl-image]:first-child { margin-top: -8px; } md-card > [md-card-xl-image]:last-child { margin-bottom: -8px; } /*# sourceMappingURL=card.css.map */ "],
	            encapsulation: _angular_core.ViewEncapsulation.None,
	            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCard);
	    return MdCard;
	}());
	/*  The following components don't have any behavior.
	 They simply use content projection to wrap user content
	 for flex layout purposes in <md-card> (and thus allow a cleaner, boilerplate-free API).


	<md-card-header> is a component intended to be used within the <md-card> component.
	It adds styles for a preset header section (i.e. a title, subtitle, and avatar layout).

	You can see an example of a card with a header here:
	http://embed.plnkr.co/tvJl19z3gZTQd6WmwkIa/

	TODO(kara): update link to demo site when it exists
	*/
	var MdCardHeader = (function () {
	    function MdCardHeader() {
	    }
	    MdCardHeader = __decorate([
	        _angular_core.Component({selector: 'md-card-header',
	            template: "<ng-content select=\"[md-card-avatar]\"></ng-content> <div class=\"md-card-header-text\"> <ng-content select=\"md-card-title, md-card-subtitle\"></ng-content> </div> <ng-content></ng-content> ",
	            encapsulation: _angular_core.ViewEncapsulation.None,
	            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardHeader);
	    return MdCardHeader;
	}());
	/*

	<md-card-title-group> is a component intended to be used within the <md-card> component.
	It adds styles for a preset layout that groups an image with a title section.

	You can see an example of a card with a title-group section here:
	http://embed.plnkr.co/EDfgCF9eKcXjini1WODm/

	TODO(kara): update link to demo site when it exists
	*/
	var MdCardTitleGroup = (function () {
	    function MdCardTitleGroup() {
	    }
	    MdCardTitleGroup = __decorate([
	        _angular_core.Component({selector: 'md-card-title-group',
	            template: "<div> <ng-content select=\"md-card-title, md-card-subtitle\"></ng-content> </div> <ng-content select=\"img\"></ng-content> <ng-content></ng-content> ",
	            encapsulation: _angular_core.ViewEncapsulation.None,
	            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardTitleGroup);
	    return MdCardTitleGroup;
	}());
	var MdCardModule = (function () {
	    function MdCardModule() {
	    }
	    MdCardModule.forRoot = function () {
	        return {
	            ngModule: MdCardModule,
	            providers: []
	        };
	    };
	    MdCardModule = __decorate([
	        _angular_core.NgModule({
	            exports: [
	                MdCard, MdCardHeader, MdCardTitleGroup, MdCardContent, MdCardTitle, MdCardSubtitle,
	                MdCardActions
	            ],
	            declarations: [
	                MdCard, MdCardHeader, MdCardTitleGroup, MdCardContent, MdCardTitle, MdCardSubtitle,
	                MdCardActions
	            ],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardModule);
	    return MdCardModule;
	}());

	exports.MdCardContent = MdCardContent;
	exports.MdCardTitle = MdCardTitle;
	exports.MdCardSubtitle = MdCardSubtitle;
	exports.MdCardActions = MdCardActions;
	exports.MdCard = MdCard;
	exports.MdCardHeader = MdCardHeader;
	exports.MdCardTitleGroup = MdCardTitleGroup;
	exports.MdCardModule = MdCardModule;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2), __webpack_require__(55)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	    (factory((global.md = global.md || {}, global.md.progressBar = global.md.progressBar || {}),global.ng.core,global.ng.common));
	}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

	var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	// TODO(josephperrott): Benchpress tests.
	// TODO(josephperrott): Add ARIA attributes for progressbar "for".
	/**
	 * <md-progress-bar> component.
	 */
	var MdProgressBar = (function () {
	    function MdProgressBar() {
	        /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
	        this._value = 0;
	        /** Buffer value of the progress bar. Defaults to zero. */
	        this._bufferValue = 0;
	        /**
	         * Mode of the progress bar.
	         *
	         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
	         * 'determinate'.
	         * Mirrored to mode attribute.
	         */
	        this.mode = 'determinate';
	    }
	    Object.defineProperty(MdProgressBar.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (v) {
	            this._value = clamp(v || 0);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdProgressBar.prototype, "bufferValue", {
	        get: function () {
	            return this._bufferValue;
	        },
	        set: function (v) {
	            this._bufferValue = clamp(v || 0);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** Gets the current transform value for the progress bar's primary indicator. */
	    MdProgressBar.prototype._primaryTransform = function () {
	        var scale = this.value / 100;
	        return { transform: "scaleX(" + scale + ")" };
	    };
	    /**
	     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
	     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
	     */
	    MdProgressBar.prototype._bufferTransform = function () {
	        if (this.mode == 'buffer') {
	            var scale = this.bufferValue / 100;
	            return { transform: "scaleX(" + scale + ")" };
	        }
	    };
	    __decorate([
	        _angular_core.Input(),
	        _angular_core.HostBinding('attr.aria-valuenow'), 
	        __metadata('design:type', Object)
	    ], MdProgressBar.prototype, "value", null);
	    __decorate([
	        _angular_core.Input(), 
	        __metadata('design:type', Object)
	    ], MdProgressBar.prototype, "bufferValue", null);
	    __decorate([
	        _angular_core.Input(),
	        _angular_core.HostBinding('attr.mode'), 
	        __metadata('design:type', Object)
	    ], MdProgressBar.prototype, "mode", void 0);
	    MdProgressBar = __decorate([
	        _angular_core.Component({selector: 'md-progress-bar',
	            host: {
	                'role': 'progressbar',
	                'aria-valuemin': '0',
	                'aria-valuemax': '100',
	            },
	            template: "<!-- The background div is named as such because it appears below the other divs and is not sized based on values. --> <div class=\"md-progress-bar-background\"></div> <div class=\"md-progress-bar-buffer\" [ngStyle]=\"_bufferTransform()\"></div> <div class=\"md-progress-bar-primary md-progress-bar-fill\" [ngStyle]=\"_primaryTransform()\"></div> <div class=\"md-progress-bar-secondary md-progress-bar-fill\"></div> ",
	            styles: ["/** In buffer mode a repeated SVG object is used as a background.  Each of the following defines the SVG object for each of the class defined colors. Each string is a URL encoded version of: <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" enable-background=\"new 0 0 5 2\" xml:space=\"preserve\" viewBox=\"0 0 5 2\" preserveAspectRatio=\"none slice\"> <circle cx=\"1\" cy=\"1\" r=\"1\" fill=\"{INJECTED_COLOR}\"/> </svg> */ :host { display: block; height: 5px; overflow: hidden; position: relative; transform: translateZ(0); transition: opacity 250ms linear; width: 100%; /** * The progress bar buffer is the bar indicator showing the buffer value and is only visible beyond the current value * of the primary progress bar. */ /** * The secondary progress bar is only used in the indeterminate animation, because of this it is hidden in other uses. */ /** * The progress bar fill fills the progress bar with the indicator color. */ /** * A pseudo element is created for each progress bar bar that fills with the indicator color. */ } :host .md-progress-bar-background { background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#b2dfdb%27%2F%3E%3C%2Fsvg%3E\"); background-repeat: repeat-x; background-size: 10px 4px; height: 100%; position: absolute; visibility: hidden; width: 100%; } :host .md-progress-bar-buffer { background-color: #b2dfdb; height: 100%; position: absolute; transform-origin: top left; transition: transform 250ms ease; width: 100%; } :host .md-progress-bar-secondary { visibility: hidden; } :host .md-progress-bar-fill { animation: none; height: 100%; position: absolute; transform-origin: top left; transition: transform 250ms ease; width: 100%; } :host .md-progress-bar-fill::after { animation: none; background-color: #00897b; content: ''; display: inline-block; height: 100%; position: absolute; width: 100%; } :host[color='accent'] .md-progress-bar-background { background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#e1bee7%27%2F%3E%3C%2Fsvg%3E\"); background-repeat: repeat-x; background-size: 10px 4px; } :host[color='accent'] .md-progress-bar-buffer { background-color: #e1bee7; } :host[color='accent'] .md-progress-bar-fill::after { background-color: #8e24aa; } :host[color='warn'] .md-progress-bar-background { background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); background-repeat: repeat-x; background-size: 10px 4px; } :host[color='warn'] .md-progress-bar-buffer { background-color: #ffcdd2; } :host[color='warn'] .md-progress-bar-fill::after { background-color: #e53935; } :host[mode='query'] { transform: rotateZ(180deg); } :host[mode='indeterminate'] .md-progress-bar-fill, :host[mode='query'] .md-progress-bar-fill { transition: none; } :host[mode='indeterminate'] .md-progress-bar-primary, :host[mode='query'] .md-progress-bar-primary { animation: md-progress-bar-primary-indeterminate-translate 2000ms infinite linear; left: -145.166611%; } :host[mode='indeterminate'] .md-progress-bar-primary.md-progress-bar-fill::after, :host[mode='query'] .md-progress-bar-primary.md-progress-bar-fill::after { animation: md-progress-bar-primary-indeterminate-scale 2000ms infinite linear; } :host[mode='indeterminate'] .md-progress-bar-secondary, :host[mode='query'] .md-progress-bar-secondary { animation: md-progress-bar-secondary-indeterminate-translate 2000ms infinite linear; left: -54.888891%; visibility: visible; } :host[mode='indeterminate'] .md-progress-bar-secondary.md-progress-bar-fill::after, :host[mode='query'] .md-progress-bar-secondary.md-progress-bar-fill::after { animation: md-progress-bar-secondary-indeterminate-scale 2000ms infinite linear; } :host[mode='buffer'] .md-progress-bar-background { animation: md-progress-bar-background-scroll 250ms infinite linear; visibility: visible; } :host-context([dir='rtl']) { transform: rotateY(180deg); } /** The values used for animations in md-progress-bar, both timing and transformation, can be considered magic values. They are sourced from the Material Design example spec and duplicate the values of the original designers definitions. The indeterminate state is essentially made up of two progress bars, one primary (the one that is shown in both the determinate and indeterminate states) and one secondary, which essentially mirrors the primary progress bar in appearance but is only shown to assist with the indeterminate animations. KEYFRAME BLOCK	                    DESCRIPTION primary-indeterminate-translate     Translation of the primary progressbar across the screen primary-indeterminate-scale         Scaling of the primary progressbar as it's being translated across the screen secondary-indeterminate-translate   Translation of the secondary progressbar across the screen secondary-indeterminate-scale       Scaling of the secondary progressbar as it's being translated across the screen Because two different transform animations need to be applied at once, the translation is applied to the outer element and the scaling is applied to the inner element, which provides the illusion necessary to make the animation work. */ /** Animations for indeterminate and query mode. */ @keyframes md-progress-bar-primary-indeterminate-translate { 0% { transform: translateX(0); } 20% { animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582); transform: translateX(0); } 59.15% { animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635); transform: translateX(83.67142%); } 100% { transform: translateX(200.61106%); } } @keyframes md-progress-bar-primary-indeterminate-scale { 0% { transform: scaleX(0.08); } 36.65% { animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1); transform: scaleX(0.08); } 69.15% { animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1); transform: scaleX(0.66148); } 100% { transform: scaleX(0.08); } } @keyframes md-progress-bar-secondary-indeterminate-translate { 0% { animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969); transform: translateX(0); } 25% { animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371); transform: translateX(37.65191%); } 48.35% { animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203); transform: translateX(84.38617%); } 100% { transform: translateX(160.27778%); } } @keyframes md-progress-bar-secondary-indeterminate-scale { 0% { animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969); transform: scaleX(0.08); } 19.15% { animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371); transform: scaleX(0.4571); } 44.15% { animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203); transform: scaleX(0.72796); } 100% { transform: scaleX(0.08); } } /** Animation for buffer mode. */ @keyframes md-progress-bar-background-scroll { to { transform: translateX(-10px); } } /*# sourceMappingURL=progress-bar.css.map */ "],
	            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdProgressBar);
	    return MdProgressBar;
	}());
	/** Clamps a value to be between two numbers, by default 0 and 100. */
	function clamp(v, min, max) {
	    if (min === void 0) { min = 0; }
	    if (max === void 0) { max = 100; }
	    return Math.max(min, Math.min(max, v));
	}
	var MdProgressBarModule = (function () {
	    function MdProgressBarModule() {
	    }
	    MdProgressBarModule.forRoot = function () {
	        return {
	            ngModule: MdProgressBarModule,
	            providers: []
	        };
	    };
	    MdProgressBarModule = __decorate([
	        _angular_core.NgModule({
	            imports: [_angular_common.CommonModule],
	            exports: [MdProgressBar],
	            declarations: [MdProgressBar],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdProgressBarModule);
	    return MdProgressBarModule;
	}());

	exports.MdProgressBar = MdProgressBar;
	exports.MdProgressBarModule = MdProgressBarModule;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	    (factory((global.md = global.md || {}, global.md.progressCircle = global.md.progressCircle || {}),global.ng.core));
	}(this, (function (exports,_angular_core) { 'use strict';

	var __extends = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	// TODO(josephperrott): Benchpress tests.
	/** A single degree in radians. */
	var DEGREE_IN_RADIANS = Math.PI / 180;
	/** Duration of the indeterminate animation. */
	var DURATION_INDETERMINATE = 667;
	/** Duration of the indeterminate animation. */
	var DURATION_DETERMINATE = 225;
	/** Start animation value of the indeterminate animation */
	var startIndeterminate = 3;
	/** End animation value of the indeterminate animation */
	var endIndeterminate = 80;
	/**
	 * <md-progress-circle> component.
	 */
	var MdProgressCircle = (function () {
	    function MdProgressCircle(_changeDetectorRef) {
	        this._changeDetectorRef = _changeDetectorRef;
	        /** The id of the last requested animation. */
	        this._lastAnimationId = 0;
	        this._mode = 'determinate';
	    }
	    Object.defineProperty(MdProgressCircle.prototype, "_ariaValueMin", {
	        /**
	         * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
	         * because voiceover does not report the progress indicator as indeterminate if the aria min
	         * and/or max value are number values.
	         */
	        get: function () {
	            return this.mode == 'determinate' ? 0 : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdProgressCircle.prototype, "_ariaValueMax", {
	        get: function () {
	            return this.mode == 'determinate' ? 100 : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdProgressCircle.prototype, "interdeterminateInterval", {
	        /** TODO: internal */
	        get: function () {
	            return this._interdeterminateInterval;
	        },
	        /** TODO: internal */
	        set: function (interval) {
	            clearInterval(this._interdeterminateInterval);
	            this._interdeterminateInterval = interval;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdProgressCircle.prototype, "currentPath", {
	        /** TODO: internal */
	        get: function () {
	            return this._currentPath;
	        },
	        set: function (path) {
	            this._currentPath = path;
	            // Mark for check as our ChangeDetectionStrategy is OnPush, when changes come from within the
	            // component, change detection must be called for.
	            this._changeDetectorRef.markForCheck();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** Clean up any animations that were running. */
	    MdProgressCircle.prototype.ngOnDestroy = function () {
	        this._cleanupIndeterminateAnimation();
	    };
	    Object.defineProperty(MdProgressCircle.prototype, "value", {
	        get: function () {
	            if (this.mode == 'determinate') {
	                return this._value;
	            }
	        },
	        set: function (v) {
	            if (v && this.mode == 'determinate') {
	                var newValue = clamp(v);
	                this._animateCircle((this.value || 0), newValue, linearEase, DURATION_DETERMINATE, 0);
	                this._value = newValue;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdProgressCircle.prototype, "mode", {
	        /**
	         * Mode of the progress circle
	         *
	         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
	         * mode is bound to the host as the attribute host.
	         */
	        get: function () {
	            return this._mode;
	        },
	        set: function (m) {
	            if (m == 'indeterminate') {
	                this._startIndeterminateAnimation();
	            }
	            else {
	                this._cleanupIndeterminateAnimation();
	            }
	            this._mode = m;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Animates the circle from one percentage value to another.
	     *
	     * @param animateFrom The percentage of the circle filled starting the animation.
	     * @param animateTo The percentage of the circle filled ending the animation.
	     * @param ease The easing function to manage the pace of change in the animation.
	     * @param duration The length of time to show the animation, in milliseconds.
	     * @param rotation The starting angle of the circle fill, with 0° represented at the top center
	     *    of the circle.
	     */
	    MdProgressCircle.prototype._animateCircle = function (animateFrom, animateTo, ease, duration, rotation) {
	        var _this = this;
	        var id = ++this._lastAnimationId;
	        var startTime = Date.now();
	        var changeInValue = animateTo - animateFrom;
	        // No need to animate it if the values are the same
	        if (animateTo === animateFrom) {
	            this.currentPath = getSvgArc(animateTo, rotation);
	        }
	        else {
	            var animation_1 = function () {
	                var elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
	                _this.currentPath = getSvgArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
	                // Prevent overlapping animations by checking if a new animation has been called for and
	                // if the animation has lasted long than the animation duration.
	                if (id === _this._lastAnimationId && elapsedTime < duration) {
	                    requestAnimationFrame(animation_1);
	                }
	            };
	            requestAnimationFrame(animation_1);
	        }
	    };
	    /**
	     * Starts the indeterminate animation interval, if it is not already running.
	     */
	    MdProgressCircle.prototype._startIndeterminateAnimation = function () {
	        var _this = this;
	        var rotationStartPoint = 0;
	        var start = startIndeterminate;
	        var end = endIndeterminate;
	        var duration = DURATION_INDETERMINATE;
	        var animate = function () {
	            _this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
	            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
	            rotationStartPoint = (rotationStartPoint + end) % 100;
	            var temp = start;
	            start = -end;
	            end = -temp;
	        };
	        if (!this.interdeterminateInterval) {
	            this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
	            animate();
	        }
	    };
	    /**
	     * Removes interval, ending the animation.
	     */
	    MdProgressCircle.prototype._cleanupIndeterminateAnimation = function () {
	        this.interdeterminateInterval = null;
	    };
	    __decorate([
	        _angular_core.Input(),
	        _angular_core.HostBinding('attr.aria-valuenow'), 
	        __metadata('design:type', Object)
	    ], MdProgressCircle.prototype, "value", null);
	    __decorate([
	        _angular_core.HostBinding('attr.mode'),
	        _angular_core.Input(), 
	        __metadata('design:type', Object)
	    ], MdProgressCircle.prototype, "mode", null);
	    MdProgressCircle = __decorate([
	        _angular_core.Component({selector: 'md-progress-circle',
	            host: {
	                'role': 'progressbar',
	                '[attr.aria-valuemin]': '_ariaValueMin',
	                '[attr.aria-valuemax]': '_ariaValueMax',
	            },
	            template: "<!-- preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's center.  The center of the circle with remain at the center of the md-progress-circle element containing the SVG. --> <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <path [attr.d]=\"currentPath\"></path> </svg> ",
	            styles: ["/* Animation Durations */ /** Component sizing */ :host { display: block; /** Height and width are provided for md-progress-circle to act as a default. The height and width are expected to be overwritten by application css. */ height: 100px; width: 100px; /** SVG's viewBox is defined as 0 0 100 100, this means that all SVG children will placed based on a 100px by 100px box.  Additionally all SVG sizes and locations are in reference to this viewBox. */ } :host svg { height: 100%; width: 100%; transform-origin: center; } :host path { fill: transparent; stroke: #00897b; /** Stroke width of 10px defines stroke as 10% of the viewBox */ stroke-width: 10px; } :host[color='accent'] path { stroke: #8e24aa; } :host[color='warn'] path { stroke: #e53935; } :host[mode='indeterminate'] { animation-duration: 5250ms, 2887.5ms; animation-name: md-progress-circle-sporadic-rotate, md-progress-circle-linear-rotate; animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1), linear; animation-iteration-count: infinite; transition: none; } /** Animations for indeterminate mode */ @keyframes md-progress-circle-linear-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } @keyframes md-progress-circle-sporadic-rotate { 12.5% { transform: rotate(135deg); } 25% { transform: rotate(270deg); } 37.5% { transform: rotate(405deg); } 50% { transform: rotate(540deg); } 62.5% { transform: rotate(675deg); } 75% { transform: rotate(810deg); } 87.5% { transform: rotate(945deg); } 100% { transform: rotate(1080deg); } } /*# sourceMappingURL=progress-circle.css.map */ "],
	            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [_angular_core.ChangeDetectorRef])
	    ], MdProgressCircle);
	    return MdProgressCircle;
	}());
	/**
	 * <md-spinner> component.
	 *
	 * This is a component definition to be used as a convenience reference to create an
	 * indeterminate <md-progress-circle> instance.
	 */
	var MdSpinner = (function (_super) {
	    __extends(MdSpinner, _super);
	    function MdSpinner(changeDetectorRef) {
	        _super.call(this, changeDetectorRef);
	        this.mode = 'indeterminate';
	    }
	    MdSpinner = __decorate([
	        _angular_core.Component({selector: 'md-spinner',
	            host: {
	                'role': 'progressbar',
	                'mode': 'indeterminate',
	            },
	            template: "<!-- preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's center.  The center of the circle with remain at the center of the md-progress-circle element containing the SVG. --> <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <path [attr.d]=\"currentPath\"></path> </svg> ",
	            styles: ["/* Animation Durations */ /** Component sizing */ :host { display: block; /** Height and width are provided for md-progress-circle to act as a default. The height and width are expected to be overwritten by application css. */ height: 100px; width: 100px; /** SVG's viewBox is defined as 0 0 100 100, this means that all SVG children will placed based on a 100px by 100px box.  Additionally all SVG sizes and locations are in reference to this viewBox. */ } :host svg { height: 100%; width: 100%; transform-origin: center; } :host path { fill: transparent; stroke: #00897b; /** Stroke width of 10px defines stroke as 10% of the viewBox */ stroke-width: 10px; } :host[color='accent'] path { stroke: #8e24aa; } :host[color='warn'] path { stroke: #e53935; } :host[mode='indeterminate'] { animation-duration: 5250ms, 2887.5ms; animation-name: md-progress-circle-sporadic-rotate, md-progress-circle-linear-rotate; animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1), linear; animation-iteration-count: infinite; transition: none; } /** Animations for indeterminate mode */ @keyframes md-progress-circle-linear-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } @keyframes md-progress-circle-sporadic-rotate { 12.5% { transform: rotate(135deg); } 25% { transform: rotate(270deg); } 37.5% { transform: rotate(405deg); } 50% { transform: rotate(540deg); } 62.5% { transform: rotate(675deg); } 75% { transform: rotate(810deg); } 87.5% { transform: rotate(945deg); } 100% { transform: rotate(1080deg); } } /*# sourceMappingURL=progress-circle.css.map */ "],
	        }), 
	        __metadata('design:paramtypes', [_angular_core.ChangeDetectorRef])
	    ], MdSpinner);
	    return MdSpinner;
	}(MdProgressCircle));
	/**
	 * Module functions.
	 */
	/** Clamps a value to be between 0 and 100. */
	function clamp(v) {
	    return Math.max(0, Math.min(100, v));
	}
	/**
	 * Converts Polar coordinates to Cartesian.
	 */
	function polarToCartesian(radius, pathRadius, angleInDegrees) {
	    var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
	    return (radius + (pathRadius * Math.cos(angleInRadians))) +
	        ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
	}
	/**
	 * Easing function for linear animation.
	 */
	function linearEase(currentTime, startValue, changeInValue, duration) {
	    return changeInValue * currentTime / duration + startValue;
	}
	/**
	 * Easing function to match material design indeterminate animation.
	 */
	function materialEase(currentTime, startValue, changeInValue, duration) {
	    var time = currentTime / duration;
	    var timeCubed = Math.pow(time, 3);
	    var timeQuad = Math.pow(time, 4);
	    var timeQuint = Math.pow(time, 5);
	    return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
	}
	/**
	 * Determines the path value to define the arc.  Converting percentage values to to polar
	 * coordinates on the circle, and then to cartesian coordinates in the viewport.
	 *
	 * @param currentValue The current percentage value of the progress circle, the percentage of the
	 *    circle to fill.
	 * @param rotation The starting point of the circle with 0 being the 0 degree point.
	 * @return A string for an SVG path representing a circle filled from the starting point to the
	 *    percentage value provided.
	 */
	function getSvgArc(currentValue, rotation) {
	    // The angle can't be exactly 360, because the arc becomes hidden.
	    var maximumAngle = 359.99 / 100;
	    var startPoint = rotation || 0;
	    var radius = 50;
	    var pathRadius = 40;
	    var startAngle = startPoint * maximumAngle;
	    var endAngle = currentValue * maximumAngle;
	    var start = polarToCartesian(radius, pathRadius, startAngle);
	    var end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
	    var arcSweep = endAngle < 0 ? 0 : 1;
	    var largeArcFlag;
	    if (endAngle < 0) {
	        largeArcFlag = endAngle >= -180 ? 0 : 1;
	    }
	    else {
	        largeArcFlag = endAngle <= 180 ? 0 : 1;
	    }
	    return "M" + start + "A" + pathRadius + "," + pathRadius + " 0 " + largeArcFlag + "," + arcSweep + " " + end;
	}
	var MdProgressCircleModule = (function () {
	    function MdProgressCircleModule() {
	    }
	    MdProgressCircleModule.forRoot = function () {
	        return {
	            ngModule: MdProgressCircleModule,
	            providers: []
	        };
	    };
	    MdProgressCircleModule = __decorate([
	        _angular_core.NgModule({
	            exports: [MdProgressCircle, MdSpinner],
	            declarations: [MdProgressCircle, MdSpinner],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdProgressCircleModule);
	    return MdProgressCircleModule;
	}());

	exports.MdProgressCircle = MdProgressCircle;
	exports.MdSpinner = MdSpinner;
	exports.MdProgressCircleModule = MdProgressCircleModule;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2), __webpack_require__(55), __webpack_require__(97), __webpack_require__(11), __webpack_require__(357)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular2-material/core', 'rxjs/Observable', 'rxjs/add/operator/map'], factory) :
	    (factory((global.md = global.md || {}, global.md.tabs = global.md.tabs || {}),global.ng.core,global.ng.common,global.md.core,global.Rx,global.Rx.Observable.prototype));
	}(this, (function (exports,_angular_core,_angular_common,_angular2Material_core,rxjs_Observable,rxjs_add_operator_map) { 'use strict';

	var __extends = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$1 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/** Used to flag tab labels for use with the portal directive */
	var MdTabLabel = (function (_super) {
	    __extends(MdTabLabel, _super);
	    function MdTabLabel(templateRef, viewContainerRef) {
	        _super.call(this, templateRef, viewContainerRef);
	    }
	    MdTabLabel = __decorate$1([
	        _angular_core.Directive({
	            selector: '[md-tab-label]',
	        }), 
	        __metadata$1('design:paramtypes', [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
	    ], MdTabLabel);
	    return MdTabLabel;
	}(_angular2Material_core.TemplatePortalDirective));

	var __extends$1 = (window && window.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate$2 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$2 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/** Used to flag tab contents for use with the portal directive */
	var MdTabContent = (function (_super) {
	    __extends$1(MdTabContent, _super);
	    function MdTabContent(templateRef, viewContainerRef) {
	        _super.call(this, templateRef, viewContainerRef);
	    }
	    MdTabContent = __decorate$2([
	        _angular_core.Directive({
	            selector: '[md-tab-content]'
	        }), 
	        __metadata$2('design:paramtypes', [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
	    ], MdTabContent);
	    return MdTabContent;
	}(_angular2Material_core.TemplatePortalDirective));

	var __decorate$3 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$3 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/** Used in the `md-tab-group` view to display tab labels */
	var MdTabLabelWrapper = (function () {
	    function MdTabLabelWrapper(elementRef) {
	        this.elementRef = elementRef;
	    }
	    /**
	     * Sets focus on the wrapper element
	     */
	    MdTabLabelWrapper.prototype.focus = function () {
	        this.elementRef.nativeElement.focus();
	    };
	    MdTabLabelWrapper = __decorate$3([
	        _angular_core.Directive({
	            selector: '[md-tab-label-wrapper]'
	        }), 
	        __metadata$3('design:paramtypes', [_angular_core.ElementRef])
	    ], MdTabLabelWrapper);
	    return MdTabLabelWrapper;
	}());

	var __decorate$4 = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata$4 = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/** The ink-bar is used to display and animate the line underneath the current active tab label. */
	var MdInkBar = (function () {
	    function MdInkBar(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	    }
	    /**
	     * Calculates the styles from the provided element in order to align the ink-bar to that element.
	     * @param element
	     */
	    MdInkBar.prototype.alignToElement = function (element) {
	        this._renderer.setElementStyle(this._elementRef.nativeElement, 'left', this._getLeftPosition(element));
	        this._renderer.setElementStyle(this._elementRef.nativeElement, 'width', this._getElementWidth(element));
	    };
	    /**
	     * Generates the pixel distance from the left based on the provided element in string format.
	     * @param element
	     * @returns {string}
	     */
	    MdInkBar.prototype._getLeftPosition = function (element) {
	        return element ? element.offsetLeft + 'px' : '0';
	    };
	    /**
	     * Generates the pixel width from the provided element in string format.
	     * @param element
	     * @returns {string}
	     */
	    MdInkBar.prototype._getElementWidth = function (element) {
	        return element ? element.offsetWidth + 'px' : '0';
	    };
	    MdInkBar = __decorate$4([
	        _angular_core.Directive({
	            selector: 'md-ink-bar',
	        }), 
	        __metadata$4('design:paramtypes', [_angular_core.Renderer, _angular_core.ElementRef])
	    ], MdInkBar);
	    return MdInkBar;
	}());

	var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (window && window.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/** Used to generate unique ID's for each tab component */
	var nextId = 0;
	/** A simple change event emitted on focus or selection changes. */
	var MdTabChangeEvent = (function () {
	    function MdTabChangeEvent() {
	    }
	    return MdTabChangeEvent;
	}());
	var MdTab = (function () {
	    function MdTab() {
	        // TODO: Replace this when BooleanFieldValue is removed.
	        this._disabled = false;
	    }
	    Object.defineProperty(MdTab.prototype, "disabled", {
	        get: function () {
	            return this._disabled;
	        },
	        set: function (value) {
	            this._disabled = (value != null && "" + value !== 'false');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        _angular_core.ContentChild(MdTabLabel), 
	        __metadata('design:type', MdTabLabel)
	    ], MdTab.prototype, "label", void 0);
	    __decorate([
	        _angular_core.ContentChild(MdTabContent), 
	        __metadata('design:type', MdTabContent)
	    ], MdTab.prototype, "content", void 0);
	    __decorate([
	        _angular_core.Input('disabled'), 
	        __metadata('design:type', Boolean), 
	        __metadata('design:paramtypes', [Boolean])
	    ], MdTab.prototype, "disabled", null);
	    MdTab = __decorate([
	        _angular_core.Directive({
	            selector: 'md-tab'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdTab);
	    return MdTab;
	}());
	/**
	 * Material design tab-group component.  Supports basic tab pairs (label + content) and includes
	 * animated ink-bar, keyboard navigation, and screen reader.
	 * See: https://www.google.com/design/spec/components/tabs.html
	 */
	var MdTabGroup = (function () {
	    function MdTabGroup(_zone) {
	        this._zone = _zone;
	        this._isInitialized = false;
	        this._selectedIndex = 0;
	        this._onFocusChange = new _angular_core.EventEmitter();
	        this._onSelectChange = new _angular_core.EventEmitter();
	        this._focusIndex = 0;
	        this._groupId = nextId++;
	    }
	    Object.defineProperty(MdTabGroup.prototype, "selectedIndex", {
	        get: function () {
	            return this._selectedIndex;
	        },
	        set: function (value) {
	            if (value != this._selectedIndex && this.isValidIndex(value)) {
	                this._selectedIndex = value;
	                if (this._isInitialized) {
	                    this._onSelectChange.emit(this._createChangeEvent(value));
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
	     * providing a valid index and return true.
	     */
	    MdTabGroup.prototype.isValidIndex = function (index) {
	        if (this._tabs) {
	            var tab = this._tabs.toArray()[index];
	            return tab && !tab.disabled;
	        }
	        else {
	            return true;
	        }
	    };
	    Object.defineProperty(MdTabGroup.prototype, "_selectedIndexChange", {
	        /** Output to enable support for two-way binding on `selectedIndex`. */
	        get: function () {
	            return this.selectChange.map(function (event) { return event.index; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdTabGroup.prototype, "focusChange", {
	        get: function () {
	            return this._onFocusChange.asObservable();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdTabGroup.prototype, "selectChange", {
	        get: function () {
	            return this._onSelectChange.asObservable();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Waits one frame for the view to update, then upates the ink bar
	     * Note: This must be run outside of the zone or it will create an infinite change detection loop
	     * TODO: internal
	     */
	    MdTabGroup.prototype.ngAfterViewChecked = function () {
	        var _this = this;
	        this._zone.runOutsideAngular(function () {
	            window.requestAnimationFrame(function () {
	                _this._updateInkBar();
	            });
	        });
	        this._isInitialized = true;
	    };
	    /** Tells the ink-bar to align itself to the current label wrapper */
	    MdTabGroup.prototype._updateInkBar = function () {
	        this._inkBar.toArray()[0].alignToElement(this._currentLabelWrapper);
	    };
	    Object.defineProperty(MdTabGroup.prototype, "_currentLabelWrapper", {
	        /**
	         * Reference to the current label wrapper; defaults to null for initial render before the
	         * ViewChildren references are ready.
	         */
	        get: function () {
	            return this._labelWrappers && this._labelWrappers.length
	                ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
	                : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdTabGroup.prototype, "focusIndex", {
	        /** Tracks which element has focus; used for keyboard navigation */
	        get: function () {
	            return this._focusIndex;
	        },
	        /** When the focus index is set, we must manually send focus to the correct label */
	        set: function (value) {
	            if (this.isValidIndex(value)) {
	                this._focusIndex = value;
	                if (this._isInitialized) {
	                    this._onFocusChange.emit(this._createChangeEvent(value));
	                }
	                if (this._labelWrappers && this._labelWrappers.length) {
	                    this._labelWrappers.toArray()[value].focus();
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MdTabGroup.prototype._createChangeEvent = function (index) {
	        var event = new MdTabChangeEvent;
	        event.index = index;
	        if (this._tabs && this._tabs.length) {
	            event.tab = this._tabs.toArray()[index];
	        }
	        return event;
	    };
	    /** Returns a unique id for each tab label element */
	    MdTabGroup.prototype._getTabLabelId = function (i) {
	        return "md-tab-label-" + this._groupId + "-" + i;
	    };
	    /** Returns a unique id for each tab content element */
	    MdTabGroup.prototype._getTabContentId = function (i) {
	        return "md-tab-content-" + this._groupId + "-" + i;
	    };
	    MdTabGroup.prototype.handleKeydown = function (event) {
	        switch (event.keyCode) {
	            case _angular2Material_core.RIGHT_ARROW:
	                this.focusNextTab();
	                break;
	            case _angular2Material_core.LEFT_ARROW:
	                this.focusPreviousTab();
	                break;
	            case _angular2Material_core.ENTER:
	                this.selectedIndex = this.focusIndex;
	                break;
	        }
	    };
	    /**
	     * Moves the focus left or right depending on the offset provided.  Valid offsets are 1 and -1.
	     */
	    MdTabGroup.prototype.moveFocus = function (offset) {
	        if (this._labelWrappers) {
	            var tabs = this._tabs.toArray();
	            for (var i = this.focusIndex + offset; i < tabs.length && i >= 0; i += offset) {
	                if (this.isValidIndex(i)) {
	                    this.focusIndex = i;
	                    return;
	                }
	            }
	        }
	    };
	    /** Increment the focus index by 1 until a valid tab is found. */
	    MdTabGroup.prototype.focusNextTab = function () {
	        this.moveFocus(1);
	    };
	    /** Decrement the focus index by 1 until a valid tab is found. */
	    MdTabGroup.prototype.focusPreviousTab = function () {
	        this.moveFocus(-1);
	    };
	    __decorate([
	        _angular_core.ContentChildren(MdTab), 
	        __metadata('design:type', _angular_core.QueryList)
	    ], MdTabGroup.prototype, "_tabs", void 0);
	    __decorate([
	        _angular_core.ViewChildren(MdTabLabelWrapper), 
	        __metadata('design:type', _angular_core.QueryList)
	    ], MdTabGroup.prototype, "_labelWrappers", void 0);
	    __decorate([
	        _angular_core.ViewChildren(MdInkBar), 
	        __metadata('design:type', _angular_core.QueryList)
	    ], MdTabGroup.prototype, "_inkBar", void 0);
	    __decorate([
	        _angular_core.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], MdTabGroup.prototype, "selectedIndex", null);
	    __decorate([
	        _angular_core.Output('selectedIndexChange'), 
	        __metadata('design:type', rxjs_Observable.Observable)
	    ], MdTabGroup.prototype, "_selectedIndexChange", null);
	    __decorate([
	        _angular_core.Output('focusChange'), 
	        __metadata('design:type', rxjs_Observable.Observable)
	    ], MdTabGroup.prototype, "focusChange", null);
	    __decorate([
	        _angular_core.Output('selectChange'), 
	        __metadata('design:type', rxjs_Observable.Observable)
	    ], MdTabGroup.prototype, "selectChange", null);
	    MdTabGroup = __decorate([
	        _angular_core.Component({selector: 'md-tab-group',
	            template: "<div class=\"md-tab-header\" role=\"tablist\" (keydown)=\"handleKeydown($event)\"> <div class=\"md-tab-label\" role=\"tab\" md-tab-label-wrapper *ngFor=\"let tab of _tabs; let i = index\" [id]=\"_getTabLabelId(i)\" [tabIndex]=\"selectedIndex == i ? 0 : -1\" [attr.aria-controls]=\"_getTabContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [class.md-tab-active]=\"selectedIndex == i\" [class.md-tab-disabled]=\"tab.disabled\" (click)=\"focusIndex = selectedIndex = i\"> <template [portalHost]=\"tab.label\"></template> </div> <md-ink-bar></md-ink-bar> </div> <div class=\"md-tab-body-wrapper\"> <div class=\"md-tab-body\" role=\"tabpanel\" *ngFor=\"let tab of _tabs; let i = index\" [id]=\"_getTabContentId(i)\" [class.md-tab-active]=\"selectedIndex == i\" [attr.aria-labelledby]=\"_getTabLabelId(i)\"> <template [ngIf]=\"selectedIndex == i\"> <template [portalHost]=\"tab.content\"></template> </template> </div> </div> ",
	            styles: [":host { display: flex; flex-direction: column; font-family: Roboto, \"Helvetica Neue\", sans-serif; } /** The top section of the view; contains the tab labels */ .md-tab-header { overflow: hidden; position: relative; display: flex; flex-direction: row; border-bottom: 1px solid #e0e0e0; flex-shrink: 0; } /** Wraps each tab label */ .md-tab-label { line-height: 48px; height: 48px; padding: 0 12px; font-size: 14px; font-family: Roboto, \"Helvetica Neue\", sans-serif; font-weight: 500; cursor: pointer; box-sizing: border-box; color: currentColor; opacity: 0.6; min-width: 160px; text-align: center; } .md-tab-label:focus { outline: none; opacity: 1; background-color: rgba(178, 223, 219, 0.3); } .md-tab-disabled { cursor: default; pointer-events: none; } /** The bottom section of the view; contains the tab bodies */ .md-tab-body-wrapper { position: relative; overflow: hidden; flex-grow: 1; display: flex; } /** Wraps each tab body */ .md-tab-body { display: none; overflow: auto; box-sizing: border-box; flex-grow: 1; flex-shrink: 1; } .md-tab-body.md-tab-active { display: block; } /** The colored bar that underlines the active tab */ md-ink-bar { position: absolute; bottom: 0; height: 2px; background-color: #009688; transition: 350ms ease-out; } /*# sourceMappingURL=tab-group.css.map */ "],
	        }), 
	        __metadata('design:paramtypes', [_angular_core.NgZone])
	    ], MdTabGroup);
	    return MdTabGroup;
	}());
	var MdTabsModule = (function () {
	    function MdTabsModule() {
	    }
	    MdTabsModule.forRoot = function () {
	        return {
	            ngModule: MdTabsModule,
	            providers: []
	        };
	    };
	    MdTabsModule = __decorate([
	        _angular_core.NgModule({
	            imports: [_angular_common.CommonModule, _angular2Material_core.PortalModule],
	            // Don't export MdInkBar or MdTabLabelWrapper, as they are internal implementatino details.
	            exports: [MdTabGroup, MdTabLabel, MdTabContent, MdTab],
	            declarations: [MdTabGroup, MdTabLabel, MdTabContent, MdTab, MdInkBar, MdTabLabelWrapper],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdTabsModule);
	    return MdTabsModule;
	}());

	exports.MdTabChangeEvent = MdTabChangeEvent;
	exports.MdTab = MdTab;
	exports.MdTabGroup = MdTabGroup;
	exports.MdTabsModule = MdTabsModule;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

/***/ },

/***/ 160:
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
	var core_1 = __webpack_require__(2);
	var auth_service_1 = __webpack_require__(47);
	var AccountCardComponent = (function () {
	    function AccountCardComponent(UserService) {
	        this.UserService = UserService;
	        this.balance = "2 340";
	    }
	    AccountCardComponent.prototype.ngOnInit = function () {
	        this.user = this.UserService.getUser();
	    };
	    AccountCardComponent = __decorate([
	        core_1.Component({
	            selector: 'account-card',
	            template: __webpack_require__(339),
	            providers: [],
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.UserService !== 'undefined' && auth_service_1.UserService) === 'function' && _a) || Object])
	    ], AccountCardComponent);
	    return AccountCardComponent;
	    var _a;
	}());
	exports.AccountCardComponent = AccountCardComponent;


/***/ },

/***/ 161:
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
	var core_1 = __webpack_require__(2);
	var service_1 = __webpack_require__(162);
	var AccountChatComponent = (function () {
	    function AccountChatComponent(ChatService) {
	        this.ChatService = ChatService;
	    }
	    AccountChatComponent.prototype.ngOnInit = function () {
	        this.loadChatList();
	    };
	    AccountChatComponent.prototype.loadChatList = function () {
	        var _this = this;
	        this.ChatService.getChatList()
	            .then(function (chatList) {
	            _this.chatList = chatList;
	        });
	    };
	    AccountChatComponent.prototype.chooseChat = function (chat) {
	        chat.count_not_read_messages = 0;
	        this.selectedChat = chat;
	    };
	    AccountChatComponent = __decorate([
	        core_1.Component({
	            selector: 'account-chat',
	            template: __webpack_require__(340),
	            providers: [service_1.AccountChatService],
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof service_1.AccountChatService !== 'undefined' && service_1.AccountChatService) === 'function' && _a) || Object])
	    ], AccountChatComponent);
	    return AccountChatComponent;
	    var _a;
	}());
	exports.AccountChatComponent = AccountChatComponent;


/***/ },

/***/ 162:
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
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(24);
	__webpack_require__(42);
	var AccountChatService = (function () {
	    function AccountChatService(http) {
	        this.http = http;
	        this.CHAT_URL = 'chat/';
	    }
	    AccountChatService.prototype.getChatList = function () {
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.get(this.CHAT_URL)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            return result;
	        })
	            .catch(this.handlerError);
	    };
	    AccountChatService.prototype.handlerError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    AccountChatService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], AccountChatService);
	    return AccountChatService;
	    var _a;
	}());
	exports.AccountChatService = AccountChatService;


/***/ },

/***/ 163:
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
	var core_1 = __webpack_require__(2);
	var service_1 = __webpack_require__(98);
	var AccountFriendshipComponent = (function () {
	    function AccountFriendshipComponent(FriendshipService) {
	        this.FriendshipService = FriendshipService;
	    }
	    AccountFriendshipComponent.prototype.ngOnInit = function () {
	        this.loadFriendList();
	    };
	    AccountFriendshipComponent.prototype.loadFriendList = function () {
	        var _this = this;
	        this.friendList = null;
	        this.applicationsToFriends = null;
	        this.FriendshipService.getFriendList()
	            .then(function (data) {
	            _this.friendList = data.friendList;
	            _this.applicationsToFriends = data.applicationsToFriends;
	        })
	            .catch(function () {
	            _this.friendList = null;
	            _this.applicationsToFriends = null;
	        });
	    };
	    AccountFriendshipComponent.prototype.acceptFriendship = function (friend) {
	        this.confirmFriendship(friend, true);
	    };
	    AccountFriendshipComponent.prototype.declineFriendship = function (friend) {
	        this.confirmFriendship(friend, false);
	    };
	    AccountFriendshipComponent.prototype.confirmFriendship = function (friend, isAssept) {
	        var _this = this;
	        friend.is_busy = true;
	        var friendUid = friend.uid_for_client.name;
	        this.FriendshipService.confirmFriendshipWith(friendUid, isAssept)
	            .then(function () { return _this.loadFriendList(); })
	            .catch(function () { return friend.is_busy = false; });
	    };
	    AccountFriendshipComponent.prototype.removeFriendship = function (friend) {
	        var _this = this;
	        friend.is_busy = true;
	        var friendUid = friend.uid_for_client.name;
	        this.FriendshipService.removeFriendshipWith(friendUid)
	            .then(function () { return _this.loadFriendList(); })
	            .catch(function () { return friend.is_busy = false; });
	    };
	    AccountFriendshipComponent = __decorate([
	        core_1.Component({
	            selector: 'account-friendship',
	            template: __webpack_require__(341),
	            providers: [service_1.FriendshipService],
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof service_1.FriendshipService !== 'undefined' && service_1.FriendshipService) === 'function' && _a) || Object])
	    ], AccountFriendshipComponent);
	    return AccountFriendshipComponent;
	    var _a;
	}());
	exports.AccountFriendshipComponent = AccountFriendshipComponent;


/***/ },

/***/ 164:
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
	var core_1 = __webpack_require__(2);
	var service_1 = __webpack_require__(166);
	var AccountSearchComponent = (function () {
	    function AccountSearchComponent(SearchUserService) {
	        this.SearchUserService = SearchUserService;
	        this.IDForSearch = "";
	        this.inSearchState = false;
	        this.showResultState = false;
	    }
	    AccountSearchComponent.prototype.searchUserByID = function () {
	        var _this = this;
	        this.inSearchState = true;
	        this.SearchUserService.getUserByID(this.IDForSearch)
	            .then(function (found_list) {
	            _this.showSearchResult(found_list);
	        });
	    };
	    AccountSearchComponent.prototype.showSearchResult = function (foundList) {
	        this.inSearchState = false;
	        this.showResultState = true;
	        if (foundList.length) {
	            this.foundUser = foundList[0];
	        }
	        else {
	            this.foundUser = null;
	        }
	    };
	    AccountSearchComponent = __decorate([
	        core_1.Component({
	            selector: 'account-search',
	            template: __webpack_require__(343),
	            providers: [service_1.SearchUserService],
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof service_1.SearchUserService !== 'undefined' && service_1.SearchUserService) === 'function' && _a) || Object])
	    ], AccountSearchComponent);
	    return AccountSearchComponent;
	    var _a;
	}());
	exports.AccountSearchComponent = AccountSearchComponent;


/***/ },

/***/ 165:
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
	var core_1 = __webpack_require__(2);
	var service_1 = __webpack_require__(98);
	var model_1 = __webpack_require__(104);
	var AccountSearchResultListComponent = (function () {
	    function AccountSearchResultListComponent(FriendshipService) {
	        this.FriendshipService = FriendshipService;
	    }
	    AccountSearchResultListComponent.prototype.addFriend = function () {
	        var _this = this;
	        this.user.is_busy = true;
	        this.FriendshipService.sendFriendRequest(this.user.uid_for_client.name)
	            .then(function () {
	            _this.successAddFriend();
	        });
	    };
	    AccountSearchResultListComponent.prototype.successAddFriend = function () {
	        this.user.is_busy = false;
	        this.user.is_friend = true;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof model_1.User !== 'undefined' && model_1.User) === 'function' && _a) || Object)
	    ], AccountSearchResultListComponent.prototype, "user", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], AccountSearchResultListComponent.prototype, "showResult", void 0);
	    AccountSearchResultListComponent = __decorate([
	        core_1.Component({
	            selector: 'search-result-list',
	            template: __webpack_require__(344),
	            providers: [service_1.FriendshipService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof service_1.FriendshipService !== 'undefined' && service_1.FriendshipService) === 'function' && _b) || Object])
	    ], AccountSearchResultListComponent);
	    return AccountSearchResultListComponent;
	    var _a, _b;
	}());
	exports.AccountSearchResultListComponent = AccountSearchResultListComponent;


/***/ },

/***/ 166:
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
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(24);
	__webpack_require__(42);
	var SearchUserService = (function () {
	    function SearchUserService(http) {
	        this.http = http;
	        this.SEARCH_USER_URL = 'personalarea/';
	    }
	    SearchUserService.prototype.getUserByID = function (ID) {
	        var url = this.SEARCH_USER_URL + ID;
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.get(url)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            return result;
	        })
	            .catch(this.handlerError);
	    };
	    SearchUserService.prototype.handlerError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    SearchUserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], SearchUserService);
	    return SearchUserService;
	    var _a;
	}());
	exports.SearchUserService = SearchUserService;


/***/ },

/***/ 167:
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
	var core_1 = __webpack_require__(2);
	var model_1 = __webpack_require__(104);
	var service_1 = __webpack_require__(168);
	var AccountStatisticComponent = (function () {
	    function AccountStatisticComponent(StatisticService) {
	        this.StatisticService = StatisticService;
	    }
	    AccountStatisticComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.StatisticService.getStatistic()
	            .then(function (users) {
	            _this.statisticUserList = users;
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof model_1.User !== 'undefined' && model_1.User) === 'function' && _a) || Object)
	    ], AccountStatisticComponent.prototype, "user", void 0);
	    AccountStatisticComponent = __decorate([
	        core_1.Component({
	            selector: 'account-statistic',
	            template: __webpack_require__(345),
	            providers: [service_1.StatisticService],
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof service_1.StatisticService !== 'undefined' && service_1.StatisticService) === 'function' && _b) || Object])
	    ], AccountStatisticComponent);
	    return AccountStatisticComponent;
	    var _a, _b;
	}());
	exports.AccountStatisticComponent = AccountStatisticComponent;


/***/ },

/***/ 168:
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
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(24);
	__webpack_require__(42);
	var StatisticService = (function () {
	    function StatisticService(http) {
	        this.http = http;
	        this.URL = 'personalarea/statistic';
	    }
	    StatisticService.prototype.getStatistic = function () {
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.get(this.URL)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            return result;
	        })
	            .catch(this.handlerError);
	    };
	    StatisticService.prototype.handlerError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    StatisticService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], StatisticService);
	    return StatisticService;
	    var _a;
	}());
	exports.StatisticService = StatisticService;


/***/ },

/***/ 169:
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
	var core_1 = __webpack_require__(2);
	var platform_browser_1 = __webpack_require__(45);
	var forms_1 = __webpack_require__(155);
	var http_1 = __webpack_require__(24);
	var tabs_1 = __webpack_require__(159);
	var card_1 = __webpack_require__(156);
	var progress_bar_1 = __webpack_require__(157);
	var progress_circle_1 = __webpack_require__(158);
	var app_1 = __webpack_require__(170);
	var routes_1 = __webpack_require__(175);
	var main_1 = __webpack_require__(171);
	var main_2 = __webpack_require__(100);
	var main_3 = __webpack_require__(103);
	var main_4 = __webpack_require__(102);
	var main_5 = __webpack_require__(101);
	var main_6 = __webpack_require__(99);
	var main_7 = __webpack_require__(161);
	var main_8 = __webpack_require__(160);
	var main_9 = __webpack_require__(164);
	var result_list_1 = __webpack_require__(165);
	var main_10 = __webpack_require__(163);
	var main_11 = __webpack_require__(167);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                routes_1.routing,
	                http_1.HttpModule,
	                tabs_1.MdTabsModule,
	                card_1.MdCardModule,
	                progress_bar_1.MdProgressBarModule,
	                progress_circle_1.MdProgressCircleModule
	            ],
	            declarations: [
	                app_1.AppComponent,
	                main_3.StartPageComponent,
	                main_4.GameDispute,
	                main_5.DealOrder,
	                main_1.ChatComponent, main_2.ChatHistoryComponent,
	                main_6.AccountComponent,
	                main_7.AccountChatComponent,
	                main_8.AccountCardComponent,
	                main_9.AccountSearchComponent, result_list_1.AccountSearchResultListComponent,
	                main_10.AccountFriendshipComponent,
	                main_11.AccountStatisticComponent
	            ],
	            providers: [],
	            bootstrap: [
	                app_1.AppComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 170:
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
	var core_1 = __webpack_require__(2);
	var auth_service_1 = __webpack_require__(47);
	var AppComponent = (function () {
	    function AppComponent(UserService) {
	        this.UserService = UserService;
	        this.URL_LOGIN = "/login/steam/";
	        this.URL_LOGOUT = "/auth/logout/";
	        this.userLoaded = false;
	        this.is_authenticated = false;
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.UserService.initAuthUser()
	            .then(function (isInit) {
	            _this.userLoaded = isInit;
	            _this.initAuthUser();
	        });
	    };
	    AppComponent.prototype.initAuthUser = function () {
	        this.is_authenticated = this.UserService.isAutorized();
	        this.userTitle = this.UserService.getName();
	        this.uid = this.UserService.getUid();
	    };
	    AppComponent.prototype.goToAccount = function () {
	        console.log('redirect in account');
	    };
	    AppComponent.prototype.routeLogIn = function () {
	        location.href = this.URL_LOGIN;
	    };
	    AppComponent.prototype.routeLogOut = function () {
	        location.href = this.URL_LOGOUT;
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            providers: [auth_service_1.UserService],
	            template: __webpack_require__(346),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.UserService !== 'undefined' && auth_service_1.UserService) === 'function' && _a) || Object])
	    ], AppComponent);
	    return AppComponent;
	    var _a;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 171:
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
	var core_1 = __webpack_require__(2);
	var main_1 = __webpack_require__(100);
	var service_1 = __webpack_require__(173);
	var model_1 = __webpack_require__(172);
	var ChatComponent = (function () {
	    function ChatComponent(ChatService) {
	        this.ChatService = ChatService;
	        this.CHAT_WATCHER_PERIOD = 5000;
	        this.messageForSend = "";
	        this.chatWatcherId = 0;
	    }
	    ChatComponent.prototype.ngOnChanges = function (changes) {
	        var chat = changes['chat'].currentValue;
	        if (chat) {
	            this.loadChat(chat);
	        }
	    };
	    ChatComponent.prototype.ngOnDestroy = function () {
	        this.stopChatWatcher();
	    };
	    ChatComponent.prototype.loadChat = function (chat) {
	        var _this = this;
	        this.isBusy = true;
	        var chatId = chat.chat.id;
	        this.ChatService.getChat(chatId)
	            .then(function (messages) {
	            _this.isBusy = false;
	            _this.messages = messages;
	            setTimeout(function () { return _this.renderMessages(messages); }, 0);
	            _this.runChatWatcher(chatId);
	        })
	            .catch(function () {
	            _this.isBusy = false;
	            _this.messages = null;
	        });
	    };
	    ChatComponent.prototype.renderMessages = function (messages) {
	        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
	            var message = messages_1[_i];
	            this.historyComponent.postNewMessage(message);
	        }
	    };
	    ChatComponent.prototype.sendMessage = function () {
	        var _this = this;
	        var message = this.messageForSend;
	        var chatId = this.chat.chat.id;
	        this.messageForSend = "";
	        this.ChatService.sendMessage(chatId, message)
	            .then(function (message) {
	            _this.historyComponent.postNewMessage(message);
	        });
	    };
	    ChatComponent.prototype.runChatWatcher = function (chatId) {
	        var _this = this;
	        this.stopChatWatcher();
	        this.chatWatcherId = setInterval(function () {
	            _this.ChatService.getNewMessages(chatId)
	                .then(function (messages) { return _this.renderMessages(messages); });
	        }, this.CHAT_WATCHER_PERIOD);
	    };
	    ChatComponent.prototype.stopChatWatcher = function () {
	        clearInterval(this.chatWatcherId);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof model_1.Chat !== 'undefined' && model_1.Chat) === 'function' && _a) || Object)
	    ], ChatComponent.prototype, "chat", void 0);
	    __decorate([
	        core_1.ViewChild('history'), 
	        __metadata('design:type', (typeof (_b = typeof main_1.ChatHistoryComponent !== 'undefined' && main_1.ChatHistoryComponent) === 'function' && _b) || Object)
	    ], ChatComponent.prototype, "historyComponent", void 0);
	    ChatComponent = __decorate([
	        core_1.Component({
	            selector: 'chat',
	            template: __webpack_require__(348),
	            providers: [service_1.ChatService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_c = typeof service_1.ChatService !== 'undefined' && service_1.ChatService) === 'function' && _c) || Object])
	    ], ChatComponent);
	    return ChatComponent;
	    var _a, _b, _c;
	}());
	exports.ChatComponent = ChatComponent;


/***/ },

/***/ 172:
/***/ function(module, exports) {

	"use strict";
	var Chat = (function () {
	    function Chat() {
	    }
	    return Chat;
	}());
	exports.Chat = Chat;


/***/ },

/***/ 173:
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
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(24);
	var ng2_cookies_1 = __webpack_require__(140);
	__webpack_require__(42);
	var ChatService = (function () {
	    function ChatService(http) {
	        this.http = http;
	        this.CHAT_URL = 'chat/';
	    }
	    ChatService.prototype.sendMessage = function (chatID, textMessage) {
	        var url = this.CHAT_URL + chatID;
	        var headers = new http_1.Headers({
	            'Content-Type': 'application/json',
	            'X-CSRFToken': ng2_cookies_1.Cookie.get('csrftoken')
	        });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var data = {};
	        data.message = textMessage;
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.post(url, JSON.stringify(data), options)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            return result;
	        })
	            .catch(this.handlerError);
	    };
	    ChatService.prototype.getChat = function (chatId) {
	        var url = this.CHAT_URL + chatId;
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.get(url)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            return result;
	        })
	            .catch(this.handlerError);
	    };
	    ChatService.prototype.getNewMessages = function (chatId) {
	        var url = this.CHAT_URL + chatId + '/new';
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.get(url)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            return result;
	        })
	            .catch(this.handlerError);
	    };
	    ChatService.prototype.handlerError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    ChatService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], ChatService);
	    return ChatService;
	    var _a;
	}());
	exports.ChatService = ChatService;


/***/ },

/***/ 174:
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
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(24);
	__webpack_require__(42);
	var GameService = (function () {
	    function GameService(http) {
	        this.http = http;
	        this.GAME_URL = 'pfg';
	    }
	    GameService.prototype.getGames = function () {
	        //noinspection TypeScriptUnresolvedFunction
	        return this.http.get(this.GAME_URL)
	            .toPromise()
	            .then(function (response) {
	            var result = response.json();
	            return result;
	        })
	            .catch(this.handlerError);
	    };
	    GameService.prototype.handlerError = function (error) {
	        return Promise.reject(error.message || error);
	    };
	    GameService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], GameService);
	    return GameService;
	    var _a;
	}());
	exports.GameService = GameService;


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(46);
	var main_1 = __webpack_require__(103);
	var main_2 = __webpack_require__(102);
	var main_3 = __webpack_require__(101);
	var main_4 = __webpack_require__(99);
	var appRoutes = [
	    {
	        path: '',
	        component: main_1.StartPageComponent
	    },
	    {
	        path: 'pfg',
	        component: main_2.GameDispute
	    },
	    {
	        path: 'pfg/:game_namespace/dispute',
	        component: main_3.DealOrder
	    },
	    {
	        path: 'account',
	        component: main_4.AccountComponent
	    }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });


/***/ },

/***/ 337:
/***/ function(module, exports) {

	/**
	 * Class Cookie - Holds static functions to deal with Cookies
	 */
	var Cookie = (function () {
	    function Cookie() {
	    }
	    /**
	     * Retrieves a single cookie by it's name
	     *
	     * @param  {string} name Identification of the Cookie
	     * @returns The Cookie's value
	     */
	    Cookie.get = function (name) {
	        var myWindow = window;
	        name = myWindow.escape(name);
	        var regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
	        var result = regexp.exec(document.cookie);
	        return (result === null) ? null : myWindow.unescape(result[1]);
	    };
	    /**
	     * Retrieves a a list of all cookie avaiable
	     *
	     * @returns Object with all Cookies
	     */
	    Cookie.getAll = function () {
	        var cookies = {};
	        if (document.cookie && document.cookie != '') {
	            var split = document.cookie.split(';');
	            for (var i = 0; i < split.length; i++) {
	                var currCookie = split[i].split('=');
	                currCookie[0] = currCookie[0].replace(/^ /, '');
	                cookies[decodeURIComponent(currCookie[0])] = decodeURIComponent(currCookie[1]);
	            }
	        }
	        return cookies;
	    };
	    /**
	     * Save the Cookie
	     *
	     * @param  {string} name Cookie's identification
	     * @param  {string} value Cookie's value
	     * @param  {number} expires Cookie's expiration date in days from now. If it's undefined the cookie is a session Cookie
	     * @param  {string} path Path relative to the domain where the cookie should be avaiable. Default /
	     * @param  {string} domain Domain where the cookie should be avaiable. Default current domain
	     */
	    Cookie.set = function (name, value, expires, path, domain) {
	        var myWindow = window;
	        var cookieStr = myWindow.escape(name) + '=' + myWindow.escape(value) + ';';
	        if (expires) {
	            var dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
	            cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
	        }
	        if (path) {
	            cookieStr += 'path=' + path + ';';
	        }
	        if (domain) {
	            cookieStr += 'domain=' + domain + ';';
	        }
	        // console.log(cookieStr);
	        document.cookie = cookieStr;
	    };
	    /**
	     * Removes specified Cookie
	     *
	     * @param  {string} name Cookie's identification
	     * @param  {string} path Path relative to the domain where the cookie should be avaiable. Default /
	     * @param  {string} domain Domain where the cookie should be avaiable. Default current domain
	     */
	    Cookie.delete = function (name, path, domain) {
	        // If the cookie exists
	        if (Cookie.get(name)) {
	            Cookie.set(name, '', -1, path, domain);
	        }
	    };
	    /**
	     * Delete all cookie avaiable
	     */
	    Cookie.deleteAll = function (path, domain) {
	        var cookies = Cookie.getAll();
	        for (var cookieName in cookies) {
	            Cookie.delete(cookieName, path, domain);
	        }
	    };
	    return Cookie;
	})();
	exports.Cookie = Cookie;
	//# sourceMappingURL=cookie.js.map

/***/ },

/***/ 339:
/***/ function(module, exports) {

	module.exports = "<md-card>\n    <md-card-subtitle>Личные данные</md-card-subtitle>\n    <md-card-content>\n        <div *ngIf=\"user\">\n            <p>Имя в статистике: <strong>{{user.statistic_name.name}}</strong></p>\n            <p>id: <strong>{{user.uid_for_client.name}}</strong></p>\n            <div class=\"payment text-center\">\n                <h4>Баланс</h4>\n                <p>\n                    <strong><em>{{balance}}</em> бубликов</strong>\n                </p>\n                <p>\n                    <button type=\"button\"\n                            class=\"btn btn-primary\"\n                            disabled=\"disabled\">\n                        Пополнить баланс\n                    </button>\n                </p>\n            </div>\n        </div>\n    </md-card-content>\n</md-card>"

/***/ },

/***/ 340:
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"!chatList\">\n    <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n<div *ngIf=\"chatList && !chatList.length\">\n    <em>Нет активных разговоров</em>\n</div>\n<div *ngIf=\"chatList && chatList.length\"\n        class=\"row\">\n    <div class=\"col-md-4\">\n        <div class=\"list-group\">\n            <a *ngFor=\"let chat of chatList\"\n               class=\"list-group-item\"\n               [class.active]=\"selectedChat == chat\"\n               (click)=\"chooseChat(chat)\">\n                <span *ngIf=\"chat.count_not_read_messages != 0\"\n                      class=\"badge\">\n                    <span class=\"glyphicon glyphicon-envelope\"></span> {{chat.count_not_read_messages}}\n                </span>\n                {{chat.user.username}}\n            </a>\n        </div>\n    </div>\n    <div class=\"col-md-8\">\n        <chat [chat]=\"selectedChat\"></chat>\n    </div>\n</div>\n"

/***/ },

/***/ 341:
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"!friendList || !applicationsToFriends\">\n    <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n<div *ngIf=\"friendList && applicationsToFriends && !friendList.length && !applicationsToFriends.length\">\n    <em>У вас нет друзей</em>\n</div>\n<div *ngIf=\"friendList && friendList.length\">\n    <h4>Друзья</h4>\n    <table class=\"table\" width=\"100%\">\n        <thead>\n            <th width=\"80\">№ п/п</th>\n            <th>Имя</th>\n            <th width=\"160\">Действия</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let friendship of friendList; let i = index\">\n                <td>{{i + 1}}</td>\n                <td>{{friendship.friend.username}}</td>\n                <td>\n                    <div *ngIf=\"!friendship.friend.is_busy\">\n                        <button class=\"btn btn-primary btn-sm\"\n                                (click)=\"removeFriendship(friendship.friend)\">\n                            Удалить из друзей\n                        </button>\n                    </div>\n                    <div *ngIf=\"friendship.friend.is_busy\">\n                        <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div *ngIf=\"applicationsToFriends && applicationsToFriends.length\">\n    <h4>Заявки в друзья</h4>\n    <table class=\"table\" width=\"100%\">\n        <thead>\n            <th width=\"80\">№ п/п</th>\n            <th>Имя</th>\n            <th width=\"220\">Действия</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let friendship of applicationsToFriends; let i = index\">\n                <td>{{i + 1}}</td>\n                <td>{{friendship.friend.username}}</td>\n                <td>\n                    <div *ngIf=\"!friendship.friend.is_busy\">\n                        <button *ngIf=\"!friendship.friend.is_busy\"\n                                class=\"btn btn-primary btn-sm\"\n                                (click)=\"acceptFriendship(friendship.friend)\">\n                            Принять дружбу\n                        </button>\n                        <button class=\"btn btn-default btn-sm\"\n                                (click)=\"declineFriendship(friendship.friend)\">\n                            Отклонить\n                        </button>\n                    </div>\n                    <div *ngIf=\"friendship.friend.is_busy\">\n                        <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ },

/***/ 342:
/***/ function(module, exports) {

	module.exports = "<div class=\"raw\">\n    <md-tab-group class=\"col-md-8\">\n        <md-tab>\n            <template md-tab-label>\n                <span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span> Сообщения\n            </template>\n            <template md-tab-content>\n                <account-chat></account-chat>\n            </template>\n        </md-tab>\n        <md-tab>\n            <template md-tab-label>\n                <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> Друзья\n            </template>\n            <template md-tab-content>\n                <account-friendship></account-friendship>\n            </template>\n        </md-tab>\n        <md-tab>\n            <template md-tab-label>\n                <span class=\"glyphicon glyphicon-signal\" aria-hidden=\"true\"></span> Статистика\n            </template>\n            <template md-tab-content>\n                <account-statistic [user]=\"user\"></account-statistic>\n            </template>\n        </md-tab>\n        <md-tab>\n            <template md-tab-label>\n                <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span> Поиск\n            </template>\n            <template md-tab-content>\n                <account-search></account-search>\n            </template>\n        </md-tab>\n    </md-tab-group>\n    <account-card class=\"col-md-4\"></account-card>\n</div>\n"

/***/ },

/***/ 343:
/***/ function(module, exports) {

	module.exports = "<form>\n    <fieldset [disabled]=\"inSearchState\">\n        <div class=\"form-group\">\n            <label for=\"search-query-field\">Введите ID пользователя для поиска:</label>\n            <div class=\"input-group\">\n                <input\n                        id=\"search-query-field\"\n                        type=\"text\"\n                        name=\"search_uid\"\n                        class=\"form-control\"\n                        placeholder=\"ID пользователя\"\n                        [(ngModel)]=\"IDForSearch\" />\n                <span class=\"input-group-btn\">\n                    <button\n                            class=\"btn btn-primary\"\n                            type=\"button\"\n                            (click)=\"searchUserByID()\">\n                        Поиск\n                    </button>\n                </span>\n            </div>\n        </div>\n    </fieldset>\n    <div class=\"form-group\"\n         [hidden]=\"!inSearchState\">\n        <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n    </div>\n</form>\n<search-result-list [user]=\"foundUser\" [showResult]=\"showResultState\"></search-result-list>\n"

/***/ },

/***/ 344:
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"user\">\n    <h4>Найден пользователь:</h4>\n    <div class=\"row\">\n        <div class=\"col-md-8\">{{user.username}}</div>\n        <div class=\"col-md-4 text-right\">\n            <div *ngIf=\"!user.is_friend && !user.is_busy\">\n                <button\n                        class=\"btn btn-default btn-xs\"\n                        (click)=\"addFriend()\">\n                    Добавить в друзья\n                </button>\n            </div>\n            <div *ngIf=\"user.is_friend && !user.is_busy\">\n                <button\n                        class=\"btn btn-default btn-sm\"\n                        disabled>\n                    Уже в друзьях\n                </button>\n            </div>\n            <div *ngIf=\"user.is_busy\">\n                <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"showResult && !user\">\n    <em>Пользователи не найдены</em>\n</div>"

/***/ },

/***/ 345:
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"!statisticUserList\">\n    <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n<div *ngIf=\"statisticUserList && !statisticUserList.length\">\n    <em>Статистика отсутствует</em>\n</div>\n<div *ngIf=\"statisticUserList && statisticUserList.length\">\n    <table class=\"table\" width=\"100%\">\n        <thead>\n            <th width=\"80\">Место</th>\n            <th>Имя</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let statisticUser of statisticUserList; let i = index\"\n                    [class.success]=\"statisticUser.id==user.id\">\n                <td>{{i + 1}}</td>\n                <td>{{statisticUser.statistic_name.name}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ },

/***/ 346:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\"\n               routerLink=\"/\">\n                Сyfa.pnt\n            </a>\n        </div>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!userLoaded\">\n                <em>Загрузка данных...</em>\n            </li>\n            <li *ngIf=\"userLoaded && is_authenticated\">\n                <a class=\"log-in text-left\"\n                   routerLink=\"account\">\n                    <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> {{userTitle}}\n                </a>\n            </li>\n            <li *ngIf=\"userLoaded && is_authenticated\">\n                <p class=\"navbar-text\"><em>id: {{uid}}</em></p>\n            </li>\n            <li *ngIf=\"userLoaded && is_authenticated\">\n                <a class=\"log-in\"\n                   (click)=\"routeLogOut()\">\n                    <span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span> Выйти\n                </a>\n            </li>\n            <li *ngIf=\"userLoaded && !is_authenticated\">\n                <a class=\"log-in\"\n                   (click)=\"routeLogIn()\">\n                    <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span> Войти\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<main>\n    <router-outlet></router-outlet>\n</main>\n\n"

/***/ },

/***/ 347:
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"let message of messages\"\n     class=\"chat__message_stripe\"\n     [class.myself]=\"message.isMyself\"\n     [class.other]=\"!message.isMyself\">\n    <div class=\"chat__message_block\">\n        <div class=\"chat__message-date\">{{message.creation_datetime | date:'yyyy.MM.dd HH:mm'}}</div>\n        <div class=\"chat__message-body\"\n             [innerHTML]=\"message.message\">\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 348:
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"chat && messages && messages.length\" class=\"chat__block\">\n    <chat-history #history class=\"chat__history\"></chat-history>\n    <form class=\"chat__editor\">\n        <div class=\"form-group\">\n            <textarea class=\"form-control\"\n                      [(ngModel)]=\"messageForSend\" [ngModelOptions]=\"{standalone: true}\">\n            </textarea>\n        </div>\n        <div class=\"form-group text-right\">\n            <button type=\"button\"\n                    class=\"btn btn-primary\"\n                    (click)=\"sendMessage()\"\n                    [disabled]=\"messageForSend==''\">\n                Отправить\n            </button>\n        </div>\n    </form>\n</div>\n<div *ngIf=\"!chat && !isBusy\">\n    <em>Не выбран собеседник</em>\n</div>\n<div *ngIf=\"isBusy\">\n    <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n"

/***/ },

/***/ 349:
/***/ function(module, exports) {

	module.exports = "<h1>Оформление заявки на спор по игре ...</h1>\n"

/***/ },

/***/ 350:
/***/ function(module, exports) {

	module.exports = "<h1>PfG: спор через игру</h1>\n<p>Выберите игру для спора:</p>\n<div *ngIf=\"!gameList\">\n    <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n<ul *ngIf=\"gameList && gameList.length\">\n    <li *ngFor=\"let game of gameList\"\n        (click)=\"changeGame(game.namespace)\">\n        {{game.name}}\n    </li>\n</ul>\n"

/***/ },

/***/ 351:
/***/ function(module, exports) {

	module.exports = "<div class=\"start-page row\">\n    <div class=\"col-md-4\">\n        <a class=\"thumbnail text-center\"\n           routerLink=\"/pfg\">\n            <div class=\"caption\">\n                <p>PfG</p>\n            </div>\n            <div class=\"pfg-logo\"></div>\n        </a>\n    </div>\n    <div class=\"col-md-offset-1 col-md-7\">\n        <h1>Сyfa.pnt</h1>\n        <p>Добро пожаловать на сайт.</p>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </p>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </p>\n    </div>\n</div>\n"

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(11);
	var map_1 = __webpack_require__(147);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ }

});