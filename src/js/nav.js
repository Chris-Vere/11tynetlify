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

export function initSkipNav() {
  const skipNavBtn = document.getElementById('skip-nav');
  bodyHeader = document.getElementById('body-header');
  skipNavBtn.addEventListener('click', skipToNav);
}

export function initMobileNav() {
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

export function initDesktopNav() {
  navDesktop = document.getElementById('nav-desktop');
  
  const mediaChange = window.matchMedia('screen and (min-width: 768px)');
  mediaChange.addEventListener('change', handleMediaChange);
  handleMediaChange(mediaChange);
}
