import { ELS } from './utils/elements';

let outsideFocusables;

function initOpenMobileNav(e) {
  e.preventDefault();
  ELS.NAV_MOBILE.setAttribute('aria-hidden', 'false');
  shouldShowNonMobileNavItems(false);
  
  window.requestAnimationFrame(() => {
    ELS.PAGE_WRAP.addEventListener('click', initCloseMobileNav);
    ELS.NAV_MOBILE.addEventListener('keydown', trapFocus);
    document.body.classList.add('init-nav-open');

    // wait for page reflow caused by .init-nav-open before actually animating
    window.requestAnimationFrame(() => {
      document.body.classList.add('begin-nav-open');
    });
  });
}

function initCloseMobileNav(e) {
  e.preventDefault();
  ELS.NAV_MOBILE.setAttribute('aria-hidden', 'true');
  shouldShowNonMobileNavItems(true);

  outsideFocusables.forEach((item) => {
    item.setAttribute('aria-hidden', 'false');
  });

  window.requestAnimationFrame(() => {
    ELS.PAGE_WRAP.removeEventListener('click', initCloseMobileNav);
    document.body.classList.add('begin-nav-close');
  });
}

function handleAnimationEnd({ animationName }) {
  if (animationName === 'hideMobileNav') {
    ELS.NAV_MOBILE.removeEventListener('keydown', trapFocus);

    window.requestAnimationFrame(() => {
      document.body.classList.remove('init-nav-open', 'begin-nav-open', 'begin-nav-close');
      ELS.BTN_OPEN_NAV.focus();
    });
  }

  if(animationName === 'showMobileNav') {
    window.requestAnimationFrame(() => {
      ELS.FIRST_FOCUSABLE_MOBILE_NAV_ELEM.focus();
    });
  }
}

function trapFocus(e) {
  if (e.keyCode !== 9) {
    return;
  }

  if(e.shiftKey) {
    if(document.activeElement === ELS.FIRST_FOCUSABLE_MOBILE_NAV_ELEM) {
      window.requestAnimationFrame(() => ELS.LAST_FOCUSABLE_MOBILE_NAV_ELEM.focus());
      e.preventDefault();
    }
  } else {
    if (document.activeElement === ELS.LAST_FOCUSABLE_MOBILE_NAV_ELEM) {
      window.requestAnimationFrame(() => ELS.FIRST_FOCUSABLE_MOBILE_NAV_ELEM.focus());
      e.preventDefault();
    }
  }

  return;
}

function shouldShowNonMobileNavItems(shouldShow = true) {
  window.requestAnimationFrame(() => {
    if(shouldShow) {
      ELS.HIDDEN_FROM_OPEN_NAV.forEach((item) => {
        item.setAttribute('aria-hidden', 'false');
        item.removeAttribute('tabindex');
      });
    } else {
      ELS.HIDDEN_FROM_OPEN_NAV.forEach((item) => {
        item.setAttribute('aria-hidden', 'true');
        item.setAttribute('tabindex', '-1');
      });
    }
  });
}

function skipToNav(e) {
  e.preventDefault();
  ELS.BODY_HEADER.scrollIntoView({ behavior: 'smooth' });
}

function handleMediaChange(obj) {
  if (obj.matches) {
    ELS.NAV_DESKTOP.setAttribute('aria-hidden', 'false');
  } else {
    ELS.NAV_DESKTOP.setAttribute('aria-hidden', 'true');
  }
}

export function initSkipNav() {
  ELS.BTN_SKIP_NAV.addEventListener('click', skipToNav);
}

export function initMobileNav() {
  outsideFocusables = [...document.getElementsByClassName('js-outside-focusable')];
  ELS.BTN_OPEN_NAV.addEventListener('click', initOpenMobileNav);
  ELS.BTN_CLOSE_NAV.addEventListener('click', initCloseMobileNav);
  ELS.PAGE_SLIDER.addEventListener('animationend', handleAnimationEnd);
}

export function initDesktopNav() {
  ELS.NAV_DESKTOP = document.getElementById('nav-desktop');
  
  const mediaMatch = window.matchMedia('screen and (min-width: 768px)');
  mediaMatch.addEventListener('change', handleMediaChange);
  handleMediaChange(mediaMatch);
}
