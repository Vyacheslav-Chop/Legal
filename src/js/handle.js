import { closeMenu, openMenu } from './modal';
import { removeFocus, scrollToView } from './helpers';
import { refs } from './refs';
const { burgerBtn } = refs;

export function handleOpenMenu() {
  if (burgerBtn) {
    openMenu();
    removeFocus();
  }
}

export function handdleKeyDown(ev) {
  if (ev.key === 'Escape') {
    closeMenu();
  }
}

export function removeFocusFromElements() {
  const elements = document.querySelectorAll('a, button');
  elements.forEach(element => element.blur());
}

export function handleClickOnMenu(ev) {
  const closeBtn = ev.target.closest('.menu-btn-close');
  const clickedLink = ev.target.closest('.nav-link');
  const btnLink = ev.target.closest('.menu-btn');

  if (ev.target === ev.currentTarget) return;

  if (closeBtn || clickedLink || btnLink) {
    closeMenu();
  }
  scrollToView();
  removeFocus();
}

export function smoothScroll(ev) {
  ev.preventDefault();
  const target = document.querySelector(ev.currentTarget.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  removeFocus();
}
