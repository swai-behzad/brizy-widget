/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Counter/export.ts":
/*!*******************************!*\
  !*** ./src/Counter/export.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    var counter = document.querySelector(\".custom-counter\");\n    if (counter) {\n        var count = counter.querySelector(\".custom-counter__count\");\n        if (!count) {\n            return;\n        }\n        counter.addEventListener(\"click\", function(event) {\n            var target = event.target;\n            var _count_textContent;\n            var value = parseInt((_count_textContent = count.textContent) !== null && _count_textContent !== void 0 ? _count_textContent : \"0\");\n            if (target.closest(\".custom-counter__increment\")) {\n                count.innerHTML = \"\".concat(value + 1);\n            }\n            if (target.closest(\".custom-counter__decrement\")) {\n                count.innerHTML = \"\".concat(value - 1);\n            }\n        });\n    }\n});\n\n\n\n//# sourceURL=webpack://brizy-local-starter/./src/Counter/export.ts?");

/***/ }),

/***/ "./src/Counter/index.scss":
/*!********************************!*\
  !*** ./src/Counter/index.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://brizy-local-starter/./src/Counter/index.scss?");

/***/ }),

/***/ "./src/Map/index.scss":
/*!****************************!*\
  !*** ./src/Map/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://brizy-local-starter/./src/Map/index.scss?");

/***/ }),

/***/ "./src/index.view.ts":
/*!***************************!*\
  !*** ./src/index.view.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Counter_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter/export */ \"./src/Counter/export.ts\");\n/* harmony import */ var _Counter_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter/index.scss */ \"./src/Counter/index.scss\");\n/* harmony import */ var _Map_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map/index.scss */ \"./src/Map/index.scss\");\n\n\n\n\n\n//# sourceURL=webpack://brizy-local-starter/./src/index.view.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.view.ts");
/******/ 	
/******/ })()
;