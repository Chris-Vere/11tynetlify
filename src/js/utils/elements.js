export const ELS = {};

export function initGlobalElements() {
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
