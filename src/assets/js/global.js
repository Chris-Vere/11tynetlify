/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/global.scss":
/*!******************************!*\
  !*** ./src/scss/global.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "../css/global.css");

/***/ }),

/***/ "./src/scss/home.scss":
/*!****************************!*\
  !*** ./src/scss/home.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "../css/home.css");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSkipNav": () => (/* binding */ initSkipNav),
/* harmony export */   "initMobileNav": () => (/* binding */ initMobileNav),
/* harmony export */   "initDesktopNav": () => (/* binding */ initDesktopNav)
/* harmony export */ });
let mobileNav;
let btn_openNav;
let firstFocusableItem;
let lastFocusableItem;
let pageWrap;
let bodyHeader;
let outsideFocusables;
let navDesktop;

function initOpenMobileNav(e) {
  e.preventDefault();
  mobileNav.setAttribute('aria-hidden', 'false');
  pageWrap.setAttribute('aria-hidden', 'true');
  
  outsideFocusables.forEach((item) => {
    item.setAttribute('aria-hidden', 'true');
  });

  window.requestAnimationFrame(() => {
    pageWrap.addEventListener('click', initCloseMobileNav);
    mobileNav.addEventListener('keydown', trapFocus);
    document.body.classList.add('init-nav-open');

    window.requestAnimationFrame(() => {
      document.body.classList.add('begin-nav-open');
    });
  });
}

function initCloseMobileNav(e) {
  e.preventDefault();
  mobileNav.setAttribute('aria-hidden', 'true');
  pageWrap.setAttribute('aria-hidden', 'false');

  outsideFocusables.forEach((item) => {
    item.setAttribute('aria-hidden', 'false');
  });

  window.requestAnimationFrame(() => {
    pageWrap.removeEventListener('click', initCloseMobileNav);
    document.body.classList.add('begin-nav-close');
  });
}

function handleAnimationEnd({ animationName }) {
  if (animationName === 'hideMobileNav') {
    mobileNav.removeEventListener('keydown', trapFocus);

    window.requestAnimationFrame(() => {
      document.body.classList.remove('init-nav-open', 'begin-nav-open', 'begin-nav-close');
      btn_openNav.focus();
    });
  }

  if(animationName === 'showMobileNav') {
    
    window.requestAnimationFrame(() => {
      firstFocusableItem.focus();
    });
  }
}

function trapFocus(e) {
  if (e.keyCode !== 9) {
    return;
  }

  if(e.shiftKey) {
    if(document.activeElement === firstFocusableItem) {
      window.requestAnimationFrame(() => lastFocusableItem.focus());
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableItem) {
      window.requestAnimationFrame(() => firstFocusableItem.focus());
      e.preventDefault();
    }
  }

  return;
}

function skipToNav(e) {
  e.preventDefault();
  bodyHeader.scrollIntoView({ behavior: 'smooth' });
}

function initSkipNav() {
  const skipNavBtn = document.getElementById('skip-nav');
  bodyHeader = document.getElementById('body-header');
  skipNavBtn.addEventListener('click', skipToNav);
}

function initMobileNav() {
  mobileNav = document.getElementById('mobile-nav');
  btn_openNav = document.getElementById('btn-open-mobile-nav');
  pageWrap = document.getElementById('page-wrap');
  const btn_closeNav = document.getElementById('btn-close-mobile-nav');
  const pageSlider = document.getElementById('page-slider');
  const focusableItems = [...mobileNav.querySelectorAll('a, button')];
  firstFocusableItem = focusableItems[0];
  lastFocusableItem = focusableItems[focusableItems.length - 1];

  outsideFocusables = [...document.getElementsByClassName('js-outside-focusable')];
  btn_openNav.addEventListener('click', initOpenMobileNav);
  btn_closeNav.addEventListener('click', initCloseMobileNav);
  pageSlider.addEventListener('animationend', handleAnimationEnd);
}

function handleMediaChange(obj) {
  if(obj.matches) {
    navDesktop.setAttribute('aria-hidden', 'false');
  }else {
    navDesktop.setAttribute('aria-hidden', 'true');
  }
}

function initDesktopNav() {
  navDesktop = document.getElementById('nav-desktop');
  
  const mediaChange = window.matchMedia('screen and (min-width: 768px)');
  mediaChange.addEventListener('change', handleMediaChange);
  handleMediaChange(mediaChange);
}


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/global.scss */ "./src/scss/global.scss");
/* harmony import */ var _scss_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/home.scss */ "./src/scss/home.scss");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");



 
(0,_nav__WEBPACK_IMPORTED_MODULE_2__.initSkipNav)();
(0,_nav__WEBPACK_IMPORTED_MODULE_2__.initMobileNav)();
(0,_nav__WEBPACK_IMPORTED_MODULE_2__.initDesktopNav)();

})();

/******/ })()
;
//# sourceMappingURL=global.js.map