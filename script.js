'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
function obsFunc(entries) {
  entries.forEach(el => {
    if (!el.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
}
const obsObj = {
  root: null,
  threshold: 0,
};
const observer = new IntersectionObserver(obsFunc, obsObj);
observer.observe(header);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const slide = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
let curVal = 0;
let maxVal = slide.length - 1;
slide.forEach((el, i) => {
  el.style.transform = `translateX(${100 * i}%)`;
});

btnRight.addEventListener('click', () => {
  if (curVal === maxVal) {
    curVal = 0;
  }
  curVal++;
  slide.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - curVal)}%)`;
  });
});
btnLeft.addEventListener('click', function () {
  if (curVal === 0) curVal = maxVal;
  curVal--;
  slide.forEach(
    (el, i) => (el.style.transform = `translateX(${100 * (i - curVal)}%)`)
  );
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const operationsCell = document.querySelector('.operations__tab-container');
const operationBtn = document.querySelectorAll('.operations__tab');
const operationsContent = document.querySelectorAll('.operations__content');

operationsCell.addEventListener('click', function (e) {
  operationBtn.forEach(el => el.classList.remove('operations__tab--active'));
  operationsContent.forEach(el =>
    el.classList.remove('operations__content--active')
  );
  const click = e.target.closest('.operations__tab');
  click.classList.add('operations__tab--active');

  const x = document.querySelector(
    `.operations__content--${click.dataset.tab}`
  );
  x.classList.add('operations__content--active');
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sections = document.querySelectorAll('.section');
sections.forEach(el => el.classList.add('section--hidden'));
const obseveSection = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting)
      sections.forEach(el => el.classList.remove('section--hidden'));
  });
};
const secObs = new IntersectionObserver(obseveSection, {
  root: null,
  threshold: 0.1,
});
sections.forEach(section => secObs.observe(section));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function (e) {
  const clickEvent = e.target;
  if (clickEvent.classList.contains('nav__link')) {
    console.log(clickEvent);
  }
});
