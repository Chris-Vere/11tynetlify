import '../scss/global.scss';
import '../scss/home.scss';
import { initGlobalElements } from './utils/elements';
import {
  initSkipNav,
  initMobileNav,
  initDesktopNav,
 } from './nav';
 
initGlobalElements();
initSkipNav();
initMobileNav();
initDesktopNav();
