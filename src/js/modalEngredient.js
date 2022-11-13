import { getIngredientsByName } from './request-api';
import { createModalMarkupCocktail } from './createModalIngredientsMarkup';
import { modalIngredientEl, overlayIngredient, STORAGE_KEY_INGREDIENT } from './refs';
import { checkIdIngredients } from './addFavoriteIngredient';
import { getLocalData } from './addFavoriteCocktail';

overlayIngredient.addEventListener('click', onOverlayIngredientClick);

function onOverlayIngredientClick(e) {
  closeIngredientModal();
}

export async function onClickIngredient(e) {
  if (!e.target.classList.contains('modal__ingredient-link')) return;
  openIngredientModal();

  const ingredient = await getIngredientsByName(`${e.target.dataset.ingredient}`);
  // console.log(ingredient);

  const markup = createModalMarkupCocktail(ingredient);
  modalIngredientEl.innerHTML = markup;

  modalIngredientEl.addEventListener('click', onModalIngredientsClick);
}

function onModalIngredientsClick(e) {
  onButtonCloseModalIngredient(e);
  onClickAddIngredientBtn(e);
}

function onClickAddIngredientBtn(e) {
  if (!e.target.classList.contains('modal-ingredient__add-btn')) return;
  const targetEl = e.target;
  if (e.target.classList.contains('icon-ingredients-fill')) {
    onModalRemoveIngredient(targetEl);
  } else {
    onModalAddIngredient(targetEl);
  }
}

function onModalAddIngredient(elem) {
  // console.log('Dobavili');
  let arrIngredients = getLocalData(STORAGE_KEY_INGREDIENT);
  arrIngredients.push(elem.dataset.id);
  localStorage.setItem(STORAGE_KEY_INGREDIENT, JSON.stringify(arrIngredients));
  elem.textContent = 'Remove from favorite';
  elem.classList.add('icon-ingredients-fill');
}

function onModalRemoveIngredient(elem) {
  // console.log('Udalili');
  let arrIngredients = getLocalData(STORAGE_KEY_INGREDIENT);

  const index = checkIdIngredients(elem.dataset.id);
  if (index >= 0) {
    arrIngredients.splice(index, 1);
    localStorage.setItem(STORAGE_KEY_INGREDIENT, JSON.stringify(arrIngredients));
  }
  elem.textContent = 'Add to favorite';
  elem.classList.remove('icon-ingredients-fill');
}

export function onButtonCloseModalIngredient(e) {
  if (e.target.closest('.modal__cocktail-close-button')) {
    closeIngredientModal();
  }
}

export function openIngredientModal() {
  // console.log(modalIngredientEl);
  modalIngredientEl.classList.add('active');
  overlayIngredient.classList.add('active');
  // body.classList.toggle('modal-opened');
}

function closeIngredientModal() {
  modalIngredientEl.classList.remove('active');
  overlayIngredient.classList.remove('active');
  // body.classList.toggle('modal-opened');
  removeEventListener('click', onModalIngredientsClick);
}
