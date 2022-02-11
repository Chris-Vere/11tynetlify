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
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/elements */ "./src/js/utils/elements.js");


let outsideFocusables;

function initOpenMobileNav(e) {
  e.preventDefault();
  _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.NAV_MOBILE.setAttribute('aria-hidden', 'false');
  shouldShowNonMobileNavItems(false);
  
  window.requestAnimationFrame(() => {
    _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.PAGE_WRAP.addEventListener('click', initCloseMobileNav);
    _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.NAV_MOBILE.addEventListener('keydown', trapFocus);
    document.body.classList.add('init-nav-open');

    // wait for page reflow caused by .init-nav-open before actually animating
    window.requestAnimationFrame(() => {
      document.body.classList.add('begin-nav-open');
    });
  });
}

function initCloseMobileNav(e) {
  e.preventDefault();
  _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.NAV_MOBILE.setAttribute('aria-hidden', 'true');
  shouldShowNonMobileNavItems(true);

  outsideFocusables.forEach((item) => {
    item.setAttribute('aria-hidden', 'false');
  });

  window.requestAnimationFrame(() => {
    _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.PAGE_WRAP.removeEventListener('click', initCloseMobileNav);
    document.body.classList.add('begin-nav-close');
  });
}

function handleAnimationEnd({ animationName }) {
  if (animationName === 'hideMobileNav') {
    _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.NAV_MOBILE.removeEventListener('keydown', trapFocus);

    window.requestAnimationFrame(() => {
      document.body.classList.remove('init-nav-open', 'begin-nav-open', 'begin-nav-close');
      _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.BTN_OPEN_NAV.focus();
    });
  }

  if(animationName === 'showMobileNav') {
    window.requestAnimationFrame(() => {
      _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.FIRST_FOCUSABLE_MOBILE_NAV_ELEM.focus();
    });
  }
}

function trapFocus(e) {
  if (e.keyCode !== 9) {
    return;
  }

  if(e.shiftKey) {
    if(document.activeElement === _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.FIRST_FOCUSABLE_MOBILE_NAV_ELEM) {
      window.requestAnimationFrame(() => _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.LAST_FOCUSABLE_MOBILE_NAV_ELEM.focus());
      e.preventDefault();
    }
  } else {
    if (document.activeElement === _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.LAST_FOCUSABLE_MOBILE_NAV_ELEM) {
      window.requestAnimationFrame(() => _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.FIRST_FOCUSABLE_MOBILE_NAV_ELEM.focus());
      e.preventDefault();
    }
  }

  return;
}

function shouldShowNonMobileNavItems(shouldShow = true) {
  window.requestAnimationFrame(() => {
    if(shouldShow) {
      _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.HIDDEN_FROM_OPEN_NAV.forEach((item) => {
        item.setAttribute('aria-hidden', 'false');
        item.removeAttribute('tabindex');
      });
    } else {
      _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.HIDDEN_FROM_OPEN_NAV.forEach((item) => {
        item.setAttribute('aria-hidden', 'true');
        item.setAttribute('tabindex', '-1');
      });
    }
  });
}

function skipToNav(e) {
  e.preventDefault();
  _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.BODY_HEADER.scrollIntoView({ behavior: 'smooth' });
}

function handleMediaChange(obj) {
  if (obj.matches) {
    _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.NAV_DESKTOP.setAttribute('aria-hidden', 'false');
  } else {
    _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.NAV_DESKTOP.setAttribute('aria-hidden', 'true');
  }
}

function initSkipNav() {
  _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.BTN_SKIP_NAV.addEventListener('click', skipToNav);
}

function initMobileNav() {
  outsideFocusables = [...document.getElementsByClassName('js-outside-focusable')];
  _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.BTN_OPEN_NAV.addEventListener('click', initOpenMobileNav);
  _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.BTN_CLOSE_NAV.addEventListener('click', initCloseMobileNav);
  _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.PAGE_SLIDER.addEventListener('animationend', handleAnimationEnd);
}

function initDesktopNav() {
  _utils_elements__WEBPACK_IMPORTED_MODULE_0__.ELS.NAV_DESKTOP = document.getElementById('nav-desktop');
  
  const mediaMatch = window.matchMedia('screen and (min-width: 768px)');
  mediaMatch.addEventListener('change', handleMediaChange);
  handleMediaChange(mediaMatch);
}


/***/ }),

/***/ "./src/js/utils/elements.js":
/*!**********************************!*\
  !*** ./src/js/utils/elements.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ELS": () => (/* binding */ ELS),
/* harmony export */   "initGlobalElements": () => (/* binding */ initGlobalElements)
/* harmony export */ });
const ELS = {};

function initGlobalElements() {
  ELS.NAV_MOBILE = document.getElementById('mobile-nav');
  ELS.NAV_DESKTOP = document.getElementById('nav-desktop');
  ELS.FOCUSABLE_MOBILE_NAV_ELEMS = [...ELS.NAV_MOBILE.querySelectorAll('a, button')];
  ELS.FIRST_FOCUSABLE_MOBILE_NAV_ELEM = ELS.FOCUSABLE_MOBILE_NAV_ELEMS[0];
  ELS.LAST_FOCUSABLE_MOBILE_NAV_ELEM = ELS.FOCUSABLE_MOBILE_NAV_ELEMS[ELS.FOCUSABLE_MOBILE_NAV_ELEMS.length - 1];
  ELS.BTN_OPEN_NAV = document.getElementById('btn-open-mobile-nav');
  ELS.BTN_CLOSE_NAV = document.getElementById('btn-close-mobile-nav');
  ELS.BTN_SKIP_NAV = document.getElementById('skip-nav');
  ELS.PAGE_WRAP = document.getElementById('page-wrap');
  ELS.PAGE_SLIDER = document.getElementById('page-slider');
  ELS.BODY_HEADER = document.getElementById('body-header');
  ELS.HIDDEN_FROM_OPEN_NAV = [...document.getElementsByClassName('js-hidden-from-mobile-nav')];
};


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
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/elements */ "./src/js/utils/elements.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");




 
(0,_utils_elements__WEBPACK_IMPORTED_MODULE_2__.initGlobalElements)();
(0,_nav__WEBPACK_IMPORTED_MODULE_3__.initSkipNav)();
(0,_nav__WEBPACK_IMPORTED_MODULE_3__.initMobileNav)();
(0,_nav__WEBPACK_IMPORTED_MODULE_3__.initDesktopNav)();

})();

/******/ })()
;
//# sourceMappingURL=global.js.map