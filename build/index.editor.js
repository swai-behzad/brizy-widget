/*! For license information please see index.editor.js.LICENSE.txt */
(()=>{var e={20:(e,t,r)=>{"use strict";var n=r(594),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},l=null,s=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,n)&&!u.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:s,props:c,_owner:a.current}}t.jsx=c,t.jsxs=c},594:e=>{"use strict";e.exports=React},700:e=>{(()=>{var t={283:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orElse=t.isT=t.isNothing=void 0,t.isNothing=function(e){return null==e},t.isT=function(e){return!(0,t.isNothing)(e)},t.orElse=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length?function(r){return(0,t.isNothing)(r)?e[0]:r}:(0,t.isNothing)(e[1])?e[0]:e[1]}},978:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(662),t),o(r(499),t),o(r(269),t),o(r(393),t),o(r(283),t),o(r(169),t),o(r(898),t),o(r(807),t),o(r(741),t)},662:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.liftA2=void 0,t.liftA2=function(e,t,r){return function(n,o){return e(t(n),r(o))}}},393:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mPipe=void 0;var n=r(283);t.mPipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e[0],o=e.slice(1);return function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return t.every(n.isT)&&null!==(e=o.reduce((function(e,t){return(0,n.isT)(e)?t(e):void 0}),r.apply(void 0,t)))&&void 0!==e?e:void 0}}},499:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.match=void 0,t.match=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){for(var r=0;r<e.length;r++)if(e[r][0](t))return e[r][1](t)}}},269:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.match2=void 0,t.match2=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t,r){for(var n=0;n<e.length;n++)if(e[n][0](t)&&e[n][1](r))return e[n][2](t,r)}}},741:function(e,t,r){"use strict";var n=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.or=void 0;var o=r(283);t.or=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(){for(var t,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];for(var a=0;a<=e.length;a++){var u=null===(t=e[a])||void 0===t?void 0:t.call.apply(t,n([e],r,!1));if(!(0,o.isNothing)(u))return u}}}},55:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._parse=t.call=t.isOptional=void 0;var n=r(283);t.isOptional=function(e){return"optional"===e.__type},t.call=function(e,t){switch(e.__type){case"optional":case"strict":return e.fn(t);default:return e(t)}},t._parse=function(e,r){var o={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=(0,t.call)(e[i],r);if(!(0,t.isOptional)(e[i])&&(0,n.isNothing)(a))return;o[i]=a}return o}},898:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parse=t.optional=void 0;var n=r(55);t.optional=function(e){return{__type:"optional",fn:e}},t.parse=function(e,t){return void 0===t?function(t){return(0,n._parse)(e,t)}:(0,n._parse)(e,t)}},807:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseStrict=void 0;var n=r(55);t.parseStrict=function(e,t){return void 0===t?function(t){return(0,n._parse)(e,t)}:(0,n._parse)(e,t)}},169:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pass=void 0,t.pass=function(e){return function(t){return e(t)?t:void 0}}},304:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var _=g.prototype=new b;_.constructor=g,v(_,h.prototype),_.isPureReactComponent=!0;var S=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,i={},a=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!O.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:u,props:i,_owner:x.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===i?"."+C(c,0):i,S(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(N(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",S(e))for(var l=0;l<e.length;l++){var s=i+C(u=e[l],l);c+=P(u,t,o,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(u=e.next()).done;)c+=P(u=u.value,t,o,s=i+C(u,l++),a);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},k={transition:null},R={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:k,ReactCurrentOwner:x};t.Children={map:I,forEach:function(e,t,r){I(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=a,t.PureComponent=g,t.StrictMode=i,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=v({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!O.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.transition;k.transition={};try{e()}finally{k.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},41:(e,t,r)=>{"use strict";e.exports=r(304)},45:e=>{(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{Arr:()=>n,Bool:()=>o,Err:()=>l,Json:()=>i,Num:()=>a,Obj:()=>u,Str:()=>c,pipe:()=>I});var n={};t.r(n),t.d(n,{is:()=>d,read:()=>s,readWithItemReader:()=>f});var o={};t.r(o),t.d(o,{read:()=>p});var i={};t.r(i),t.d(i,{read:()=>y});var a={};t.r(a),t.d(a,{read:()=>v});var u={};t.r(u),t.d(u,{hasKey:()=>b,hasKeys:()=>g,isEmpty:()=>N,isObject:()=>h,length:()=>j,read:()=>_,readAsUnknownDict:()=>w,readKey:()=>O,readNoArray:()=>S,readWithValueReader:()=>x});var c={};t.r(c),t.d(c,{is:()=>A,read:()=>T});var l={};t.r(l),t.d(l,{isAllT:()=>D,isNullish:()=>R,isT:()=>B,onEmpty:()=>z,onNullish:()=>M,onUndefined:()=>k,throwOnNullish:()=>$});var s=function(e){if(Array.isArray(e))return e},f=function(e){return function(t){if(Array.isArray(t)){var r=t.map(e);return r.some((function(e){return function(e){return null==e||"number"==typeof e&&Number.isNaN(e)}(e)}))?void 0:r}}},d=function(e){return!!s(e)},p=function(e){if("boolean"==typeof e)return e},y=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(e){return}},v=function(e){switch(void 0===e?"undefined":(r=e)&&"undefined"!=typeof Symbol&&r.constructor===Symbol?"symbol":typeof r){case"string":var t=""!==e?Number(e):NaN;return isNaN(t)?void 0:t;case"number":return isNaN(e)?void 0:e;default:return}var r};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(e){return"object"==typeof e&&null!==e},b=function(e,t){return e in t},g=function(e,t){return e.every((function(e){return b(e,t)}))},_=function(e){if(h(e))return e},S=function(e){if(h(e)&&!Array.isArray(e))return e},w=function(e){if(h(e))return e},x=function(e){return function(t){var r,n=w(t);if(void 0!==n){var o={},i=!0,a=!1,u=void 0;try{for(var c,l=Object.entries(n)[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var s=function(e){if(Array.isArray(e))return e}(r=c.value)||function(e){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,o=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),2!==o.length);i=!0);}catch(e){a=!0,n=e}finally{try{i||null==t.return||t.return()}finally{if(a)throw n}}return o}}(r)||function(e){if(e){if("string"==typeof e)return m(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,2):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=s[0],d=s[1],p=e(d);if(void 0===p)return;o[f]=p}}catch(e){a=!0,u=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw u}}return o}}},O=function(e){return function(t){return b(e,t)?t[e]:void 0}},j=function(e){return Object.keys(e).length},N=function(e){return 0===j(e)};function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function P(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}function I(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,o=function(e){if(Array.isArray(e))return e}(n=t)||C(n)||P(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],a=o.slice(1);return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a.reduce((function(e,t){return t(e)}),i.apply(void 0,function(e){return function(e){if(Array.isArray(e))return E(e)}(e)||C(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t)))}}var T=function(e){switch(void 0===e?"undefined":(t=e)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t){case"string":return e;case"number":return isNaN(e)?void 0:e.toString();default:return}var t},A=function(e){return"string"==typeof e};function k(e,t){return void 0===e?t:e}var R=function(e){return null==e||"number"==typeof e&&Number.isNaN(e)};function M(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 1===t.length?function(e){return R(e)?t[0]:e}:R(t[1])?t[0]:t[1]}var $=function(e){return function(t){if(R(t))throw new Error(e);return t}};function z(e,t,r){return R(t)||t===e?r:t}var B=function(e){return!R(e)},D=function(e){return!R(e)&&""!==e};e.exports=r})()},373:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";var e,t;n.r(o),n.d(o,{Brizy:()=>l,ThemeIconEditor:()=>h,ThemeIconPreview:()=>m}),function(e){e.image="image",e.link="link",e.richText="richText",e.reference="reference",e.multiReference="multiReference"}(e||(e={})),function(e){e.addElements="addElements"}(t||(t={}));var r=function(){return globalThis.__VISUAL_CONFIG__},i=n(978),a=n(45),u=(0,i.parseStrict)({name:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("name"),a.Str.read),a.Err.throwOnNullish("Invalid name")),title:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("title"),a.Str.read),a.Err.throwOnNullish("Invalid title")),version:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("version"),a.Str.read),a.Err.throwOnNullish("Invalid version")),category:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("category"),a.Str.read),a.Err.throwOnNullish("Invalid category")),keywords:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("keywords"),a.Arr.read),a.Err.throwOnNullish("Invalid keywords")),editorScripts:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("editorScripts"),a.Arr.readWithItemReader(a.Str.read)),a.Err.throwOnNullish("Invalid editorScripts")),viewScripts:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("viewScripts"),a.Arr.readWithItemReader(a.Str.read)),a.Err.throwOnNullish("Invalid viewScripts")),editorStyles:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("editorStyles"),a.Arr.readWithItemReader(a.Str.read)),a.Err.throwOnNullish("Invalid editorStyles")),viewStyles:(0,a.pipe)((0,i.mPipe)(a.Obj.readKey("viewStyles"),a.Arr.readWithItemReader(a.Str.read)),a.Err.throwOnNullish("Invalid viewStyles"))}),c=(0,i.mPipe)(a.Obj.read,u),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var n;return n=[{key:"registerComponent",value:function(e){var n=r();if(n)if(e){var o,i;n.ui=null!==(o=n.ui)&&void 0!==o?o:{},n.ui.leftSidebar=null!==(i=n.ui.leftSidebar)&&void 0!==i?i:{};var a,u,c=e.category,l=void 0===c?"customComponent":c,s=e.id,f=e.tab,d=null!=f?f:{},p=d.id,y=void 0===p?t.addElements:p,v=d.icon,m=d.title,h=null!==(a=n.ui.leftSidebar.topTabsOrder)&&void 0!==a?a:[],b=h.find((function(e){return e.id===y}));if(!b){var g=h.findIndex((function(e){return e.id===t.addElements}));b={id:y,type:t.addElements,icon:null!=v?v:"nc-add",title:null!=m?m:"Add Custom Elements",elements:[]},-1!==g?h.splice(g+1,0,b):h.push(b)}b.elements=null!==(u=b.elements)&&void 0!==u?u:[];var _,S=b.elements.find((function(e){return e.label===l}));S?S.moduleNames.push(s):b.elements.push({label:l,moduleNames:[s]}),n.thirdPartyComponents=null!==(_=n.thirdPartyComponents)&&void 0!==_?_:{},n.thirdPartyComponents[s]=e}else console.error("Invalid Component Type");else console.error("Failed to register component: the component is outside of Builder.")}},{key:"getMetaData",value:function(e){var t,n=r();if(n){var o=c(e);if(o){var i=null===(t=n.thirdPartyComponentHosts)||void 0===t?void 0:t.find((function(e){return e.name===o.name}));if(i)return{pluginHost:i.host};console.error("Invalid plugin host or plugin name.")}else console.error("Invalid widgets config.json",JSON.stringify(n))}else console.error("Failed to get metadata: the widget is outside of Builder.")}}],n&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e,n),e}(),s=function(e){switch(e){case"editor":return"brz_icon";case"fa":return"fa_icon";default:return"nc_icon"}};function f(e){var t=e.type,n=e.iconName,o=e.suffix,i=r();if(i){var a=i.urls,u=a.templateIcons,c=a.compileTemplateIcons,l=c?"".concat(c,"/").concat(t,"/").concat(n,".svg"):"".concat(u,"/").concat(t,"/").concat(n,".svg");return void 0===o?l:"".concat(l,"#").concat(o)}return console.error("Invalid Config"),""}var d=n(373),p=n.n(d),y=n(41),v=function(e){var t=e.className,r=e.href;return y.createElement("svg",{className:t},y.createElement("use",{href:r}))},m=function(e){var t=e.type,r=e.name,n=e.className,o=p()("brz-icon-svg align-[initial]",n);return y.createElement(v,{className:o,href:f({type:t,iconName:r,suffix:s(t)})})},h=function(e){var t=e.className,n=e.type,o=e.name,i=p()("brz-icon-svg align-[initial]",t),a=function(e){var t=e.type,n=e.iconName,o=e.suffix,i=r();if(i){var a=i.urls.templateIcons,u="".concat(a,"/").concat(t,"/").concat(n,".svg");return void 0===o?u:"".concat(u,"#").concat(o)}return console.error("Invalid Config"),""}({type:n,iconName:o,suffix:s(n)});return y.createElement(v,{className:i,href:a})}})(),e.exports=o})()},848:(e,t,r)=>{"use strict";e.exports=r(20)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.p="",(()=>{"use strict";var e=r(700),t=r(848);e.Brizy.registerComponent({id:"Brizy.ThirdParty.Map",component:{editor:function(e){return(0,t.jsx)("div",{className:"mapThirdComponent",children:(0,t.jsx)("button",{onClick:function(){console.log(e)},children:"click"})})},view:function(e){var r=e.address,n=e.zoom,o=void 0===n?13:n,i=e.height,a=e.widthSuffix,u="".concat("https://www.google.com/maps/embed/v1/place","?key=").concat("AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw","&q=").concat(r,"&zoom=").concat(o);return(0,t.jsx)("div",{className:"mapThirdComponent",style:{height:"".concat(i).concat(a)},children:(0,t.jsx)("iframe",{src:u,title:"map"})})}},title:"Map",category:"custom",options:function(){return[{selector:".mapThirdComponent",toolbar:[{id:"toolbarCurrentElement",type:"popover",config:{icon:"nc-pin",title:"Map"},devices:"desktop",position:90,options:[{id:"tabsCurrentElement",type:"tabs",tabs:[{id:"tabCurrentElement",label:"Map",options:[{id:"address",label:"Address",type:"inputText",placeholder:"Enter address",default:{value:"Chisinau"}},{id:"height",label:"Height",type:"slider",config:{min:0,max:100,units:[{title:"px",value:"px"},{title:"%",value:"%"}]},default:{value:100,suffix:"%"}}]}]}]}]}]}});const n=JSON.parse('{"name":"Brizy.ThirdParty","title":"Notice","version":"1.0.3","category":"cat","keywords":["third party"],"editorScripts":["index.editor.ts"],"viewScripts":["index.view.ts"],"editorStyles":["index.editor.css"],"viewStyles":["index.view.css"]}'),o=r.p+"static/minus.91bcd9e1.png",i=r.p+"static/plus.7be7e162.png";var a=r(594);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=e.Brizy.getMetaData(n),l=function(){var e,r,n=(e=(0,a.useState)(0),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=n[0],s=n[1];return(0,t.jsxs)("div",{className:"custom-counter",children:[(0,t.jsx)("button",{className:"custom-counter__decrement",onClick:function(){return s(l-1)},children:(0,t.jsx)("img",{height:"20px",src:"".concat(c.pluginHost,"/").concat(o),alt:"decrement"})}),(0,t.jsx)("div",{className:"custom-counter__count",children:l}),(0,t.jsx)("button",{className:"custom-counter__increment",onClick:function(){return s(l+1)},children:(0,t.jsx)("img",{height:"20px",src:"".concat(c.pluginHost,"/").concat(i),alt:"increment"})})]})};e.Brizy.registerComponent({id:"Brizy.ThirdParty.Counter",component:{editor:l,view:l},title:"Counter",category:"custom"}),e.Brizy.registerComponent({id:"ThirdParty.HelloWorld",component:{editor:function(){return(0,t.jsx)("button",{className:"hello-world-button",children:"Hello, World!"})},view:function(){return(0,t.jsx)("button",{className:"hello-world-button",children:"Hello, World!"})}},title:"Hello World Button"}),e.Brizy.registerComponent({id:"ThirdParty.Textbox",title:"Textbox",category:"custom",component:{editor:function(e){var r=e.content,n=e.onChange;return console.log(r),console.log(n),(0,t.jsxs)("div",{contentEditable:!0,suppressContentEditableWarning:!0,onInput:function(e){return n(e.currentTarget.textContent||"")},style:{padding:"10px",minHeight:"40px",border:"1px dashed #ccc"},children:[r," \xa0---\xa0 Editor Component"]})},view:function(e){var r=e.content;return(0,t.jsxs)("p",{children:[r," \xa0---\xa0 View Component"]})}},options:function(){return[{content:"hello world",toolbar:[{id:"changeTextPopover",type:"popover",config:{size:"xlarge"},options:[{id:"changeTextInput",type:"inputText",label:"Change Text",placeholder:"Type to change text1",value:"",default:{value:"Default Value"}},{id:"changeTextInput2",type:"inputText",label:"Change Text",placeholder:"Type to change text2"}]},{id:"togglePopover",type:"popover",options:[{id:"toggleSwitch",type:"switch",label:"toggle"}]}]}]}}),e.Brizy.registerComponent({id:"ThirdParty.Input",content:"this is my new content",title:"My Input",category:"custom",component:{editor:function(e){var r=e.toolbarInput,n=e.onChange;return(0,t.jsxs)("div",{className:"brz-input",children:[(0,t.jsx)("input",{type:"text",value:r,onChange:function(e){return n(e.target.value)}}),(0,t.jsx)("button",{onClick:function(){console.log(e)},children:"click"})]})},view:function(e){var r=e.value,n=e.onChange;return(0,t.jsx)("div",{className:"brz-input",children:(0,t.jsx)("input",{type:"text",value:r,onChange:function(e){var t=e.target.value;return n(t)}})})}},options:function(e){var t=(0,e.getValue)("toolbarInput");return[{selector:".brz-input",toolbar:[{id:"inputPopover",type:"popover",config:{size:"large"},options:[{id:"toolbarInput",type:"inputText",label:"Change Text",placeholder:"Type to change text3",value:t,default:{value:"default value"},disabled:"disbaled"===t},{id:"toolbarButton",type:"button",onClick:function(){console.log(e),console.log(t)},value:"dawdawd",config:{text:"save"}}]}]}]}})})()})();