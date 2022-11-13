import { getCocktailById } from './request-api';
import { createModalMarkupCocktail } from './createModalCoctailMarkup';
// import { isFavorite } from './addFavoriteCocktail';
import { onClickIngredient } from './modalEngredient';
import { STORAGE_KEY } from './refs';
import { getLocalData, checkIdCocktail } from './addFavoriteCocktail';

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

  const coctail = await getCocktailById(e.target.dataset.id);

  const markup = await createModalMarkupCocktail(coctail);

  modalCardEl.innerHTML = markup;

  modalCardEl.addEventListener('click', onClickModal);
}

function isFavoriteCoctail(e) {
  const targetEl = e.target.closest('.modal__add-btn');

  if (!targetEl) {
    return;
  }

  if (targetEl.classList.contains('btn-added')) {
    onRemoveFavorite(targetEl);
  } else {
    onAddFavorite(targetEl);
  }
}

function onAddFavorite(elem) {
  let arrCocktails = getLocalData(STORAGE_KEY);
  arrCocktails.push(elem.dataset.id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
  elem.textContent = 'Remove from favorite';
  elem.classList.add('btn-added');
}

function onRemoveFavorite(elem) {
  let arrCocktails = getLocalData(STORAGE_KEY);
  const index = checkIdCocktail(STORAGE_KEY, elem.dataset.id);
  if (index >= 0) {
    arrCocktails.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
  }

  elem.textContent = 'Add to favorite';
  elem.classList.remove('btn-added');
}

function onClickModal(e) {
  isFavoriteCoctail(e);
  onCloseButtonCloseClick(e);
  onClickIngredient(e);
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

function openModal() {
  modalCardEl.classList.add('active');
  overlay.classList.add('active');
  body.classList.toggle('modal-opened');
}

function closeModal() {
  modalCardEl.classList.remove('active');
  overlay.classList.remove('active');
  modalCardEl.innerHTML = '';
  body.classList.toggle('modal-opened');
  removeEventListener('click', onClickModal);
}
