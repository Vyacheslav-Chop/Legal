import { refs } from './refs';
const { modalMenu, body } = refs;
import { handdleKeyDown, handleClickOnMenu } from './handle';

export function openMenu() {
  modalMenu.classList.remove('is-close');
  modalMenu.classList.add('is-open');
  body.style.overflow = 'hidden';
  window.addEventListener('keydown', handdleKeyDown);
  modalMenu.addEventListener('click', handleClickOnMenu);
}

export function closeMenu() {
  modalMenu.classList.remove('is-open');
  modalMenu.classList.add('is-close');
  body.style.overflow = '';
  window.removeEventListener('keydown', handdleKeyDown);
  modalMenu.removeEventListener('click', handleClickOnMenu)
}
