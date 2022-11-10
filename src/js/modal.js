import { getCocktailById } from './request-api';
import { createModalMarkupCocktail } from './createModalCoctailMarkup';
import { isFavorite } from './addFavoriteCocktail';

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

  const markup = await createModalMarkupCocktail(coctail.drinks);

  modalCardEl.innerHTML = markup;

  modalCardEl.addEventListener('click', onClickModal);
}

function onClickModal(e) {
  isFavorite(e);
  onCloseButtonCloseClick(e);
}

function onCloseButtonCloseClick(e) {
  // console.log(e.target.closest('.js-modal-coctail-close'));
  if (e.target.closest('.js-modal-coctail-close')) {
    closeModal(modalCardEl);
  }
}

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
  removeEventListener('click', onClickModal);
}
