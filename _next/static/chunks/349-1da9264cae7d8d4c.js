(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[349],{18217:function(e,n,t){"use strict";t.d(n,{Z:function(){return D}});var r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)};function o(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}Object.create;Object.create;var a=t(2784),c="right-scroll-bar-position",i="width-before-scroll-bar";function u(e,n){return function(e,n){var t=(0,a.useState)((function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(e){var n=t.value;n!==e&&(t.value=e,t.callback(e,n))}}}}))[0];return t.callback=n,t.facade}(n||null,(function(n){return e.forEach((function(e){return function(e,n){return"function"===typeof e?e(n):e&&(e.current=n),e}(e,n)}))}))}function l(e){return e}function f(e,n){void 0===n&&(n=l);var t=[],r=!1;return{read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(e){var o=n(e,r);return t.push(o),function(){t=t.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;t.length;){var n=t;t=[],n.forEach(e)}t={push:function(n){return e(n)},filter:function(){return t}}},assignMedium:function(e){r=!0;var n=[];if(t.length){var o=t;t=[],o.forEach(e),n=t}var a=function(){var t=n;n=[],t.forEach(e)},c=function(){return Promise.resolve().then(a)};c(),t={push:function(e){n.push(e),c()},filter:function(e){return n=n.filter(e),t}}}}}var d=function(e){void 0===e&&(e={});var n=f(null);return n.options=r({async:!0,ssr:!1},e),n}(),s=function(){},v=a.forwardRef((function(e,n){var t=a.useRef(null),c=a.useState({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:s}),i=c[0],l=c[1],f=e.forwardProps,v=e.children,p=e.className,h=e.removeScrollBar,m=e.enabled,g=e.shards,y=e.sideCar,w=e.noIsolation,b=e.inert,E=e.allowPinchZoom,C=e.as,k=void 0===C?"div":C,S=o(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),O=y,M=u([t,n]),R=r(r({},S),i);return a.createElement(a.Fragment,null,m&&a.createElement(O,{sideCar:d,removeScrollBar:h,shards:g,noIsolation:w,inert:b,setCallbacks:l,allowPinchZoom:!!E,lockRef:t}),f?a.cloneElement(a.Children.only(v),r(r({},R),{ref:M})):a.createElement(k,r({},R,{className:p,ref:M}),v))}));v.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},v.classNames={fullWidth:i,zeroRight:c};var p,h=function(e){var n=e.sideCar,t=o(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var c=n.read();if(!c)throw new Error("Sidecar medium not found");return a.createElement(c,r({},t))};h.isSideCarExport=!0;function m(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=p||t.nc;return n&&e.setAttribute("nonce",n),e}var g=function(){var e=0,n=null;return{add:function(t){var r,o;0==e&&(n=m())&&(o=t,(r=n).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(n)),e++},remove:function(){!--e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},y=function(){var e=function(){var e=g();return function(n){a.useEffect((function(){return e.add(n),function(){e.remove()}}),[n])}}();return function(n){var t=n.styles;return e(t),null}},w={left:0,top:0,right:0,gap:0},b=function(e){return parseInt(e||"",10)||0},E=function(e){if(void 0===e&&(e="margin"),"undefined"===typeof window)return w;var n=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[b(t),b(r),b(o)]}(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},C=y(),k=function(e,n,t,r){var o=e.left,a=e.top,u=e.right,l=e.gap;return void 0===t&&(t="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(i," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i," .").concat(i," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},S=function(e){var n=a.useState(E(e.gapMode)),t=n[0],r=n[1];a.useEffect((function(){r(E(e.gapMode))}),[e.gapMode]);var o=e.noRelative,c=e.noImportant,i=e.gapMode,u=void 0===i?"margin":i;return a.createElement(C,{styles:k(t,!o,u,c?"":"!important")})},O=!1;if("undefined"!==typeof window)try{var M=Object.defineProperty({},"passive",{get:function(){return O=!0,!0}});window.addEventListener("test",M,M),window.removeEventListener("test",M,M)}catch(Z){O=!1}var R=!!O&&{passive:!1},j=function(e,n){var t=n;do{if("undefined"!==typeof ShadowRoot&&t instanceof ShadowRoot&&(t=t.host),x(e,t)){var r=P(e,t);if(r[1]>r[2])return!0}t=t.parentNode}while(t&&t!==document.body);return!1},x=function(e,n){return"v"===e?function(e){var n=window.getComputedStyle(e);return"hidden"!==n.overflowY&&!(n.overflowY===n.overflowX&&"visible"===n.overflowY)}(n):function(e){var n=window.getComputedStyle(e);return"hidden"!==n.overflowX&&!(n.overflowY===n.overflowX&&"visible"===n.overflowX)}(n)},P=function(e,n){return"v"===e?[(t=n).scrollTop,t.scrollHeight,t.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(n);var t},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},N=function(e){return[e.deltaX,e.deltaY]},T=function(e){return e&&"current"in e?e.current:e},W=function(e){return"\n  .block-interactivity-".concat(e," {pointer-events: none;}\n  .allow-interactivity-").concat(e," {pointer-events: all;}\n")},B=0,X=[];var Y,_=(Y=function(e){var n=a.useRef([]),t=a.useRef([0,0]),r=a.useRef(),o=a.useState(B++)[0],c=a.useState((function(){return y()}))[0],i=a.useRef(e);a.useEffect((function(){i.current=e}),[e]),a.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var n=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}([e.lockRef.current],(e.shards||[]).map(T),!0).filter(Boolean);return n.forEach((function(e){return e.classList.add("allow-interactivity-".concat(o))})),function(){document.body.classList.remove("block-interactivity-".concat(o)),n.forEach((function(e){return e.classList.remove("allow-interactivity-".concat(o))}))}}}),[e.inert,e.lockRef.current,e.shards]);var u=a.useCallback((function(e,n){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=L(e),c=t.current,u="deltaX"in e?e.deltaX:c[0]-a[0],l="deltaY"in e?e.deltaY:c[1]-a[1],f=e.target,d=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===f.type)return!1;var s=j(d,f);if(!s)return!0;if(s?o=d:(o="v"===d?"h":"v",s=j(d,f)),!s)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var v=r.current||o;return function(e,n,t,r,o){var a=function(e,n){return"h"===e&&"rtl"===n?-1:1}(e,window.getComputedStyle(n).direction),c=a*r,i=t.target,u=n.contains(i),l=!1,f=c>0,d=0,s=0;do{var v=P(e,i),p=v[0],h=v[1]-v[2]-a*p;(p||h)&&x(e,i)&&(d+=h,s+=p),i=i.parentNode}while(!u&&i!==document.body||u&&(n.contains(i)||n===i));return(f&&(o&&0===d||!o&&c>d)||!f&&(o&&0===s||!o&&-c>s))&&(l=!0),l}(v,n,e,"h"===v?u:l,!0)}),[]),l=a.useCallback((function(e){var t=e;if(X.length&&X[X.length-1]===c){var r="deltaY"in t?N(t):L(t),o=n.current.filter((function(e){return e.name===t.type&&e.target===t.target&&(n=e.delta,o=r,n[0]===o[0]&&n[1]===o[1]);var n,o}))[0];if(o&&o.should)t.preventDefault();else if(!o){var a=(i.current.shards||[]).map(T).filter(Boolean).filter((function(e){return e.contains(t.target)}));(a.length>0?u(t,a[0]):!i.current.noIsolation)&&t.preventDefault()}}}),[]),f=a.useCallback((function(e,t,r,o){var a={name:e,delta:t,target:r,should:o};n.current.push(a),setTimeout((function(){n.current=n.current.filter((function(e){return e!==a}))}),1)}),[]),d=a.useCallback((function(e){t.current=L(e),r.current=void 0}),[]),s=a.useCallback((function(n){f(n.type,N(n),n.target,u(n,e.lockRef.current))}),[]),v=a.useCallback((function(n){f(n.type,L(n),n.target,u(n,e.lockRef.current))}),[]);a.useEffect((function(){return X.push(c),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:v}),document.addEventListener("wheel",l,R),document.addEventListener("touchmove",l,R),document.addEventListener("touchstart",d,R),function(){X=X.filter((function(e){return e!==c})),document.removeEventListener("wheel",l,R),document.removeEventListener("touchmove",l,R),document.removeEventListener("touchstart",d,R)}}),[]);var p=e.removeScrollBar,h=e.inert;return a.createElement(a.Fragment,null,h?a.createElement(c,{styles:W(o)}):null,p?a.createElement(S,{gapMode:"margin"}):null)},d.useMedium(Y),h),I=a.forwardRef((function(e,n){return a.createElement(v,r({},e,{ref:n,sideCar:_}))}));I.classNames=v.classNames;var D=I},53098:function(e,n,t){e.exports=t(7575)},7575:function(e,n,t){"use strict";n.getMDXComponent=function(e,n){return u(e,n).default};var r=i(t(2784)),o=i(t(52322)),a=i(t(28316));function c(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}function i(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function u(e,n){const t={React:r,ReactDOM:a,_jsx_runtime:o,...n};return new Function(...Object.keys(t),e)(...Object.values(t))}}}]);