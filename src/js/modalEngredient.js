import { getIngredientsByName } from './request-api';
import { createModalMarkupCocktail } from './createModalIngredientsMarkup';
import { onClickAddIngredient } from './addFavoriteIngredient';

const modalIngredientEl = document.querySelector('#modal-ingredient');
const overlayIngredient = document.querySelector('#overlay-ingredient');

overlayIngredient.addEventListener('click', onOverlayIngredientClick);

function onOverlayIngredientClick(e) {
  closeIngredientModal();
}

export async function onClickIngredient(e) {
  if (!e.target.classList.contains('modal__ingredient-link')) return;
  openIngredientModal();

  const ingredient = await getIngredientsByName(`${e.target.dataset.ingredient}`);
  // console.log(ingredient);

  const markup = await createModalMarkupCocktail(ingredient);
  modalIngredientEl.innerHTML = markup;

  modalIngredientEl.addEventListener('click', onModalIngredientsClick);
}

function onModalIngredientsClick(e) {
  onButtonCloseModalIngredient(e);
  onButtonAddModalIngredient(e);
}

function onButtonAddModalIngredient(e) {
  onClickAddIngredient(e);
}

function onButtonCloseModalIngredient(e) {
  if (e.target.closest('.modal__cocktail-close-button')) {
    closeIngredientModal();
  }
}

function openIngredientModal() {
  // console.log(modalIngredientEl);
  modalIngredientEl.classList.add('active');
  overlayIngredient.classList.add('active');
  // body.classList.toggle('modal-opened');
}

function closeIngredientModal() {
  modalIngredientEl.classList.remove('active');
  overlayIngredient.classList.remove('active');
  // body.classList.toggle('modal-opened');
  // removeEventListener('click', onClickModal);
}
