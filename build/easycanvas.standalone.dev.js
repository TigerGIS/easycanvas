!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var a in n)("object"==typeof exports?exports:t)[a]=n[a]}}(this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(16)},function(t,e){"use strict";t.exports={funcOrValue:function(t,e){if("function"==typeof t){var n=t.call(e);return n&&void 0!==n.$$value?n.$$value:n}return t},execFuncs:function(t,e,n){"function"==typeof t?t.apply(e,n):Array.prototype.isPrototypeOf(t)&&t.forEach(function(t){t&&t.apply(e)})},getMinFromArray:function(t){var e=t[0];return t.forEach(function(t){e>t&&(e=t)}),e},getCharFromKey:function(t){return t.key||String.fromCharCode(t.keyCode)},noop:function(){},firstValuable:function(t,e){return void 0===t?e:t},assign:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}}},function(t,e){"use strict";t.exports={xywh:["sx","sy","sw","sh","tx","ty","tw","th"],txywh:["tx","ty","tw","th"],sxywh:["sx","sy","sw","sh"],devFlag:"__EASYCANVAS_DEVTOOL__"}},function(t,e){"use strict";var n=function(t,e,n,a,r){var i=r||1;return i>t-n?t-n>-i?i>e-a?e-a>-i?5:8:2:i>e-a?e-a>-i?4:7:1:i>e-a?e-a>-i?6:9:3},a={1:{x:-1,y:1},2:{x:0,y:1},3:{x:1,y:1},4:{x:-1,y:0},5:{x:0,y:0},6:{x:1,y:0},7:{x:-1,y:-1},8:{x:0,y:-1},9:{x:1,y:-1}};t.exports={num:n,xy:function(){var t=n.apply(this,arguments);return JSON.parse(JSON.stringify(a[t]||{}))},NUM2XAY:function(t){return JSON.parse(JSON.stringify(a[t]))},pointInRect:function(t,e,n,a,r,i){return!(n>t||t>a||r>e||e>i)},getDistanceSq:function(t,e,n,a){return(t-n)*(t-n)+(e-a)*(e-a)},enoughNear:function(t,e,n,a,r){return r*r>=(t-n)*(t-n)+(e-a)*(e-a)}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=(a(r),n(3)),o=(a(i),!1),s=function(t,e){t.drag.draggingFlag=e,o=e},l=function(t,e,n,a){return t?t.call(e,n):!!a&&"drag"};t.exports={bind:function(t){var e={x:0,y:0};t.drag.draggingFlag=!1;var n=t.events.mousedown||t.events.touchstart;t.events.touchstart=t.events.mousedown=function(a){if(t.drag.dragable){s(t,!0);e.x=a.canvasX,e.y=a.canvasY}return l(n,t,a,t.drag.dragable)}.bind(t);var a=t.events.hold||t.events.mousemove;t.events.touchmove=t.events.mousemove=function(n){var r=t.drag.draggingFlag&&t.drag.dragable;return r&&(this.style.tx+=n.canvasX-e.x,this.style.ty+=n.canvasY-e.y,e.x=n.canvasX,e.y=n.canvasY),l(a,t,n,r)}.bind(t);var r=t.events.mouseup||t.events.touchend;t.events.touchend=t.events.mouseup=function(e){var n=t.drag.draggingFlag&&t.drag.dragable;return t.drag.draggingFlag&&t.drag.dragable&&s(t,!1),l(r,t,e,n)};var i=t.events.mouseout;t.events.mouseout=function(e){var n=t.drag.draggingFlag&&t.drag.dragable;return s(t,!1),l(i,t,e,n)};var o=t.events.click;t.events.click=function(e){var n=t.drag.dragable;if(n){return!o||o.call(t,e)}return l(o,t,e,n)}}}},,function(t,e){"use strict";var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};t.exports=n},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=a(r),o=n(2),s=a(o),l=n(11),c=a(l),u=n(10),f=a(u),d=n(12),h=a(d),p=n(9),v=a(p),g=n(4),y=a(g),x=function(t){t.events&&void 0===t.events.eIndex&&console.warn('[Easycanvas] This sprite has no "eIndex", 0 is set by default.');t.$id||(t.$id=Math.random().toString(36).substr(2)),t.content=t.content||{},t.style=t.style||{},t.style.zIndex=t.style.zIndex||0,t.style.mirrX=t.style.mirrX||0,t.style.opacity=void 0===t.style.opacity?1:t.style.opacity,t.style.locate=t.style.locate||"center",t.style.scale=t.style.scale||1;var e=i.default.funcOrValue(t.content.img);if(void 0===e&&(e={width:0,height:0}),s.default.xywh.forEach(function(e){t.style[e]=t.style[e]||0}),t.inherit=t.inherit||["tx","ty","scale"],t.drag=t.drag||{},t.events=t.events||{},t.events.eIndex=t.events.eIndex||0,t.scroll=t.scroll||{},t.scroll.scrollX=t.scroll.scrollX||0,t.scroll.scrollY=t.scroll.scrollY||0,t.hooks=t.hooks||{},!t.name&&t.content.img&&t.content.img.src){var n=t.content.img.src.match(/.*\/([^\/]*)$/);n&&n[1]&&(t.name=n[1])}return t.name=t.name||"Unnamed Easycanvas Object",t.children=t.children||[],t.children.forEach(function(e){e.$canvas=t.$canvas,e.$parent=t,e=new m(e)}),t.$cache={},t.$scroll={speedX:0,speedY:0},t},m=function(t){var e=x(t);for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this[n]=e[n]);return this};m.prototype.add=function(t){return this.children=this.children||[],t.$canvas=this.$canvas,t.$parent=this,t.$id||(t=new m(t)),y.default.bind(t),t.children.forEach(function(e,n){t.children[n]=new m(e),t.children[n].$canvas=t.$canvas,t.children[n].$parent=t}),this.children.push(t),t},m.prototype.remove=function(t){return t?(this.$canvas.remove(t),void i.default.execFuncs(t.hooks.removed,t)):(this.$parent?this.$parent.remove(this):this.$canvas.remove(this),void i.default.execFuncs(this.hooks.removed,this))},m.prototype.on=c.default,m.prototype.off=f.default,m.prototype.trigger=h.default,m.prototype.broadcast=v.default,t.exports=m},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=a(r),o=n(6),s=a(o),l={},c=!1,u=[],f={stop:function(){c=!1},tick:function(){(0,s.default)(f.looper)},looper:function(){u.forEach(function(t,e){if(Math.abs(t.$scroll.speedX)>1?t.$scroll.speedX*=t.scroll.smooth||.8:t.$scroll.speedX=0,Math.abs(t.$scroll.speedY)>1?t.$scroll.speedY*=t.scroll.smooth||.8:t.$scroll.speedY=0,Math.abs(t.$scroll.speedX)<=1&&Math.abs(t.$scroll.speedY)<=1)return void u.splice(e,1);t.scroll.scrollY-=t.$scroll.speedY,t.scroll.scrollX-=t.$scroll.speedX;var n=i.default.funcOrValue(t.scroll.minScrollX,t),a=i.default.funcOrValue(t.scroll.maxScrollX,t),r=i.default.funcOrValue(t.scroll.minScrollY,t),o=i.default.funcOrValue(t.scroll.maxScrollY,t);!isNaN(r)&&r>t.scroll.scrollY?t.scroll.scrollY=r:!isNaN(o)&&t.scroll.scrollY>o&&(t.scroll.scrollY=o),!isNaN(n)&&n>t.scroll.scrollX?t.scroll.scrollX=n:!isNaN(a)&&t.scroll.scrollX>a&&(t.scroll.scrollX=a)}),f.tick()},touch:function(t,e){if(!t.scroll.scrollable)return!1;if(c){u.indexOf(t)===-1&&u.push(t);var n=Math.abs(e.canvasX-l.x),a=Math.abs(e.canvasY-l.y),r=+new Date-c;return c=+new Date,r/=10,n/r>1&&r>1&&(t.$scroll.speedX+=(e.canvasX-l.x)/r),a/r>1&&r>1&&(t.$scroll.speedY+=(e.canvasY-l.y)/r),l.x=e.canvasX,l.y=e.canvasY,e.event.preventDefault(),!0}c=+new Date,l.x=e.canvasX,l.y=e.canvasY},wheel:function(t,e){return!!t.scroll.scrollable&&(u.indexOf(t)===-1&&u.push(t),t.$scroll.speedX=e.event.wheelDeltaX,t.$scroll.speedY=e.event.wheelDeltaY,e.event.preventDefault(),!0)}};t.exports=f},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1);a(r);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();this.hooks[e]&&this.hooks[e].apply(this,t),t.unshift(e),this.children&&this.children.forEach(function(e){e.broadcast.apply(e,t)}),this.paintList&&this.paintList.forEach(function(e){e.broadcast.apply(e,t)})}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1);a(r);t.exports=function(t,e){this.hooks[t]&&(this.hooks[t]!==e&&e?Array.prototype.isPrototypeOf(this.hooks[t])&&(this.hooks[t][this.hooks[t].indexOf(e)]=void 0):delete this.hooks[t])}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1);a(r);t.exports=function(t,e){this.hooks[t]?Array.prototype.isPrototypeOf(this.hooks[t])?this.hooks[t].push(e):this.hooks[t]=[this.hooks[t],e]:this.hooks[t]=e}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1);a(r);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();this.hooks[e]&&this.hooks[e].apply(this,t)}},function(t,e){"use strict";function n(t,e){if(t&&t.match(/^data:/))return void(e&&e(t));if(r[t])return void(r[t]!==a?e(r[t]):setTimeout(function(){n(t,e)},100));r[t]=a;var i=new XMLHttpRequest;i.onload=function(){var n=new FileReader;n.onloadend=function(){r[t]=n.result,e&&e(n.result)},n.readAsDataURL(i.response)},i.open("GET",t),i.responseType="blob",i.send()}var a="processing",r={};t.exports=n},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i=n(2),o=a(i),s={getSprite:function(t){if(!window[o.default.devFlag].isPaintRecording)return[];var e={};if(t){var n=window[o.default.devFlag].$canvas[t].$canvas.paintList,a=window[o.default.devFlag].$canvas[t].$canvas.$paintList,i=function t(n){if(n.name!==o.default.devFlag){if(e[n.$id]={name:n.name,parent:n.$parent&&n.$parent.$id,style:{},children:n.children&&n.children.map(function(t){return t.$id})},n.content.img||n.content.text){e[n.$id].rendered=!1;for(var r=0,i=a.length;i>r;r++)if(a[r].$id===n.$id){e[n.$id].rendered=!0;break}}for(var s in n.style)"function"==typeof n.style[s]?(e[n.$id].style[s]=n.$cache[s],"function"==typeof n.$cache[s]&&(e[n.$id].style[s]="function")):e[n.$id].style[s]=n.style[s];n.physics&&(e[n.$id].physics=n.physics),n.children&&n.children.forEach(t)}};n.forEach(i)}else for(var s in window[o.default.devFlag].$canvas)e=r(e,window[o.default.devFlag].$plugin.getSprite(s));return e},selectSpriteById:function(t,e){if(!e){for(var n in window[o.default.devFlag].$canvas){var a=s.selectSpriteById(t,n);if(a)return{$sprite:a.$sprite||a,$canvas:window[o.default.devFlag].$canvas[n].$canvas}}return!1}var r=window[o.default.devFlag].$canvas[e].$canvas.paintList,i=function n(a){for(var r=0;a.length>r;r++){if(a[r].$id===t)return a[r];var i=n(a[r].children);if(i)return{$sprite:i.$sprite||i,$canvas:window[o.default.devFlag].$canvas[e].$canvas}}return!1},l=i(r);if(l)return{$sprite:l.$sprite||l,$canvas:window[o.default.devFlag].$canvas[e].$canvas}},updateSprite:function(t,e,n){var a=s.selectSpriteById(t,n).$sprite;a||console.warn("Sprite "+spriteId+" Not Found."),r(a.style,e)},highlightSprite:function(t,e,n){window[o.default.devFlag].selectMode=!!e;var a=s.selectSpriteById(t,n),r=a.$sprite,i=a.$canvas;e&&i&&r?i.$plugin.hook.selectSprite(!1,i,r):i&&i.$plugin.hook.cancelSelectSprite(i)},sendGlobalHook:function(t,e){var n=s.selectSpriteById(t,e),a=n.$sprite,r=n.$canvas;window.$ec===r.$id&&window.$es===a.$id||(console.warn("window.$ec = [Easycanvas "+r.$id+"], window.$es = [Easycanvas "+a.$id+"]"),window.$ec=r,window.$es=a)},pause:function(t,e){var n=window[o.default.devFlag].$canvas[t].$canvas;n.$pausing=void 0!==e?e:!n.$pausing}};window[o.default.devFlag]=window[o.default.devFlag]||{isPaintRecording:!1,selectMode:!1,peformance:{area:0,times:0},$plugin:s,$canvas:{},current:{}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(7),i=a(r);t.exports={sprite:i.default}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(40),i=a(r),o=n(6),s=a(o),l=n(47),c=a(l),u=n(1),f=a(u),d=n(49),h=a(d),p=n(46),v=a(p),g=n(3),y=a(g),x=n(48),m=a(x),w=n(15),$=a(w),_=n(14),b=(a(_),{painter:i.default,imgLoader:v.default,multlineText:m.default,posCompare:y.default,transition:h.default,tick:s.default,utils:f.default,mirror:c.default,class:$.default,$version:"0.2.0"});window.Easycanvas&&console.warn('[Easycanvas] You are importing multiple versions of "Easycanvas".'),console.warn("[Easycanvas] You are using the develop version."),window.Easycanvas=b,t.exports=b},,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(25),i=a(r),o=n(23),s=a(o),l=n(22),c=a(l),u=n(4),f=a(u),d=n(26),h=a(d),p=n(39),v=a(p),g=n(1),y=(a(g),{$paint:s.default,$eventHandler:c.default,$perPaint:i.default,$bindDrag:f.default,$rAFer:h.default});y.$plugin=(0,v.default)(),t.exports=y},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=a(r),o=n(2),s=a(o),l=n(3),c=a(l),u=n(8),f=a(u),d=function(t){return t.sort(function(t,e){return window[s.default.devFlag]&&window[s.default.devFlag].selectMode?i.default.funcOrValue(t.style.zIndex,t)<i.default.funcOrValue(e.style.zIndex,e)?1:-1:i.default.funcOrValue(t.events.eIndex,t)<i.default.funcOrValue(e.events.eIndex,e)?1:-1})},h=function t(e){return!(e.$parent&&!t(e.$parent))&&i.default.funcOrValue(e.style.visible,e)!==!1},p=function(t,e){if(h(t)===!1)return!1;if(t.$cache){var n=t.$cache.tx,a=t.$cache.ty,r=t.$cache.tw,i=t.$cache.th;return void 0!==n&&c.default.pointInRect(e.canvasX,e.canvasY,n,n+r,a,a+i)}},v=function t(e,n,a){if(e&&e.length)for(var r=0;e.length>r;r++){var o=e[r];o.children.length&&t(d(o.children.filter(function(t){return window[s.default.devFlag]&&window[s.default.devFlag].selectMode?i.default.funcOrValue(t.style.zIndex,t)>=0:i.default.funcOrValue(t.events.eIndex,t)>=0})),n,a),p(o,n)&&a.push(o),o.children.length&&t(d(o.children.filter(function(t){return window[s.default.devFlag]&&window[s.default.devFlag].selectMode?i.default.funcOrValue(t.style.zIndex,t)<0:i.default.funcOrValue(t.events.eIndex,t)<0})),n,a)}};t.exports=function(t){var e=this;!t.layerX&&t.touches&&t.touches[0]&&(t.layerX=t.targetTouches[0].pageX-t.currentTarget.offsetLeft,t.layerY=t.targetTouches[0].pageY-t.currentTarget.offsetTop),!t.layerX&&t.changedTouches&&t.changedTouches[0]&&(t.layerX=t.changedTouches[0].pageX-t.currentTarget.offsetLeft,t.layerY=t.changedTouches[0].pageY-t.currentTarget.offsetTop);var n=parseInt(this.$dom.style.width)/this.contextWidth,a=parseInt(this.$dom.style.height)/this.contextHeight;n=n||1,a=a||1;var r={type:t.type,canvasX:t.layerX/n,canvasY:t.layerY/a,event:t};e.events.interceptor&&(r=e.events.interceptor(r));var i=[];if(v(d(e.paintList),r,i),window[s.default.devFlag]&&window[s.default.devFlag].selectMode&&i.length){var o=i[0];if(o.name===s.default.devFlag&&(o=i[1]),o&&e.$plugin.hook.selectSprite("click"===t.type,e,o))return}e.eHoldingFlag||"mousedown"!==r.type&&"touchstart"!==r.type?!e.eHoldingFlag||"mouseup"!==r.type&&"touchend"!==r.type?!e.eHoldingFlag||"mousemove"!==r.type&&"touchmove"!==r.type||(e.eHoldingFlag=t):(e.eHoldingFlag=!1,f.default.stop()):e.eHoldingFlag=t;for(var l=0;i.length>l;l++){if(("mousemove"===r.type||"touchmove"===r.type)&&e.eLastMouseHover&&e.eLastMouseHover!==i[l]&&i.indexOf(e.eLastMouseHover)===-1){var c=e.eLastMouseHover.events.mouseout||e.eLastMouseHover.events.touchout;c&&c.call(e.eLastMouseHover,r)}if("mousewheel"===r.type)f.default.wheel(i[l],r);else if(e.eHoldingFlag&&"touchmove"===r.type&&f.default.touch(i[l],r))return;if(i[l].events){var u=i[l].events[r.type];if(u){e.eLastMouseHover=i[l];var h=u.call(i[l],r);if(h===!0)return e.eHoldingFlag=!1,h;if("drag"===h)return e.eHoldingFlag=!1,h}if(i[l].events.through===!1)return}}if(!i.length&&e.eLastMouseHover){var p=e.eLastMouseHover.events.mouseout;p&&p.call(e.eLastMouseHover,r),e.eLastMouseHover=null}var g=e.events[r.type];if(g&&g(r))return e.eHoldingFlag=!1,!0}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=(a(r),n(3)),o=a(i),s=function(t,e,n,a,r,i,o,s,l,c,u,f,d){var h=t.$gl;h.bindTexture(h.TEXTURE_2D,e);var p=h.matrix;p=m4.translate(p,l,c,0),d.rotate&&(p=m4.translate(p,-l+d.translateBeforeRotate[0]||0,-c+d.translateBeforeRotate[1]||0,0),p=m4.zRotate(p,d.rotate),p=m4.translate(p,l+d.translateAfterRotate[0]||0,c+d.translateAfterRotate[1]||0,0)),p=m4.scale(p,u,f,1),h.uniformMatrix4fv(h.matrixLocation,!1,p);var v=m4.translation(r/n,i/a,0);v=m4.scale(v,o/n,s/a,1),h.uniformMatrix4fv(h.textureMatrixLocation,!1,v),h.drawElements(h.TRIANGLES,6,h.UNSIGNED_SHORT,0)},l=function(t,e){var n=this,a=t.props,r=t.settings,i=!1;if("img"===t.type&&(200>n.$paintList.length||a[7]*a[8]>4e4))for(var l=e+1,c=n.$paintList.length;c>l;l++){var u=n.$paintList[l];if("img"===u.type&&"*"===u.imgType&&1===u.settings.globalAlpha&&!u.settings.rotate){var f=u.props;if(o.default.pointInRect(a[5],a[6],f[5],f[5]+f[7],f[6],f[6]+f[8])&&o.default.pointInRect(a[5]+a[7],a[6]+a[8],f[5],f[5]+f[7],f[6],f[6]+f[8]))return void(i=!0)}}if(n.$isWebgl)return void(a[0]&&a[0].texture&&s(n,a[0].texture,a[0].width,a[0].height,a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],r));var d=!1,h=n.$paintContext;1===r.globalAlpha||isNaN(r.globalAlpha)||(d||(h.save(),d=!0),h.globalAlpha=r.globalAlpha),r.translate&&(d||(h.save(),d=!0),h.translate(r.translate[0]||0,r.translate[1]||0)),r.rotate&&(d||(h.save(),d=!0),h.translate(r.translateBeforeRotate[0]||0,r.translateBeforeRotate[1]||0),h.rotate(r.rotate||0),h.translate(r.translateAfterRotate[0]||0,r.translateAfterRotate[1]||0)),r.scale&&(d||(h.save(),d=!0),h.scale(r.scale[0]||1,r.scale[1]||1)),r.transform&&(d||(h.save(),d=!0),h.transform(1,r.transform.fh,r.transform.fv,1,r.transform.fx,r.transform.fy)),"img"===t.type?(h.drawImage(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]),n.$plugin.hook.drawImage(n,{img:a[0],tx:a[1],ty:a[2],tw:a[3],th:a[4]})):"text"===t.type&&a.content&&(h.font=a.font,h.strokeStyle=a.color,h.fillStyle=a.color,h.textAlign=a.align,h[a.type||"fillText"](a.content,a.tx,a.ty)),d&&h.restore()};t.exports=function(){var t=this;t.$paintList.forEach(l.bind(t))}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=a(r),o=n(2),s=(a(o),window.getFinalStyle=function(t,e,n){var a=i.default.funcOrValue(t.style[n],t);return t.$parent&&t.inherit.indexOf(n)>=0?("tx"===n?a-=t.$parent.scroll.scrollX:"ty"===n&&(a-=t.$parent.scroll.scrollY),"opacity"===n||"scale"===n?i.default.firstValuable(s(t.$parent,e,n),1)*(a||1):i.default.firstValuable(s(t.$parent,e,n),0)+(a||0)):a});t.exports=function(t,e){var n={};for(var a in t.content)n[a]=i.default.funcOrValue(t.content[a],t);"string"==typeof n.img&&(n.img=t.content.img=e.imgLoader(n.img));for(var r in t.style)n[r]=s(t,e,r);if(t.inherit.forEach(function(a){n[a]=s(t,e,a)}),n.sequence){var o=n.img,l=n.sequence;n.sequence.index=n.sequence.index||0;var c=n.sequence.index||0;0>c&&(c=0);var u=void 0,f=void 0;if(l.w||l.h){u=0>l.w?o.width/(0-l.w):l.w>0?l.w:o.width,f=0>l.h?o.height/(0-l.h):l.h>0?l.h:o.height;var d=Math.floor(o.width/u),h=Math.floor(o.height/f);l.h&&(n.sx=c%d*u,n.sy=Math.floor(c/d)%h*f)}!l.loop&&c>0&&0===n.sx&&0===n.sy&&(n.img=void 0,t.remove()),n.sequence.lastTickTime=n.sequence.lastTickTime||0,e.$nextTickTime-n.sequence.lastTickTime<i.default.funcOrValue(n.sequence.interval,t)||(l.lastTickTime=e.$nextTickTime,n.sequence.index++,n.sequence.lastTickTime=e.$nextTickTime),n.sw=n.sw||u,n.sh=n.sh||f,n.tw=n.tw||u,n.th=n.th||f}return n}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=a(r),o=n(13),s=(a(o),n(2)),l=a(s),c=n(24),u=a(c);t.exports=function(t,e){if(i.default.funcOrValue(t.style.visible,t)===!1)return i.default.execFuncs(t.hooks.beforeTick,t),void i.default.execFuncs(t.hooks.ticked,t);i.default.execFuncs(t.hooks.beforeTick,t);var n=this,a={},r=(0,u.default)(t,n),o=r.text,s=r.img,c=i.default.funcOrValue(t.children,t),f=s?s.$width||s.width||0:0,d=s?s.$height||s.height||0:0;if(s&&!s.$width&&(s.$width=f,s.$height=d),r.tw=r.tw||r.sw||f,r.th=r.th||r.sh||d,r.sw=r.sw||f,r.sh=r.sh||d,"center"===r.locate?(r.tx=r.tx-.5*r.tw,r.ty=r.ty-.5*r.th):"rd"===r.locate&&(r.tx=r.tx-1*r.tw,r.ty=r.ty-1*r.th),(r.fh||r.fv)&&(r.fh=r.fh||0,r.fv=r.fv||0,r.fx=r.fx||0,r.fy=r.fy||0,a.transform={fh:r.fh,fv:r.fv,fx:(r.ty+r.th/2)*r.fv*-1+r.fx,fy:(r.tx+r.tw/2)*r.fh*-1+r.fy}),r.rotate){var h=void 0!==r.rx?r.rx:r.tx+.5*r.tw,p=void 0!==r.ry?r.ry:r.ty+.5*r.th;a.translateBeforeRotate=[h,p],a.rotate=-r.rotate*Math.PI/180,a.rotate=+a.rotate.toFixed(4),a.translateAfterRotate=[-h,-p]}if(1!==r.scale&&(r.tx-=(r.scale-1)*r.tw*.5,r.ty-=(r.scale-1)*r.th*.5,r.tw*=r.scale,r.th*=r.scale),r.mirrX?(a.translate=[n.contextWidth,0],a.scale=[-1,1],r.tx=n.contextWidth-r.tx-r.tw,r.mirrY&&(a.translate=[n.contextWidth,n.contextHeight],a.scale=[-1,-1],r.ty=n.contextHeight-r.ty-r.th)):r.mirrY&&(a.translate=[0,n.contextHeight],a.scale=[1,-1],r.ty=n.contextHeight-r.ty-r.th),!r.rotate&&!o&&f&&!r.fh&&!r.fv){if(0>r.sx&&r.sw){var v=-r.sx/r.sw;r.tx+=r.tw*v,r.sx=0}if(0>r.sy&&r.sh){var g=-r.sy/r.sh;r.ty+=r.th*g,r.sy=0}if(f&&r.sx+r.sw>f){var y=(r.sx+r.sw-f)/r.sw;r.sw-=r.sw*y,r.tw-=r.tw*y}if(d&&r.sy+r.sh>d){var x=(r.sy+r.sh-d)/r.sh;r.sh-=r.sh*x,r.th-=r.th*x}if(0>r.tx&&r.tw){var m=-r.tx/r.tw;r.sx+=r.sw*m,r.sw-=r.sw*m,r.tw=r.tw+r.tx,r.tx=0}if(0>r.ty&&r.th){var w=-r.ty/r.th;r.sy+=r.sh*w,r.sh-=r.sh*w,r.th=r.th+r.ty,r.ty=0}if(r.tx+r.tw>n.contextWidth&&r.tw){var $=(r.tx+r.tw-n.contextWidth)/r.tw;r.tw-=r.tw*$,r.sw-=r.sw*$}if(r.ty+r.th>n.contextHeight&&r.th){var _=(r.ty+r.th-n.contextHeight)/r.th;r.th-=r.th*_,r.sh-=r.sh*_}}l.default.xywh.forEach(void 0!==t.$cache.tx?function(t){r[t]=r[t]<<1>>1}:function(t){r[t]=r[t]<<1>>1});for(var b in r)t.$cache[b]=r[b];if(delete t.$cache.textBottom,s&&void 0===t.$cache.imgType&&(t.$cache.imgType=s.src?"png"===s.src.substr(-3)?"png":"*":"canvas"),c&&c.filter(function(t){return i.default.funcOrValue(t.style.zIndex,t)<0}).sort(function(t,e){var n=i.default.funcOrValue(t.style.zIndex,t),a=i.default.funcOrValue(e.style.zIndex,e);return n===a?0:n>a?1:-1}).forEach(function(t,e){n.$perPaint.call(n,t,e)}),a.globalAlpha=void 0!==r.opacity?r.opacity:1,s&&f&&0!==r.opacity&&r.sw&&r.sh&&n.contextWidth>r.tx&&n.contextHeight>r.ty&&n.$paintList.push({$id:t.$id,type:"img",settings:a,imgType:t.$cache.imgType,props:[s,r.sx,r.sy,r.sw,r.sh,r.tx,r.ty,r.tw,r.th]}),o){var T=r.tx,A=r.ty,F=t.style.align,E=i.default.funcOrValue(t.style.font,t)||"14px Arial",k=parseInt(E),M=t.style.lineHeight||k;if("center"===F?T+=r.tw/2:"right"===F&&(T+=r.tw),"top"===t.style.textVerticalAlign?A+=k+(M-k)/2:"bottom"===t.style.textVerticalAlign?A+=r.th-(M-k)/2:"middle"===t.style.textVerticalAlign&&(A+=r.th/2+k/2),"string"==typeof o||"number"==typeof o)n.$paintList.push({$id:t.$id,type:"text",settings:a,props:{tx:T,ty:A,content:o,align:F||"left",font:E,color:t.style.color||"white",type:t.style.textType||"fillText"}});else if(o.length)o.forEach(function(e){n.$paintList.push({$id:t.$id,type:"text",settings:a,props:{tx:T+i.default.funcOrValue(e.tx,t),ty:A+i.default.funcOrValue(e.ty,t),content:i.default.funcOrValue(e.content,t),align:F||"left",font:E,color:t.style.color||"white",type:t.style.textType||"fillText"}})});else if("multline-text"===o.type){var O=o.text.split(/\t|\n/),L=function(t){var e=/[^\u4e00-\u9fa5]/;return!e.test(t)},R=[];O.forEach(function(t,e){t=String.prototype.trim.apply(t),o.config.start&&(t=t.replace(o.config.start,""));for(var n=0,a=r.tw;t.length&&t.length>n;)a>0||(a=r.tw,R.push(t.substr(0,n)),t=t.substr(n),n=0),n++,a-=k*(L(t[n])?1.05:.6);(t||e)&&R.push(t)}),R.forEach(function(e){n.$paintList.push({$id:t.$id,type:"text",settings:a,props:{tx:T,ty:A,content:e,align:F||"left",font:E,color:t.style.color||"white",type:t.style.textType||"fillText"}}),A+=M||k}),t.$cache.textBottom=A}}c&&c.filter(function(t){return!(i.default.funcOrValue(t.style.zIndex,t)<0)}).sort(function(t,e){var n=i.default.funcOrValue(t.style.zIndex,t),a=i.default.funcOrValue(e.style.zIndex,e);return n===a?0:n>a?1:-1}).forEach(function(t,e){n.$perPaint.call(n,t,e)}),i.default.execFuncs(t.hooks.ticked,t)}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(6),i=a(r);t.exports=function(t){var e=(new Date).getTime();this.$nextTickTime=e,1e3>e-this.fpsCalculateTime||(this.fpsCalculateTime=e,this.fpsHandler&&this.fpsHandler.call(this,this.fps),this.lastFps=this.fps,this.fps=0),(0,i.default)(function(n){if(this.$rafTime=n,this.$rAFer(t),this.maxFps>0&&60>this.maxFps){if(1e3/this.maxFps>=e-this.$lastPaintTime)return;this.$lastPaintTime=e-(e-this.$lastPaintTime)%(1e3/this.maxFps)}t()}.bind(this))}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(28),i=a(r),o=n(35),s=a(o),l=n(38),c=a(l),u=n(31),f=a(u),d=n(29),h=a(d),p=n(32),v=a(p),g=n(11),y=a(g),x=n(10),m=a(x),w=n(12),$=a(w),_=n(9),b=a(_),T=n(30),A=a(T),F=n(33),E=a(F),k=n(36),M=a(k),O=n(37),L=a(O),R={start:c.default,paint:f.default,add:i.default,remove:s.default,register:E.default,clear:h.default,setFpsHandler:M.default,setMaxFps:L.default,pause:v.default,on:y.default,off:m.default,trigger:$.default,broadcast:b.default,nextTick:A.default};t.exports=R},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=(a(r),n(7)),o=a(i),s=n(4),l=a(s),c=function(t){if(t){var e=this,n=t;return n.$canvas=e,n.$id||(n=new o.default(n)),l.default.bind(n),n.children.forEach(function(t,a){n.children[a]=new o.default(t),n.children[a].$canvas=e,n.children[a].$parent=n}),e.paintList.push(n),e.$plugin.hook.updateTree(e),n}};t.exports=c},function(t,e){"use strict";t.exports=function(){this.paintList=[]}},function(t,e){"use strict";t.exports=function(t){var e=function e(){t.apply(this,arguments),this.off("nextTick",e)};this.on("nextTick",e.bind(this))}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(1),i=a(r);t.exports=function(){if(!this.$pausing&&!document.hidden){var t=this;if(i.default.execFuncs(t.hooks.ticked,t,[t.$rafTime]),this.$isWebgl){var e=this.$gl;webglUtils.resizeCanvasToDisplaySize(e.canvas),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT)}else t.$paintContext.clearRect(0,0,this.contextWidth,this.contextHeight);t.$freezing||(t.$paintList=[],this.paintList.sort(function(t,e){var n=i.default.funcOrValue(t.style.zIndex,t),a=i.default.funcOrValue(e.style.zIndex,e);return n===a?0:n>a?1:-1}).forEach(function(e,n){t.$perPaint(e,n)})),t.$paint(),this.fps++,t.hooks.nextTick&&(i.default.execFuncs(t.hooks.nextTick,t,[t.$rafTime]),delete t.hooks.nextTick)}}},function(t,e){"use strict";t.exports=function(t){this.$pausing=void 0===t||t}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(34),i=a(r),o=n(8),s=a(o),l=n(13),c=a(l);t.exports=function(t,e){var n=this;for(var a in i.default)this[a]=JSON.parse(JSON.stringify(i.default[a]));this.fpsHandler=function(t){this.maxFps>0&&.5*this.maxFps>t&&console.warn("Low FPS detected("+t+"), max FPS in settings is "+this.maxFps+".")};var r=e||{};if(this.$dom=t,r.fullScreen&&(t.width=t.style.width=document.body.clientWidth||document.documentElement.clientWidth,t.height=t.style.height=document.body.clientHeight||document.documentElement.clientHeight),(r.width&&t.width&&r.width!==t.width||r.height&&t.height&&r.height!==t.height)&&console.warn('[Easycanvas] Canvas size mismatched in "register" function.'),this.width=this.contextWidth=r.width||t.width,this.height=this.contextHeight=r.height||t.height,this.imageLoader=Easycanvas.imageLoader,r.webgl)if(this.$paintContext=t.getContext("webgl",{alpha:!0})){this.$isWebgl=!0;var o=this.$gl=this.$paintContext;o.matrix=m4.orthographic(0,o.canvas.width,o.canvas.height,0,-1,1),o.clearColor(0,0,0,0),o.enable(o.BLEND),o.blendFunc(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA),o.program=webglUtils.createProgramFromScripts(o,["drawImage-vertex-shader","drawImage-fragment-shader"]),o.useProgram(o.program),o.positionLocation=o.getAttribLocation(o.program,"a_position"),o.texcoordLocation=o.getAttribLocation(o.program,"a_texcoord"),o.matrixLocation=o.getUniformLocation(o.program,"u_matrix"),o.textureMatrixLocation=o.getUniformLocation(o.program,"u_textureMatrix"),o.textureLocation=o.getUniformLocation(o.program,"u_texture"),o.positionBuffer=o.positionBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,o.positionBuffer),o.enableVertexAttribArray(o.positionLocation),o.vertexAttribPointer(o.positionLocation,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(o.texcoordLocation),o.vertexAttribPointer(o.texcoordLocation,2,o.FLOAT,!1,0,0);var l=[0,0,1,0,0,1,1,1];o.bufferData(o.ARRAY_BUFFER,new Float32Array(l),o.STATIC_DRAW);var u=o.createBuffer();o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,u),o.texcoordBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,o.texcoordBuffer);var f=[0,0,1,0,0,1,1,1];o.bufferData(o.ARRAY_BUFFER,new Float32Array(f),o.STATIC_DRAW);var d=[0,1,2,2,1,3];o.bufferData(o.ELEMENT_ARRAY_BUFFER,new Uint16Array(d),o.STATIC_DRAW),this.imgLoader=function(t,e){var n=o.createTexture();o.bindTexture(o.TEXTURE_2D,n),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR);var a={width:0,height:0,texture:n};return(0,c.default)(t,function(t){function n(t){var n=new Image;n.addEventListener("load",function(){a.width=n.width,a.height=n.height,o.bindTexture(o.TEXTURE_2D,a.texture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,n),e&&e(a)}),n.src=t}n(t,e)}),a}}else console.warn("[Easycanvas] Webgl is not supported in current browser, using canvas2d instead.");this.$paintContext=this.$paintContext||t.getContext("2d"),this.imgLoader=this.imgLoader||Easycanvas.imgLoader,this.$plugin.hook.register(this),this.events=r.events||{},this.hooks=r.hooks||{};var h=["contextmenu","mousewheel","click","dblclick","mousedown","mouseup","mousemove","touchstart","touchend","touchmove"];h.forEach(function(e){t.addEventListener(e,n.$eventHandler.bind(n))}),s.default.tick(),setInterval(function(){if(n.eHoldingFlag){var t=n.eHoldingFlag;n.$eventHandler.call(n,{layerX:t.layerX,layerY:t.layerY,screenX:t.screenX||t.layerX,screenY:t.screenY||t.layerY,type:"hold"})}},40)}},function(t,e){"use strict";var n={$dom:null,$paintContext:null,$nextTickTime:0,$lastPaintTime:0,$pausing:!1,$freezing:!1,fps:0,lastFps:0,fpsCalculateTime:0,fpsHandler:null,contextWidth:0,contextHeight:0,events:{click:null},paintList:[],eHoldingFlag:!1,eLastMouseHover:null,maxFps:-1,scroll:{scrollable:!1,scrollY:0,minScrollY:void 0,maxScrollY:void 0},$flags:{dragging:!1}};t.exports=n},function(t,e,n){"use strict";t.exports=function(t,e){t.style.visible=!1,t.removing=!0,setTimeout(function(){t.$parent?t.$parent.children=t.$parent.children.filter(function(t){return t.removing!==!0}):this.paintList=this.paintList.filter(function(t){return t.removing!==!0})}.bind(this)),e&&this.paintList.splice(this.paintList.indexOf(t),1);var n=this;n.$plugin.hook.updateTree(n)}},function(t,e){"use strict";t.exports=function(t){this.fpsHandler=t}},function(t,e){"use strict";t.exports=function(t){this.maxFps=t||-1}},function(t,e){"use strict";t.exports=function(){this.fpsCalculateTime=(new Date).getTime(),this.$rAFer(this.paint.bind(this))}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var _utils=__webpack_require__(1),_utils2=_interopRequireDefault(_utils),_constants=__webpack_require__(2),_constants2=_interopRequireDefault(_constants);module.exports=function(){var TO_PANEL_EVENT_NAME="__EASYCANVAS_BRIDGE_TOPANEL__";window.document.addEventListener("__EASYCANVAS_BRIDGE_TODOC__",function(recieveData){var data=recieveData.detail;(data.action="code")&&(console.log(data.content),eval(data.content))});var $emit=function(t){t.tabId=window[_constants2.default.devFlag].tabId,window.document.dispatchEvent(new CustomEvent(TO_PANEL_EVENT_NAME,{detail:JSON.parse(JSON.stringify(t))}))};setTimeout(function(){$emit({name:"init"})});var $selectMask=null,maskCanvas=document.createElement("img");return maskCanvas.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2OYePb/fwAHrQNdl+exzgAAAABJRU5ErkJggg==",{hook:{drawImage:function(t,e){window[_constants2.default.devFlag].isPaintRecording&&(window[_constants2.default.devFlag].peformance.area+=e.tw*e.th,window[_constants2.default.devFlag].peformance.times++)},updateTree:function(t){window[_constants2.default.devFlag].isPaintRecording&&$emit({name:"updateTree",id:t.$id})},register:function(t){t.$id=Math.random().toString(36).substr(2),t.$flags.devtoolHanged||window[_constants2.default.devFlag].$canvas[t.$id]||(window[_constants2.default.devFlag].$canvas[t.$id]={
$canvas:t},t.$flags.devtoolHanged=!0)},selectSprite:function(t,e,n){return!(!n||!window[_constants2.default.devFlag].selectMode)&&($selectMask||($selectMask=e.add({name:_constants2.default.devFlag,content:{img:maskCanvas},style:{}})),["tx","ty","tw","th","rotate","rx","ry"].forEach(function(t){!function(t){_constants2.default.sxywh.indexOf(t)<0&&($selectMask.style[t]=function(){return n.$cache[t]||0})}(t)}),$selectMask.style.scale=1,$selectMask.style.locate="lt",$selectMask.style.zIndex=Number.MAX_SAFE_INTEGER,$selectMask.style.visible=function(){return window[_constants2.default.devFlag].selectMode},$selectMask.style.opacity=.8,t&&(e.remove($selectMask),$selectMask=null,$emit({name:"selectSprite",id:e.$id,value:{sprite:n.$id,canvas:e.$id}}),window[_constants2.default.devFlag].current={$sprite:n,$canvas:e},window[_constants2.default.devFlag].selectMode=!1),!0)},cancelSelectSprite:function(t){t.remove($selectMask),$selectMask=null}}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(27),i=a(r),o=n(21),s=a(o),l=function(){};for(var c in s.default)Object.prototype.hasOwnProperty.call(s.default,c)&&(l.prototype[c]=s.default[c]);for(var u in i.default)Object.prototype.hasOwnProperty.call(i.default,u)&&(l.prototype[u]=i.default[u]);t.exports=l},,,,,,function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a={},r=[],i=0,o=function t(e,o,s){var l=s||{};if("object"===(void 0===e?"undefined":n(e))){var c=e;return l.callbackArgs=l.callbackArgs||[],void t(c.shift(),function(e){l.callbackArgs.push(e),c.length>1?t(c,o,l):t(c[0],function(t){l.callbackArgs.push(t),o(l.callbackArgs)},l)},s)}var u=e;if(l.alphaColor&&(u+=l.alphaColor),a[u])return setTimeout(function(){o&&o(a[u])}),a[u];var f=new Image;l.block?(f.src=e,i++):0===i?f.src=e:r.push({imgObj:f,src:e}),a[u]=f;var d=void 0;return(l.canvas||l.alphaColor||t.cacheCanvas)&&(d=document.createElement("canvas"),d.width=d.height||0,a[u]=d),f.onload=function(){if(l.block&&(i--,0===i&&(r.forEach(function(t){t.imgObj.src=t.src}),r.splice(0))),l.canvas||l.alphaColor||t.cacheCanvas){var e=d.getContext("2d");if(d.$width=d.width=f.width,d.$height=d.height=f.height,e.drawImage(f,0,0),l.alphaColor){for(var n=e.getImageData(0,0,f.width,f.height),a=0;n.data.length>a;a+=4){var s=n.data[a]+n.data[a+1]+n.data[a+2],c=1;c>n.data[a]&&c>n.data[a+1]&&c>n.data[a+2]&&(n.data[a+3]=Math.floor(s/255))}e.putImageData(n,0,0)}f=d}o&&o(f)},f.onerror=function(){a[u]=f},d||f};o.cacheCanvas=!1,t.exports=o},function(t,e){"use strict";t.exports=function(t){var e=t.width,n=t.height,a=document.createElement("canvas");a.width=e,a.height=n;var r=a.getContext("2d");r.scale(1,-1),r.translate(0,-n),r.drawImage(t,0,0);var i=r.getImageData(0,0,e,n);return{canvas:r,img:i}}},function(t,e){"use strict";t.exports=function(t,e){return{type:"multline-text",text:t,config:e}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(1),o=a(i),s=[],l=3.141593,c=function(t){return t/1e3*60},u={linear:function(t,e,n){var a=s.length;s.push(t);var r=!1,i=function(){var i=s[a];return i>=t&&e>i||i>e&&t>=i?(s[a]+=(e-t)/c(n),{$$value:i,$$over:!1}):(r&&(s[a]=t),{$$value:e,$$over:!0,$$loop:function(){s[a]=t}})};return i.loop=function(){return r=!0,i},i},pendulum:function(t,e,n,a){var r=a||{};r.start=o.default.firstValuable(r.start,-l),r.end=o.default.firstValuable(r.end,l),r.cycle=o.default.firstValuable(r.cycle,2*l);var i=s.length;s.push(r.start);var u=!1,f=!1,d=function(){var a=Math.cos(s[i])+1;return s[i]+=l/c(n),s[i]>r.end&&(u?s[i]-=r.cycle:s[i]=r.end),{$$value:o.default.funcOrValue(t)+(o.default.funcOrValue(e)-o.default.funcOrValue(t))*a/2,$$over:!f&&s[i]>=r.end,$$loop:function(){s[i]=-l}}};return d.loop=function(){return u=!0,d},d.stay=function(){return f=!0,d},d},halfPendulum:function(t,e,n){return u.pendulum(t,e,n,{start:-l,end:0,cycle:l})},oneByOne:function(t){var e=t,n=!1,a=function(){for(var t=0;e.length>t;t++){var a=e[t]();if("object"===(void 0===a?"undefined":r(a))){if(!a.$$over)return a.$$value}else if(a!==!1)return a}if(n){for(var i=void 0,o=void 0,s=0;e.length>s;s++)o=e[s](),void 0!==o&&o.$$loop&&(o.$$loop(),i=i||e[s]());return i||0}return 0};return a.loop=function(){return n=!0,a},a}};t.exports=u}])});