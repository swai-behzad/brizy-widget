/*! For license information please see index.editor.js.LICENSE.txt */
(()=>{var e={20:(e,r,t)=>{"use strict";var n=t(594),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var n,c={},l=null,s=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(s=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:s,props:c,_owner:u.current}}},594:e=>{"use strict";e.exports=React},700:e=>{(()=>{var r={283:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.orElse=r.isT=r.isNothing=void 0,r.isNothing=function(e){return null==e},r.isT=function(e){return!(0,r.isNothing)(e)},r.orElse=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 1===e.length?function(t){return(0,r.isNothing)(t)?e[0]:t}:(0,r.isNothing)(e[1])?e[0]:e[1]}},978:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t);var o=Object.getOwnPropertyDescriptor(r,t);o&&!("get"in o?!r.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,o)}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),o=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||n(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),o(t(662),r),o(t(499),r),o(t(269),r),o(t(393),r),o(t(283),r),o(t(169),r),o(t(898),r),o(t(807),r),o(t(741),r)},662:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.liftA2=void 0,r.liftA2=function(e,r,t){return function(n,o){return e(r(n),t(o))}}},393:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.mPipe=void 0;var n=t(283);r.mPipe=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=e[0],o=e.slice(1);return function(){for(var e,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return r.every(n.isT)&&null!==(e=o.reduce((function(e,r){return(0,n.isT)(e)?r(e):void 0}),t.apply(void 0,r)))&&void 0!==e?e:void 0}}},499:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.match=void 0,r.match=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return function(r){for(var t=0;t<e.length;t++)if(e[t][0](r))return e[t][1](r)}}},269:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.match2=void 0,r.match2=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return function(r,t){for(var n=0;n<e.length;n++)if(e[n][0](r)&&e[n][1](t))return e[n][2](r,t)}}},741:function(e,r,t){"use strict";var n=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,o=0,i=r.length;o<i;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:!0}),r.or=void 0;var o=t(283);r.or=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return function(){for(var r,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var u=0;u<=e.length;u++){var a=null===(r=e[u])||void 0===r?void 0:r.call.apply(r,n([e],t,!1));if(!(0,o.isNothing)(a))return a}}}},55:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r._parse=r.call=r.isOptional=void 0;var n=t(283);r.isOptional=function(e){return"optional"===e.__type},r.call=function(e,r){switch(e.__type){case"optional":case"strict":return e.fn(r);default:return e(r)}},r._parse=function(e,t){var o={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=(0,r.call)(e[i],t);if(!(0,r.isOptional)(e[i])&&(0,n.isNothing)(u))return;o[i]=u}return o}},898:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parse=r.optional=void 0;var n=t(55);r.optional=function(e){return{__type:"optional",fn:e}},r.parse=function(e,r){return void 0===r?function(r){return(0,n._parse)(e,r)}:(0,n._parse)(e,r)}},807:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parseStrict=void 0;var n=t(55);r.parseStrict=function(e,r){return void 0===r?function(r){return(0,n._parse)(e,r)}:(0,n._parse)(e,r)}},169:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.pass=void 0,r.pass=function(e){return function(r){return e(r)?r:void 0}}},304:(e,r)=>{"use strict";var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function h(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function b(){}function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var _=g.prototype=new b;_.constructor=g,v(_,h.prototype),_.isPureReactComponent=!0;var S=Array.isArray,O=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,i={},u=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)O.call(r,o)&&!j.hasOwnProperty(o)&&(i[o]=r[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:t,type:e,key:u,ref:a,props:i,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var N=/\/+/g;function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function A(e,r,o,i,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case n:c=!0}}if(c)return u=u(c=e),e=""===i?"."+I(c,0):i,S(u)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),A(u,r,o,"",(function(e){return e}))):null!=u&&(P(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(N,"$&/")+"/")+e)),r.push(u)),1;if(c=0,i=""===i?".":i+":",S(e))for(var l=0;l<e.length;l++){var s=i+I(a=e[l],l);c+=A(a,r,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(a=e.next()).done;)c+=A(a=a.value,r,o,s=i+I(a,l++),u);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}function x(e,r,t){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},k={transition:null},T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:k,ReactCurrentOwner:w};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=h,r.Fragment=o,r.Profiler=u,r.PureComponent=g,r.StrictMode=i,r.Suspense=s,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=v({},e.props),i=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=w.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in r)O.call(r,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===r[l]&&void 0!==c?c[l]:r[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:t,type:e.type,key:i,ref:u,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=k.transition;k.transition={};try{e()}finally{k.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return R.current.useCallback(e,r)},r.useContext=function(e){return R.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return R.current.useDeferredValue(e)},r.useEffect=function(e,r){return R.current.useEffect(e,r)},r.useId=function(){return R.current.useId()},r.useImperativeHandle=function(e,r,t){return R.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return R.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return R.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return R.current.useMemo(e,r)},r.useReducer=function(e,r,t){return R.current.useReducer(e,r,t)},r.useRef=function(e){return R.current.useRef(e)},r.useState=function(e){return R.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return R.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return R.current.useTransition()},r.version="18.2.0"},41:(e,r,t)=>{"use strict";e.exports=t(304)},45:e=>{(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};r.r(t),r.d(t,{Arr:()=>n,Bool:()=>o,Err:()=>l,Json:()=>i,Num:()=>u,Obj:()=>a,Str:()=>c,pipe:()=>x});var n={};r.r(n),r.d(n,{is:()=>d,read:()=>s,readWithItemReader:()=>f});var o={};r.r(o),r.d(o,{read:()=>p});var i={};r.r(i),r.d(i,{read:()=>y});var u={};r.r(u),r.d(u,{read:()=>v});var a={};r.r(a),r.d(a,{hasKey:()=>b,hasKeys:()=>g,isEmpty:()=>P,isObject:()=>h,length:()=>E,read:()=>_,readAsUnknownDict:()=>O,readKey:()=>j,readNoArray:()=>S,readWithValueReader:()=>w});var c={};r.r(c),r.d(c,{is:()=>R,read:()=>C});var l={};r.r(l),r.d(l,{isAllT:()=>D,isNullish:()=>T,isT:()=>K,onEmpty:()=>U,onNullish:()=>$,onUndefined:()=>k,throwOnNullish:()=>M});var s=function(e){if(Array.isArray(e))return e},f=function(e){return function(r){if(Array.isArray(r)){var t=r.map(e);return t.some((function(e){return function(e){return null==e||"number"==typeof e&&Number.isNaN(e)}(e)}))?void 0:t}}},d=function(e){return!!s(e)},p=function(e){if("boolean"==typeof e)return e},y=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(e){return}},v=function(e){switch(void 0===e?"undefined":(t=e)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t){case"string":var r=""!==e?Number(e):NaN;return isNaN(r)?void 0:r;case"number":return isNaN(e)?void 0:e;default:return}var t};function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=function(e){return"object"==typeof e&&null!==e},b=function(e,r){return e in r},g=function(e,r){return e.every((function(e){return b(e,r)}))},_=function(e){if(h(e))return e},S=function(e){if(h(e)&&!Array.isArray(e))return e},O=function(e){if(h(e))return e},w=function(e){return function(r){var t,n=O(r);if(void 0!==n){var o={},i=!0,u=!1,a=void 0;try{for(var c,l=Object.entries(n)[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var s=function(e){if(Array.isArray(e))return e}(t=c.value)||function(e){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,n,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),2!==o.length);i=!0);}catch(e){u=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw n}}return o}}(t)||function(e){if(e){if("string"==typeof e)return m(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=s[0],d=s[1],p=e(d);if(void 0===p)return;o[f]=p}}catch(e){u=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(u)throw a}}return o}}},j=function(e){return function(r){return b(e,r)?r[e]:void 0}},E=function(e){return Object.keys(e).length},P=function(e){return 0===E(e)};function N(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function I(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function A(e,r){if(e){if("string"==typeof e)return N(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?N(e,r):void 0}}function x(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n,o=function(e){if(Array.isArray(e))return e}(n=r)||I(n)||A(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],u=o.slice(1);return function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return u.reduce((function(e,r){return r(e)}),i.apply(void 0,function(e){return function(e){if(Array.isArray(e))return N(e)}(e)||I(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r)))}}var C=function(e){switch(void 0===e?"undefined":(r=e)&&"undefined"!=typeof Symbol&&r.constructor===Symbol?"symbol":typeof r){case"string":return e;case"number":return isNaN(e)?void 0:e.toString();default:return}var r},R=function(e){return"string"==typeof e};function k(e,r){return void 0===e?r:e}var T=function(e){return null==e||"number"==typeof e&&Number.isNaN(e)};function $(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return 1===r.length?function(e){return T(e)?r[0]:e}:T(r[1])?r[0]:r[1]}var M=function(e){return function(r){if(T(r))throw new Error(e);return r}};function U(e,r,t){return T(r)||r===e?t:r}var K=function(e){return!T(e)},D=function(e){return!T(e)&&""!==e};e.exports=t})()},373:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=u(e,i(t)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)n.call(e,t)&&e[t]&&(r=u(r,t));return r}function u(e,r){return r?e?e+" "+r:e+r:e}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";var e,r;n.r(o),n.d(o,{Brizy:()=>l,ThemeIconEditor:()=>h,ThemeIconPreview:()=>m}),function(e){e.image="image",e.link="link",e.richText="richText",e.reference="reference",e.multiReference="multiReference"}(e||(e={})),function(e){e.addElements="addElements"}(r||(r={}));var t=function(){return globalThis.__VISUAL_CONFIG__},i=n(978),u=n(45),a=(0,i.parseStrict)({name:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("name"),u.Str.read),u.Err.throwOnNullish("Invalid name")),title:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("title"),u.Str.read),u.Err.throwOnNullish("Invalid title")),version:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("version"),u.Str.read),u.Err.throwOnNullish("Invalid version")),category:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("category"),u.Str.read),u.Err.throwOnNullish("Invalid category")),keywords:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("keywords"),u.Arr.read),u.Err.throwOnNullish("Invalid keywords")),editorScripts:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("editorScripts"),u.Arr.readWithItemReader(u.Str.read)),u.Err.throwOnNullish("Invalid editorScripts")),viewScripts:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("viewScripts"),u.Arr.readWithItemReader(u.Str.read)),u.Err.throwOnNullish("Invalid viewScripts")),editorStyles:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("editorStyles"),u.Arr.readWithItemReader(u.Str.read)),u.Err.throwOnNullish("Invalid editorStyles")),viewStyles:(0,u.pipe)((0,i.mPipe)(u.Obj.readKey("viewStyles"),u.Arr.readWithItemReader(u.Str.read)),u.Err.throwOnNullish("Invalid viewStyles"))}),c=(0,i.mPipe)(u.Obj.read,a),l=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var n;return n=[{key:"registerComponent",value:function(e){var n=t();if(n)if(e){var o,i;n.ui=null!==(o=n.ui)&&void 0!==o?o:{},n.ui.leftSidebar=null!==(i=n.ui.leftSidebar)&&void 0!==i?i:{};var u,a,c=e.category,l=void 0===c?"customComponent":c,s=e.id,f=e.tab,d=null!=f?f:{},p=d.id,y=void 0===p?r.addElements:p,v=d.icon,m=d.title,h=null!==(u=n.ui.leftSidebar.topTabsOrder)&&void 0!==u?u:[],b=h.find((function(e){return e.id===y}));if(!b){var g=h.findIndex((function(e){return e.id===r.addElements}));b={id:y,type:r.addElements,icon:null!=v?v:"nc-add",title:null!=m?m:"Add Custom Elements",elements:[]},-1!==g?h.splice(g+1,0,b):h.push(b)}b.elements=null!==(a=b.elements)&&void 0!==a?a:[];var _,S=b.elements.find((function(e){return e.label===l}));S?S.moduleNames.push(s):b.elements.push({label:l,moduleNames:[s]}),n.thirdPartyComponents=null!==(_=n.thirdPartyComponents)&&void 0!==_?_:{},n.thirdPartyComponents[s]=e}else console.error("Invalid Component Type");else console.error("Failed to register component: the component is outside of Builder.")}},{key:"getMetaData",value:function(e){var r,n=t();if(n){var o=c(e);if(o){var i=null===(r=n.thirdPartyComponentHosts)||void 0===r?void 0:r.find((function(e){return e.name===o.name}));if(i)return{pluginHost:i.host};console.error("Invalid plugin host or plugin name.")}else console.error("Invalid widgets config.json",JSON.stringify(n))}else console.error("Failed to get metadata: the widget is outside of Builder.")}}],n&&function(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e,n),e}(),s=function(e){switch(e){case"editor":return"brz_icon";case"fa":return"fa_icon";default:return"nc_icon"}};function f(e){var r=e.type,n=e.iconName,o=e.suffix,i=t();if(i){var u=i.urls,a=u.templateIcons,c=u.compileTemplateIcons,l=c?"".concat(c,"/").concat(r,"/").concat(n,".svg"):"".concat(a,"/").concat(r,"/").concat(n,".svg");return void 0===o?l:"".concat(l,"#").concat(o)}return console.error("Invalid Config"),""}var d=n(373),p=n.n(d),y=n(41),v=function(e){var r=e.className,t=e.href;return y.createElement("svg",{className:r},y.createElement("use",{href:t}))},m=function(e){var r=e.type,t=e.name,n=e.className,o=p()("brz-icon-svg align-[initial]",n);return y.createElement(v,{className:o,href:f({type:r,iconName:t,suffix:s(r)})})},h=function(e){var r=e.className,n=e.type,o=e.name,i=p()("brz-icon-svg align-[initial]",r),u=function(e){var r=e.type,n=e.iconName,o=e.suffix,i=t();if(i){var u=i.urls.templateIcons,a="".concat(u,"/").concat(r,"/").concat(n,".svg");return void 0===o?a:"".concat(a,"#").concat(o)}return console.error("Invalid Config"),""}({type:n,iconName:o,suffix:s(n)});return y.createElement(v,{className:i,href:u})}})(),e.exports=o})()},848:(e,r,t)=>{"use strict";e.exports=t(20)}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};t.r(e);var r=t(700),n=t(848);t(594);r.Brizy.registerComponent({id:"Brizy.ThirdParty.Container",component:{editor:e.Editor,view:function(e){var r=e.source;return(0,n.jsx)("div",{className:"swai-image",children:(0,n.jsx)("img",{src:r,alt:"Image"})})}},title:"SWAI Image",category:"essentials",options:function(){return[{selector:".imageView",toolbar:[{id:"toolbarCurrentElement",type:"popover",config:{icon:"nc-picture",title:"Select Image"},devices:"desktop",position:90,options:[{id:"tabsCurrentElement",type:"tabs",tabs:[{id:"tabCurrentElement",label:"Image",options:[{id:"source",label:"Source",type:"inputText",placeholder:"Enter Image URL",default:{value:""}}]}]}]}]}]}})})()})();