import { getCocktailById } from './request-api';
import { createModalMarkupCocktail } from './createModalCoctailMarkup';

const closeModalButton = document.querySelector('.js-modal-coctail-close');
const modalCardEl = document.querySelector('#modal');
const body = document.querySelector('body');
const gallery = document.querySelector('.gallery');
const overlay = document.getElementById('overlay');

gallery.addEventListener('click', onGalleryClick);
overlay.addEventListener('click', onOverlayClick);
// closeModalButton.addEventListener('click', onCloseButtonClick);

async function onGalleryClick(e) {
  if (!e.target.dataset.modalTarget) {
    return;
  }
  openModal(modalCardEl);
  console.log(e.target.dataset.id);
  const coctail = await getCocktailById(e.target.dataset.id);

  const markup = createModalMarkupCocktail(coctail.drinks);
  modalCardEl.innerHTML = markup;
}

// function onCloseButtonClick() {
//   closeModal(modalCardEl);
//   console.log('azaz');
// }

function onOverlayClick() {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modalCardEl => {
    closeModal(modalCardEl);
  });
}

function openModal(modalCardEl) {
  modalCardEl.classList.add('active');
  overlay.classList.add('active');
  body.classList.toggle('modal-opened');
}

function closeModal(modalCardEl) {
  modalCardEl.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.toggle('modal-opened');
}
