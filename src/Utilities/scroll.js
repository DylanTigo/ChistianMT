export function disableScroll() {
  window.addEventListener('scroll', noScroll);
}

function noScroll() {
  window.scrollTo(0, 0);
}

export function enableScroll() {
  window.removeEventListener('scroll', noScroll);
}