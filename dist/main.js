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

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n// const nameOne = require(\"./modules/one\")\r\n// const nameTwo = require(\"./modules/two\")\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${new Date().getDate() + 1} Aprel 2026`)\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/menu.js"
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul > li > a')\r\n    const btnNextSlide = document.querySelector('main > a')\r\n    \r\n    let animStartPos\r\n    let animEndPos\r\n    let animationId\r\n    let scrollDistance\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n    \r\n    const calculateAnim = (targetElement) => {\r\n        animStartPos = document.documentElement.scrollTop\r\n        animEndPos = Math.floor(targetElement.getBoundingClientRect().top) + animStartPos\r\n    }\r\n\r\n    function scrollAnim () {\r\n        animationId = requestAnimationFrame(scrollAnim)\r\n        scrollDistance = animEndPos - animStartPos\r\n        scrollDistance = Math.trunc(scrollDistance / 10) + (scrollDistance < 0 ? -1 : 1)\r\n        animStartPos += scrollDistance\r\n        document.documentElement.scrollTop = animStartPos\r\n        \r\n        if (animStartPos == animEndPos) {\r\n            cancelAnimationFrame(animationId)\r\n        }\r\n    }\r\n\r\n    closeBtn.addEventListener('click', handleMenu)\r\n    menuBtn.addEventListener('click', handleMenu)\r\n\r\n    menuItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            handleMenu()\r\n            let targetId = item.getAttribute('href')\r\n            const targetElement = document.querySelector(targetId)\r\n            calculateAnim(targetElement)\r\n            scrollAnim()\r\n        })\r\n    })\r\n    \r\n    btnNextSlide.addEventListener('click', () => {\r\n        let targetId = btnNextSlide.getAttribute('href')\r\n        const targetElement = document.querySelector(targetId)\r\n        calculateAnim(targetElement)\r\n        scrollAnim()\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu); \n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ },

/***/ "./modules/modal.js"
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const closeBtn = modal.querySelector('.popup-close')\r\n    let animationId\r\n    let count\r\n\r\n    function animateOpen() {\r\n        animationId = requestAnimationFrame(animateOpen)\r\n        count += 5\r\n        if (count <= 100) {\r\n            modal.style.opacity = count + '%'\r\n        } else {\r\n            cancelAnimationFrame(animationId)\r\n        }\r\n    } \r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block'\r\n            if (window.innerWidth >= 768) {\r\n                modal.style.opacity = '0%'\r\n                count = 0\r\n                animateOpen()\r\n            }\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none'\r\n        // animateClose()\r\n    })\r\n\r\n    // function animateClose() {\r\n    //     animationId = requestAnimationFrame(animateClose)\r\n    //     count -= 5\r\n    //     if (count >= 0) {\r\n    //         modal.style.opacity = count + '%'\r\n    //     } else {\r\n    //         cancelAnimationFrame(animationId)\r\n    //         modal.style.display = 'none'\r\n    //     }\r\n    // }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ },

/***/ "./modules/timer.js"
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n    const timerHours = document.getElementById(\"timer-hours\")\r\n    const timerMinutes = document.getElementById(\"timer-minutes\")\r\n    const timerSeconds = document.getElementById(\"timer-seconds\")\r\n\r\n    const addZero = (num) => {\r\n       return num > 9 ? num : \"0\" + num\r\n\r\n    }\r\n    \r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadLine).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n        let minutes = Math.floor(timeRemaining / 60 % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n        \r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(setIntervalUpdateTimer)\r\n            timerHours.textContent = \"00\"\r\n            timerMinutes.textContent = \"00\"\r\n            timerSeconds.textContent = \"00\"\r\n        } else {\r\n        \r\n            timerHours.textContent = addZero(getTime.hours)\r\n            timerMinutes.textContent = addZero(getTime.minutes)\r\n            timerSeconds.textContent = addZero(getTime.seconds)\r\n        }\r\n\r\n        \r\n\r\n        // if (getTime.timeRemaining > 0) {\r\n        //     setTimeout(updateClock, 1000)\r\n        // }\r\n\r\n    }\r\n\r\n    updateClock()\r\n\r\n    const setIntervalUpdateTimer = setInterval(updateClock, 1000,);\r\n    // countTimer(`${new Date().getDate() + 1} march 2026`)\r\n    // setInterval(countTimer, 1000, `${new Date().getDate() + 1} march 2026`)\r\n\r\n    \r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;