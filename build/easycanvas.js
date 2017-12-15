(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    funcOrValue: function funcOrValue(_funcOrValue, _this) {
	        if (typeof _funcOrValue === 'function') {
	            var res = _funcOrValue.call(_this);
	            return res && typeof res.$$value !== 'undefined' ? res.$$value : res;
	        }

	        return _funcOrValue;
	    },

	    execFuncs: function execFuncs(funcOrArray, _this, _arg) {
	        if (typeof funcOrArray === 'function') {
	            funcOrArray.apply(_this, _arg);
	        } else if (Array.prototype.isPrototypeOf(funcOrArray)) {
	            funcOrArray.forEach(function (f) {
	                f && f.apply(_this);
	            });
	        }
	    },

	    getMinFromArray: function getMinFromArray(arr) {
	        var res = arr[0];
	        arr.forEach(function (item) {
	            if (item < res) {
	                res = item;
	            }
	        });
	        return res;
	    },

	    getCharFromKey: function getCharFromKey(k) {
	        return k.key || String.fromCharCode(k.keyCode);
	    },

	    noop: function noop() {},

	    firstValuable: function firstValuable(a, b) {
	        return typeof a === 'undefined' ? b : a;
	    },

	    assign: function assign(target, source) {
	        for (var i in source) {
	            if (Object.prototype.hasOwnProperty.call(source, i)) {
	                target[i] = source[i];
	            }
	        }
	        return target;
	    }
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    xywh: ['sx', 'sy', 'sw', 'sh', 'tx', 'ty', 'tw', 'th'],
	    txywh: ['tx', 'ty', 'tw', 'th'],
	    sxywh: ['sx', 'sy', 'sw', 'sh'],
	    devFlag: '__EASYCANVAS_DEVTOOL__'
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var num = function num(x, y, sx, sy, diff) {
	    var _diff = diff || 1;

	    if (x - sx >= _diff) {
	        if (y - sy >= _diff) {
	            return 3;
	        } else if (y - sy <= -_diff) {
	            return 9;
	        }

	        return 6;
	    }

	    if (x - sx <= -_diff) {
	        if (y - sy >= _diff) {
	            return 1;
	        } else if (y - sy <= -_diff) {
	            return 7;
	        }

	        return 4;
	    }

	    if (y - sy >= _diff) {
	        return 2;
	    } else if (y - sy <= -_diff) {
	        return 8;
	    }

	    return 5;
	};

	var _NUM2XAY = {
	    '1': { x: -1, y: 1 },
	    '2': { x: 0, y: 1 },
	    '3': { x: 1, y: 1 },
	    '4': { x: -1, y: 0 },
	    '5': { x: 0, y: 0 },
	    '6': { x: 1, y: 0 },
	    '7': { x: -1, y: -1 },
	    '8': { x: 0, y: -1 },
	    '9': { x: 1, y: -1 }
	};

	module.exports = {
	    num: num,

	    xy: function xy() {
	        var _num = num.apply(this, arguments);
	        return JSON.parse(JSON.stringify(_NUM2XAY[_num] || {}));
	    },

	    NUM2XAY: function NUM2XAY(val) {
	        return JSON.parse(JSON.stringify(_NUM2XAY[val]));
	    },

	    pointInRect: function pointInRect(x, y, x1, x2, y1, y2) {
	        return !(x < x1 || x > x2 || y < y1 || y > y2);
	    },

	    getDistanceSq: function getDistanceSq(x1, y1, x2, y2) {
	        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
	    },

	    enoughNear: function enoughNear(x1, y1, x2, y2, r) {
	        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) <= r * r;
	    }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _positionCompare = __webpack_require__(3);

	var _positionCompare2 = _interopRequireDefault(_positionCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * Bind drag events to EVERY SPRITE.
	 * - Whether to trigger handlers, is decided by '$Sprite.scroll.scrollable'.
	 * - Drag events FISRT, scroll events FOLLOWING. Drags will stop events' bubbling.
	 * - TODO: Move 'bindings' to event handlers
	 *
	 * ********** **/

	var draggingFlag = false;

	var setFlag = function setFlag($sprite, value) {
	    $sprite.drag.draggingFlag = value;
	    draggingFlag = value;
	};

	var dragHandler = function dragHandler(originHandler, item, e, dragEnabled) {
	    return originHandler ? originHandler.call(item, e) : dragEnabled ? 'drag' : false;
	};

	module.exports = {
	    bind: function bind($sprite) {
	        var startDragPosition = {
	            x: 0,
	            y: 0
	        };
	        $sprite.drag.draggingFlag = false;
	        var oMousedown = $sprite.events.mousedown || $sprite.events.touchstart;
	        $sprite.events.touchstart = $sprite.events.mousedown = function (e) {
	            // if dragable is a object, it means the range of dragable area
	            if ($sprite.drag.dragable) {
	                setFlag($sprite, true);
	                var relativeX = e.canvasX - this.$cache.tx;
	                var relativeY = e.canvasY - this.$cache.ty;

	                startDragPosition.x = e.canvasX;
	                startDragPosition.y = e.canvasY;
	            }

	            return dragHandler(oMousedown, $sprite, e, $sprite.drag.dragable);
	        }.bind($sprite);
	        var oMousehold = $sprite.events.hold || $sprite.events.mousemove; //TODO 不规范？
	        $sprite.events.touchmove = $sprite.events.mousemove = function (e) {
	            var worked = $sprite.drag.draggingFlag && $sprite.drag.dragable;
	            if (worked) {
	                this.style.tx += e.canvasX - startDragPosition.x;
	                this.style.ty += e.canvasY - startDragPosition.y;
	                // if (utils.funcOrValue(this.style.locate, this) === 'center') {
	                //     this.style.tx += (this.style.tw || this.content.img.width || 0) / 2;
	                //     this.style.ty += (this.style.th || this.content.img.height || 0) / 2;
	                // }

	                startDragPosition.x = e.canvasX;
	                startDragPosition.y = e.canvasY;
	            }
	            return dragHandler(oMousehold, $sprite, e, worked);
	        }.bind($sprite);
	        var oMouseup = $sprite.events.mouseup || $sprite.events.touchend;
	        $sprite.events.touchend = $sprite.events.mouseup = function (e) {
	            var worked = $sprite.drag.draggingFlag && $sprite.drag.dragable;
	            if ($sprite.drag.draggingFlag && $sprite.drag.dragable) {
	                setFlag($sprite, false);
	            }
	            return dragHandler(oMouseup, $sprite, e, worked);
	        };
	        var oMouseout = $sprite.events.mouseout;
	        $sprite.events.mouseout = function (e) {
	            var worked = $sprite.drag.draggingFlag && $sprite.drag.dragable;
	            setFlag($sprite, false);
	            return dragHandler(oMouseout, $sprite, e, worked);
	        };
	        var oClick = $sprite.events.click;
	        $sprite.events.click = function (e) {
	            var worked = $sprite.drag.dragable;
	            if (worked) {
	                var relativeX = e.canvasX - $sprite.$cache.tx;
	                var relativeY = e.canvasY - $sprite.$cache.ty;
	                return oClick ? oClick.call($sprite, e) : true;
	            }
	            return dragHandler(oClick, $sprite, e, worked);
	        };
	    }
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	    window.setTimeout(callback, 1000 / 60);
	};

	module.exports = rAF;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	var _on = __webpack_require__(10);

	var _on2 = _interopRequireDefault(_on);

	var _off = __webpack_require__(9);

	var _off2 = _interopRequireDefault(_off);

	var _trigger = __webpack_require__(11);

	var _trigger2 = _interopRequireDefault(_trigger);

	var _broadcast = __webpack_require__(8);

	var _broadcast2 = _interopRequireDefault(_broadcast);

	var _bindDrag = __webpack_require__(4);

	var _bindDrag2 = _interopRequireDefault(_bindDrag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var preAdd = function preAdd(item) {
	    var $canvas = item.$canvas;

	    if (!item.$id) {
	        item.$id = Math.random().toString(36).substr(2);
	    }

	    item.content = item.content || {};

	    item.style = item.style || {};

	    item.style.zIndex = item.style.zIndex || 0;
	    item.style.mirrX = item.style.mirrX || 0;

	    item.style.opacity = item.style.opacity === undefined ? 1 : item.style.opacity;
	    item.style.locate = item.style.locate || 'center';
	    // item.style.rotate = item.style.rotate || 0;
	    item.style.scale = item.style.scale || 1;
	    // item.style.display = item.style.display;

	    var _img = _utils2.default.funcOrValue(item.content.img);
	    if (_img === undefined) {
	        _img = {
	            width: 0,
	            height: 0
	        };
	    }

	    _constants2.default.xywh.forEach(function (key) {
	        item.style[key] = item.style[key] || 0;
	    });

	    item.inherit = item.inherit || ['tx', 'ty', 'scale'];
	    item.drag = item.drag || {};

	    item.events = item.events || {};
	    item.events.eIndex = item.events.eIndex || 0;
	    item.events.through = !!item.events.through;

	    item.scroll = item.scroll || {};
	    item.scroll.scrollX = item.scroll.scrollX || 0;
	    item.scroll.scrollY = item.scroll.scrollY || 0;

	    item.hooks = item.hooks || {};

	    item.name = item.name;
	    if (!item.name && item.content.img && item.content.img.src) {
	        var fileName = item.content.img.src.match(/.*\/([^\/]*)$/);
	        if (fileName && fileName[1]) {
	            item.name = fileName[1];
	        }
	    }
	    item.name = item.name || 'Unnamed Easycanvas Object';

	    item.children = item.children || [];
	    item.children.forEach(function (c) {
	        c.$canvas = item.$canvas;
	        c.$parent = item;

	        c = new sprite(c);
	    });

	    item.$cache = {};
	    item.$scroll = {
	        speedX: 0,
	        speedY: 0
	    };

	    return item;
	}; /** ********** *
	    *
	    * Sprite Structure
	    * {
	    *     style: {
	    *         tx, ty, tw, th,
	    *         zIndex, opacity, scale, rotate, rx, ry,
	    *         sx, sy, sw, sh, locate, // useless for content.text
	    *         fh, fv, fx, fy, // transfrom
	    *         align, font, color, // useless for content.img
	    *         visible, // visible false equals inexistence
	    *         mirrX, mirrY, // visible false equals inexistence
	    *     },
	    *     content: {
	    *         img, // rich type eg: sequenceDiagram(img, {config})
	    *         text,
	    *     },
	    *     events: {
	    *         eIndex,
	    *         click / touchstart / contextmenu / ... / hold / touchout,
	    *         through,
	    *     },
	    *     children: [
	    *         { Sprite }, { Sprite } ...
	    *     ],
	    *     inherit: ['tx', 'ty', ...] // inherit from parent, default is ['tx', 'ty', 'scale']
	    *     hooks: {
	    *         created, mounted, painted, ticked
	    *     },
	    *
	    *     $parent: { Sprite },
	    *     $cache: {
	    *         tx, ty, tw, th, ...
	    *     },
	    *
	    * }
	    *
	    * ********** **/

	var sprite = function sprite(opt) {
	    var _opt = preAdd(opt);

	    for (var i in _opt) {
	        if (Object.prototype.hasOwnProperty.call(_opt, i)) {
	            this[i] = _opt[i];
	        }
	    }

	    return this;
	};

	sprite.prototype.add = function (child) {
	    this.children = this.children || [];

	    child.$canvas = this.$canvas;
	    child.$parent = this;

	    if (!child.$id) {
	        child = new sprite(child);
	    }

	    _bindDrag2.default.bind(child);

	    child.children.forEach(function (c, i) {
	        child.children[i] = new sprite(c);
	        child.children[i].$canvas = child.$canvas;
	        child.children[i].$parent = child;
	    });

	    this.children.push(child);

	    return child;
	};

	sprite.prototype.remove = function (child) {
	    if (child) {
	        this.$canvas.remove(child);
	        _utils2.default.execFuncs(child.hooks.removed, child);
	        return;
	    }

	    if (this.$parent) {
	        this.$parent.remove(this);
	    } else {
	        this.$canvas.remove(this);
	    }
	    _utils2.default.execFuncs(this.hooks.removed, this);
	};

	sprite.prototype.on = _on2.default;
	sprite.prototype.off = _off2.default;
	sprite.prototype.trigger = _trigger2.default;
	sprite.prototype.broadcast = _broadcast2.default;

	module.exports = sprite;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _tick2 = __webpack_require__(5);

	var _tick3 = _interopRequireDefault(_tick2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * Handle wheel events on canvas
	 * - Wheel events pass in from eventHandler.js.
	 * - Includes touch scroll and mouse wheel scroll.
	 *
	 * ********** **/

	var startPos = {};
	var scrolling = false;

	var tickPool = [];

	var scrollFuncs = {
	    stop: function stop() {
	        scrolling = false;
	    },

	    tick: function tick() {
	        (0, _tick3.default)(scrollFuncs.looper);
	    },

	    looper: function looper() {
	        tickPool.forEach(function ($sprite, index) {
	            var speedX = $sprite.$scroll.speedX;
	            var speedY = $sprite.$scroll.speedY;

	            if (Math.abs($sprite.$scroll.speedX) > 1) {
	                $sprite.$scroll.speedX *= $sprite.scroll.smooth || 0.8;
	            } else {
	                $sprite.$scroll.speedX = 0;
	            }
	            if (Math.abs($sprite.$scroll.speedY) > 1) {
	                $sprite.$scroll.speedY *= $sprite.scroll.smooth || 0.8;
	            } else {
	                $sprite.$scroll.speedY = 0;
	            }

	            if (Math.abs($sprite.$scroll.speedX) <= 1 && Math.abs($sprite.$scroll.speedY) <= 1) {
	                tickPool.splice(index, 1);
	                return;
	            }

	            $sprite.scroll.scrollY -= $sprite.$scroll.speedY;
	            $sprite.scroll.scrollX -= $sprite.$scroll.speedX;

	            var minScrollX = _utils2.default.funcOrValue($sprite.scroll.minScrollX, $sprite);
	            var maxScrollX = _utils2.default.funcOrValue($sprite.scroll.maxScrollX, $sprite);
	            var minScrollY = _utils2.default.funcOrValue($sprite.scroll.minScrollY, $sprite);
	            var maxScrollY = _utils2.default.funcOrValue($sprite.scroll.maxScrollY, $sprite);

	            if (!isNaN(minScrollY) && $sprite.scroll.scrollY < minScrollY) {
	                $sprite.scroll.scrollY = minScrollY;
	            } else if (!isNaN(maxScrollY) && $sprite.scroll.scrollY > maxScrollY) {
	                $sprite.scroll.scrollY = maxScrollY;
	            }

	            if (!isNaN(minScrollX) && $sprite.scroll.scrollX < minScrollX) {
	                $sprite.scroll.scrollX = minScrollX;
	            } else if (!isNaN(maxScrollX) && $sprite.scroll.scrollX > maxScrollX) {
	                $sprite.scroll.scrollX = maxScrollX;
	            }
	        });

	        scrollFuncs.tick();
	    },

	    touch: function touch($sprite, e) {
	        if (!$sprite.scroll.scrollable) return false;

	        if (!scrolling) {
	            // start scroll
	            scrolling = +new Date();
	            startPos.x = e.canvasX;
	            startPos.y = e.canvasY;
	        } else {
	            if (tickPool.indexOf($sprite) === -1) {
	                tickPool.push($sprite);
	            }

	            var absX = Math.abs(e.canvasX - startPos.x);
	            var absY = Math.abs(e.canvasY - startPos.y);
	            var deltaTime = +new Date() - scrolling;
	            scrolling = +new Date();
	            deltaTime /= 10;
	            if (absX / deltaTime > 1 && deltaTime > 1) {
	                $sprite.$scroll.speedX += (e.canvasX - startPos.x) / deltaTime;
	            }
	            if (absY / deltaTime > 1 && deltaTime > 1) {
	                $sprite.$scroll.speedY += (e.canvasY - startPos.y) / deltaTime;
	            }

	            startPos.x = e.canvasX;
	            startPos.y = e.canvasY;

	            return true;
	        }
	    },

	    wheel: function wheel($sprite, e) {
	        if (tickPool.indexOf($sprite) === -1) {
	            tickPool.push($sprite);
	        }

	        $sprite.$scroll.speedX = e.wheelDeltaX;
	        $sprite.$scroll.speedY = e.wheelDeltaY;
	    }
	};

	module.exports = scrollFuncs;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
		var arg = Array.prototype.slice.call(arguments);
		var name = arg.shift();

		if (this.hooks[name]) {
			this.hooks[name].apply(this, arg);
		}

		arg.unshift(name);

		this.children && this.children.forEach(function (child) {
			child.broadcast.apply(child, arg);
		});

		this.paintList && this.paintList.forEach(function (child) {
			child.broadcast.apply(child, arg);
		});
	}; /** ********** *
	    *
	    * Trigger event on current sprite and its children
	    * - Current sprite first, children following.
	    * - Can pass arguments.
	    *
	    * ********** **/

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (event, func) {
	    if (!this.hooks[event]) return;

	    if (this.hooks[event] === func || !func) {
	        delete this.hooks[event];
	    } else if (Array.prototype.isPrototypeOf(this.hooks[event])) {
	        this.hooks[event][this.hooks[event].indexOf(func)] = undefined;
	    }
	}; /** ********** *
	    *
	    * Remove current hook
	    *
	    * ********** **/

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (event, func) {
		if (!this.hooks[event]) {
			this.hooks[event] = func;
		} else if (Array.prototype.isPrototypeOf(this.hooks[event])) {
			this.hooks[event].push(func);
		} else {
			this.hooks[event] = [this.hooks[event], func];
		}
	}; /** ********** *
	    *
	    * Add current hook
	    *
	    * ********** **/

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  var arg = Array.prototype.slice.call(arguments);
	  var name = arg.shift();

	  if (this.hooks[name]) {
	    this.hooks[name].apply(this, arg);
	  }
	}; /** ********** *
	    *
	    * Trigger event on current sprite without its children
	    * - Current sprite first, children following.
	    * - Can pass arguments.
	    *
	    * ********** **/

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** ********** *
	 *
	 * Load images
	 *
	 * ********** **/

	var Cache = {};
	var BlockingImgs = [];
	var ProcessingFlag = 'processing';

	var blockingAmount = 0;

	var loader = function loader(url, callback, option) {
	    var _option = option || {};

	    if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
	        var imgs = url;
	        _option.callbackArgs = _option.callbackArgs || [];
	        loader(imgs.shift(), function (perImg) {
	            _option.callbackArgs.push(perImg);
	            if (imgs.length > 1) {
	                loader(imgs, callback, _option);
	            } else {
	                loader(imgs[0], function (lastImg) {
	                    _option.callbackArgs.push(lastImg);
	                    callback(_option.callbackArgs);
	                }, _option);
	            }
	        }, option);
	        return;
	    }
	    var cacheNamespace = url;

	    if (_option.alphaColor) cacheNamespace += alphaColor;

	    if (Cache[cacheNamespace] && Cache[cacheNamespace] !== ProcessingFlag) {
	        setTimeout(function () {
	            if (callback) {
	                callback(Cache[cacheNamespace]);
	            }
	        });
	        return Cache[cacheNamespace];
	    }
	    // todo: 多个loader加载同一图片，目前只触发一个callback；待补充

	    var i = new Image();
	    if (_option.block) {
	        i.src = url;
	        blockingAmount++;
	    } else if (blockingAmount === 0) {
	        i.src = url;
	    } else {
	        BlockingImgs.push({
	            imgObj: i,
	            src: url
	        });
	    }

	    Cache[cacheNamespace] = ProcessingFlag;

	    // Use canvas (no different in performance on my test)
	    // if (_option.cache || true) {
	    //     let tempCavas = document.createElement('canvas');
	    //     let cts = tempCavas.getContext('2d');
	    //     i.onload = function () {
	    //         tempCavas.width = i.width;
	    //         tempCavas.height = i.height;
	    //         cts.drawImage(i, 0, 0);
	    //     };
	    //     return tempCavas;
	    // }

	    i.onload = function () {
	        if (_option.block) {
	            blockingAmount--;
	            if (blockingAmount === 0) {
	                BlockingImgs.forEach(function (blockingImg) {
	                    blockingImg.imgObj.src = blockingImg.src;
	                });
	                BlockingImgs.splice(0);
	            }
	        }

	        if (_option.cache) {
	            var tempCavas = document.createElement('canvas');
	            var cts = tempCavas.getContext('2d');
	            tempCavas.width = i.width;
	            tempCavas.height = i.height;
	            cts.drawImage(i, 0, 0);

	            if (_option.alphaColor) {
	                var data = cts.getImageData(0, 0, i.width, i.height);
	                var pixel = [];

	                for (var d = 0; d < data.data.length; d += 4) {
	                    var colorWeight = data.data[d] + data.data[d + 1] + data.data[d + 2];
	                    var blackLike = 1;
	                    if (data.data[d] < blackLike && data.data[d + 1] < blackLike && data.data[d + 2] < blackLike) {
	                        data.data[d + 3] = parseInt(colorWeight / 255);
	                    }
	                }
	                cts.putImageData(data, 0, 0);
	            }

	            i = tempCavas;
	        }
	        Cache[cacheNamespace] = i;

	        if (callback) {
	            callback(i);
	        }
	    };

	    i.onerror = function () {
	        Cache[cacheNamespace] = i;
	    };

	    return i;
	};

	module.exports = loader;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function mirrorImage(orgImage) {
	  var imageWidth = orgImage.width;
	  var imageHeight = orgImage.height;

	  var tempCanvas = document.createElement('canvas');
	  tempCanvas.width = imageWidth;
	  tempCanvas.height = imageHeight;

	  var context = tempCanvas.getContext("2d");
	  context.scale(1, -1);
	  context.translate(0, -imageHeight);
	  context.drawImage(orgImage, 0, 0);
	  var flipImage = context.getImageData(0, 0, imageWidth, imageHeight);

	  return {
	    canvas: context,
	    img: flipImage
	  };
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (process.env.NODE_ENV !== 'production') {
		var PLUGIN_BRIDGE = {
			getSprite: function getSprite($canvasId) {
				if (!window[_constants2.default.devFlag].isPaintRecording) return [];

				var res = {};

				if ($canvasId) {
					var paintList = window[_constants2.default.devFlag].$canvas[$canvasId].$canvas.paintList;
					var $paintList = window[_constants2.default.devFlag].$canvas[$canvasId].$canvas.$paintList;

					var pusher = function pusher(item) {
						// Skip $mask in select mode
						if (item.name === _constants2.default.devFlag) return;

						res[item.$id] = {
							name: item.name,
							parent: item.$parent && item.$parent.$id,
							style: {},
							children: item.children && item.children.map(function (child) {
								return child.$id;
							})
						};

						if (item.content.img || item.content.text) {
							res[item.$id].rendered = false;
							for (var i = 0, l = $paintList.length; i < l; i++) {
								if ($paintList[i].$id === item.$id) {
									res[item.$id].rendered = true;
									break;
								}
							}
						} else {
							// res[item.$id].rendered = undefined;
						}

						for (var _i in item.style) {
							if (typeof item.style[_i] === 'function') {
								res[item.$id].style[_i] = item.$cache[_i];

								if (typeof item.$cache[_i] === 'function') {
									res[item.$id].style[_i] = 'function';
								}
							} else {
								res[item.$id].style[_i] = item.style[_i];
							}
						}

						if (item.physics) {
							res[item.$id].physics = item.physics;
						}

						if (item.children) {
							item.children.forEach(pusher);
						}
					};

					paintList.forEach(pusher);
				} else {
					for (var c in window[_constants2.default.devFlag].$canvas) {
						res = _extends(res, window[_constants2.default.devFlag].$plugin.getSprite(c));
					}
				}

				return res;
			},

			selectSpriteById: function selectSpriteById($spriteId, $canvasId) {
				if (!$canvasId) {
					for (var i in window[_constants2.default.devFlag].$canvas) {
						var _res = PLUGIN_BRIDGE.selectSpriteById($spriteId, i);
						if (_res) return {
							$sprite: _res.$sprite || _res,
							$canvas: window[_constants2.default.devFlag].$canvas[i].$canvas
						};
					}

					return false;
				}

				var paintList = window[_constants2.default.devFlag].$canvas[$canvasId].$canvas.paintList;

				var looper = function looper(array) {
					for (var _i2 = 0; _i2 < array.length; _i2++) {
						if (array[_i2].$id === $spriteId) return array[_i2];

						var _res2 = looper(array[_i2].children);
						if (_res2) {
							return {
								$sprite: _res2.$sprite || _res2,
								$canvas: window[_constants2.default.devFlag].$canvas[$canvasId].$canvas
							};
						}
					}

					return false;
				};

				var res = looper(paintList);
				if (res) return {
					$sprite: res.$sprite || res,
					$canvas: window[_constants2.default.devFlag].$canvas[$canvasId].$canvas
				};
			},

			updateSprite: function updateSprite($spriteId, map, $canvasId) {
				var $sprite = PLUGIN_BRIDGE.selectSpriteById($spriteId, $canvasId).$sprite;
				if (!$sprite) console.warn('Sprite ' + spriteId + ' Not Found.');

				_extends($sprite.style, map);
			},

			highlightSprite: function highlightSprite($spriteId, opt, $canvasId) {
				window[_constants2.default.devFlag].selectMode = Boolean(opt);

				var tmp = PLUGIN_BRIDGE.selectSpriteById($spriteId, $canvasId);
				var $sprite = tmp.$sprite;
				var $canvas = tmp.$canvas;

				if (opt && $canvas && $sprite) {
					$canvas.$plugin.hook.selectSprite(false, $canvas, $sprite);
				} else if ($canvas) {
					$canvas.$plugin.hook.cancelSelectSprite($canvas);
				}
			},

			sendGlobalHook: function sendGlobalHook($spriteId, $canvasId) {
				var tmp = PLUGIN_BRIDGE.selectSpriteById($spriteId, $canvasId);
				var $sprite = tmp.$sprite;
				var $canvas = tmp.$canvas;

				if (window.$ec === $canvas.$id && window.$es === $sprite.$id) return;

				console.warn('window.$ec = [Easycanvas ' + $canvas.$id + '], window.$es = [Easycanvas ' + $sprite.$id + ']');
				window.$ec = $canvas;
				window.$es = $sprite;
			},

			pause: function pause($canvasId, opt) {
				var $canvas = window[_constants2.default.devFlag].$canvas[$canvasId].$canvas;
				$canvas.$pausing = typeof opt !== 'undefined' ? opt : !$canvas.$pausing;
			}
		};

		window[_constants2.default.devFlag] = window[_constants2.default.devFlag] || {
			isPaintRecording: false,
			selectMode: false,

			peformance: {
				area: 0,
				times: 0
			},

			$plugin: PLUGIN_BRIDGE,

			$canvas: {},
			current: {}
		};
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _sprite = __webpack_require__(6);

	var _sprite2 = _interopRequireDefault(_sprite);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		sprite: _sprite2.default
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(37);

	var _index2 = _interopRequireDefault(_index);

	var _tick = __webpack_require__(5);

	var _tick2 = _interopRequireDefault(_tick);

	var _mirror = __webpack_require__(13);

	var _mirror2 = _interopRequireDefault(_mirror);

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _transition = __webpack_require__(41);

	var _transition2 = _interopRequireDefault(_transition);

	var _imgLoader = __webpack_require__(12);

	var _imgLoader2 = _interopRequireDefault(_imgLoader);

	var _positionCompare = __webpack_require__(3);

	var _positionCompare2 = _interopRequireDefault(_positionCompare);

	var _sequenceDiagram = __webpack_require__(40);

	var _sequenceDiagram2 = _interopRequireDefault(_sequenceDiagram);

	var _multlineText = __webpack_require__(39);

	var _multlineText2 = _interopRequireDefault(_multlineText);

	var _main = __webpack_require__(15);

	var _main2 = _interopRequireDefault(_main);

	var _chromeDevtool = __webpack_require__(14);

	var _chromeDevtool2 = _interopRequireDefault(_chromeDevtool);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Easycanvas = {
	    painter: _index2.default,
	    imgLoader: _imgLoader2.default,
	    sequenceDiagram: _sequenceDiagram2.default,
	    multlineText: _multlineText2.default,
	    posCompare: _positionCompare2.default,
	    transition: _transition2.default,
	    tick: _tick2.default,
	    utils: _utils2.default,
	    mirror: _mirror2.default,
	    class: _main2.default,
	    $version: '0.2.0'
	};

	window.Easycanvas = Easycanvas;
	module.exports = Easycanvas;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _perPaint = __webpack_require__(21);

	var _perPaint2 = _interopRequireDefault(_perPaint);

	var _paint = __webpack_require__(19);

	var _paint2 = _interopRequireDefault(_paint);

	var _write = __webpack_require__(23);

	var _write2 = _interopRequireDefault(_write);

	var _eventHandler = __webpack_require__(18);

	var _eventHandler2 = _interopRequireDefault(_eventHandler);

	var _bindDrag = __webpack_require__(4);

	var _bindDrag2 = _interopRequireDefault(_bindDrag);

	var _rAFer = __webpack_require__(22);

	var _rAFer2 = _interopRequireDefault(_rAFer);

	var _apiPlugin = __webpack_require__(36);

	var _apiPlugin2 = _interopRequireDefault(_apiPlugin);

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * Inner apis of an easycanvas instance
	 * - Used for Easycanvas.js only normally.
	 * - Will be added to Easycanvas instance's prototype.
	 *
	 * ********** **/

	var apiInner = {
	    $paint: _paint2.default,
	    $eventHandler: _eventHandler2.default,
	    $write: _write2.default,
	    $perPaint: _perPaint2.default,
	    $bindDrag: _bindDrag2.default,
	    $rAFer: _rAFer2.default
	};

	if (process.env.NODE_ENV !== 'production') {
	    apiInner.$plugin = (0, _apiPlugin2.default)();
	}

	module.exports = apiInner;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	var _positionCompare = __webpack_require__(3);

	var _positionCompare2 = _interopRequireDefault(_positionCompare);

	var _eventHandlerScroll = __webpack_require__(7);

	var _eventHandlerScroll2 = _interopRequireDefault(_eventHandlerScroll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Sort sprite
	 * - Order by eIndex dev-tool's in events' triggering
	 * - Order by zIndex in dev-tool's select mode
	 */
	/** ********** *
	 *
	 * Handle events on canvas (Includes both user's events and debugging events)
	 * - Compare event's coordinate and the coordinate of every sprite in
	 *   Easycanvas.paintList, and check sprite's handlers one by one.
	 * - Events: mousedown, mousemove, mouseup, touchstart, touchmove, touchend,
	 *   click, contextmenu
	 * - Expanded events: hold, touchout
	 *
	 * ********** **/

	var sortByIndex = function sortByIndex(arr) {
	    return arr.sort(function (a, b) {
	        if (process.env.NODE_ENV !== 'production') {
	            if (window[_constants2.default.devFlag] && window[_constants2.default.devFlag].selectMode) {
	                return _utils2.default.funcOrValue(a.style.zIndex, a) < _utils2.default.funcOrValue(b.style.zIndex, b) ? 1 : -1;
	            }
	        }

	        return _utils2.default.funcOrValue(a.events.eIndex, a) < _utils2.default.funcOrValue(b.events.eIndex, b) ? 1 : -1;
	    });
	};

	/**
	 * Check whether the event hits certain sprite
	 * - Use $sprite.$cache to compare 
	 * - Sprite in first frame will not captrue any event [?]
	 */
	var hitSprite = function hitSprite($sprite, e) {
	    if (_utils2.default.funcOrValue($sprite.style.visible, $sprite) === false) {
	        return false;
	    }

	    if (!$sprite.$cache) {
	        return;
	    }

	    var _tx = $sprite.$cache.tx;
	    var _ty = $sprite.$cache.ty;
	    var _tw = $sprite.$cache.tw;
	    var _th = $sprite.$cache.th;

	    // 第一帧没有$cache
	    if (typeof _tx === 'undefined') return false;

	    // 兼容 !!TODO!!
	    return _positionCompare2.default.pointInRect(e.canvasX, e.canvasY, _tx, _tx + _tw, _ty, _ty + _th);
	};

	/**
	 * Sort all the sprites(including children), then put to @caughts
	 * - Child is above the parent only if Index >= 0
	 */
	var looper = function looper(arr, e, caughts) {
	    if (!arr || !arr.length) return;

	    for (var i = 0; i < arr.length; i++) {
	        var item = arr[i];
	        if (item.children.length) {
	            // Children above
	            looper(sortByIndex(item.children.filter(function (a) {
	                if (process.env.NODE_ENV !== 'production') {
	                    if (window[_constants2.default.devFlag] && window[_constants2.default.devFlag].selectMode) {
	                        return _utils2.default.funcOrValue(a.style.zIndex, a) >= 0;
	                    }
	                }

	                return _utils2.default.funcOrValue(a.events.eIndex, a) >= 0;
	            })), e, caughts);
	        }
	        if (hitSprite(item, e)) {
	            caughts.push(item);
	        }
	        if (item.children.length) {
	            // Children below
	            looper(sortByIndex(item.children.filter(function (a) {
	                if (process.env.NODE_ENV !== 'production') {
	                    if (window[_constants2.default.devFlag] && window[_constants2.default.devFlag].selectMode) {
	                        return _utils2.default.funcOrValue(a.style.zIndex, a) < 0;
	                    }
	                }

	                return _utils2.default.funcOrValue(a.events.eIndex, a) < 0;
	            })), e, caughts);
	        }
	    }
	};

	module.exports = function (e) {
	    if (!e.layerX && e.touches && e.touches[0]) {
	        e.layerX = e.targetTouches[0].pageX - e.currentTarget.offsetLeft;
	        e.layerY = e.targetTouches[0].pageY - e.currentTarget.offsetTop;
	    }
	    if (!e.layerX && e.changedTouches && e.changedTouches[0]) {
	        e.layerX = e.changedTouches[0].pageX - e.currentTarget.offsetLeft;
	        e.layerY = e.changedTouches[0].pageY - e.currentTarget.offsetTop;
	    }

	    var scaleX = parseInt(this.$dom.style.width) / this.contextWidth;
	    var scaleY = parseInt(this.$dom.style.height) / this.contextHeight;

	    scaleX = scaleX || 1;
	    scaleY = scaleY || 1;

	    var $e = {
	        type: e.type,
	        canvasX: e.layerX / scaleX,
	        canvasY: e.layerY / scaleY,
	        event: e
	    };

	    var $canvas = this;

	    var caughts = [];
	    looper(sortByIndex($canvas.paintList), $e, caughts);

	    if (process.env.NODE_ENV !== 'production') {
	        // 开发者工具select模式下为选取元素
	        if (window[_constants2.default.devFlag] && window[_constants2.default.devFlag].selectMode && caughts.length) {
	            var chooseSprite = caughts[0];
	            if (chooseSprite.name === _constants2.default.devFlag) {
	                // 选中mask不算
	                chooseSprite = caughts[1];
	            }

	            if (chooseSprite && $canvas.$plugin.hook.selectSprite(e.type === 'click', $canvas, chooseSprite)) {
	                return;
	            }
	        }
	    }

	    // Create a new event: 'hold' (suits both mobile and pc)
	    if (!$canvas.eHoldingFlag && (e.type === 'mousedown' || e.type === 'touchstart')) {
	        $canvas.eHoldingFlag = e;
	    } else if ($canvas.eHoldingFlag && (e.type === 'mouseup' || e.type === 'touchend')) {
	        $canvas.eHoldingFlag = false;
	        _eventHandlerScroll2.default.stop();
	    } else if ($canvas.eHoldingFlag && (e.type === 'mousemove' || e.type === 'touchmove')) {
	        $canvas.eHoldingFlag = e;
	    } // else if (!$canvas.eHoldingFlag && e.type === 'contextmenu') {

	    for (var i = 0; i < caughts.length; i++) {
	        // trigger 'mouseout' or 'touchout' event 
	        if ((e.type === 'mousemove' || e.type === 'touchmove') && $canvas.eLastMouseHover && $canvas.eLastMouseHover !== caughts[i] && caughts.indexOf($canvas.eLastMouseHover) === -1) {
	            var eMouseout = $canvas.eLastMouseHover['events']['mouseout'] || $canvas.eLastMouseHover['events']['touchout'];
	            if (eMouseout) {
	                eMouseout.call($canvas.eLastMouseHover, $e);
	            }
	        }

	        if ($e.type === 'mousewheel') {
	            _eventHandlerScroll2.default.wheel(caughts[i], e);
	        } else if ($canvas.eHoldingFlag && e.type === 'touchmove') {
	            if (_eventHandlerScroll2.default.touch(caughts[i], $e)) {
	                return;
	            }
	        }

	        if (!caughts[i]['events']) continue;

	        var _handler = caughts[i]['events'][e.type];
	        if (_handler) {
	            $canvas.eLastMouseHover = caughts[i];
	            var result = _handler.call(caughts[i], $e);
	            // stop then chain and cancel 'hold' event's flag
	            if (result === true) {
	                $canvas.eHoldingFlag = false;
	                return result;
	            } else if (result === 'drag') {
	                $canvas.eHoldingFlag = false;
	                return result;
	            }
	        }

	        if (caughts[i].through === false) {
	            return;
	        }
	    }

	    if (!caughts.length && $canvas.eLastMouseHover) {
	        // hover更替，触发mouseout
	        var _eMouseout = $canvas.eLastMouseHover['events']['mouseout'];
	        if (_eMouseout) {
	            _eMouseout.call($canvas.eLastMouseHover, $e);
	        }
	        $canvas.eLastMouseHover = null;
	    }

	    var handler = $canvas.events[e.type];
	    if (handler) {
	        if (handler($e)) {
	            $canvas.eHoldingFlag = false;
	            return true;
	        }
	    }
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _positionCompare = __webpack_require__(3);

	var _positionCompare2 = _interopRequireDefault(_positionCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * CORE painting function
	 * - Controlling canvas context, Transfer $paintList to rendered sprite.
	 * - Includes some optimization.
	 *
	 * ********** **/

	var f = function f($sprite, i) {
	    var $canvas = this;

	    var isUseless = false;

	    var props = $sprite.props;
	    var settings = $sprite.settings;

	    if ($sprite.type === 'img') {
	        // 小图性能优化收益未必正向，200尺寸是否恰当待评估
	        if ($canvas.$paintList.length < 200 || props[7] * props[8] > 200 * 200) {
	            for (var j = i + 1, l = $canvas.$paintList.length; j < l; j++) {
	                var $tmpSprite = $canvas.$paintList[j];

	                if ($tmpSprite.type !== 'img') continue;

	                if ($tmpSprite.imgType !== '*') {
	                    // PNG元素不能作为是否跳过绘制的优化参考对象
	                    continue;
	                }

	                if ($tmpSprite.settings.globalAlpha !== 1) {
	                    // 带alpha的元素不能作为是否跳过绘制的优化参考对象
	                    continue;
	                }

	                if ($tmpSprite.settings.rotate) {
	                    // 带rotate的元素暂时不考虑，需要复杂的计算
	                    continue;
	                }

	                var tmpProps = $tmpSprite.props;

	                if (_positionCompare2.default.pointInRect(props[5], props[6], tmpProps[5], tmpProps[5] + tmpProps[7], tmpProps[6], tmpProps[6] + tmpProps[8]) && _positionCompare2.default.pointInRect(props[5] + props[7], props[6] + props[8], tmpProps[5], tmpProps[5] + tmpProps[7], tmpProps[6], tmpProps[6] + tmpProps[8])) {
	                    isUseless = true;
	                    return;
	                }
	            }
	        }
	        // } else if ($sprite.type === 'text') {
	        // 文本绘制消耗性能较少，毋需优化
	    }

	    // DOM渲染 - 由于Hilo.js有专利，此处只调研实现，不开放
	    // {
	    //     let newSprite = false;
	    //     if (!document.getElementById($sprite.$id)) {
	    //         newSprite = true;
	    //         let $dom = document.createElement('div');
	    //         $dom.style.position = 'fixed';
	    //         $dom.id = $sprite.$id;
	    //         $dom.className = 'XXXXX';
	    //         $dom.style['-webkit-transform'] = 'translateZ(0)';
	    //         $dom.style['transform'] = 'translateZ(0)';
	    //     } else {
	    //         let $dom = document.getElementById($sprite.$id);
	    //         $dom.toDelete = 0;
	    //     }
	    //     $dom.style.left = props[5] / $canvas.contextWidth * 100 + '%';
	    //     $dom.style.top = props[6] / $canvas.contextHeight * 100 + '%';
	    //     $dom.style.width = props[7] / $canvas.contextWidth * 100 + '%';
	    //     $dom.style.height = props[8] / $canvas.contextHeight * 100 + '%';
	    //     $dom.style['background-repeat'] = 'no-repeat';
	    //     $dom.style['background-image'] = 'url(' + props[0].src + ')';
	    //     $dom.style['background-position'] = (props[1] / props[0].$width * 100 + '%') + ' ' + (props[2] / $sprite.props[0].$height * 100 + '%')
	    //     $dom.style['background-position'] = -(props[1] / props[0].$width * ($sprite.props[0].$width / props[3] * props[7]) + 'px') + ' ' +
	    //         (-(props[2] / props[0].$height * ($sprite.props[0].$height / props[4] * props[8]) + 'px'));
	    //     $dom.style['background-size'] = ($sprite.props[0].$width / props[3] * props[7] + 'px') + ' ' + ($sprite.props[0].$height / props[4] * props[8] + 'px');
	    //     if (newSprite) {
	    //         document.body.appendChild($dom);
	    //     }
	    //     return;
	    // }

	    var saved = false;

	    if (settings.globalAlpha !== 1 && !isNaN(settings.globalAlpha)) {
	        if (!saved) {
	            $canvas.$paintContext.save();
	            saved = true;
	        }
	        $canvas.$paintContext.globalAlpha = settings.globalAlpha;
	    }

	    if (settings.translate) {
	        if (!saved) {
	            $canvas.$paintContext.save();
	            saved = true;
	        }
	        $canvas.$paintContext.translate(settings.translate[0] || 0, settings.translate[1] || 0);
	    }
	    if (settings.rotate) {
	        if (!saved) {
	            $canvas.$paintContext.save();
	            saved = true;
	        }
	        $canvas.$paintContext.translate(settings.translateBeforeRotate[0] || 0, settings.translateBeforeRotate[1] || 0);
	        $canvas.$paintContext.rotate(settings.rotate || 0);
	        $canvas.$paintContext.translate(settings.translateAfterRotate[0] || 0, settings.translateAfterRotate[1] || 0);
	    }
	    if (settings.scale) {
	        if (!saved) {
	            $canvas.$paintContext.save();
	            saved = true;
	        }
	        $canvas.$paintContext.scale(settings.scale[0] || 1, settings.scale[1] || 1);
	    }
	    if (settings.transform) {
	        if (!saved) {
	            $canvas.$paintContext.save();
	            saved = true;
	        }
	        $canvas.$paintContext.transform(1, settings.transform.fh, settings.transform.fv, 1, settings.transform.fx, settings.transform.fy);
	    }

	    if ($sprite.type === 'img') {
	        // area += props[7] * props[8];
	        // times++;
	        // props[0].src='test';
	        // console.log(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8]);
	        $canvas.$paintContext.drawImage(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8]);
	        if (process.env.NODE_ENV !== 'production') {
	            $canvas.$plugin.hook.drawImage($canvas, {
	                img: props[0],
	                tx: props[1],
	                ty: props[2],
	                tw: props[3],
	                th: props[4]
	            });
	        }
	    } else if ($sprite.type === 'text' && props.content) {
	        $canvas.$write.call($canvas, props);
	    }

	    if (saved) {
	        $canvas.$paintContext.restore();
	    }
	};

	module.exports = function () {
	    var $canvas = this;

	    $canvas.$paintList.forEach(f.bind($canvas));
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * Get computed style of a sprite
	 * - Returns a COPY of current props.
	 * - Used in perPaint.js ONLY.
	 * - May waste some performance, but not much.
	 * - TODO: performace improving.
	 *
	 * ********** **/

	module.exports = function ($sprite, $canvas) {
	    var res = {};

	    for (var i in $sprite.content) {
	        res[i] = _utils2.default.funcOrValue($sprite.content[i], $sprite);
	    }

	    for (var _i in $sprite.style) {
	        res[_i] = _utils2.default.funcOrValue($sprite.style[_i], $sprite);
	    }

	    res.img = $sprite.content.img;

	    if (res.img && res.img.type === 'sequence-diagram') {
	        var config = res.img.config;
	        var index = res.img.index;

	        var pw = void 0,
	            ph = void 0;
	        if (config.w < 0) {
	            pw = res.img.img.width / (0 - config.w);
	        } else if (config.w > 0) {
	            pw = config.w;
	        } else {
	            pw = res.img.img.width;
	        }
	        if (config.h < 0) {
	            ph = res.img.img.height / (0 - config.h);
	        } else if (config.h > 0) {
	            ph = config.h;
	        } else {
	            ph = res.img.img.height;
	        }

	        var wTimes = parseInt(res.img.img.width / pw);
	        var hTimes = parseInt(res.img.img.height / ph);

	        if (config.h) {
	            res.sx = index % wTimes * pw;
	            res.sy = parseInt(index / wTimes) % hTimes * ph;
	        }

	        if (!config.loop && index > 0 && res.sx === 0 && res.sy === 0) {
	            res.img.img = {};
	            // $canvas.remove($sprite);
	        }

	        res.img.lastTickTime = res.img.lastTickTime || 0;
	        if ($canvas.$nextTickTime - res.img.lastTickTime >= _utils2.default.funcOrValue(config.interval, $sprite)) {
	            config.lastTickTime = $canvas.$nextTickTime;
	            res.img.index++;
	            res.img.lastTickTime = $canvas.$nextTickTime;
	        }

	        res.sw = pw || res.sw;
	        res.sh = ph || res.sh;
	        res.tw = res.tw || pw;
	        res.th = res.th || ph;

	        res.img = res.img.img;
	    }

	    $sprite.$tmp = res;

	    // debugger;
	    return res;
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _img2base = __webpack_require__(38);

	var _img2base2 = _interopRequireDefault(_img2base);

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	var _perPaintGetComputedStyle = __webpack_require__(20);

	var _perPaintGetComputedStyle2 = _interopRequireDefault(_perPaintGetComputedStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * CORE painting function
	 * - Calculates props of every sprite in paintList, then puts to $paintList.
	 * - Includes inheriting, optimization.
	 * - NOT connecting to canvas's prototype functions.
	 *
	 * ********** **/

	module.exports = function (i, index) {
	    if (_utils2.default.funcOrValue(i.style.visible, i) === false) {
	        _utils2.default.execFuncs(i.hooks.ticked, i);
	        return;
	    }

	    var $canvas = this;

	    var settings = {};

	    var _props = (0, _perPaintGetComputedStyle2.default)(i, $canvas);
	    var _text = _props.text;
	    var _img = _props.img;

	    var inherits = i.inherit || [];
	    if (i.$parent) {
	        i.inherit.forEach(function (key) {
	            if (_constants2.default.xywh.indexOf(key) >= 0 || ['rotate'].indexOf(key) >= 0) {
	                _props[key] = _props[key] || 0;
	                // inherit from parent's style
	                _props[key] += _utils2.default.funcOrValue(i.$parent.style[key] || 0, i.$parent) || 0;
	            } else if (['opacity', 'scale'].indexOf(key) >= 0) {
	                _props[key] = _utils2.default.firstValuable(_props[key], 1);
	                if (!isNaN(i.$parent.$cache[key])) {
	                    _props[key] *= i.$parent.$cache[key];
	                }
	                // } else if (key === 'scroll') {
	                //     _props.ty -= $canvas.scroll.scrollY;
	            }
	        });

	        _props.ty -= i.$parent.scroll.scrollY;
	        _props.tx -= i.$parent.scroll.scrollX;
	    }

	    var _children = _utils2.default.funcOrValue(i.children, i);

	    var _imgWidth = _img ? _img.$width || _img.width || 0 : 0;
	    var _imgHeight = _img ? _img.$height || _img.height || 0 : 0;

	    if (_img && !_img.$width) {
	        _img.$width = _imgWidth;
	        _img.$height = _imgHeight;
	    }

	    _props.tw = _props.tw || _props.sw || _imgWidth;
	    _props.th = _props.th || _props.sh || _imgHeight;
	    _props.sw = _props.sw || _imgWidth;
	    _props.sh = _props.sh || _imgHeight;

	    if (_props.locate === 'center') {
	        _props.tx = _props.tx - 0.5 * _props.tw;
	        _props.ty = _props.ty - 0.5 * _props.th;
	    } else if (_props.locate === 'rd') {
	        _props.tx = _props.tx - 1 * _props.tw;
	        _props.ty = _props.ty - 1 * _props.th;
	    }

	    if (_props.fh || _props.fv) {
	        settings.transform = {
	            fh: _props.fh,
	            fv: _props.fv,
	            // fx: -_props.fv * _props.fx,
	            // fy: -_props.fh * _props.fy,
	            fx: (_props.ty + _props.th / 2) * _props.fv * -1 + _props.fx,
	            fy: (_props.tx + _props.tw / 2) * _props.fh * -1 + _props.fy
	        };
	    }

	    if (_props.rotate) {
	        // 定点旋转
	        var transX = _props.rx !== undefined ? _props.rx : _props.tx + 0.5 * _props.tw;
	        var transY = _props.ry !== undefined ? _props.ry : _props.ty + 0.5 * _props.th;
	        settings.translateBeforeRotate = [transX, transY];
	        settings.rotate = -_props.rotate * Math.PI / 180;
	        settings.rotate = Number(settings.rotate.toFixed(4));
	        settings.translateAfterRotate = [-transX, -transY];
	    }

	    if (_props.scale !== 1) {
	        _props.tx -= (_props.scale - 1) * 0.5 * _props.tw;
	        _props.ty -= (_props.scale - 1) * 0.5 * _props.th;
	        _props.tw *= _props.scale;
	        _props.th *= _props.scale;
	    }

	    if (_props.mirrX) {
	        settings.translate = [$canvas.contextWidth, 0];
	        settings.scale = [-1, 1];
	        _props.tx = $canvas.contextWidth - _props.tx - _props.tw;
	        if (_props.mirrY) {
	            settings.translate = [$canvas.contextWidth, $canvas.contextHeight];
	            settings.scale = [-1, -1];
	            _props.ty = $canvas.contextHeight - _props.ty - _props.th;
	        }
	    } else if (_props.mirrY) {
	        settings.translate = [0, $canvas.contextHeight];
	        settings.scale = [1, -1];
	        _props.ty = $canvas.contextHeight - _props.ty - _props.th;
	    }

	    /* Avoid overflow painting (wasting & causing bugs in some iOS webview) */
	    // 判断sw、sh是否存在只是从计算上防止js报错，其实上游决定了参数一定存在
	    if (!_props.rotate && !_text) {
	        if (_props.sx < 0 && _props.sw) {
	            var cutRate = -_props.sx / _props.sw;
	            _props.tx += _props.tw * cutRate;
	            _props.sx = 0;
	        }
	        if (_props.sy < 0 && _props.sh) {
	            var _cutRate = -_props.sy / _props.sh;
	            _props.ty += _props.th * _cutRate;
	            _props.sy = 0;
	        }
	        if (_imgWidth && _props.sx + _props.sw > _imgWidth) {
	            var _cutRate2 = (_props.sx + _props.sw - _imgWidth) / _props.sw;
	            _props.sw -= _props.sw * _cutRate2;
	            _props.tw -= _props.tw * _cutRate2;
	        }
	        if (_imgHeight && _props.sy + _props.sh > _imgHeight) {
	            var _cutRate3 = (_props.sy + _props.sh - _imgHeight) / _props.sh;
	            _props.sh -= _props.sh * _cutRate3;
	            _props.th -= _props.th * _cutRate3;
	        }

	        if (_props.tx < 0 && _props.tw) {
	            var _cutRate4 = -_props.tx / _props.tw;
	            _props.sx += _props.sw * _cutRate4;
	            _props.sw -= _props.sw * _cutRate4;
	            _props.tw = _props.tw + _props.tx;
	            _props.tx = 0;
	        }
	        if (_props.ty < 0 && _props.th) {
	            var _cutRate5 = -_props.ty / _props.th;
	            _props.sy += _props.sh * _cutRate5;
	            _props.sh -= _props.sh * _cutRate5;
	            _props.th = _props.th + _props.ty;
	            _props.ty = 0;
	        }
	        if (_props.tx + _props.tw > $canvas.contextWidth && _props.tw) {
	            var _cutRate6 = (_props.tx + _props.tw - $canvas.contextWidth) / _props.tw;
	            _props.tw -= _props.tw * _cutRate6;
	            _props.sw -= _props.sw * _cutRate6;
	        }
	        if (_props.ty + _props.th > $canvas.contextHeight && _props.th) {
	            var _cutRate7 = (_props.ty + _props.th - $canvas.contextHeight) / _props.th;
	            _props.th -= _props.th * _cutRate7;
	            _props.sh -= _props.sh * _cutRate7;
	        }
	    }

	    if (typeof i.$cache.tx !== 'undefined') {
	        _constants2.default.xywh.forEach(function (key) {
	            // 如果元素每帧移动距离小于1像素，那么认为对象在缓动，此时不取整（避免引起抖动）
	            if (Math.abs(i.$cache[key] - _props[key]) > 1) {
	                _props[key] = parseInt(_props[key]);
	                // } else {
	                //     _props[key] = parseInt(_props[key]);
	                //     _props[key] = Number(_props[key].toFixed(1));
	            }
	        });
	    } else {
	        _constants2.default.xywh.forEach(function (key) {
	            // 首帧可以取整；不在forEach里进行if是为了降低每帧进行的判断次数，节约性能
	            _props[key] = parseInt(_props[key]);
	        });
	    }

	    for (var key in _props) {
	        i.$cache[key] = _props[key];
	    }
	    delete i.$cache.textBottom;

	    if (_img && typeof i.$cache.imgType === 'undefined') {
	        if (!_img.src) {
	            i.$cache.imgType = 'canvas';
	        } else if (_img.src.substr(-3) === 'png') {
	            i.$cache.imgType = 'png';
	        } else {
	            i.$cache.imgType = '*';
	        }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	        if (!i.$cache.base64 && _img && _img.src) {
	            i.$cache.base64 = 'processing';
	            (0, _img2base2.default)(_img.src, function (data) {
	                i.$cache.base64 = data;
	            });
	        }
	    }

	    if (_children) {
	        _children.filter(function (item) {
	            return item.style.zIndex < 0;
	        }).sort(function (a, b) {
	            if (a.style.zIndex === b.style.zIndex) return 0;
	            return a.style.zIndex > b.style.zIndex ? 1 : -1;
	        }).forEach(function (c, _index) {
	            $canvas.$perPaint.call($canvas, c, _index);
	        });
	    }

	    if (typeof _props.opacity !== 'undefined') {
	        settings.globalAlpha = _props.opacity;
	    } else {
	        settings.globalAlpha = 1;
	    }

	    // $canvas.$paintContext.fillRect(_props.tx, _props.ty, _props.tw, _props.th);
	    if (_img && _imgWidth && _props.opacity !== 0 && _props.sw && _props.sh && _props.tx < $canvas.contextWidth && _props.ty < $canvas.contextHeight) {
	        // // cache computed w/h
	        // i.style.tw = i.style.tw || _props.tw || _imgWidth;
	        // i.style.th = i.style.th || _props.th || _imgHeight;

	        $canvas.$paintList.push({
	            $id: i.$id,
	            type: 'img',
	            settings: settings,
	            imgType: i.$cache.imgType,
	            props: [_img, _props.sx, _props.sy, _props.sw, _props.sh, _props.tx, _props.ty, _props.tw, _props.th]
	        });
	    }
	    if (_text) {
	        var textTx = _props.tx;
	        var textTy = _props.ty;
	        var textAlign = i.style.align;
	        var textFont = _utils2.default.funcOrValue(i.style.font, i) || '14px Arial';
	        var textFontsize = parseInt(textFont);
	        var textLineHeight = i.style.lineHeight || textFontsize;

	        // Change css-align to canvas-align style
	        if (textAlign === 'center') {
	            textTx += _props.tw / 2;
	        } else if (textAlign === 'right') {
	            textTx += _props.tw;
	        }

	        // Change css-align to canvas-align style
	        if (i.style.textVerticalAlign === 'top') {
	            textTy += textFontsize + (textLineHeight - textFontsize) / 2;
	        } else if (i.style.textVerticalAlign === 'bottom') {
	            textTy += _props.th - (textLineHeight - textFontsize) / 2;
	        } else {
	            textTy += _props.th / 2 + textFontsize / 2;
	        }

	        if (typeof _text === 'string') {
	            $canvas.$paintList.push({
	                $id: i.$id,
	                type: 'text',
	                settings: settings,
	                props: {
	                    tx: textTx,
	                    ty: textTy,
	                    // tw: _props.tw,
	                    // th: _props.th,
	                    content: _text,
	                    align: textAlign || 'left',
	                    font: textFont,
	                    color: i.style.color || 'white',
	                    type: i.style.textType || 'fillText'
	                }
	            });
	        } else if (_text.type === 'multline-text') {
	            var textArr = _text.text.split(/\t|\n/);
	            var isChinese = function isChinese(temp) {
	                var re = /[^\u4e00-\u9fa5]/;
	                return !re.test(temp);
	            };
	            var renderArr = [];
	            textArr.forEach(function (eachText, textIndex) {
	                eachText = String.prototype.trim.apply(eachText);
	                if (_text.config.start) {
	                    eachText = eachText.replace(_text.config.start, '');
	                }
	                var _i = 0;
	                var length = _props.tw;
	                while (eachText.length && _i < eachText.length) {
	                    if (length <= 0) {
	                        length = _props.tw;
	                        renderArr.push(eachText.substr(0, _i));
	                        eachText = eachText.substr(_i);
	                        _i = 0;
	                    }
	                    _i++;
	                    length -= textFontsize * (isChinese(eachText[_i]) ? 1.05 : 0.6);
	                }
	                if (eachText || textIndex) {
	                    renderArr.push(eachText);
	                }
	            });
	            renderArr.forEach(function (r) {
	                $canvas.$paintList.push({
	                    $id: i.$id,
	                    type: 'text',
	                    settings: settings,
	                    props: {
	                        tx: textTx,
	                        ty: textTy,
	                        // tw: _props.tw,
	                        // th: _props.th,
	                        content: r,
	                        align: textAlign || 'left',
	                        font: textFont,
	                        color: i.style.color || 'white',
	                        type: i.style.textType || 'fillText'
	                    }
	                });
	                textTy += textLineHeight || textFontsize;
	            });
	            // Record last line of this text
	            i.$cache.textBottom = textTy;
	        }
	    }

	    if (_children) {
	        _children.filter(function (item) {
	            return !(item.style.zIndex < 0);
	        }).sort(function (a, b) {
	            if (a.style.zIndex === b.style.zIndex) return 0;
	            return a.style.zIndex > b.style.zIndex ? 1 : -1;
	        }).forEach(function (c, _index) {
	            $canvas.$perPaint.call($canvas, c, _index);
	        });
	    }

	    _utils2.default.execFuncs(i.hooks.ticked, i);
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _tick = __webpack_require__(5);

	var _tick2 = _interopRequireDefault(_tick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (f) {
	    var time = new Date().getTime();
	    this.$nextTickTime = time;

	    if (time - this.fpsCalculateTime >= 1000) {
	        this.fpsCalculateTime = time;
	        if (this.fpsHandler) {
	            this.fpsHandler.call(this, this.fps);
	        }
	        this.lastFps = this.fps;
	        this.fps = 0;
	    }

	    (0, _tick2.default)(function (rafTime) {
	        this.$rafTime = rafTime;
	        this.$rAFer(f);
	        if (this.maxFps > 0 && this.maxFps < 60) {
	            if (time - this.$lastPaintTime <= 1000 / this.maxFps) {
	                return;
	            }
	            // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
	            this.$lastPaintTime = time - (time - this.$lastPaintTime) % (1000 / this.maxFps);
	        }
	        f();
	    }.bind(this));
	}; /** ********** *
	    *
	    * Execute function(@f) in each frame
	    * - Limit by browsers, adjusting the time not being a multiple of RAF's interval (16.7ms).
	    * - See https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
	    *
	    * ********** **/

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	/** ********** *
	 *
	 * Call canvas.prototype's text functions
	 * - Default type is fillText.
	 *
	 * ********** **/

	module.exports = function (text) {
	  this.$paintContext.font = text.font;
	  this.$paintContext.strokeStyle = text.color;
	  this.$paintContext.fillStyle = text.color;
	  this.$paintContext.textAlign = text.align;
	  this.$paintContext[text.type || 'fillText'](text.content, parseInt(text.tx), parseInt(text.ty));
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _add = __webpack_require__(25);

	var _add2 = _interopRequireDefault(_add);

	var _remove = __webpack_require__(32);

	var _remove2 = _interopRequireDefault(_remove);

	var _start = __webpack_require__(35);

	var _start2 = _interopRequireDefault(_start);

	var _paint = __webpack_require__(28);

	var _paint2 = _interopRequireDefault(_paint);

	var _clear = __webpack_require__(26);

	var _clear2 = _interopRequireDefault(_clear);

	var _pause = __webpack_require__(29);

	var _pause2 = _interopRequireDefault(_pause);

	var _on = __webpack_require__(10);

	var _on2 = _interopRequireDefault(_on);

	var _off = __webpack_require__(9);

	var _off2 = _interopRequireDefault(_off);

	var _trigger = __webpack_require__(11);

	var _trigger2 = _interopRequireDefault(_trigger);

	var _broadcast = __webpack_require__(8);

	var _broadcast2 = _interopRequireDefault(_broadcast);

	var _nextTick = __webpack_require__(27);

	var _nextTick2 = _interopRequireDefault(_nextTick);

	var _register = __webpack_require__(30);

	var _register2 = _interopRequireDefault(_register);

	var _setFpsHandler = __webpack_require__(33);

	var _setFpsHandler2 = _interopRequireDefault(_setFpsHandler);

	var _setMaxFps = __webpack_require__(34);

	var _setMaxFps2 = _interopRequireDefault(_setMaxFps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * Inner apis of an easycanvas instance
	 * - Used for Easycanvas.js and the outsides.
	 * - Will be added to Easycanvas instance's prototype.
	 *
	 * ********** **/

	var apiOuter = {
	    start: _start2.default,
	    paint: _paint2.default,
	    add: _add2.default,
	    remove: _remove2.default,
	    register: _register2.default,
	    clear: _clear2.default,
	    setFpsHandler: _setFpsHandler2.default,
	    setMaxFps: _setMaxFps2.default,
	    pause: _pause2.default,
	    on: _on2.default,
	    off: _off2.default,
	    trigger: _trigger2.default,
	    broadcast: _broadcast2.default,
	    nextTick: _nextTick2.default
	};

	module.exports = apiOuter;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _sprite = __webpack_require__(6);

	var _sprite2 = _interopRequireDefault(_sprite);

	var _bindDrag = __webpack_require__(4);

	var _bindDrag2 = _interopRequireDefault(_bindDrag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var add = function add(item) {
	    if (!item) return;

	    var $canvas = this;

	    var _item = item;

	    _item.$canvas = $canvas;

	    if (!_item.$id) {
	        _item = new _sprite2.default(_item);
	    }

	    _bindDrag2.default.bind(_item);

	    _item.children.forEach(function (c, i) {
	        _item.children[i] = new _sprite2.default(c);
	        _item.children[i].$canvas = $canvas;
	        _item.children[i].$parent = _item;
	    });

	    $canvas.paintList.push(_item);

	    if (process.env.NODE_ENV !== 'production') {
	        $canvas.$plugin.hook.updateTree($canvas);
	    }

	    return _item;
	}; /** ********** *
	    *
	    * Add a child to instance or sprite
	    * - If @item is not a Sprite, this will create a new sprite first.
	    * - Using $id to judge whether @item is a instance of Sprite.
	    *
	    * ********** **/

	module.exports = add;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";

	/** ********** *
	 *
	 * Clear paintList
	 *
	 * ********** **/

	module.exports = function () {
	  this.paintList = [];
	  // this.paintList.splice(0);
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	/** ********** *
	 *
	 * Trigger event only once on next painting-tick
	 * - Removed after triggering.
	 *
	 * ********** **/

	module.exports = function (func) {
	  var _func = function _func() {
	    func.apply(this, arguments);
	    this.off('nextTick', _func);
	  };
	  this.on('nextTick', _func.bind(this));
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	    if (this.$pausing) return;
	    if (document.hidden) return;

	    var $canvas = this;

	    _utils2.default.execFuncs($canvas.hooks.ticked, $canvas, [$canvas.$rafTime]);

	    $canvas.$paintContext.clearRect(0, 0, this.contextWidth, this.contextHeight);

	    if (!$canvas.$freezing) {
	        $canvas.$paintList = [];

	        this.paintList.sort(function (a, b) {
	            var za = _utils2.default.funcOrValue(a.style.zIndex, a);
	            var zb = _utils2.default.funcOrValue(b.style.zIndex, b);
	            if (za === zb) return 0;
	            return za > zb ? 1 : -1;
	        }).forEach(function (perItem, index) {
	            $canvas.$perPaint(perItem, index);
	        });
	    }

	    // let xxxx = document.getElementsByClassName('XXXXX');
	    // for (let i = 0; i < xxxx.length; i++) {
	    //     xxxx[i].toDelete = 1;
	    //     // xxxx[i].remove();
	    // }

	    $canvas.$paint();

	    // for (let i = 0; i < xxxx.length; i++) {
	    //     if (xxxx[i].toDelete)
	    //         xxxx[i].remove();
	    // }

	    this.fps++;

	    if ($canvas.hooks.nextTick) {
	        _utils2.default.execFuncs($canvas.hooks.nextTick, $canvas, [$canvas.$rafTime]);
	        delete $canvas.hooks.nextTick;
	    }
	}; /** ********** *
	    *
	    * Sort the sprite and call inner functions
	    * - Will be called in each frame after the 'start' function called.
	    *
	    * ********** **/

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";

	/** ********** *
	 *
	 * Stop painting in paint function.
	 *
	 * ********** **/

	module.exports = function (val) {
	  this.$pausing = val === undefined ? true : val;
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _registerProtoData = __webpack_require__(31);

	var _registerProtoData2 = _interopRequireDefault(_registerProtoData);

	var _eventHandlerScroll = __webpack_require__(7);

	var _eventHandlerScroll2 = _interopRequireDefault(_eventHandlerScroll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * Create an Easycanvas instance on current dom
	 * - Start the 'hold' event judging interval(may includes a memory waste after destroyed).
	 *
	 * ********** **/

	module.exports = function (dom, option) {
	    var _this = this;

	    for (var i in _registerProtoData2.default) {
	        // this[i] = JSON.parse(JSON.stringify($protoData[i]));
	        this[i] = _registerProtoData2.default[i];
	    }

	    var _option = option || {};

	    this.$dom = dom;
	    this.$paintContext = dom.getContext('2d');
	    this.width = this.contextWidth = _option.width || dom.width;
	    this.height = this.contextHeight = _option.height || dom.height;

	    if (process.env.NODE_ENV !== 'production') {
	        this.$plugin.hook.register(this);
	    }

	    this.events = _option.events || {};

	    // this.scroll = _option.scroll || {};
	    this.hooks = _option.hooks || {};

	    var eventList = ['contextmenu', 'mousewheel', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove'];
	    eventList.forEach(function (e) {
	        dom.addEventListener(e, _this.$eventHandler.bind(_this));
	    });

	    _eventHandlerScroll2.default.tick();
	    // this.$bindScroll.bind(_this);

	    setInterval(function () {
	        if (_this.eHoldingFlag) {
	            var e = _this.eHoldingFlag;
	            _this.$eventHandler.call(_this, {
	                layerX: e.layerX,
	                layerY: e.layerY,
	                screenX: e.screenX || e.layerX,
	                screenY: e.screenY || e.layerY,
	                type: 'hold'
	            });
	        }
	    }, 40); // TODO
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	/** ********** *
	 *
	 * Prototype of canvas instance
	 * - In develop mode, fps will throw warnings in low performance.
	 *
	 * ********** **/

	var PROTOS = {
	    $dom: null,
	    $paintContext: null,
	    $nextTickTime: 0,
	    $lastPaintTime: 0,
	    $pausing: false,
	    $freezing: false,

	    fps: 0,
	    lastFps: 0,
	    fpsCalculateTime: 0,
	    fpsHandler: null,
	    contextWidth: 0,
	    contextHeight: 0,
	    events: {
	        click: null
	    },
	    paintList: [],
	    eHoldingFlag: false,
	    eLastMouseHover: null,

	    maxFps: -1,

	    /* optimise */
	    // optimiser: {
	    //     blockSize: 100,
	    //     cacheMap: {},
	    // },

	    /* scroll */
	    scroll: {
	        scrollable: false,
	        scrollY: 0,
	        minScrollY: undefined,
	        maxScrollY: undefined
	    },

	    /* flags */
	    $flags: {
	        dragging: false
	    }
	};

	if (process.env.NODE_ENV !== 'production') {
	    PROTOS.fpsHandler = function (fps) {
	        if (this.maxFps > 0 && fps < this.maxFps * 0.5) {
	            console.warn('Low FPS detected(' + fps + '), max FPS in settings is ' + this.maxFps + '.');
	        }
	    };
	}

	module.exports = PROTOS;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	/** ********** *
	 *
	 * Remove a sprite (async)
	 * - In develop mode, fps will throw warnings in low performance.
	 *
	 * ********** **/

	module.exports = function (item, del) {
	    item.style.visible = false;
	    item.removing = true;

	    setTimeout(function () {
	        if (item.$parent) {
	            item.$parent.children = item.$parent.children.filter(function (c) {
	                return c.removing !== true;
	            });
	        } else {
	            this.paintList = this.paintList.filter(function (c) {
	                return c.removing !== true;
	            });
	        }
	    }.bind(this));

	    if (del) {
	        this.paintList.splice(this.paintList.indexOf(item), 1);
	    }

	    if (process.env.NODE_ENV !== 'production') {
	        var $canvas = this;
	        $canvas.$plugin.hook.updateTree($canvas);
	    }
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";

	/** ********** *
	 *
	 * Set fps handler
	 * - Same to new Easycanvas.painter().fpsHandler = callback
	 *
	 * ********** **/

	module.exports = function (callback) {
	  this.fpsHandler = callback;
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";

	/** ********** *
	 *
	 * Set max fps
	 * - @fps -1 means Infinity
	 *
	 * ********** **/

	module.exports = function (fps) {
	  this.maxFps = fps || -1;
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";

	/** ********** *
	 *
	 * Start rAF loop
	 * - Cannot called twice on same instance
	 *
	 * ********** **/

	module.exports = function () {
	  this.fpsCalculateTime = new Date().getTime();
	  this.$rAFer(this.paint.bind(this));
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _constants = __webpack_require__(2);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * Send message to chrome devtools, by emitting events to the document
	 * - Will add a 'mask' sprite to show the active sprite.
	 * - Only works in develop mode.
	 * - The handlers are in /plugin/index.js file.
	 *
	 * ********** **/

	module.exports = function () {
	    if (process.env.NODE_ENV !== 'production') {
	        var TO_PANEL_EVENT_NAME = '__EASYCANVAS_BRIDGE_TOPANEL__';
	        window.document.addEventListener('__EASYCANVAS_BRIDGE_TODOC__', function (recieveData) {
	            var data = recieveData.detail;

	            if (data.action = 'code') {
	                console.log(data.content);
	                eval(data.content);
	            }
	        });

	        var $emit = function $emit(passData) {
	            passData.tabId = window[_constants2.default.devFlag].tabId;

	            window.document.dispatchEvent(new CustomEvent(TO_PANEL_EVENT_NAME, {
	                //  filtering special types
	                detail: JSON.parse(JSON.stringify(passData))
	                // bubbles: true,
	                // cancelable: true
	            }));
	        };

	        setTimeout(function () {
	            $emit({
	                name: 'init'
	            });
	        });

	        var $selectMask = null;
	        var maskCanvas = document.createElement('img');
	        maskCanvas.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2OYePb/fwAHrQNdl+exzgAAAABJRU5ErkJggg==';

	        return {
	            hook: {
	                drawImage: function drawImage($canvas, _props) {
	                    if (!window[_constants2.default.devFlag].isPaintRecording) return;

	                    // $emit({
	                    //     name: 'drawImage',
	                    //     id: $canvas.$id,
	                    //     value: _props
	                    // });

	                    window[_constants2.default.devFlag].peformance.area += _props.tw * _props.th;
	                    window[_constants2.default.devFlag].peformance.times++;
	                },
	                updateTree: function updateTree($canvas) {
	                    if (!window[_constants2.default.devFlag].isPaintRecording) return;

	                    $emit({
	                        name: 'updateTree',
	                        id: $canvas.$id
	                    });
	                },
	                register: function register($canvas) {
	                    $canvas.$id = Math.random().toString(36).substr(2);

	                    if (!$canvas.$flags.devtoolHanged) {
	                        if (!window[_constants2.default.devFlag].$canvas[$canvas.$id]) {
	                            window[_constants2.default.devFlag].$canvas[$canvas.$id] = {
	                                $canvas: $canvas
	                            };
	                            $canvas.$flags.devtoolHanged = true;
	                        }
	                    }
	                },
	                selectSprite: function selectSprite(isChoosing, $canvas, $sprite) {
	                    if (!$sprite || !window[_constants2.default.devFlag].selectMode) return false;

	                    if (!$selectMask) {
	                        $selectMask = $canvas.add({
	                            name: _constants2.default.devFlag,
	                            content: {
	                                img: maskCanvas
	                            },
	                            style: {}
	                        });
	                    }

	                    // Has NOT decided which is better
	                    // for (let key in $sprite.style) {
	                    //     (function (_key) {
	                    //         $selectMask.style[_key] = function () {
	                    //             return $sprite.style[_key] || 0;
	                    //         };
	                    //         // $selectMask.style[_key] = $sprite.style[_key] || 0;
	                    //     })(key);
	                    // }
	                    // $sprite.inherit.forEach((key) => {
	                    //     (function (_key) {
	                    //         $selectMask.style[_key] = function () {
	                    //             return $sprite.$cache[_key] || 0;
	                    //         };
	                    //         // $selectMask.style[_key] = $sprite.$cache[_key] || 0;
	                    //     })(key);
	                    // });

	                    var _loop = function _loop(key) {
	                        (function (_key) {
	                            if (_constants2.default.sxywh.indexOf(key) >= 0) {
	                                return;
	                            }
	                            $selectMask.style[_key] = function () {
	                                return $sprite.$cache[_key] || 0;
	                            };
	                        })(key);
	                    };

	                    for (var key in $sprite.$cache) {
	                        _loop(key);
	                    }

	                    // $sprite.$cache has calculated the 'scale' and 'locate'
	                    // Here uses the default values
	                    $selectMask.style.scale = 1;
	                    $selectMask.style.locate = 'lt';

	                    $selectMask.style.zIndex = Number.MAX_SAFE_INTEGER;
	                    $selectMask.style.visible = function () {
	                        return window[_constants2.default.devFlag].selectMode;
	                    };
	                    $selectMask.style.opacity = 0.8;

	                    if (isChoosing) {
	                        $canvas.remove($selectMask);
	                        $selectMask = null;
	                        $emit({
	                            name: 'selectSprite',
	                            id: $canvas.$id,
	                            value: {
	                                sprite: $sprite.$id,
	                                canvas: $canvas.$id
	                            }
	                        });
	                        window[_constants2.default.devFlag].current = {
	                            $sprite: $sprite,
	                            $canvas: $canvas
	                        };
	                        window[_constants2.default.devFlag].selectMode = false;
	                    }

	                    return true;
	                },
	                cancelSelectSprite: function cancelSelectSprite($canvas) {
	                    $canvas.remove($selectMask);
	                    $selectMask = null;
	                }
	            }
	        };
	    }
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _apiOuter = __webpack_require__(24);

	var _apiOuter2 = _interopRequireDefault(_apiOuter);

	var _apiInner = __webpack_require__(17);

	var _apiInner2 = _interopRequireDefault(_apiInner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** ********** *
	 *
	 * Exports an Easycanvas Prototype
	 * - Merge apis to its prototypes.
	 *
	 * ********** **/

	var painter = function painter() {};

	for (var i in _apiInner2.default) {
	    if (Object.prototype.hasOwnProperty.call(_apiInner2.default, i)) {
	        painter.prototype[i] = _apiInner2.default[i];
	    }
	}

	for (var _i in _apiOuter2.default) {
	    if (Object.prototype.hasOwnProperty.call(_apiOuter2.default, _i)) {
	        painter.prototype[_i] = _apiOuter2.default[_i];
	    }
	}

	module.exports = painter;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	var ProcessingFlag = 'processing';
	var ProcessingPool = {};

	function toDataUR(url, callback) {
	    if (url && url.match(/^data:/)) {
	        callback && callback(url);
	        return;
	    }

	    if (ProcessingPool[url]) {
	        if (ProcessingPool[url] !== ProcessingFlag) {
	            callback(ProcessingPool[url]);
	        } else {
	            setTimeout(function () {
	                toDataUR(url, callback);
	            }, 100);
	        }
	        return;
	    }

	    ProcessingPool[url] = ProcessingFlag;

	    var xhr = new XMLHttpRequest();
	    xhr.onload = function () {
	        var reader = new FileReader();
	        reader.onloadend = function () {
	            ProcessingPool[url] = reader.result;
	            callback && callback(reader.result);
	        };
	        reader.readAsDataURL(xhr.response);
	    };
	    xhr.open('GET', url);
	    xhr.responseType = 'blob';
	    xhr.send();
	}

	module.exports = toDataUR;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function (text, config) {
	    return {
	        type: 'multline-text',
	        text: text,
	        config: config
	    };
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function (img, config) {
	    return {
	        type: 'sequence-diagram',
	        index: 0,
	        img: img,
	        config: config
	    };
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transitions = [];

	// Math.PI wastes some performace
	var PI = 3.141593;

	var second2frame = function second2frame(second) {
	    return second / 1000 * 60;
	};

	var transFuncs = {
	    linear: function linear(a, b, duration) {
	        var l = transitions.length;
	        transitions.push(a);

	        var loop = false;

	        var resFunc = function resFunc() {
	            var current = transitions[l];
	            if (current >= a && current < b || current > b && current <= a) {
	                transitions[l] += (b - a) / second2frame(duration);
	            } else {
	                if (loop) {
	                    transitions[l] = a;
	                }

	                return {
	                    $$value: b,
	                    $$over: true,
	                    $$loop: function $$loop() {
	                        transitions[l] = a;
	                    }
	                };
	            }
	            return {
	                $$value: current,
	                $$over: false
	            };
	        };

	        resFunc.loop = function () {
	            loop = true;
	            return resFunc;
	        };

	        return resFunc;
	    },

	    pendulum: function pendulum(a, b, duration, _config) {
	        var config = _config || {};
	        config.start = _utils2.default.firstValuable(config.start, -PI);
	        config.end = _utils2.default.firstValuable(config.end, PI);
	        config.cycle = _utils2.default.firstValuable(config.cycle, 2 * PI);

	        var l = transitions.length;
	        transitions.push(config.start);

	        var loop = false;
	        var stay = false;

	        var resFunc = function resFunc() {
	            var current = Math.cos(transitions[l]) + 1; // 0 ~ 2
	            transitions[l] += PI / second2frame(duration);

	            if (transitions[l] > config.end) {
	                if (loop) {
	                    transitions[l] -= config.cycle;
	                } else {
	                    transitions[l] = config.end;
	                }
	            }

	            return {
	                $$value: _utils2.default.funcOrValue(a) + (_utils2.default.funcOrValue(b) - _utils2.default.funcOrValue(a)) * current / 2,
	                $$over: !stay && transitions[l] >= config.end,
	                $$loop: function $$loop() {
	                    transitions[l] = -PI;
	                }
	            };
	        };

	        resFunc.loop = function () {
	            loop = true;
	            return resFunc;
	        };
	        resFunc.stay = function () {
	            stay = true;
	            return resFunc;
	        };

	        return resFunc;
	    },

	    halfPendulum: function halfPendulum(a, b, duration) {
	        return transFuncs.pendulum(a, b, duration, {
	            start: -PI,
	            end: 0,
	            cycle: PI
	        });
	    },

	    oneByOne: function oneByOne(_arr) {
	        var arr = _arr;
	        var loop = false;

	        var resFunc = function resFunc() {
	            for (var i = 0; i < arr.length; i++) {
	                var res = arr[i]();
	                if ((typeof res === 'undefined' ? 'undefined' : _typeof(res)) === 'object') {
	                    if (!res.$$over) {
	                        return res.$$value;
	                    }
	                } else if (res !== false) {
	                    return res;
	                }
	            }

	            if (loop) {
	                var _res = void 0;
	                for (var _i = 0; _i < arr.length; _i++) {
	                    var tmp = arr[_i]();
	                    if (tmp && tmp.$$loop) {
	                        tmp.$$loop();
	                        _res = _res || arr[_i]();
	                    }
	                }
	                return _res;
	            }
	        };

	        resFunc.loop = function () {
	            loop = true;
	            return resFunc;
	        };

	        return resFunc;
	    }
	};

	module.exports = transFuncs;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _indexLite = __webpack_require__(16);

	var _indexLite2 = _interopRequireDefault(_indexLite);

	var _gif2canvas = __webpack_require__(46);

	var _gif2canvas2 = _interopRequireDefault(_gif2canvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var supplements = {
	    gif2canvas: _gif2canvas2.default
	};

	for (var i in supplements) {
	    if (Object.prototype.hasOwnProperty.call(supplements, i)) {
	        _indexLite2.default[i] = supplements[i];
	    }
	}

	module.exports = _indexLite2.default;

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** gifler.js | github.com/themadcreator/gifler | @license: Apache-2.0 */
	!function t(e, n, r) {
	  function i(s, a) {
	    if (!n[s]) {
	      if (!e[s]) {
	        var u = "function" == typeof require && require;if (!a && u) return require(s, !0);if (o) return o(s, !0);var c = new Error("Cannot find module '" + s + "'");throw c.code = "MODULE_NOT_FOUND", c;
	      }var l = n[s] = { exports: {} };e[s][0].call(l.exports, function (t) {
	        var n = e[s][1][t];return i(n ? n : t);
	      }, l, l.exports, t, e, n, r);
	    }return n[s].exports;
	  }for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) {
	    i(r[s]);
	  }return i;
	}({ 1: [function (t, e, n) {
	    var r,
	        i,
	        o,
	        s,
	        a,
	        u,
	        c = function c(t, e) {
	      return function () {
	        return t.apply(e, arguments);
	      };
	    };s = t("omggif").GifReader, a = t("bluebird"), u = function u(t) {
	      var e, n, r;return r = new XMLHttpRequest(), r.open("GET", t, e = !0), r.responseType = "arraybuffer", n = new a(function (t, e) {
	        return r.onload = function (e) {
	          return t(this.response);
	        };
	      }), r.send(), new o(n);
	    }, o = function () {
	      function t(t) {
	        this._animatorPromise = t.then(function (t) {
	          var e;return e = new s(new Uint8Array(t)), i.decodeFramesAsync(e).then(function (t) {
	            return new r(e, t);
	          });
	        });
	      }return t.getCanvasElement = function (t) {
	        var e, n;if ("string" == typeof t && "CANVAS" === (null != (n = e = document.querySelector(t)) ? n.tagName : void 0)) return e;if ("CANVAS" === (null != t ? t.tagName : void 0)) return t;throw new Error("Unexpected selector type. Valid types are query-selector-string/canvas-element");
	      }, t.prototype.animate = function (e) {
	        var n;return n = t.getCanvasElement(e), this._animatorPromise.then(function (t) {
	          return t.animateInCanvas(n);
	        });
	      }, t.prototype.frames = function (e, n, r) {
	        var i;return null == r && (r = !1), i = t.getCanvasElement(e), this._animatorPromise.then(function (t) {
	          return t.onDrawFrame = n, t.animateInCanvas(i, r);
	        });
	      }, t.prototype.get = function (t) {
	        return this._animatorPromise;
	      }, t;
	    }(), i = function () {
	      function t() {}return t.decodeFramesSync = function (e) {
	        var n;return function () {
	          n = [];for (var t = 0, r = e.numFrames(); r >= 0 ? r > t : t > r; r >= 0 ? t++ : t--) {
	            n.push(t);
	          }return n;
	        }.apply(this).map(function (n) {
	          return t.decodeFrame(e, n);
	        });
	      }, t.decodeFramesAsync = function (e) {
	        var n, r;return a.map(function () {
	          r = [];for (var t = 0, n = e.numFrames(); n >= 0 ? n > t : t > n; n >= 0 ? t++ : t--) {
	            r.push(t);
	          }return r;
	        }.apply(this), function (n) {
	          return t.decodeFrame(e, n);
	        }, n = 1);
	      }, t.decodeFrame = function (t, e) {
	        var n;return n = t.frameInfo(e), n.pixels = new Uint8ClampedArray(t.width * t.height * 4), t.decodeAndBlitFrameRGBA(e, n.pixels), n;
	      }, t;
	    }(), r = function () {
	      function t(t, e) {
	        var n;this._reader = t, this._frames = e, this._advanceFrame = c(this._advanceFrame, this), this._nextFrameRender = c(this._nextFrameRender, this), this._nextFrame = c(this._nextFrame, this), n = this._reader, this.width = n.width, this.height = n.height, this._loopCount = this._reader.loopCount(), this._loops = 0, this._frameIndex = 0, this._running = !1;
	      }return t.createBufferCanvas = function (t, e, n) {
	        var r, i, o;return r = document.createElement("canvas"), i = r.getContext("2d"), r.width = t.width, r.height = t.height, o = i.createImageData(e, n), o.data.set(t.pixels), i.putImageData(o, -t.x, -t.y), r;
	      }, t.prototype.start = function () {
	        return this._lastTime = new Date().valueOf(), this._delayCompensation = 0, this._running = !0, setTimeout(this._nextFrame, 0), this;
	      }, t.prototype.stop = function () {
	        return this._running = !1, this;
	      }, t.prototype.reset = function () {
	        return this._frameIndex = 0, this._loops = 0, this;
	      }, t.prototype.running = function () {
	        return this._running;
	      }, t.prototype._nextFrame = function () {
	        requestAnimationFrame(this._nextFrameRender);
	      }, t.prototype._nextFrameRender = function () {
	        var t, e;if (this._running) return t = this._frames[this._frameIndex], null != (e = this.onFrame) && e.apply(this, [t, this._frameIndex]), this._enqueueNextFrame();
	      }, t.prototype._advanceFrame = function () {
	        this._frameIndex += 1, this._frameIndex >= this._frames.length && (0 !== this._loopCount && this._loopCount === this._loops ? this.stop() : (this._frameIndex = 0, this._loops += 1));
	      }, t.prototype._enqueueNextFrame = function () {
	        var t, e, n, r;for (this._advanceFrame(); this._running;) {
	          if (n = this._frames[this._frameIndex], e = new Date().valueOf() - this._lastTime, this._lastTime += e, this._delayCompensation += e, r = 10 * n.delay, t = r - this._delayCompensation, this._delayCompensation -= r, !(0 > t)) {
	            setTimeout(this._nextFrame, t);break;
	          }this._advanceFrame();
	        }
	      }, t.prototype.animateInCanvas = function (e, n) {
	        var r;return null == n && (n = !0), n && (e.width = this.width, e.height = this.height), r = e.getContext("2d"), null == this.onDrawFrame && (this.onDrawFrame = function (t, e, n) {
	          return t.drawImage(e.buffer, e.x, e.y);
	        }), null == this.onFrame && (this.onFrame = function (n) {
	          return function (i, o) {
	            var s, a;switch (null == i.buffer && (i.buffer = t.createBufferCanvas(i, n.width, n.height)), "function" == typeof n.disposeFrame && n.disposeFrame(), i.disposal) {case 2:
	                n.disposeFrame = function () {
	                  return r.clearRect(0, 0, e.width, e.height);
	                };break;case 3:
	                a = r.getImageData(0, 0, e.width, e.height), n.disposeFrame = function () {
	                  return r.putImageData(a, 0, 0);
	                };break;default:
	                n.disposeFrame = null;}return null != (s = n.onDrawFrame) ? s.apply(n, [r, i, o]) : void 0;
	          };
	        }(this)), this.start(), this;
	      }, t;
	    }(), u.Gif = o, u.Decoder = i, u.Animator = r, "undefined" != typeof window && null !== window && (window.gifler = u), "undefined" != typeof e && null !== e && (e.exports = u);
	  }, { bluebird: 2, omggif: 4 }], 2: [function (t, e, n) {
	    (function (t, r) {
	      !function (t) {
	        if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "undefined" != typeof e) e.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	          var i;"undefined" != typeof window ? i = window : "undefined" != typeof r ? i = r : "undefined" != typeof self && (i = self), i.Promise = t();
	        }
	      }(function () {
	        var e, n, i;return function t(e, n, r) {
	          function i(s, a) {
	            if (!n[s]) {
	              if (!e[s]) {
	                var u = "function" == typeof _dereq_ && _dereq_;if (!a && u) return u(s, !0);if (o) return o(s, !0);var c = new Error("Cannot find module '" + s + "'");throw c.code = "MODULE_NOT_FOUND", c;
	              }var l = n[s] = { exports: {} };e[s][0].call(l.exports, function (t) {
	                var n = e[s][1][t];return i(n ? n : t);
	              }, l, l.exports, t, e, n, r);
	            }return n[s].exports;
	          }for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++) {
	            i(r[s]);
	          }return i;
	        }({ 1: [function (t, e, n) {
	            "use strict";
	            e.exports = function (t) {
	              function e(t) {
	                var e = new n(t),
	                    r = e.promise();return e.setHowMany(1), e.setUnwrap(), e.init(), r;
	              }var n = t._SomePromiseArray;t.any = function (t) {
	                return e(t);
	              }, t.prototype.any = function () {
	                return e(this);
	              };
	            };
	          }, {}], 2: [function (e, n, r) {
	            "use strict";
	            function i() {
	              this._isTickUsed = !1, this._lateQueue = new l(16), this._normalQueue = new l(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;var t = this;this.drainQueues = function () {
	                t._drainQueues();
	              }, this._schedule = c.isStatic ? c(this.drainQueues) : c;
	            }function o(t, e, n) {
	              this._lateQueue.push(t, e, n), this._queueTick();
	            }function s(t, e, n) {
	              this._normalQueue.push(t, e, n), this._queueTick();
	            }function a(t) {
	              this._normalQueue._pushOne(t), this._queueTick();
	            }var u;try {
	              throw new Error();
	            } catch (t) {
	              u = t;
	            }var c = e("./schedule"),
	                l = e("./queue"),
	                h = e("./util");i.prototype.disableTrampolineIfNecessary = function () {
	              h.hasDevTools && (this._trampolineEnabled = !1);
	            }, i.prototype.haveItemsQueued = function () {
	              return this._isTickUsed || this._haveDrainedQueues;
	            }, i.prototype.fatalError = function (e, n) {
	              n ? (t.stderr.write("Fatal " + (e instanceof Error ? e.stack : e)), t.exit(2)) : this.throwLater(e);
	            }, i.prototype.throwLater = function (t, e) {
	              if (1 === arguments.length && (e = t, t = function t() {
	                throw e;
	              }), "undefined" != typeof setTimeout) setTimeout(function () {
	                t(e);
	              }, 0);else try {
	                this._schedule(function () {
	                  t(e);
	                });
	              } catch (t) {
	                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
	              }
	            }, h.hasDevTools ? (c.isStatic && (c = function c(t) {
	              setTimeout(t, 0);
	            }), i.prototype.invokeLater = function (t, e, n) {
	              this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function () {
	                setTimeout(function () {
	                  t.call(e, n);
	                }, 100);
	              });
	            }, i.prototype.invoke = function (t, e, n) {
	              this._trampolineEnabled ? s.call(this, t, e, n) : this._schedule(function () {
	                t.call(e, n);
	              });
	            }, i.prototype.settlePromises = function (t) {
	              this._trampolineEnabled ? a.call(this, t) : this._schedule(function () {
	                t._settlePromises();
	              });
	            }) : (i.prototype.invokeLater = o, i.prototype.invoke = s, i.prototype.settlePromises = a), i.prototype.invokeFirst = function (t, e, n) {
	              this._normalQueue.unshift(t, e, n), this._queueTick();
	            }, i.prototype._drainQueue = function (t) {
	              for (; t.length() > 0;) {
	                var e = t.shift();if ("function" == typeof e) {
	                  var n = t.shift(),
	                      r = t.shift();e.call(n, r);
	                } else e._settlePromises();
	              }
	            }, i.prototype._drainQueues = function () {
	              this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue);
	            }, i.prototype._queueTick = function () {
	              this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
	            }, i.prototype._reset = function () {
	              this._isTickUsed = !1;
	            }, n.exports = i, n.exports.firstLineError = u;
	          }, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function (t, e, n) {
	            "use strict";
	            e.exports = function (t, e, n, r) {
	              var i = !1,
	                  o = function o(t, e) {
	                this._reject(e);
	              },
	                  s = function s(t, e) {
	                e.promiseRejectionQueued = !0, e.bindingPromise._then(o, o, null, this, t);
	              },
	                  a = function a(t, e) {
	                0 === (50397184 & this._bitField) && this._resolveCallback(e.target);
	              },
	                  u = function u(t, e) {
	                e.promiseRejectionQueued || this._reject(t);
	              };t.prototype.bind = function (o) {
	                i || (i = !0, t.prototype._propagateFrom = r.propagateFromFunction(), t.prototype._boundValue = r.boundValueFunction());var c = n(o),
	                    l = new t(e);l._propagateFrom(this, 1);var h = this._target();if (l._setBoundTo(c), c instanceof t) {
	                  var f = { promiseRejectionQueued: !1, promise: l, target: h, bindingPromise: c };h._then(e, s, void 0, l, f), c._then(a, u, void 0, l, f), l._setOnCancel(c);
	                } else l._resolveCallback(h);return l;
	              }, t.prototype._setBoundTo = function (t) {
	                void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = -2097153 & this._bitField;
	              }, t.prototype._isBound = function () {
	                return 2097152 === (2097152 & this._bitField);
	              }, t.bind = function (e, n) {
	                return t.resolve(n).bind(e);
	              };
	            };
	          }, {}], 4: [function (t, e, n) {
	            "use strict";
	            function r() {
	              try {
	                Promise === o && (Promise = i);
	              } catch (t) {}return o;
	            }var i;"undefined" != typeof Promise && (i = Promise);var o = t("./promise")();o.noConflict = r, e.exports = o;
	          }, { "./promise": 22 }], 5: [function (t, e, n) {
	            "use strict";
	            var r = Object.create;if (r) {
	              var i = r(null),
	                  o = r(null);i[" size"] = o[" size"] = 0;
	            }e.exports = function (e) {
	              function n(t, n) {
	                var r;if (null != t && (r = t[n]), "function" != typeof r) {
	                  var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'";throw new e.TypeError(i);
	                }return r;
	              }function r(t) {
	                var e = this.pop(),
	                    r = n(t, e);return r.apply(t, this);
	              }function i(t) {
	                return t[this];
	              }function o(t) {
	                var e = +this;return 0 > e && (e = Math.max(0, e + t.length)), t[e];
	              }var s,
	                  a = t("./util"),
	                  u = a.canEvaluate;a.isIdentifier;e.prototype.call = function (t) {
	                var e = [].slice.call(arguments, 1);return e.push(t), this._then(r, void 0, void 0, e, void 0);
	              }, e.prototype.get = function (t) {
	                var e,
	                    n = "number" == typeof t;if (n) e = o;else if (u) {
	                  var r = s(t);e = null !== r ? r : i;
	                } else e = i;return this._then(e, void 0, void 0, t, void 0);
	              };
	            };
	          }, { "./util": 36 }], 6: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i) {
	              var o = t("./util"),
	                  s = o.tryCatch,
	                  a = o.errorObj,
	                  u = e._async;e.prototype.break = e.prototype.cancel = function () {
	                if (!i.cancellation()) return this._warn("cancellation is disabled");for (var t = this, e = t; t.isCancellable();) {
	                  if (!t._cancelBy(e)) {
	                    e._isFollowing() ? e._followee().cancel() : e._cancelBranched();break;
	                  }var n = t._cancellationParent;if (null == n || !n.isCancellable()) {
	                    t._isFollowing() ? t._followee().cancel() : t._cancelBranched();break;
	                  }t._isFollowing() && t._followee().cancel(), e = t, t = n;
	                }
	              }, e.prototype._branchHasCancelled = function () {
	                this._branchesRemainingToCancel--;
	              }, e.prototype._enoughBranchesHaveCancelled = function () {
	                return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
	              }, e.prototype._cancelBy = function (t) {
	                return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), this._enoughBranchesHaveCancelled() ? (this._invokeOnCancel(), !0) : !1);
	              }, e.prototype._cancelBranched = function () {
	                this._enoughBranchesHaveCancelled() && this._cancel();
	              }, e.prototype._cancel = function () {
	                this.isCancellable() && (this._setCancelled(), u.invoke(this._cancelPromises, this, void 0));
	              }, e.prototype._cancelPromises = function () {
	                this._length() > 0 && this._settlePromises();
	              }, e.prototype._unsetOnCancel = function () {
	                this._onCancelField = void 0;
	              }, e.prototype.isCancellable = function () {
	                return this.isPending() && !this.isCancelled();
	              }, e.prototype._doInvokeOnCancel = function (t, e) {
	                if (o.isArray(t)) for (var n = 0; n < t.length; ++n) {
	                  this._doInvokeOnCancel(t[n], e);
	                } else if (void 0 !== t) if ("function" == typeof t) {
	                  if (!e) {
	                    var r = s(t).call(this._boundValue());r === a && (this._attachExtraTrace(r.e), u.throwLater(r.e));
	                  }
	                } else t._resultCancelled(this);
	              }, e.prototype._invokeOnCancel = function () {
	                var t = this._onCancel();this._unsetOnCancel(), u.invoke(this._doInvokeOnCancel, this, t);
	              }, e.prototype._invokeInternalOnCancel = function () {
	                this.isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
	              }, e.prototype._resultCancelled = function () {
	                this.cancel();
	              };
	            };
	          }, { "./util": 36 }], 7: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e) {
	              function n(t, n, a) {
	                return function (u) {
	                  var c = a._boundValue();t: for (var l = 0; l < t.length; ++l) {
	                    var h = t[l];if (h === Error || null != h && h.prototype instanceof Error) {
	                      if (u instanceof h) return o(n).call(c, u);
	                    } else if ("function" == typeof h) {
	                      var f = o(h).call(c, u);if (f === s) return f;if (f) return o(n).call(c, u);
	                    } else if (r.isObject(u)) {
	                      for (var p = i(h), _ = 0; _ < p.length; ++_) {
	                        var d = p[_];if (h[d] != u[d]) continue t;
	                      }return o(n).call(c, u);
	                    }
	                  }return e;
	                };
	              }var r = t("./util"),
	                  i = t("./es5").keys,
	                  o = r.tryCatch,
	                  s = r.errorObj;return n;
	            };
	          }, { "./es5": 13, "./util": 36 }], 8: [function (t, e, n) {
	            "use strict";
	            e.exports = function (t) {
	              function e() {
	                this._trace = new e.CapturedTrace(r());
	              }function n() {
	                return i ? new e() : void 0;
	              }function r() {
	                var t = o.length - 1;return t >= 0 ? o[t] : void 0;
	              }var i = !1,
	                  o = [];return t.prototype._promiseCreated = function () {}, t.prototype._pushContext = function () {}, t.prototype._popContext = function () {
	                return 0;
	              }, t._peekContext = t.prototype._peekContext = function () {}, e.prototype._pushContext = function () {
	                void 0 !== this._trace && (this._trace._promisesCreated = 0, o.push(this._trace));
	              }, e.prototype._popContext = function () {
	                if (void 0 !== this._trace) {
	                  var t = o.pop(),
	                      e = t._promisesCreated;return t._promisesCreated = 0, e;
	                }return 0;
	              }, e.CapturedTrace = null, e.create = n, e.activateLongStackTraces = function () {
	                i = !0, t.prototype._pushContext = e.prototype._pushContext, t.prototype._popContext = e.prototype._popContext, t._peekContext = t.prototype._peekContext = r, t.prototype._promiseCreated = function () {
	                  var t = this._peekContext();t && t._promisesCreated++;
	                };
	              }, e;
	            };
	          }, {}], 9: [function (e, n, r) {
	            "use strict";
	            n.exports = function (n, r) {
	              function i(t, e, n) {
	                var r = this;try {
	                  t(e, n, function (t) {
	                    if ("function" != typeof t) throw new TypeError("onCancel must be a function, got: " + H.toString(t));r._attachCancellationCallback(t);
	                  });
	                } catch (t) {
	                  return t;
	                }
	              }function o(t) {
	                if (!this.isCancellable()) return this;var e = this._onCancel();void 0 !== e ? H.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t);
	              }function s() {
	                return this._onCancelField;
	              }function a(t) {
	                this._onCancelField = t;
	              }function u() {
	                this._cancellationParent = void 0, this._onCancelField = void 0;
	              }function c(t, e) {
	                if (0 !== (1 & e)) {
	                  this._cancellationParent = t;var n = t._branchesRemainingToCancel;void 0 === n && (n = 0), t._branchesRemainingToCancel = n + 1;
	                }0 !== (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
	              }function l(t, e) {
	                0 !== (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
	              }function h() {
	                var t = this._boundTo;return void 0 !== t && t instanceof n ? t.isFulfilled() ? t.value() : void 0 : t;
	              }function f() {
	                this._trace = new R(this._peekContext());
	              }function p(t, e) {
	                if (L(t)) {
	                  var n = this._trace;if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);else if (!t.__stackCleaned__) {
	                    var r = C(t);H.notEnumerableProp(t, "stack", r.message + "\n" + r.stack.join("\n")), H.notEnumerableProp(t, "__stackCleaned__", !0);
	                  }
	                }
	              }function _(t, e, n, r) {
	                if (void 0 === t && e > 0 && Y.longStackTraces && Y.warnings) {
	                  var i = "a promise was created in a " + n + " handler but was not returned from it";r._warn(i);
	                }
	              }function d(t, e) {
	                var n = t + " is deprecated and will be removed in a future version.";return e && (n += " Use " + e + " instead."), v(n);
	              }function v(t, e, r) {
	                if (Y.warnings) {
	                  var i,
	                      o = new V(t);if (e) r._attachExtraTrace(o);else if (Y.longStackTraces && (i = n._peekContext())) i.attachExtraTrace(o);else {
	                    var s = C(o);o.stack = s.message + "\n" + s.stack.join("\n");
	                  }j(o, "", !0);
	                }
	              }function y(t, e) {
	                for (var n = 0; n < e.length - 1; ++n) {
	                  e[n].push("From previous event:"), e[n] = e[n].join("\n");
	                }return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n");
	              }function m(t) {
	                for (var e = 0; e < t.length; ++e) {
	                  (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--);
	                }
	              }function g(t) {
	                for (var e = t[0], n = 1; n < t.length; ++n) {
	                  for (var r = t[n], i = e.length - 1, o = e[i], s = -1, a = r.length - 1; a >= 0; --a) {
	                    if (r[a] === o) {
	                      s = a;break;
	                    }
	                  }for (var a = s; a >= 0; --a) {
	                    var u = r[a];if (e[i] !== u) break;e.pop(), i--;
	                  }e = r;
	                }
	              }function b(t) {
	                for (var e = [], n = 0; n < t.length; ++n) {
	                  var r = t[n],
	                      i = "    (No stack trace)" === r || U.test(r),
	                      o = i && z(r);i && !o && (M && " " !== r.charAt(0) && (r = "    " + r), e.push(r));
	                }return e;
	              }function w(t) {
	                for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
	                  var r = e[n];if ("    (No stack trace)" === r || U.test(r)) break;
	                }return n > 0 && (e = e.slice(n)), e;
	              }function C(t) {
	                var e = t.stack,
	                    n = t.toString();return e = "string" == typeof e && e.length > 0 ? w(t) : ["    (No stack trace)"], { message: n, stack: b(e) };
	              }function j(t, e, n) {
	                if ("undefined" != typeof console) {
	                  var r;if (H.isObject(t)) {
	                    var i = t.stack;r = e + B(i, t);
	                  } else r = e + String(t);"function" == typeof S ? S(r, n) : ("function" == typeof console.log || "object" == _typeof(console.log)) && console.log(r);
	                }
	              }function F(t, e, n, r) {
	                var i = !1;try {
	                  "function" == typeof e && (i = !0, "rejectionHandled" === t ? e(r) : e(n, r));
	                } catch (t) {
	                  D.throwLater(t);
	                }var o = !1;try {
	                  o = J(t, n, r);
	                } catch (t) {
	                  o = !0, D.throwLater(t);
	                }var s = !1;if (X) try {
	                  s = X(t.toLowerCase(), { reason: n, promise: r });
	                } catch (t) {
	                  s = !0, D.throwLater(t);
	                }o || i || s || "unhandledRejection" !== t || j(n, "Unhandled rejection ");
	              }function k(t) {
	                var e;if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";else {
	                  e = t && "function" == typeof t.toString ? t.toString() : H.toString(t);var n = /\[object [a-zA-Z0-9$_]+\]/;if (n.test(e)) try {
	                    var r = JSON.stringify(t);e = r;
	                  } catch (t) {}0 === e.length && (e = "(empty array)");
	                }return "(<" + x(e) + ">, no stack trace)";
	              }function x(t) {
	                var e = 41;return t.length < e ? t : t.substr(0, e - 3) + "...";
	              }function E() {
	                return "function" == typeof K;
	              }function T(t) {
	                var e = t.match(W);return e ? { fileName: e[1], line: parseInt(e[2], 10) } : void 0;
	              }function P(t, e) {
	                if (E()) {
	                  for (var n, r, i = t.stack.split("\n"), o = e.stack.split("\n"), s = -1, a = -1, u = 0; u < i.length; ++u) {
	                    var c = T(i[u]);if (c) {
	                      n = c.fileName, s = c.line;break;
	                    }
	                  }for (var u = 0; u < o.length; ++u) {
	                    var c = T(o[u]);if (c) {
	                      r = c.fileName, a = c.line;break;
	                    }
	                  }0 > s || 0 > a || !n || !r || n !== r || s >= a || (z = function z(t) {
	                    if (N.test(t)) return !0;var e = T(t);return e && e.fileName === n && s <= e.line && e.line <= a ? !0 : !1;
	                  });
	                }
	              }function R(t) {
	                this._parent = t, this._promisesCreated = 0;var e = this._length = 1 + (void 0 === t ? 0 : t._length);K(this, R), e > 32 && this.uncycle();
	              }var A,
	                  O,
	                  S,
	                  I = n._getDomain,
	                  D = n._async,
	                  V = e("./errors").Warning,
	                  H = e("./util"),
	                  L = H.canAttachTrace,
	                  N = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
	                  U = null,
	                  B = null,
	                  M = !1,
	                  q = !0,
	                  Q = !(0 == H.env("BLUEBIRD_WARNINGS") || !q && !H.env("BLUEBIRD_WARNINGS")),
	                  $ = !(0 == H.env("BLUEBIRD_LONG_STACK_TRACES") || !q && !H.env("BLUEBIRD_LONG_STACK_TRACES"));n.prototype.suppressUnhandledRejections = function () {
	                var t = this._target();t._bitField = -1048577 & t._bitField | 2097152;
	              }, n.prototype._ensurePossibleRejectionHandled = function () {
	                0 === (2097152 & this._bitField) && (this._setRejectionIsUnhandled(), D.invokeLater(this._notifyUnhandledRejection, this, void 0));
	              }, n.prototype._notifyUnhandledRejectionIsHandled = function () {
	                F("rejectionHandled", A, void 0, this);
	              }, n.prototype._notifyUnhandledRejection = function () {
	                if (this._isRejectionUnhandled()) {
	                  var t = this._settledValue();this._setUnhandledRejectionIsNotified(), F("unhandledRejection", O, t, this);
	                }
	              }, n.prototype._setUnhandledRejectionIsNotified = function () {
	                this._bitField = 262144 | this._bitField;
	              }, n.prototype._unsetUnhandledRejectionIsNotified = function () {
	                this._bitField = -262145 & this._bitField;
	              }, n.prototype._isUnhandledRejectionNotified = function () {
	                return (262144 & this._bitField) > 0;
	              }, n.prototype._setRejectionIsUnhandled = function () {
	                this._bitField = 1048576 | this._bitField;
	              }, n.prototype._unsetRejectionIsUnhandled = function () {
	                this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
	              }, n.prototype._isRejectionUnhandled = function () {
	                return (1048576 & this._bitField) > 0;
	              }, n.prototype._warn = function (t, e) {
	                return v(t, e, this);
	              }, n.onPossiblyUnhandledRejection = function (t) {
	                var e = I();O = "function" == typeof t ? null === e ? t : e.bind(t) : void 0;
	              }, n.onUnhandledRejectionHandled = function (t) {
	                var e = I();A = "function" == typeof t ? null === e ? t : e.bind(t) : void 0;
	              }, n.longStackTraces = function () {
	                if (D.haveItemsQueued() && !Y.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");!Y.longStackTraces && E() && (Y.longStackTraces = !0, n.prototype._captureStackTrace = f, n.prototype._attachExtraTrace = p, r.activateLongStackTraces(), D.disableTrampolineIfNecessary());
	              }, n.hasLongStackTraces = function () {
	                return Y.longStackTraces && E();
	              }, n.config = function (t) {
	                if (t = Object(t), "longStackTraces" in t && t.longStackTraces && n.longStackTraces(), "warnings" in t && (Y.warnings = !!t.warnings), "cancellation" in t && t.cancellation && !Y.cancellation) {
	                  if (D.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");n.prototype._clearCancellationData = u, n.prototype._propagateFrom = c, n.prototype._onCancel = s, n.prototype._setOnCancel = a, n.prototype._attachCancellationCallback = o, n.prototype._execute = i, G = c, Y.cancellation = !0;
	                }
	              }, n.prototype._execute = function (t, e, n) {
	                try {
	                  t(e, n);
	                } catch (t) {
	                  return t;
	                }
	              }, n.prototype._onCancel = function () {}, n.prototype._setOnCancel = function (t) {}, n.prototype._attachCancellationCallback = function (t) {}, n.prototype._captureStackTrace = function () {}, n.prototype._attachExtraTrace = function () {}, n.prototype._clearCancellationData = function () {}, n.prototype._propagateFrom = function (t, e) {};var G = l,
	                  z = function z() {
	                return !1;
	              },
	                  W = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;H.inherits(R, Error), r.CapturedTrace = R, R.prototype.uncycle = function () {
	                var t = this._length;if (!(2 > t)) {
	                  for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r) {
	                    e.push(i), i = i._parent;
	                  }t = this._length = r;for (var r = t - 1; r >= 0; --r) {
	                    var o = e[r].stack;void 0 === n[o] && (n[o] = r);
	                  }for (var r = 0; t > r; ++r) {
	                    var s = e[r].stack,
	                        a = n[s];if (void 0 !== a && a !== r) {
	                      a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[r]._parent = void 0, e[r]._length = 1;var u = r > 0 ? e[r - 1] : this;t - 1 > a ? (u._parent = e[a + 1], u._parent.uncycle(), u._length = u._parent._length + 1) : (u._parent = void 0, u._length = 1);for (var c = u._length + 1, l = r - 2; l >= 0; --l) {
	                        e[l]._length = c, c++;
	                      }return;
	                    }
	                  }
	                }
	              }, R.prototype.attachExtraTrace = function (t) {
	                if (!t.__stackCleaned__) {
	                  this.uncycle();for (var e = C(t), n = e.message, r = [e.stack], i = this; void 0 !== i;) {
	                    r.push(b(i.stack.split("\n"))), i = i._parent;
	                  }g(r), m(r), H.notEnumerableProp(t, "stack", y(n, r)), H.notEnumerableProp(t, "__stackCleaned__", !0);
	                }
	              };var X,
	                  K = function () {
	                var t = /^\s*at\s*/,
	                    e = function e(t, _e) {
	                  return "string" == typeof t ? t : void 0 !== _e.name && void 0 !== _e.message ? _e.toString() : k(_e);
	                };if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
	                  Error.stackTraceLimit += 6, U = t, B = e;var n = Error.captureStackTrace;return z = function z(t) {
	                    return N.test(t);
	                  }, function (t, e) {
	                    Error.stackTraceLimit += 6, n(t, e), Error.stackTraceLimit -= 6;
	                  };
	                }var r = new Error();if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return U = /@/, B = e, M = !0, function (t) {
	                  t.stack = new Error().stack;
	                };var i;try {
	                  throw new Error();
	                } catch (t) {
	                  i = "stack" in t;
	                }return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (B = function B(t, e) {
	                  return "string" == typeof t ? t : "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e || void 0 === e.name || void 0 === e.message ? k(e) : e.toString();
	                }, null) : (U = t, B = e, function (t) {
	                  Error.stackTraceLimit += 6;try {
	                    throw new Error();
	                  } catch (e) {
	                    t.stack = e.stack;
	                  }Error.stackTraceLimit -= 6;
	                });
	              }([]),
	                  J = function () {
	                if (H.isNode) return function (e, n, r) {
	                  return "rejectionHandled" === e ? t.emit(e, r) : t.emit(e, n, r);
	                };var e = !1,
	                    n = !0;try {
	                  var r = new self.CustomEvent("test");e = r instanceof CustomEvent;
	                } catch (t) {}if (!e) try {
	                  var i = document.createEvent("CustomEvent");i.initCustomEvent("testingtheevent", !1, !0, {}), self.dispatchEvent(i);
	                } catch (t) {
	                  n = !1;
	                }n && (X = function X(t, n) {
	                  var r;return e ? r = new self.CustomEvent(t, { detail: n, bubbles: !1, cancelable: !0 }) : self.dispatchEvent && (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, !1, !0, n)), r ? !self.dispatchEvent(r) : !1;
	                });var o = {};return o.unhandledRejection = "onunhandledRejection".toLowerCase(), o.rejectionHandled = "onrejectionHandled".toLowerCase(), function (t, e, n) {
	                  var r = o[t],
	                      i = self[r];return i ? ("rejectionHandled" === t ? i.call(self, n) : i.call(self, e, n), !0) : !1;
	                };
	              }();"undefined" != typeof console && "undefined" != typeof console.warn && (S = function S(t) {
	                console.warn(t);
	              }, H.isNode && t.stderr.isTTY ? S = function S(e, n) {
	                var r = n ? "[33m" : "[31m";t.stderr.write(r + e + "[0m\n");
	              } : H.isNode || "string" != typeof new Error().stack || (S = function S(t, e) {
	                console.warn("%c" + t, e ? "color: darkorange" : "color: red");
	              }));var Y = { warnings: Q, longStackTraces: !1, cancellation: !1 };return $ && n.longStackTraces(), { longStackTraces: function longStackTraces() {
	                  return Y.longStackTraces;
	                }, warnings: function warnings() {
	                  return Y.warnings;
	                }, cancellation: function cancellation() {
	                  return Y.cancellation;
	                }, propagateFromFunction: function propagateFromFunction() {
	                  return G;
	                }, boundValueFunction: function boundValueFunction() {
	                  return h;
	                }, checkForgottenReturns: _, setBounds: P, warn: v, deprecated: d, CapturedTrace: R };
	            };
	          }, { "./errors": 12, "./util": 36 }], 10: [function (t, e, n) {
	            "use strict";
	            e.exports = function (t) {
	              function e() {
	                return this.value;
	              }function n() {
	                throw this.reason;
	              }t.prototype.return = t.prototype.thenReturn = function (n) {
	                return n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, { value: n }, void 0);
	              }, t.prototype.throw = t.prototype.thenThrow = function (t) {
	                return this._then(n, void 0, void 0, { reason: t }, void 0);
	              }, t.prototype.catchThrow = function (t) {
	                if (arguments.length <= 1) return this._then(void 0, n, void 0, { reason: t }, void 0);var e = arguments[1],
	                    r = function r() {
	                  throw e;
	                };return this.caught(t, r);
	              }, t.prototype.catchReturn = function (n) {
	                if (arguments.length <= 1) return n instanceof t && n.suppressUnhandledRejections(), this._then(void 0, e, void 0, { value: n }, void 0);var r = arguments[1];r instanceof t && r.suppressUnhandledRejections();var i = function i() {
	                  return r;
	                };return this.caught(n, i);
	              };
	            };
	          }, {}], 11: [function (t, e, n) {
	            "use strict";
	            e.exports = function (t, e) {
	              function n() {
	                return o(this);
	              }function r(t, n) {
	                return i(t, n, e, e);
	              }var i = t.reduce,
	                  o = t.all;t.prototype.each = function (t) {
	                return this.mapSeries(t)._then(n, void 0, void 0, this, void 0);
	              }, t.prototype.mapSeries = function (t) {
	                return i(this, t, e, e);
	              }, t.each = function (t, e) {
	                return r(t, e)._then(n, void 0, void 0, t, void 0);
	              }, t.mapSeries = r;
	            };
	          }, {}], 12: [function (t, e, n) {
	            "use strict";
	            function r(t, e) {
	              function n(r) {
	                return this instanceof n ? (h(this, "message", "string" == typeof r ? r : e), h(this, "name", t), void (Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new n(r);
	              }return l(n, Error), n;
	            }function i(t) {
	              return this instanceof i ? (h(this, "name", "OperationalError"), h(this, "message", t), this.cause = t, this.isOperational = !0, void (t instanceof Error ? (h(this, "message", t.message), h(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new i(t);
	            }var o,
	                s,
	                a = t("./es5"),
	                u = a.freeze,
	                c = t("./util"),
	                l = c.inherits,
	                h = c.notEnumerableProp,
	                f = r("Warning", "warning"),
	                p = r("CancellationError", "cancellation error"),
	                _ = r("TimeoutError", "timeout error"),
	                d = r("AggregateError", "aggregate error");try {
	              o = TypeError, s = RangeError;
	            } catch (t) {
	              o = r("TypeError", "type error"), s = r("RangeError", "range error");
	            }for (var v = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), y = 0; y < v.length; ++y) {
	              "function" == typeof Array.prototype[v[y]] && (d.prototype[v[y]] = Array.prototype[v[y]]);
	            }a.defineProperty(d.prototype, "length", { value: 0, configurable: !1, writable: !0, enumerable: !0 }), d.prototype.isOperational = !0;var m = 0;d.prototype.toString = function () {
	              var t = Array(4 * m + 1).join(" "),
	                  e = "\n" + t + "AggregateError of:\n";m++, t = Array(4 * m + 1).join(" ");for (var n = 0; n < this.length; ++n) {
	                for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) {
	                  i[o] = t + i[o];
	                }r = i.join("\n"), e += r + "\n";
	              }return m--, e;
	            }, l(i, Error);var g = Error.__BluebirdErrorTypes__;g || (g = u({ CancellationError: p, TimeoutError: _, OperationalError: i, RejectionError: i, AggregateError: d }), h(Error, "__BluebirdErrorTypes__", g)), e.exports = { Error: Error, TypeError: o, RangeError: s, CancellationError: g.CancellationError, OperationalError: g.OperationalError, TimeoutError: g.TimeoutError, AggregateError: g.AggregateError, Warning: f };
	          }, { "./es5": 13, "./util": 36 }], 13: [function (t, e, n) {
	            var r = function () {
	              "use strict";
	              return void 0 === this;
	            }();if (r) e.exports = { freeze: Object.freeze, defineProperty: Object.defineProperty, getDescriptor: Object.getOwnPropertyDescriptor, keys: Object.keys, names: Object.getOwnPropertyNames, getPrototypeOf: Object.getPrototypeOf, isArray: Array.isArray, isES5: r, propertyIsWritable: function propertyIsWritable(t, e) {
	                var n = Object.getOwnPropertyDescriptor(t, e);return !(n && !n.writable && !n.set);
	              } };else {
	              var i = {}.hasOwnProperty,
	                  o = {}.toString,
	                  s = {}.constructor.prototype,
	                  a = function a(t) {
	                var e = [];for (var n in t) {
	                  i.call(t, n) && e.push(n);
	                }return e;
	              },
	                  u = function u(t, e) {
	                return { value: t[e] };
	              },
	                  c = function c(t, e, n) {
	                return t[e] = n.value, t;
	              },
	                  l = function l(t) {
	                return t;
	              },
	                  h = function h(t) {
	                try {
	                  return Object(t).constructor.prototype;
	                } catch (t) {
	                  return s;
	                }
	              },
	                  f = function f(t) {
	                try {
	                  return "[object Array]" === o.call(t);
	                } catch (t) {
	                  return !1;
	                }
	              };e.exports = { isArray: f, keys: a, names: a, defineProperty: c, getDescriptor: u, freeze: l, getPrototypeOf: h, isES5: r, propertyIsWritable: function propertyIsWritable() {
	                  return !0;
	                } };
	            }
	          }, {}], 14: [function (t, e, n) {
	            "use strict";
	            e.exports = function (t, e) {
	              var n = t.map;t.prototype.filter = function (t, r) {
	                return n(this, t, r, e);
	              }, t.filter = function (t, r, i) {
	                return n(t, r, i, e);
	              };
	            };
	          }, {}], 15: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n) {
	              function r(t) {
	                this.finallyHandler = t;
	              }function i(t, e) {
	                return null != t.cancelPromise ? (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), t.cancelPromise = null, !0) : !1;
	              }function o() {
	                return a.call(this, this.promise._target()._settledValue());
	              }function s(t) {
	                return i(this, t) ? void 0 : (l.e = t, l);
	              }function a(t) {
	                var a = this.promise,
	                    u = this.handler;if (!this.called) {
	                  this.called = !0;var h = 0 === this.type ? u.call(a._boundValue()) : u.call(a._boundValue(), t);if (void 0 !== h) {
	                    var f = n(h, a);if (f instanceof e) {
	                      if (null != this.cancelPromise) {
	                        if (f.isCancelled()) {
	                          var p = new c("late cancellation observer");return a._attachExtraTrace(p), l.e = p, l;
	                        }f.isPending() && f._attachCancellationCallback(new r(this));
	                      }return f._then(o, s, void 0, this, void 0);
	                    }
	                  }
	                }return a.isRejected() ? (i(this), l.e = t, l) : (i(this), t);
	              }var u = t("./util"),
	                  c = e.CancellationError,
	                  l = u.errorObj;return r.prototype._resultCancelled = function () {
	                i(this.finallyHandler);
	              }, e.prototype._passThrough = function (t, e, n, r) {
	                return "function" != typeof t ? this.then() : this._then(n, r, void 0, { promise: this, handler: t, called: !1, cancelPromise: null, type: e }, void 0);
	              }, e.prototype.lastly = e.prototype.finally = function (t) {
	                return this._passThrough(t, 0, a, a);
	              }, e.prototype.tap = function (t) {
	                return this._passThrough(t, 1, a);
	              }, a;
	            };
	          }, { "./util": 36 }], 16: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i, o, s) {
	              function a(t, n, r) {
	                for (var o = 0; o < n.length; ++o) {
	                  r._pushContext();var s = p(n[o])(t);if (r._popContext(), s === f) {
	                    r._pushContext();var a = e.reject(f.e);return r._popContext(), a;
	                  }var u = i(s, r);if (u instanceof e) return u;
	                }return null;
	              }function u(t, n, i, o) {
	                var s = this._promise = new e(r);s._captureStackTrace(), s._setOnCancel(this), this._stack = o, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(_) : _, this._yieldedPromise = null;
	              }var c = t("./errors"),
	                  l = c.TypeError,
	                  h = t("./util"),
	                  f = h.errorObj,
	                  p = h.tryCatch,
	                  _ = [];h.inherits(u, o), u.prototype._isResolved = function () {
	                return null === this.promise;
	              }, u.prototype._cleanup = function () {
	                this._promise = this._generator = null;
	              }, u.prototype._promiseCancelled = function () {
	                if (!this._isResolved()) {
	                  var t,
	                      n = "undefined" != typeof this._generator.return;if (n) this._promise._pushContext(), t = p(this._generator.return).call(this._generator, void 0), this._promise._popContext();else {
	                    var r = new e.CancellationError("generator .return() sentinel");e.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), t = p(this._generator.throw).call(this._generator, r), this._promise._popContext(), t === f && t.e === r && (t = null);
	                  }var i = this._promise;this._cleanup(), t === f ? i._rejectCallback(t.e, !1) : i.cancel();
	                }
	              }, u.prototype._promiseFulfilled = function (t) {
	                this._yieldedPromise = null, this._promise._pushContext();var e = p(this._generator.next).call(this._generator, t);this._promise._popContext(), this._continue(e);
	              }, u.prototype._promiseRejected = function (t) {
	                this._yieldedPromise = null, this._promise._attachExtraTrace(t), this._promise._pushContext();var e = p(this._generator.throw).call(this._generator, t);this._promise._popContext(), this._continue(e);
	              }, u.prototype._resultCancelled = function () {
	                if (this._yieldedPromise instanceof e) {
	                  var t = this._yieldedPromise;
	                  this._yieldedPromise = null, t.cancel();
	                }
	              }, u.prototype.promise = function () {
	                return this._promise;
	              }, u.prototype._run = function () {
	                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
	              }, u.prototype._continue = function (t) {
	                var n = this._promise;if (t === f) return this._cleanup(), n._rejectCallback(t.e, !1);var r = t.value;if (t.done === !0) return this._cleanup(), n._resolveCallback(r);var o = i(r, this._promise);if (!(o instanceof e) && (o = a(o, this._yieldHandlers, this._promise), null === o)) return void this._promiseRejected(new l("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", r) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));o = o._target();var s = o._bitField;0 === (50397184 & s) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 !== (33554432 & s) ? this._promiseFulfilled(o._value()) : 0 !== (16777216 & s) ? this._promiseRejected(o._reason()) : this._promiseCancelled();
	              }, e.coroutine = function (t, e) {
	                if ("function" != typeof t) throw new l("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n = Object(e).yieldHandler,
	                    r = u,
	                    i = new Error().stack;return function () {
	                  var e = t.apply(this, arguments),
	                      o = new r(void 0, void 0, n, i),
	                      s = o.promise();return o._generator = e, o._promiseFulfilled(void 0), s;
	                };
	              }, e.coroutine.addYieldHandler = function (t) {
	                if ("function" != typeof t) throw new l("expecting a function but got " + h.classString(t));_.push(t);
	              }, e.spawn = function (t) {
	                if (s.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r = new u(t, this),
	                    i = r.promise();return r._run(e.spawn), i;
	              };
	            };
	          }, { "./errors": 12, "./util": 36 }], 17: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i) {
	              var o = t("./util");o.canEvaluate, o.tryCatch, o.errorObj;e.join = function () {
	                var t,
	                    e = arguments.length - 1;if (e > 0 && "function" == typeof arguments[e]) {
	                  t = arguments[e];var r;
	                }var i = [].slice.call(arguments);t && i.pop();var r = new n(i).promise();return void 0 !== t ? r.spread(t) : r;
	              };
	            };
	          }, { "./util": 36 }], 18: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i, o, s) {
	              function a(t, e, n, r) {
	                this.constructor$(t), this._promise._captureStackTrace();var i = c();this._callback = null === i ? e : i.bind(e), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = n >= 1 ? [] : p, this._init$(void 0, -2);
	              }function u(t, e, n, i) {
	                if ("function" != typeof e) return r("expecting a function but got " + l.classString(e));var o = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && null !== n ? n.concurrency : 0;return o = "number" == typeof o && isFinite(o) && o >= 1 ? o : 0, new a(t, e, o, i).promise();
	              }var c = e._getDomain,
	                  l = t("./util"),
	                  h = l.tryCatch,
	                  f = l.errorObj,
	                  p = [];l.inherits(a, n), a.prototype._init = function () {}, a.prototype._promiseFulfilled = function (t, n) {
	                var r = this._values,
	                    o = this.length(),
	                    a = this._preservedValues,
	                    u = this._limit;if (0 > n) {
	                  if (n = -1 * n - 1, r[n] = t, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0;
	                } else {
	                  if (u >= 1 && this._inFlight >= u) return r[n] = t, this._queue.push(n), !1;null !== a && (a[n] = t);var c = this._promise,
	                      l = this._callback,
	                      p = c._boundValue();c._pushContext();var _ = h(l).call(p, t, n, o),
	                      d = c._popContext();if (s.checkForgottenReturns(_, d, null !== a ? "Promise.filter" : "Promise.map", c), _ === f) return this._reject(_.e), !0;var v = i(_, this._promise);if (v instanceof e) {
	                    v = v._target();var y = v._bitField;if (0 === (50397184 & y)) return u >= 1 && this._inFlight++, r[n] = v, v._proxy(this, -1 * (n + 1)), !1;if (0 === (33554432 & y)) return 0 !== (16777216 & y) ? (this._reject(v._reason()), !0) : (this._cancel(), !0);_ = v._value();
	                  }r[n] = _;
	                }var m = ++this._totalResolved;return m >= o ? (null !== a ? this._filter(r, a) : this._resolve(r), !0) : !1;
	              }, a.prototype._drainQueue = function () {
	                for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e;) {
	                  if (this._isResolved()) return;var r = t.pop();this._promiseFulfilled(n[r], r);
	                }
	              }, a.prototype._filter = function (t, e) {
	                for (var n = e.length, r = new Array(n), i = 0, o = 0; n > o; ++o) {
	                  t[o] && (r[i++] = e[o]);
	                }r.length = i, this._resolve(r);
	              }, a.prototype.preservedValues = function () {
	                return this._preservedValues;
	              }, e.prototype.map = function (t, e) {
	                return u(this, t, e, null);
	              }, e.map = function (t, e, n, r) {
	                return u(t, e, n, r);
	              };
	            };
	          }, { "./util": 36 }], 19: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i, o) {
	              var s = t("./util"),
	                  a = s.tryCatch;e.method = function (t) {
	                if ("function" != typeof t) throw new e.TypeError("expecting a function but got " + s.classString(t));return function () {
	                  var r = new e(n);r._captureStackTrace(), r._pushContext();var i = a(t).apply(this, arguments);return r._popContext(), r._resolveFromSyncValue(i), r;
	                };
	              }, e.attempt = e.try = function (t) {
	                if ("function" != typeof t) return i("expecting a function but got " + s.classString(t));var r = new e(n);r._captureStackTrace(), r._pushContext();var u;if (arguments.length > 1) {
	                  o.deprecated("calling Promise.try with more than 1 argument");var c = arguments[1],
	                      l = arguments[2];u = s.isArray(c) ? a(t).apply(l, c) : a(t).call(l, c);
	                } else u = a(t)();return r._popContext(), r._resolveFromSyncValue(u), r;
	              }, e.prototype._resolveFromSyncValue = function (t) {
	                t === s.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0);
	              };
	            };
	          }, { "./util": 36 }], 20: [function (t, e, n) {
	            "use strict";
	            function r(t) {
	              return t instanceof Error && l.getPrototypeOf(t) === Error.prototype;
	            }function i(t) {
	              var e;if (r(t)) {
	                e = new c(t), e.name = t.name, e.message = t.message, e.stack = t.stack;for (var n = l.keys(t), i = 0; i < n.length; ++i) {
	                  var o = n[i];h.test(o) || (e[o] = t[o]);
	                }return e;
	              }return s.markAsOriginatingFromRejection(t), t;
	            }function o(t, e) {
	              return function (n, r) {
	                if (null !== t) {
	                  if (n) {
	                    var o = i(a(n));t._attachExtraTrace(o), t._reject(o);
	                  } else if (e) {
	                    var s = [].slice.call(arguments, 1);t._fulfill(s);
	                  } else t._fulfill(r);t = null;
	                }
	              };
	            }var s = t("./util"),
	                a = s.maybeWrapAsError,
	                u = t("./errors"),
	                c = u.OperationalError,
	                l = t("./es5"),
	                h = /^(?:name|message|stack|cause)$/;e.exports = o;
	          }, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e) {
	              function n(t, e) {
	                var n = this;if (!o.isArray(t)) return r.call(n, t, e);var i = a(e).apply(n._boundValue(), [null].concat(t));i === u && s.throwLater(i.e);
	              }function r(t, e) {
	                var n = this,
	                    r = n._boundValue(),
	                    i = void 0 === t ? a(e).call(r, null) : a(e).call(r, null, t);i === u && s.throwLater(i.e);
	              }function i(t, e) {
	                var n = this;if (!t) {
	                  var r = new Error(t + "");r.cause = t, t = r;
	                }var i = a(e).call(n._boundValue(), t);i === u && s.throwLater(i.e);
	              }var o = t("./util"),
	                  s = e._async,
	                  a = o.tryCatch,
	                  u = o.errorObj;e.prototype.asCallback = e.prototype.nodeify = function (t, e) {
	                if ("function" == typeof t) {
	                  var o = r;void 0 !== e && Object(e).spread && (o = n), this._then(o, i, void 0, this, t);
	                }return this;
	              };
	            };
	          }, { "./util": 36 }], 22: [function (e, n, r) {
	            "use strict";
	            n.exports = function () {
	              function n() {}function r(t, e) {
	                if ("function" != typeof e) throw new m("expecting a function but got " + p.classString(e));if (t.constructor !== i) throw new m("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
	              }function i(t) {
	                this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, t !== b && (r(this, t), this._resolveFromExecutor(t)), this._promiseCreated();
	              }function o(t) {
	                this.promise._resolveCallback(t);
	              }function s(t) {
	                this.promise._rejectCallback(t, !1);
	              }function a(t) {
	                var e = new i(b);e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t;
	              }var u,
	                  c = function c() {
	                return new m("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
	              },
	                  l = function l() {
	                return new i.PromiseInspection(this._target());
	              },
	                  h = function h(t) {
	                return i.reject(new m(t));
	              },
	                  f = {},
	                  p = e("./util");u = p.isNode ? function () {
	                var e = t.domain;return void 0 === e && (e = null), e;
	              } : function () {
	                return null;
	              }, p.notEnumerableProp(i, "_getDomain", u);var _ = e("./es5"),
	                  d = e("./async"),
	                  v = new d();_.defineProperty(i, "_async", { value: v });var y = e("./errors"),
	                  m = i.TypeError = y.TypeError;i.RangeError = y.RangeError;var g = i.CancellationError = y.CancellationError;i.TimeoutError = y.TimeoutError, i.OperationalError = y.OperationalError, i.RejectionError = y.OperationalError, i.AggregateError = y.AggregateError;var b = function b() {},
	                  w = {},
	                  C = {},
	                  j = e("./thenables")(i, b),
	                  F = e("./promise_array")(i, b, j, h, n),
	                  k = e("./context")(i),
	                  x = k.create,
	                  E = e("./debuggability")(i, k),
	                  T = (E.CapturedTrace, e("./finally")(i, j)),
	                  P = e("./catch_filter")(C),
	                  R = e("./nodeback"),
	                  A = p.errorObj,
	                  O = p.tryCatch;return i.prototype.toString = function () {
	                return "[object Promise]";
	              }, i.prototype.caught = i.prototype.catch = function (t) {
	                var e = arguments.length;if (e > 1) {
	                  var n,
	                      r = new Array(e - 1),
	                      i = 0;for (n = 0; e - 1 > n; ++n) {
	                    var o = arguments[n];if (!p.isObject(o)) return h("expecting an object but got " + p.classString(o));r[i++] = o;
	                  }return r.length = i, t = arguments[n], this.then(void 0, P(r, t, this));
	                }return this.then(void 0, t);
	              }, i.prototype.reflect = function () {
	                return this._then(l, l, void 0, this, void 0);
	              }, i.prototype.then = function (t, e) {
	                if (E.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
	                  var n = ".then() only accepts functions but was passed: " + p.classString(t);arguments.length > 1 && (n += ", " + p.classString(e)), this._warn(n);
	                }return this._then(t, e, void 0, void 0, void 0);
	              }, i.prototype.done = function (t, e) {
	                var n = this._then(t, e, void 0, void 0, void 0);n._setIsFinal();
	              }, i.prototype.spread = function (t) {
	                return "function" != typeof t ? h("expecting a function but got " + p.classString(t)) : this.all()._then(t, void 0, void 0, w, void 0);
	              }, i.prototype.toJSON = function () {
	                var t = { isFulfilled: !1, isRejected: !1, fulfillmentValue: void 0, rejectionReason: void 0 };return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t;
	              }, i.prototype.all = function () {
	                return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new F(this).promise();
	              }, i.prototype.error = function (t) {
	                return this.caught(p.originatesFromRejection, t);
	              }, i.is = function (t) {
	                return t instanceof i;
	              }, i.fromNode = i.fromCallback = function (t) {
	                var e = new i(b),
	                    n = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : !1,
	                    r = O(t)(R(e, n));return r === A && e._rejectCallback(r.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), e;
	              }, i.all = function (t) {
	                return new F(t).promise();
	              }, i.cast = function (t) {
	                var e = j(t);return e instanceof i || (e = new i(b), e._setFulfilled(), e._rejectionHandler0 = t), e;
	              }, i.resolve = i.fulfilled = i.cast, i.reject = i.rejected = function (t) {
	                var e = new i(b);return e._captureStackTrace(), e._rejectCallback(t, !0), e;
	              }, i.setScheduler = function (t) {
	                if ("function" != typeof t) throw new m("expecting a function but got " + p.classString(t));var e = v._schedule;return v._schedule = t, e;
	              }, i.prototype._then = function (t, e, n, r, o) {
	                var s = void 0 !== o,
	                    a = s ? o : new i(b),
	                    c = this._target(),
	                    l = c._bitField;s || (a._propagateFrom(this, 3), a._captureStackTrace(), void 0 === r && 0 !== (2097152 & this._bitField) && (r = 0 !== (50397184 & l) ? this._boundValue() : c === this ? void 0 : this._boundTo));var h = u();if (0 !== (50397184 & l)) {
	                  var f,
	                      p,
	                      _ = c._settlePromiseCtx;0 !== (33554432 & l) ? (p = c._rejectionHandler0, f = t) : 0 !== (16777216 & l) ? (p = c._fulfillmentHandler0, f = e, c._unsetRejectionIsUnhandled()) : (_ = c._settlePromiseLateCancellationObserver, p = new g("late cancellation observer"), c._attachExtraTrace(p), f = e), v.invoke(_, c, { handler: null === h ? f : "function" == typeof f && h.bind(f), promise: a, receiver: r, value: p });
	                } else c._addCallbacks(t, e, a, r, h);return a;
	              }, i.prototype._length = function () {
	                return 65535 & this._bitField;
	              }, i.prototype._isFateSealed = function () {
	                return 0 !== (117506048 & this._bitField);
	              }, i.prototype._isFollowing = function () {
	                return 67108864 === (67108864 & this._bitField);
	              }, i.prototype._setLength = function (t) {
	                this._bitField = -65536 & this._bitField | 65535 & t;
	              }, i.prototype._setFulfilled = function () {
	                this._bitField = 33554432 | this._bitField;
	              }, i.prototype._setRejected = function () {
	                this._bitField = 16777216 | this._bitField;
	              }, i.prototype._setFollowing = function () {
	                this._bitField = 67108864 | this._bitField;
	              }, i.prototype._setIsFinal = function () {
	                this._bitField = 4194304 | this._bitField;
	              }, i.prototype._isFinal = function () {
	                return (4194304 & this._bitField) > 0;
	              }, i.prototype._unsetCancelled = function () {
	                this._bitField = -65537 & this._bitField;
	              }, i.prototype._setCancelled = function () {
	                this._bitField = 65536 | this._bitField;
	              }, i.prototype._setAsyncGuaranteed = function () {
	                this._bitField = 134217728 | this._bitField;
	              }, i.prototype._receiverAt = function (t) {
	                var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];return e === f ? void 0 : void 0 === e && this._isBound() ? this._boundValue() : e;
	              }, i.prototype._promiseAt = function (t) {
	                return this[4 * t - 4 + 2];
	              }, i.prototype._fulfillmentHandlerAt = function (t) {
	                return this[4 * t - 4 + 0];
	              }, i.prototype._rejectionHandlerAt = function (t) {
	                return this[4 * t - 4 + 1];
	              }, i.prototype._boundValue = function () {}, i.prototype._migrateCallback0 = function (t) {
	                var e = (t._bitField, t._fulfillmentHandler0),
	                    n = t._rejectionHandler0,
	                    r = t._promise0,
	                    i = t._receiverAt(0);void 0 === i && (i = f), this._addCallbacks(e, n, r, i, null);
	              }, i.prototype._migrateCallbackAt = function (t, e) {
	                var n = t._fulfillmentHandlerAt(e),
	                    r = t._rejectionHandlerAt(e),
	                    i = t._promiseAt(e),
	                    o = t._receiverAt(e);void 0 === o && (o = f), this._addCallbacks(n, r, i, o, null);
	              }, i.prototype._addCallbacks = function (t, e, n, r, i) {
	                var o = this._length();if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, "function" == typeof t && (this._fulfillmentHandler0 = null === i ? t : i.bind(t)), "function" == typeof e && (this._rejectionHandler0 = null === i ? e : i.bind(e));else {
	                  var s = 4 * o - 4;this[s + 2] = n, this[s + 3] = r, "function" == typeof t && (this[s + 0] = null === i ? t : i.bind(t)), "function" == typeof e && (this[s + 1] = null === i ? e : i.bind(e));
	                }return this._setLength(o + 1), o;
	              }, i.prototype._proxy = function (t, e) {
	                this._addCallbacks(void 0, void 0, e, t, null);
	              }, i.prototype._resolveCallback = function (t, e) {
	                if (0 === (117506048 & this._bitField)) {
	                  if (t === this) return this._rejectCallback(c(), !1);var n = j(t, this);if (!(n instanceof i)) return this._fulfill(t);e && this._propagateFrom(n, 2);var r = n._target(),
	                      o = r._bitField;if (0 === (50397184 & o)) {
	                    var s = this._length();s > 0 && r._migrateCallback0(this);for (var a = 1; s > a; ++a) {
	                      r._migrateCallbackAt(this, a);
	                    }this._setFollowing(), this._setLength(0), this._setFollowee(r);
	                  } else if (0 !== (33554432 & o)) this._fulfill(r._value());else if (0 !== (16777216 & o)) this._reject(r._reason());else {
	                    var u = new g("late cancellation observer");r._attachExtraTrace(u), this._reject(u);
	                  }
	                }
	              }, i.prototype._rejectCallback = function (t, e) {
	                var n = p.ensureErrorObject(t),
	                    r = n === t;if (!r && E.warnings()) {
	                  var i = "a promise was rejected with a non-error: " + p.classString(t);this._warn(i, !0);
	                }this._attachExtraTrace(n, e ? r : !1), this._reject(t);
	              }, i.prototype._resolveFromExecutor = function (t) {
	                var e = this;this._captureStackTrace(), this._pushContext();var n = !0,
	                    r = this._execute(t, function (t) {
	                  e._resolveCallback(t);
	                }, function (t) {
	                  e._rejectCallback(t, n);
	                });n = !1, this._popContext(), void 0 !== r && e._rejectCallback(r, !0);
	              }, i.prototype._settlePromiseFromHandler = function (t, e, n, r) {
	                var i = r._bitField;if (0 === (65536 & i)) {
	                  r._pushContext();var o;e === w ? n && "number" == typeof n.length ? o = O(t).apply(this._boundValue(), n) : (o = A, o.e = new m("cannot .spread() a non-array: " + p.classString(n))) : o = O(t).call(e, n);var s = r._popContext();if (i = r._bitField, 0 === (65536 & i)) if (o === C) r._reject(n);else if (o === A || o === r) {
	                    var a = o === r ? c() : o.e;r._rejectCallback(a, !1);
	                  } else void 0 === o && s > 0 && E.longStackTraces() && E.warnings() && r._warn("a promise was created in a handler but none were returned from it", !0), r._resolveCallback(o);
	                }
	              }, i.prototype._target = function () {
	                for (var t = this; t._isFollowing();) {
	                  t = t._followee();
	                }return t;
	              }, i.prototype._followee = function () {
	                return this._rejectionHandler0;
	              }, i.prototype._setFollowee = function (t) {
	                this._rejectionHandler0 = t;
	              }, i.prototype._settlePromise = function (t, e, r, o) {
	                var s = t instanceof i,
	                    a = this._bitField,
	                    u = 0 !== (134217728 & a);0 !== (65536 & a) ? (s && t._invokeInternalOnCancel(), e === T ? (r.cancelPromise = t, O(e).call(r, o) === A && t._reject(A.e)) : e === l ? t._fulfill(l.call(r)) : r instanceof n ? r._promiseCancelled(t) : s || t instanceof F ? t._cancel() : r.cancel()) : "function" == typeof e ? s ? (u && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, r, o, t)) : e.call(r, o, t) : r instanceof n ? r._isResolved() || (0 !== (33554432 & a) ? r._promiseFulfilled(o, t) : r._promiseRejected(o, t)) : s && (u && t._setAsyncGuaranteed(), 0 !== (33554432 & a) ? t._fulfill(o) : t._reject(o));
	              }, i.prototype._settlePromiseLateCancellationObserver = function (t) {
	                var e = t.handler,
	                    n = t.promise,
	                    r = t.receiver,
	                    o = t.value;"function" == typeof e ? n instanceof i ? this._settlePromiseFromHandler(e, r, o, n) : e.call(r, o, n) : n instanceof i && n._reject(o);
	              }, i.prototype._settlePromiseCtx = function (t) {
	                this._settlePromise(t.promise, t.handler, t.receiver, t.value);
	              }, i.prototype._settlePromise0 = function (t, e, n) {
	                var r = this._promise0,
	                    i = this._receiverAt(0);this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, t, i, e);
	              }, i.prototype._clearCallbackDataAtIndex = function (t) {
	                var e = 4 * t - 4;this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0;
	              }, i.prototype._fulfill = function (t) {
	                var e = this._bitField;if (!((117506048 & e) >>> 16)) {
	                  if (t === this) {
	                    var n = c();return this._attachExtraTrace(n), this._reject(n);
	                  }this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 !== (134217728 & e) ? this._settlePromises() : v.settlePromises(this));
	                }
	              }, i.prototype._reject = function (t) {
	                var e = this._bitField;if (!((117506048 & e) >>> 16)) return this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal() ? v.fatalError(t, p.isNode) : void ((65535 & e) > 0 ? 0 !== (134217728 & e) ? this._settlePromises() : v.settlePromises(this) : this._ensurePossibleRejectionHandled());
	              }, i.prototype._fulfillPromises = function (t, e) {
	                for (var n = 1; t > n; n++) {
	                  var r = this._fulfillmentHandlerAt(n),
	                      i = this._promiseAt(n),
	                      o = this._receiverAt(n);this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e);
	                }
	              }, i.prototype._rejectPromises = function (t, e) {
	                for (var n = 1; t > n; n++) {
	                  var r = this._rejectionHandlerAt(n),
	                      i = this._promiseAt(n),
	                      o = this._receiverAt(n);this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e);
	                }
	              }, i.prototype._settlePromises = function () {
	                var t = this._bitField,
	                    e = 65535 & t;if (e > 0) {
	                  if (0 !== (16842752 & t)) {
	                    var n = this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0, n, t), this._rejectPromises(e, n);
	                  } else {
	                    var r = this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0, r, t), this._fulfillPromises(e, r);
	                  }this._setLength(0);
	                }this._clearCancellationData();
	              }, i.prototype._settledValue = function () {
	                var t = this._bitField;return 0 !== (33554432 & t) ? this._rejectionHandler0 : 0 !== (16777216 & t) ? this._fulfillmentHandler0 : void 0;
	              }, i.defer = i.pending = function () {
	                E.deprecated("Promise.defer", "new Promise");var t = new i(b);return { promise: t, resolve: o, reject: s };
	              }, p.notEnumerableProp(i, "_makeSelfResolutionError", c), e("./method")(i, b, j, h, E), e("./bind")(i, b, j, E), e("./cancel")(i, F, h, E), e("./direct_resolve")(i), e("./synchronous_inspection")(i), e("./join")(i, F, j, b, E), i.Promise = i, e("./map.js")(i, F, h, j, b, E), e("./using.js")(i, h, j, x, b, E), e("./timers.js")(i, b), e("./generators.js")(i, h, b, j, n, E), e("./nodeify.js")(i), e("./call_get.js")(i), e("./props.js")(i, F, j, h), e("./race.js")(i, b, j, h), e("./reduce.js")(i, F, h, j, b, E), e("./settle.js")(i, F, E), e("./some.js")(i, F, h), e("./promisify.js")(i, b), e("./any.js")(i), e("./each.js")(i, b), e("./filter.js")(i, b), p.toFastProperties(i), p.toFastProperties(i.prototype), a({ a: 1 }), a({ b: 2 }), a({ c: 3 }), a(1), a(function () {}), a(void 0), a(!1), a(new i(b)), E.setBounds(d.firstLineError, p.lastLineError), i;
	            };
	          }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i, o) {
	              function s(t) {
	                switch (t) {case -2:
	                    return [];case -3:
	                    return {};}
	              }function a(t) {
	                var r = this._promise = new e(n);t instanceof e && r._propagateFrom(t, 3), r._setOnCancel(this), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
	              }var u = t("./util");u.isArray;return u.inherits(a, o), a.prototype.length = function () {
	                return this._length;
	              }, a.prototype.promise = function () {
	                return this._promise;
	              }, a.prototype._init = function t(n, o) {
	                var a = r(this._values, this._promise);if (a instanceof e) {
	                  a = a._target();var c = a._bitField;if (this._values = a, 0 === (50397184 & c)) return this._promise._setAsyncGuaranteed(), a._then(t, this._reject, void 0, this, o);if (0 === (33554432 & c)) return 0 !== (16777216 & c) ? this._reject(a._reason()) : this._cancel();a = a._value();
	                }if (a = u.asArray(a), null === a) {
	                  var l = i("expecting an array or an iterable object but got " + u.classString(a)).reason();return void this._promise._rejectCallback(l, !1);
	                }return 0 === a.length ? void (-5 === o ? this._resolveEmptyArray() : this._resolve(s(o))) : void this._iterate(a);
	              }, a.prototype._iterate = function (t) {
	                var n = this.getActualLength(t.length);this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;for (var i = this._promise, o = !1, s = null, a = 0; n > a; ++a) {
	                  var u = r(t[a], i);u instanceof e ? (u = u._target(), s = u._bitField) : s = null, o ? null !== s && u.suppressUnhandledRejections() : null !== s ? 0 === (50397184 & s) ? (u._proxy(this, a), this._values[a] = u) : o = 0 !== (33554432 & s) ? this._promiseFulfilled(u._value(), a) : 0 !== (16777216 & s) ? this._promiseRejected(u._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(u, a);
	                }o || i._setAsyncGuaranteed();
	              }, a.prototype._isResolved = function () {
	                return null === this._values;
	              }, a.prototype._resolve = function (t) {
	                this._values = null, this._promise._fulfill(t);
	              }, a.prototype._cancel = function () {
	                !this._isResolved() && this._promise.isCancellable() && (this._values = null, this._promise._cancel());
	              }, a.prototype._reject = function (t) {
	                this._values = null, this._promise._rejectCallback(t, !1);
	              }, a.prototype._promiseFulfilled = function (t, e) {
	                this._values[e] = t;var n = ++this._totalResolved;return n >= this._length ? (this._resolve(this._values), !0) : !1;
	              }, a.prototype._promiseCancelled = function () {
	                return this._cancel(), !0;
	              }, a.prototype._promiseRejected = function (t) {
	                return this._totalResolved++, this._reject(t), !0;
	              }, a.prototype._resultCancelled = function () {
	                if (!this._isResolved()) {
	                  var t = this._values;if (this._cancel(), t instanceof e) t.cancel();else for (var n = 0; n < t.length; ++n) {
	                    t[n] instanceof e && t[n].cancel();
	                  }
	                }
	              }, a.prototype.shouldCopyValues = function () {
	                return !0;
	              }, a.prototype.getActualLength = function (t) {
	                return t;
	              }, a;
	            };
	          }, { "./util": 36 }], 24: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n) {
	              function r(t) {
	                return !C.test(t);
	              }function i(t) {
	                try {
	                  return t.__isPromisified__ === !0;
	                } catch (t) {
	                  return !1;
	                }
	              }function o(t, e, n) {
	                var r = p.getDataPropertyOrDefault(t, e + n, b);return r ? i(r) : !1;
	              }function s(t, e, n) {
	                for (var r = 0; r < t.length; r += 2) {
	                  var i = t[r];if (n.test(i)) for (var o = i.replace(n, ""), s = 0; s < t.length; s += 2) {
	                    if (t[s] === o) throw new m("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e));
	                  }
	                }
	              }function a(t, e, n, r) {
	                for (var a = p.inheritedDataKeys(t), u = [], c = 0; c < a.length; ++c) {
	                  var l = a[c],
	                      h = t[l],
	                      f = r === j ? !0 : j(l, h, t);"function" != typeof h || i(h) || o(t, l, e) || !r(l, h, t, f) || u.push(l, h);
	                }return s(u, e, n), u;
	              }function u(t, r, i, o, s, a) {
	                function u() {
	                  var i = r;r === f && (i = this);var o = new e(n);o._captureStackTrace();var s = "string" == typeof l && this !== c ? this[l] : t,
	                      u = _(o, a);try {
	                    s.apply(i, d(arguments, u));
	                  } catch (t) {
	                    o._rejectCallback(v(t), !0);
	                  }return o._isFateSealed() || o._setAsyncGuaranteed(), o;
	                }var c = function () {
	                  return this;
	                }(),
	                    l = t;return "string" == typeof l && (t = o), p.notEnumerableProp(u, "__isPromisified__", !0), u;
	              }function c(t, e, n, r, i) {
	                for (var o = new RegExp(F(e) + "$"), s = a(t, e, o, n), u = 0, c = s.length; c > u; u += 2) {
	                  var l = s[u],
	                      h = s[u + 1],
	                      _ = l + e;if (r === k) t[_] = k(l, f, l, h, e, i);else {
	                    var d = r(h, function () {
	                      return k(l, f, l, h, e, i);
	                    });p.notEnumerableProp(d, "__isPromisified__", !0), t[_] = d;
	                  }
	                }return p.toFastProperties(t), t;
	              }function l(t, e, n) {
	                return k(t, e, void 0, t, null, n);
	              }var h,
	                  f = {},
	                  p = t("./util"),
	                  _ = t("./nodeback"),
	                  d = p.withAppended,
	                  v = p.maybeWrapAsError,
	                  y = p.canEvaluate,
	                  m = t("./errors").TypeError,
	                  g = "Async",
	                  b = { __isPromisified__: !0 },
	                  w = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
	                  C = new RegExp("^(?:" + w.join("|") + ")$"),
	                  j = function j(t) {
	                return p.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t;
	              },
	                  F = function F(t) {
	                return t.replace(/([$])/, "\\$");
	              },
	                  k = y ? h : u;e.promisify = function (t, e) {
	                if ("function" != typeof t) throw new m("expecting a function but got " + p.classString(t));if (i(t)) return t;e = Object(e);var n = void 0 === e.context ? f : e.context,
	                    o = !!e.multiArgs,
	                    s = l(t, n, o);return p.copyDescriptors(t, s, r), s;
	              }, e.promisifyAll = function (t, e) {
	                if ("function" != typeof t && "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) throw new m("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");e = Object(e);var n = !!e.multiArgs,
	                    r = e.suffix;"string" != typeof r && (r = g);var i = e.filter;"function" != typeof i && (i = j);var o = e.promisifier;if ("function" != typeof o && (o = k), !p.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for (var s = p.inheritedDataKeys(t), a = 0; a < s.length; ++a) {
	                  var u = t[s[a]];"constructor" !== s[a] && p.isClass(u) && (c(u.prototype, r, i, o, n), c(u, r, i, o, n));
	                }return c(t, r, i, o, n);
	              };
	            };
	          }, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i) {
	              function o(t) {
	                var e,
	                    n = !1;if (void 0 !== a && t instanceof a) e = h(t), n = !0;else {
	                  var r = l.keys(t),
	                      i = r.length;e = new Array(2 * i);for (var o = 0; i > o; ++o) {
	                    var s = r[o];e[o] = t[s], e[o + i] = s;
	                  }
	                }this.constructor$(e), this._isMap = n, this._init$(void 0, -3);
	              }function s(t) {
	                var n,
	                    s = r(t);return c(s) ? (n = s instanceof e ? s._then(e.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof e && n._propagateFrom(s, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
	              }var a,
	                  u = t("./util"),
	                  c = u.isObject,
	                  l = t("./es5");"function" == typeof Map && (a = Map);var h = function () {
	                function t(t, r) {
	                  this[e] = t, this[e + n] = r, e++;
	                }var e = 0,
	                    n = 0;return function (r) {
	                  n = r.size, e = 0;var i = new Array(2 * r.size);return r.forEach(t, i), i;
	                };
	              }(),
	                  f = function f(t) {
	                for (var e = new a(), n = t.length / 2 | 0, r = 0; n > r; ++r) {
	                  var i = t[n + r],
	                      o = t[r];e.set(i, o);
	                }return e;
	              };u.inherits(o, n), o.prototype._init = function () {}, o.prototype._promiseFulfilled = function (t, e) {
	                this._values[e] = t;var n = ++this._totalResolved;if (n >= this._length) {
	                  var r;if (this._isMap) r = f(this._values);else {
	                    r = {};for (var i = this.length(), o = 0, s = this.length(); s > o; ++o) {
	                      r[this._values[o + i]] = this._values[o];
	                    }
	                  }return this._resolve(r), !0;
	                }return !1;
	              }, o.prototype.shouldCopyValues = function () {
	                return !1;
	              }, o.prototype.getActualLength = function (t) {
	                return t >> 1;
	              }, e.prototype.props = function () {
	                return s(this);
	              }, e.props = function (t) {
	                return s(t);
	              };
	            };
	          }, { "./es5": 13, "./util": 36 }], 26: [function (t, e, n) {
	            "use strict";
	            function r(t, e, n, r, i) {
	              for (var o = 0; i > o; ++o) {
	                n[o + r] = t[o + e], t[o + e] = void 0;
	              }
	            }function i(t) {
	              this._capacity = t, this._length = 0, this._front = 0;
	            }i.prototype._willBeOverCapacity = function (t) {
	              return this._capacity < t;
	            }, i.prototype._pushOne = function (t) {
	              var e = this.length();this._checkCapacity(e + 1);var n = this._front + e & this._capacity - 1;this[n] = t, this._length = e + 1;
	            }, i.prototype._unshiftOne = function (t) {
	              var e = this._capacity;this._checkCapacity(this.length() + 1);var n = this._front,
	                  r = (n - 1 & e - 1 ^ e) - e;this[r] = t, this._front = r, this._length = this.length() + 1;
	            }, i.prototype.unshift = function (t, e, n) {
	              this._unshiftOne(n), this._unshiftOne(e), this._unshiftOne(t);
	            }, i.prototype.push = function (t, e, n) {
	              var r = this.length() + 3;if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);var i = this._front + r - 3;this._checkCapacity(r);var o = this._capacity - 1;this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r;
	            }, i.prototype.shift = function () {
	              var t = this._front,
	                  e = this[t];return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e;
	            }, i.prototype.length = function () {
	              return this._length;
	            }, i.prototype._checkCapacity = function (t) {
	              this._capacity < t && this._resizeTo(this._capacity << 1);
	            }, i.prototype._resizeTo = function (t) {
	              var e = this._capacity;this._capacity = t;var n = this._front,
	                  i = this._length,
	                  o = n + i & e - 1;r(this, 0, this, e, o);
	            }, e.exports = i;
	          }, {}], 27: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i) {
	              function o(t, o) {
	                var u = r(t);if (u instanceof e) return a(u);if (t = s.asArray(t), null === t) return i("expecting an array or an iterable object but got " + s.classString(t));var c = new e(n);void 0 !== o && c._propagateFrom(o, 3);for (var l = c._fulfill, h = c._reject, f = 0, p = t.length; p > f; ++f) {
	                  var _ = t[f];(void 0 !== _ || f in t) && e.cast(_)._then(l, h, void 0, c, null);
	                }return c;
	              }var s = t("./util"),
	                  a = function a(t) {
	                return t.then(function (e) {
	                  return o(e, t);
	                });
	              };e.race = function (t) {
	                return o(t, void 0);
	              }, e.prototype.race = function () {
	                return o(this, void 0);
	              };
	            };
	          }, { "./util": 36 }], 28: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i, o, s) {
	              function a(t, n, r, i) {
	                this.constructor$(t);var s = f();this._fn = null === s ? n : s.bind(n), void 0 !== r && (r = e.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, this._eachValues = i === o ? [] : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
	              }function u(t, e) {
	                this.isFulfilled() ? e._resolve(t) : e._reject(t);
	              }function c(t, e, n, i) {
	                if ("function" != typeof e) return r("expecting a function but got " + p.classString(e));var o = new a(t, e, n, i);return o.promise();
	              }function l(t) {
	                this.accum = t, this.array._gotAccum(t);var n = i(this.value, this.array._promise);return n instanceof e ? (this.array._currentCancellable = n, n._then(h, void 0, void 0, this, void 0)) : h.call(this, n);
	              }function h(t) {
	                var n = this.array,
	                    r = n._promise,
	                    i = _(n._fn);r._pushContext();var o;o = void 0 !== n._eachValues ? i.call(r._boundValue(), t, this.index, this.length) : i.call(r._boundValue(), this.accum, t, this.index, this.length), o instanceof e && (n._currentCancellable = o);var a = r._popContext();return s.checkForgottenReturns(o, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), o;
	              }var f = e._getDomain,
	                  p = t("./util"),
	                  _ = p.tryCatch;p.inherits(a, n), a.prototype._gotAccum = function (t) {
	                void 0 !== this._eachValues && t !== o && this._eachValues.push(t);
	              }, a.prototype._eachComplete = function (t) {
	                return this._eachValues.push(t), this._eachValues;
	              }, a.prototype._init = function () {}, a.prototype._resolveEmptyArray = function () {
	                this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue);
	              }, a.prototype.shouldCopyValues = function () {
	                return !1;
	              }, a.prototype._resolve = function (t) {
	                this._promise._resolveCallback(t), this._values = null;
	              }, a.prototype._resultCancelled = function (t) {
	                return t === this._initialValue ? this._cancel() : void (this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel()));
	              }, a.prototype._iterate = function (t) {
	                this._values = t;var n,
	                    r,
	                    i = t.length;if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = e.resolve(t[0]), r = 1), this._currentCancellable = n, !n.isRejected()) for (; i > r; ++r) {
	                  var o = { accum: null, value: t[r], index: r, length: i, array: this };n = n._then(l, void 0, void 0, o, void 0);
	                }void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(u, u, void 0, n, this);
	              }, e.prototype.reduce = function (t, e) {
	                return c(this, t, e, null);
	              }, e.reduce = function (t, e, n, r) {
	                return c(t, e, n, r);
	              };
	            };
	          }, { "./util": 36 }], 29: [function (e, n, i) {
	            "use strict";
	            var o,
	                s = e("./util"),
	                a = function a() {
	              throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
	            };if (s.isNode && "undefined" == typeof MutationObserver) {
	              var u = r.setImmediate,
	                  c = t.nextTick;o = s.isRecentNode ? function (t) {
	                u.call(r, t);
	              } : function (e) {
	                c.call(t, e);
	              };
	            } else "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && window.navigator.standalone ? o = "undefined" != typeof setImmediate ? function (t) {
	              setImmediate(t);
	            } : "undefined" != typeof setTimeout ? function (t) {
	              setTimeout(t, 0);
	            } : a : (o = function o(t) {
	              var e = document.createElement("div"),
	                  n = new MutationObserver(t);return n.observe(e, { attributes: !0 }), function () {
	                e.classList.toggle("foo");
	              };
	            }, o.isStatic = !0);n.exports = o;
	          }, { "./util": 36 }], 30: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r) {
	              function i(t) {
	                this.constructor$(t);
	              }var o = e.PromiseInspection,
	                  s = t("./util");s.inherits(i, n), i.prototype._promiseResolved = function (t, e) {
	                this._values[t] = e;var n = ++this._totalResolved;return n >= this._length ? (this._resolve(this._values), !0) : !1;
	              }, i.prototype._promiseFulfilled = function (t, e) {
	                var n = new o();return n._bitField = 33554432, n._settledValueField = t, this._promiseResolved(e, n);
	              }, i.prototype._promiseRejected = function (t, e) {
	                var n = new o();return n._bitField = 16777216, n._settledValueField = t, this._promiseResolved(e, n);
	              }, e.settle = function (t) {
	                return r.deprecated(".settle()", ".reflect()"), new i(t).promise();
	              }, e.prototype.settle = function () {
	                return e.settle(this);
	              };
	            };
	          }, { "./util": 36 }], 31: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r) {
	              function i(t) {
	                this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
	              }function o(t, e) {
	                if ((0 | e) !== e || 0 > e) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
	                var n = new i(t),
	                    o = n.promise();return n.setHowMany(e), n.init(), o;
	              }var s = t("./util"),
	                  a = t("./errors").RangeError,
	                  u = t("./errors").AggregateError,
	                  c = s.isArray,
	                  l = {};s.inherits(i, n), i.prototype._init = function () {
	                if (this._initialized) {
	                  if (0 === this._howMany) return void this._resolve([]);this._init$(void 0, -5);var t = c(this._values);!this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
	                }
	              }, i.prototype.init = function () {
	                this._initialized = !0, this._init();
	              }, i.prototype.setUnwrap = function () {
	                this._unwrap = !0;
	              }, i.prototype.howMany = function () {
	                return this._howMany;
	              }, i.prototype.setHowMany = function (t) {
	                this._howMany = t;
	              }, i.prototype._promiseFulfilled = function (t) {
	                return this._addFulfilled(t), this._fulfilled() === this.howMany() ? (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0) : !1;
	              }, i.prototype._promiseRejected = function (t) {
	                return this._addRejected(t), this._checkOutcome();
	              }, i.prototype._promiseCancelled = function () {
	                return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(l), this._checkOutcome());
	              }, i.prototype._checkOutcome = function () {
	                if (this.howMany() > this._canPossiblyFulfill()) {
	                  for (var t = new u(), e = this.length(); e < this._values.length; ++e) {
	                    this._values[e] !== l && t.push(this._values[e]);
	                  }return t.length > 0 ? this._reject(t) : this._cancel(), !0;
	                }return !1;
	              }, i.prototype._fulfilled = function () {
	                return this._totalResolved;
	              }, i.prototype._rejected = function () {
	                return this._values.length - this.length();
	              }, i.prototype._addRejected = function (t) {
	                this._values.push(t);
	              }, i.prototype._addFulfilled = function (t) {
	                this._values[this._totalResolved++] = t;
	              }, i.prototype._canPossiblyFulfill = function () {
	                return this.length() - this._rejected();
	              }, i.prototype._getRangeError = function (t) {
	                var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";return new a(e);
	              }, i.prototype._resolveEmptyArray = function () {
	                this._reject(this._getRangeError(0));
	              }, e.some = function (t, e) {
	                return o(t, e);
	              }, e.prototype.some = function (t) {
	                return o(this, t);
	              }, e._SomePromiseArray = i;
	            };
	          }, { "./errors": 12, "./util": 36 }], 32: [function (t, e, n) {
	            "use strict";
	            e.exports = function (t) {
	              function e(t) {
	                void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0);
	              }e.prototype._settledValue = function () {
	                return this._settledValueField;
	              };var n = e.prototype.value = function () {
	                if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue();
	              },
	                  r = e.prototype.error = e.prototype.reason = function () {
	                if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue();
	              },
	                  i = e.prototype.isFulfilled = function () {
	                return 0 !== (33554432 & this._bitField);
	              },
	                  o = e.prototype.isRejected = function () {
	                return 0 !== (16777216 & this._bitField);
	              },
	                  s = e.prototype.isPending = function () {
	                return 0 === (50397184 & this._bitField);
	              },
	                  a = e.prototype.isResolved = function () {
	                return 0 !== (50331648 & this._bitField);
	              };e.prototype.isCancelled = t.prototype._isCancelled = function () {
	                return 65536 === (65536 & this._bitField);
	              }, t.prototype.isCancelled = function () {
	                return this._target()._isCancelled();
	              }, t.prototype.isPending = function () {
	                return s.call(this._target());
	              }, t.prototype.isRejected = function () {
	                return o.call(this._target());
	              }, t.prototype.isFulfilled = function () {
	                return i.call(this._target());
	              }, t.prototype.isResolved = function () {
	                return a.call(this._target());
	              }, t.prototype.value = function () {
	                return n.call(this._target());
	              }, t.prototype.reason = function () {
	                var t = this._target();return t._unsetRejectionIsUnhandled(), r.call(t);
	              }, t.prototype._value = function () {
	                return this._settledValue();
	              }, t.prototype._reason = function () {
	                return this._unsetRejectionIsUnhandled(), this._settledValue();
	              }, t.PromiseInspection = e;
	            };
	          }, {}], 33: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n) {
	              function r(t, r) {
	                if (l(t)) {
	                  if (t instanceof e) return t;var i = o(t);if (i === c) {
	                    r && r._pushContext();var u = e.reject(i.e);return r && r._popContext(), u;
	                  }if ("function" == typeof i) {
	                    if (s(t)) {
	                      var u = new e(n);return t._then(u._fulfill, u._reject, void 0, u, null), u;
	                    }return a(t, i, r);
	                  }
	                }return t;
	              }function i(t) {
	                return t.then;
	              }function o(t) {
	                try {
	                  return i(t);
	                } catch (t) {
	                  return c.e = t, c;
	                }
	              }function s(t) {
	                return h.call(t, "_promise0");
	              }function a(t, r, i) {
	                function o(t) {
	                  a && (a._resolveCallback(t), a = null);
	                }function s(t) {
	                  a && (a._rejectCallback(t, h), a = null);
	                }var a = new e(n),
	                    l = a;i && i._pushContext(), a._captureStackTrace(), i && i._popContext();var h = !0,
	                    f = u.tryCatch(r).call(t, o, s);return h = !1, a && f === c && (a._rejectCallback(f.e, !0), a = null), l;
	              }var u = t("./util"),
	                  c = u.errorObj,
	                  l = u.isObject,
	                  h = {}.hasOwnProperty;return r;
	            };
	          }, { "./util": 36 }], 34: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n) {
	              function r(t) {
	                var e = this;return e instanceof Number && (e = +e), clearTimeout(e), t;
	              }function i(t) {
	                var e = this;throw e instanceof Number && (e = +e), clearTimeout(e), t;
	              }var o = t("./util"),
	                  s = e.TimeoutError,
	                  a = function a(t, e) {
	                if (t.isPending()) {
	                  var n;n = "string" != typeof e ? e instanceof Error ? e : new s("operation timed out") : new s(e), o.markAsOriginatingFromRejection(n), t._attachExtraTrace(n), t._reject(n);
	                }
	              },
	                  u = function u(t) {
	                return c(+this).thenReturn(t);
	              },
	                  c = e.delay = function (t, r) {
	                var i;return void 0 !== r ? i = e.resolve(r)._then(u, null, null, t, void 0) : (i = new e(n), setTimeout(function () {
	                  i._fulfill();
	                }, +t)), i._setAsyncGuaranteed(), i;
	              };e.prototype.delay = function (t) {
	                return c(t, this);
	              }, e.prototype.timeout = function (t, e) {
	                t = +t;var n = this.then(),
	                    o = setTimeout(function () {
	                  a(n, e);
	                }, t);return n._then(r, i, void 0, o, void 0);
	              };
	            };
	          }, { "./util": 36 }], 35: [function (t, e, n) {
	            "use strict";
	            e.exports = function (e, n, r, i, o, s) {
	              function a(t) {
	                setTimeout(function () {
	                  throw t;
	                }, 0);
	              }function u(t) {
	                var e = r(t);return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e;
	              }function c(t, n) {
	                function i() {
	                  if (s >= c) return l._fulfill();var o = u(t[s++]);if (o instanceof e && o._isDisposable()) {
	                    try {
	                      o = r(o._getDisposer().tryDispose(n), t.promise);
	                    } catch (t) {
	                      return a(t);
	                    }if (o instanceof e) return o._then(i, a, null, null, null);
	                  }i();
	                }var s = 0,
	                    c = t.length,
	                    l = new e(o);return i(), l;
	              }function l(t, e, n) {
	                this._data = t, this._promise = e, this._context = n;
	              }function h(t, e, n) {
	                this.constructor$(t, e, n);
	              }function f(t) {
	                return l.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t;
	              }function p(t) {
	                this.length = t, this.promise = null, this[t - 1] = null;
	              }var _ = t("./util"),
	                  d = t("./errors").TypeError,
	                  v = t("./util").inherits,
	                  y = _.errorObj,
	                  m = _.tryCatch;l.prototype.data = function () {
	                return this._data;
	              }, l.prototype.promise = function () {
	                return this._promise;
	              }, l.prototype.resource = function () {
	                return this.promise().isFulfilled() ? this.promise().value() : null;
	              }, l.prototype.tryDispose = function (t) {
	                var e = this.resource(),
	                    n = this._context;void 0 !== n && n._pushContext();var r = null !== e ? this.doDispose(e, t) : null;return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r;
	              }, l.isDisposer = function (t) {
	                return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose;
	              }, v(h, l), h.prototype.doDispose = function (t, e) {
	                var n = this.data();return n.call(t, t, e);
	              }, p.prototype._resultCancelled = function () {
	                for (var t = this.length, n = 0; t > n; ++n) {
	                  var r = this[n];r instanceof e && r.cancel();
	                }
	              }, e.using = function () {
	                var t = arguments.length;if (2 > t) return n("you must pass at least 2 arguments to Promise.using");var i = arguments[t - 1];if ("function" != typeof i) return n("expecting a function but got " + _.classString(i));var o,
	                    a = !0;2 === t && Array.isArray(arguments[0]) ? (o = arguments[0], t = o.length, a = !1) : (o = arguments, t--);for (var u = new p(t), h = 0; t > h; ++h) {
	                  var d = o[h];if (l.isDisposer(d)) {
	                    var v = d;d = d.promise(), d._setDisposable(v);
	                  } else {
	                    var g = r(d);g instanceof e && (d = g._then(f, null, null, { resources: u, index: h }, void 0));
	                  }u[h] = d;
	                }for (var b = new Array(u.length), h = 0; h < b.length; ++h) {
	                  b[h] = e.resolve(u[h]).reflect();
	                }var w = e.all(b).then(function (t) {
	                  for (var e = 0; e < t.length; ++e) {
	                    var n = t[e];if (n.isRejected()) return y.e = n.error(), y;if (!n.isFulfilled()) return void w.cancel();t[e] = n.value();
	                  }C._pushContext(), i = m(i);var r = a ? i.apply(void 0, t) : i(t),
	                      o = C._popContext();return s.checkForgottenReturns(r, o, "Promise.using", C), r;
	                }),
	                    C = w.lastly(function () {
	                  var t = new e.PromiseInspection(w);return c(u, t);
	                });return u.promise = C, C._setOnCancel(u), C;
	              }, e.prototype._setDisposable = function (t) {
	                this._bitField = 131072 | this._bitField, this._disposer = t;
	              }, e.prototype._isDisposable = function () {
	                return (131072 & this._bitField) > 0;
	              }, e.prototype._getDisposer = function () {
	                return this._disposer;
	              }, e.prototype._unsetDisposable = function () {
	                this._bitField = -131073 & this._bitField, this._disposer = void 0;
	              }, e.prototype.disposer = function (t) {
	                if ("function" == typeof t) return new h(t, this, i());throw new d();
	              };
	            };
	          }, { "./errors": 12, "./util": 36 }], 36: [function (e, n, r) {
	            "use strict";
	            function i() {
	              try {
	                var t = E;return E = null, t.apply(this, arguments);
	              } catch (t) {
	                return x.e = t, x;
	              }
	            }function o(t) {
	              return E = t, i;
	            }function s(t) {
	              return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t;
	            }function a(t) {
	              return "function" == typeof t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
	            }function u(t) {
	              return s(t) ? new Error(y(t)) : t;
	            }function c(t, e) {
	              var n,
	                  r = t.length,
	                  i = new Array(r + 1);for (n = 0; r > n; ++n) {
	                i[n] = t[n];
	              }return i[n] = e, i;
	            }function l(t, e, n) {
	              if (!F.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;var r = Object.getOwnPropertyDescriptor(t, e);return null != r ? null == r.get && null == r.set ? r.value : n : void 0;
	            }function h(t, e, n) {
	              if (s(t)) return t;var r = { value: n, configurable: !0, enumerable: !1, writable: !0 };return F.defineProperty(t, e, r), t;
	            }function f(t) {
	              throw t;
	            }function p(t) {
	              try {
	                if ("function" == typeof t) {
	                  var e = F.names(t.prototype),
	                      n = F.isES5 && e.length > 1,
	                      r = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
	                      i = R.test(t + "") && F.names(t).length > 0;if (n || r || i) return !0;
	                }return !1;
	              } catch (t) {
	                return !1;
	              }
	            }function _(t) {
	              function e() {}e.prototype = t;for (var n = 8; n--;) {
	                new e();
	              }return t;
	            }function d(t) {
	              return A.test(t);
	            }function v(t, e, n) {
	              for (var r = new Array(t), i = 0; t > i; ++i) {
	                r[i] = e + i + n;
	              }return r;
	            }function y(t) {
	              try {
	                return t + "";
	              } catch (t) {
	                return "[no string representation]";
	              }
	            }function m(t) {
	              try {
	                h(t, "isOperational", !0);
	              } catch (t) {}
	            }function g(t) {
	              return null == t ? !1 : t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0;
	            }function b(t) {
	              return t instanceof Error && F.propertyIsWritable(t, "stack");
	            }function w(t) {
	              return {}.toString.call(t);
	            }function C(t, e, n) {
	              for (var r = F.names(t), i = 0; i < r.length; ++i) {
	                var o = r[i];if (n(o)) try {
	                  F.defineProperty(e, o, F.getDescriptor(t, o));
	                } catch (t) {}
	              }
	            }function j(e, n) {
	              return D ? t.env[e] : n;
	            }var F = e("./es5"),
	                k = "undefined" == typeof navigator,
	                x = { e: {} },
	                E,
	                T = function T(t, e) {
	              function n() {
	                this.constructor = t, this.constructor$ = e;for (var n in e.prototype) {
	                  r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n]);
	                }
	              }var r = {}.hasOwnProperty;return n.prototype = e.prototype, t.prototype = new n(), t.prototype;
	            },
	                P = function () {
	              var t = [Array.prototype, Object.prototype, Function.prototype],
	                  e = function e(_e2) {
	                for (var n = 0; n < t.length; ++n) {
	                  if (t[n] === _e2) return !0;
	                }return !1;
	              };if (F.isES5) {
	                var n = Object.getOwnPropertyNames;return function (t) {
	                  for (var r = [], i = Object.create(null); null != t && !e(t);) {
	                    var o;try {
	                      o = n(t);
	                    } catch (t) {
	                      return r;
	                    }for (var s = 0; s < o.length; ++s) {
	                      var a = o[s];if (!i[a]) {
	                        i[a] = !0;var u = Object.getOwnPropertyDescriptor(t, a);null != u && null == u.get && null == u.set && r.push(a);
	                      }
	                    }t = F.getPrototypeOf(t);
	                  }return r;
	                };
	              }var r = {}.hasOwnProperty;return function (n) {
	                if (e(n)) return [];var i = [];t: for (var o in n) {
	                  if (r.call(n, o)) i.push(o);else {
	                    for (var s = 0; s < t.length; ++s) {
	                      if (r.call(t[s], o)) continue t;
	                    }i.push(o);
	                  }
	                }return i;
	              };
	            }(),
	                R = /this\s*\.\s*\S+\s*=/,
	                A = /^[a-z$_][a-z$_0-9]*$/i,
	                O = function () {
	              return "stack" in new Error() ? function (t) {
	                return b(t) ? t : new Error(y(t));
	              } : function (t) {
	                if (b(t)) return t;try {
	                  throw new Error(y(t));
	                } catch (t) {
	                  return t;
	                }
	              };
	            }(),
	                S = function S(t) {
	              return F.isArray(t) ? t : null;
	            };if ("undefined" != typeof Symbol && Symbol.iterator) {
	              var I = "function" == typeof Array.from ? function (t) {
	                return Array.from(t);
	              } : function (t) {
	                for (var e, n = [], r = t[Symbol.iterator](); !(e = r.next()).done;) {
	                  n.push(e.value);
	                }return n;
	              };S = function S(t) {
	                return F.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? I(t) : null;
	              };
	            }var D = "undefined" != typeof t && "[object process]" === w(t).toLowerCase(),
	                V = { isClass: p, isIdentifier: d, inheritedDataKeys: P, getDataPropertyOrDefault: l, thrower: f, isArray: F.isArray, asArray: S, notEnumerableProp: h, isPrimitive: s, isObject: a, canEvaluate: k, errorObj: x, tryCatch: o, inherits: T, withAppended: c, maybeWrapAsError: u, toFastProperties: _, filledRange: v, toString: y, canAttachTrace: b, ensureErrorObject: O, originatesFromRejection: g, markAsOriginatingFromRejection: m, classString: w, copyDescriptors: C, hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes, isNode: D, env: j };V.isRecentNode = V.isNode && function () {
	              var e = t.versions.node.split(".").map(Number);return 0 === e[0] && e[1] > 10 || e[0] > 0;
	            }(), V.isNode && V.toFastProperties(t);try {
	              throw new Error();
	            } catch (t) {
	              V.lastLineError = t;
	            }n.exports = V;
	          }, { "./es5": 13 }] }, {}, [4])(4);
	      }), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);
	    }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
	  }, { _process: 3 }], 3: [function (t, e, n) {
	    function r() {
	      l = !1, a.length ? c = a.concat(c) : h = -1, c.length && i();
	    }function i() {
	      if (!l) {
	        var t = setTimeout(r);l = !0;for (var e = c.length; e;) {
	          for (a = c, c = []; ++h < e;) {
	            a && a[h].run();
	          }h = -1, e = c.length;
	        }a = null, l = !1, clearTimeout(t);
	      }
	    }function o(t, e) {
	      this.fun = t, this.array = e;
	    }function s() {}var a,
	        u = e.exports = {},
	        c = [],
	        l = !1,
	        h = -1;u.nextTick = function (t) {
	      var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
	        e[n - 1] = arguments[n];
	      }c.push(new o(t, e)), 1 !== c.length || l || setTimeout(i, 0);
	    }, o.prototype.run = function () {
	      this.fun.apply(null, this.array);
	    }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, u.removeAllListeners = s, u.emit = s, u.binding = function (t) {
	      throw new Error("process.binding is not supported");
	    }, u.cwd = function () {
	      return "/";
	    }, u.chdir = function (t) {
	      throw new Error("process.chdir is not supported");
	    }, u.umask = function () {
	      return 0;
	    };
	  }, {}], 4: [function (t, e, n) {
	    function r(t, e, n, r) {
	      function o(t) {
	        var e = t.length;if (2 > e || e > 256 || e & e - 1) throw "Invalid code/color length, must be power of 2 and 2 .. 256.";return e;
	      }var s = 0,
	          r = void 0 === r ? {} : r,
	          a = void 0 === r.loop ? null : r.loop,
	          u = void 0 === r.palette ? null : r.palette;if (0 >= e || 0 >= n || e > 65535 || n > 65535) throw "Width/Height invalid.";t[s++] = 71, t[s++] = 73, t[s++] = 70, t[s++] = 56, t[s++] = 57, t[s++] = 97;var c = 0,
	          l = 0;if (null !== u) {
	        for (var h = o(u); h >>= 1;) {
	          ++c;
	        }if (h = 1 << c, --c, void 0 !== r.background) {
	          if (l = r.background, l >= h) throw "Background index out of range.";if (0 === l) throw "Background index explicitly passed as 0.";
	        }
	      }if (t[s++] = 255 & e, t[s++] = e >> 8 & 255, t[s++] = 255 & n, t[s++] = n >> 8 & 255, t[s++] = (null !== u ? 128 : 0) | c, t[s++] = l, t[s++] = 0, null !== u) for (var f = 0, p = u.length; p > f; ++f) {
	        var _ = u[f];t[s++] = _ >> 16 & 255, t[s++] = _ >> 8 & 255, t[s++] = 255 & _;
	      }if (null !== a) {
	        if (0 > a || a > 65535) throw "Loop count invalid.";t[s++] = 33, t[s++] = 255, t[s++] = 11, t[s++] = 78, t[s++] = 69, t[s++] = 84, t[s++] = 83, t[s++] = 67, t[s++] = 65, t[s++] = 80, t[s++] = 69, t[s++] = 50, t[s++] = 46, t[s++] = 48, t[s++] = 3, t[s++] = 1, t[s++] = 255 & a, t[s++] = a >> 8 & 255, t[s++] = 0;
	      }var d = !1;this.addFrame = function (e, n, r, a, c, l) {
	        if (d === !0 && (--s, d = !1), l = void 0 === l ? {} : l, 0 > e || 0 > n || e > 65535 || n > 65535) throw "x/y invalid.";if (0 >= r || 0 >= a || r > 65535 || a > 65535) throw "Width/Height invalid.";if (c.length < r * a) throw "Not enough pixels for the frame size.";var h = !0,
	            f = l.palette;if ((void 0 === f || null === f) && (h = !1, f = u), void 0 === f || null === f) throw "Must supply either a local or global palette.";for (var p = o(f), _ = 0; p >>= 1;) {
	          ++_;
	        }p = 1 << _;var v = void 0 === l.delay ? 0 : l.delay,
	            y = void 0 === l.disposal ? 0 : l.disposal;if (0 > y || y > 3) throw "Disposal out of range.";var m = !1,
	            g = 0;if (void 0 !== l.transparent && null !== l.transparent && (m = !0, g = l.transparent, 0 > g || g >= p)) throw "Transparent color index.";if ((0 !== y || m || 0 !== v) && (t[s++] = 33, t[s++] = 249, t[s++] = 4, t[s++] = y << 2 | (m === !0 ? 1 : 0), t[s++] = 255 & v, t[s++] = v >> 8 & 255, t[s++] = g, t[s++] = 0), t[s++] = 44, t[s++] = 255 & e, t[s++] = e >> 8 & 255, t[s++] = 255 & n, t[s++] = n >> 8 & 255, t[s++] = 255 & r, t[s++] = r >> 8 & 255, t[s++] = 255 & a, t[s++] = a >> 8 & 255, t[s++] = h === !0 ? 128 | _ - 1 : 0, h === !0) for (var b = 0, w = f.length; w > b; ++b) {
	          var C = f[b];t[s++] = C >> 16 & 255, t[s++] = C >> 8 & 255, t[s++] = 255 & C;
	        }s = i(t, s, 2 > _ ? 2 : _, c);
	      }, this.end = function () {
	        return d === !1 && (t[s++] = 59, d = !0), s;
	      };
	    }function i(t, e, n, r) {
	      function i(n) {
	        for (; f >= n;) {
	          t[e++] = 255 & p, p >>= 8, f -= 8, e === s + 256 && (t[s] = 255, s = e++);
	        }
	      }function o(t) {
	        p |= t << f, f += h, i(8);
	      }t[e++] = n;var s = e++,
	          a = 1 << n,
	          u = a - 1,
	          c = a + 1,
	          l = c + 1,
	          h = n + 1,
	          f = 0,
	          p = 0,
	          _ = r[0] & u,
	          d = {};o(a);for (var v = 1, y = r.length; y > v; ++v) {
	        var m = r[v] & u,
	            g = _ << 8 | m,
	            b = d[g];if (void 0 === b) {
	          for (p |= _ << f, f += h; f >= 8;) {
	            t[e++] = 255 & p, p >>= 8, f -= 8, e === s + 256 && (t[s] = 255, s = e++);
	          }4096 === l ? (o(a), l = c + 1, h = n + 1, d = {}) : (l >= 1 << h && ++h, d[g] = l++), _ = m;
	        } else _ = b;
	      }return o(_), o(c), i(1), s + 1 === e ? t[s] = 0 : (t[s] = e - s - 1, t[e++] = 0), e;
	    }function o(t) {
	      var e = 0;if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 !== (t[e++] + 1 & 253) || 97 !== t[e++]) throw "Invalid GIF 87a/89a header.";var n = t[e++] | t[e++] << 8,
	          r = t[e++] | t[e++] << 8,
	          i = t[e++],
	          o = i >> 7,
	          a = 7 & i,
	          u = 1 << a + 1;t[e++];t[e++];var c = null;o && (c = e, e += 3 * u);var l = !0,
	          h = [],
	          f = 0,
	          p = null,
	          _ = 0,
	          d = null;for (this.width = n, this.height = r; l && e < t.length;) {
	        switch (t[e++]) {case 33:
	            switch (t[e++]) {case 255:
	                if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16]) e += 14, d = t[e++] | t[e++] << 8, e++;else for (e += 12;;) {
	                  var v = t[e++];if (0 === v) break;e += v;
	                }break;case 249:
	                if (4 !== t[e++] || 0 !== t[e + 4]) throw "Invalid graphics extension block.";var y = t[e++];f = t[e++] | t[e++] << 8, p = t[e++], 0 === (1 & y) && (p = null), _ = y >> 2 & 7, e++;break;case 254:
	                for (;;) {
	                  var v = t[e++];if (0 === v) break;e += v;
	                }break;default:
	                throw "Unknown graphic control label: 0x" + t[e - 1].toString(16);}break;case 44:
	            var m = t[e++] | t[e++] << 8,
	                g = t[e++] | t[e++] << 8,
	                b = t[e++] | t[e++] << 8,
	                w = t[e++] | t[e++] << 8,
	                C = t[e++],
	                j = C >> 7,
	                F = C >> 6 & 1,
	                k = 7 & C,
	                x = 1 << k + 1,
	                E = c,
	                T = !1;if (j) {
	              var T = !0;E = e, e += 3 * x;
	            }var P = e;for (e++;;) {
	              var v = t[e++];if (0 === v) break;e += v;
	            }h.push({ x: m, y: g, width: b, height: w, has_local_palette: T, palette_offset: E, data_offset: P, data_length: e - P, transparent_index: p, interlaced: !!F, delay: f, disposal: _ });break;case 59:
	            l = !1;break;default:
	            throw "Unknown gif block: 0x" + t[e - 1].toString(16);}
	      }this.numFrames = function () {
	        return h.length;
	      }, this.loopCount = function () {
	        return d;
	      }, this.frameInfo = function (t) {
	        if (0 > t || t >= h.length) throw "Frame index out of range.";return h[t];
	      }, this.decodeAndBlitFrameBGRA = function (e, r) {
	        var i = this.frameInfo(e),
	            o = i.width * i.height,
	            a = new Uint8Array(o);s(t, i.data_offset, a, o);var u = i.palette_offset,
	            c = i.transparent_index;null === c && (c = 256);var l = i.width,
	            h = n - l,
	            f = l,
	            p = 4 * (i.y * n + i.x),
	            _ = 4 * ((i.y + i.height) * n + i.x),
	            d = p,
	            v = 4 * h;i.interlaced === !0 && (v += 4 * n * 7);for (var y = 8, m = 0, g = a.length; g > m; ++m) {
	          var b = a[m];if (0 === f && (d += v, f = l, d >= _ && (v = 4 * h + 4 * n * (y - 1), d = p + (l + h) * (y << 1), y >>= 1)), b === c) d += 4;else {
	            var w = t[u + 3 * b],
	                C = t[u + 3 * b + 1],
	                j = t[u + 3 * b + 2];r[d++] = j, r[d++] = C, r[d++] = w, r[d++] = 255;
	          }--f;
	        }
	      }, this.decodeAndBlitFrameRGBA = function (e, r) {
	        var i = this.frameInfo(e),
	            o = i.width * i.height,
	            a = new Uint8Array(o);s(t, i.data_offset, a, o);var u = i.palette_offset,
	            c = i.transparent_index;null === c && (c = 256);var l = i.width,
	            h = n - l,
	            f = l,
	            p = 4 * (i.y * n + i.x),
	            _ = 4 * ((i.y + i.height) * n + i.x),
	            d = p,
	            v = 4 * h;i.interlaced === !0 && (v += 4 * n * 7);for (var y = 8, m = 0, g = a.length; g > m; ++m) {
	          var b = a[m];if (0 === f && (d += v, f = l, d >= _ && (v = 4 * h + 4 * n * (y - 1), d = p + (l + h) * (y << 1), y >>= 1)), b === c) d += 4;else {
	            var w = t[u + 3 * b],
	                C = t[u + 3 * b + 1],
	                j = t[u + 3 * b + 2];r[d++] = w, r[d++] = C, r[d++] = j, r[d++] = 255;
	          }--f;
	        }
	      };
	    }function s(t, e, n, r) {
	      for (var i = t[e++], o = 1 << i, s = o + 1, a = s + 1, u = i + 1, c = (1 << u) - 1, l = 0, h = 0, f = 0, p = t[e++], _ = new Int32Array(4096), d = null;;) {
	        for (; 16 > l && 0 !== p;) {
	          h |= t[e++] << l, l += 8, 1 === p ? p = t[e++] : --p;
	        }if (u > l) break;var v = h & c;if (h >>= u, l -= u, v !== o) {
	          if (v === s) break;for (var y = a > v ? v : d, m = 0, g = y; g > o;) {
	            g = _[g] >> 8, ++m;
	          }var b = g,
	              w = f + m + (y !== v ? 1 : 0);if (w > r) return void console.log("Warning, gif stream longer than expected.");n[f++] = b, f += m;var C = f;for (y !== v && (n[f++] = b), g = y; m--;) {
	            g = _[g], n[--C] = 255 & g, g >>= 8;
	          }null !== d && 4096 > a && (_[a++] = d << 8 | b, a >= c + 1 && 12 > u && (++u, c = c << 1 | 1)), d = v;
	        } else a = s + 1, u = i + 1, c = (1 << u) - 1, d = null;
	      }return f !== r && console.log("Warning, gif stream shorter than expected."), n;
	    }try {
	      n.GifWriter = r, n.GifReader = o;
	    } catch (t) {}
	  }, {}] }, {}, [1]);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _gifler = __webpack_require__(44);

	var _gifler2 = _interopRequireDefault(_gifler);

	var _imgLoader = __webpack_require__(12);

	var _imgLoader2 = _interopRequireDefault(_imgLoader);

	var _mirror = __webpack_require__(13);

	var _mirror2 = _interopRequireDefault(_mirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cache = {}; /** ********** *
	                 *
	                 * Change gif to an active canvas
	                 * - The canvas is in animating.
	                 * - This will use 84kb, so it only exsits in full version.
	                 *
	                 * ********** **/

	var ProcessingFlag = 'processing';

	var gif2canvas = function gif2canvas(url, callback, width, height) {
	    var _width = width || 500;
	    var _height = height || 500;

	    var flag = JSON.stringify({
	        url: url
	        // width: _width,
	        // height: _height,
	    });

	    if (Cache[flag] && Cache[flag] !== ProcessingFlag) {
	        callback(Cache[flag]);
	        return;
	    }
	    if (Cache[flag] === ProcessingFlag) {
	        // 防止并发初始化gif2canvas
	        setTimeout(function () {
	            gif2canvas(url, callback, _width, _height);
	        }, 100);
	        return;
	    }

	    Cache[flag] = ProcessingFlag;

	    (0, _imgLoader2.default)(url, function (img) {
	        var temp = document.createElement('canvas');
	        temp.width = img.width;
	        temp.height = img.height;

	        // Here can modify the image
	        // window.gifler(img.src).frames(temp, function (ctx, frame) {
	        //     ctx.canvas.width  = img.width;
	        //     ctx.canvas.height = img.height;
	        //     // ctx.globalCompositeOperation = 'source-over';
	        //     // ctx.fillRect(0, 0, 1100, 1100);
	        //     ctx.translate(ctx.canvas.width, 0);
	        //     ctx.scale(-1, 1);
	        //     ctx.drawImage(frame.buffer, frame.x, frame.y, frame.width, frame.height);

	        //     // Composite a color
	        //     // let hue = (frames * 10) % 360;
	        //     // ctx.globalCompositeOperation = 'source-atop';
	        //     // ctx.fillStyle = 'hsla(' + hue + ', 100%, 50%, 0.5)';
	        // }).done(function () {
	        window.gifler(img.src).animate(temp).done(function () {
	            Cache[flag] = temp;
	            callback(temp);
	        });
	    });
	};

	module.exports = gif2canvas;

/***/ })
/******/ ])
});
;