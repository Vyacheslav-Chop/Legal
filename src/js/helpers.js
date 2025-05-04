import { removeFocusFromElements } from './handle';
import { smoothScroll } from './handle';

export function removeFocus() {
  const interactiveElemenrs = document.querySelectorAll('a, button');
  interactiveElemenrs.forEach(element =>
    element.addEventListener('click', removeFocusFromElements)
  );
}

export function scrollToView() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
}