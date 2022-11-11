import { STORAGE_KEY_INGREDIENT } from './refs';
import { getLocalData } from './addFavoriteCocktail';

export function onClickAddIngredient(e) {
  if (!e.target.classList.contains('gallery__add-btn')) return;
  const targetEl = e.target;
  if (e.target.classList.contains('icon-ingredients-fill')) {
    onRemoveIngredient(targetEl);
  } else {
    onAddIngredient(targetEl);
  }
}

function onAddIngredient(elem) {
  let arrIngredients = getLocalData(STORAGE_KEY_INGREDIENT);
  arrIngredients.push(elem.dataset.id);
  localStorage.setItem(STORAGE_KEY_INGREDIENT, JSON.stringify(arrIngredients));
  //   console.log(elem.dataset.id);
  elem.textContent = 'Remove';
  elem.classList.add('icon-ingredients-fill');
}

function onRemoveIngredient(elem) {
  let arrIngredients = getLocalData(STORAGE_KEY_INGREDIENT);
  const index = checkIdIngredients(elem.dataset.id);
  if (index >= 0) {
    arrIngredients.splice(index, 1);
    localStorage.setItem(STORAGE_KEY_INGREDIENT, JSON.stringify(arrIngredients));
  }
  elem.textContent = 'Add to';
  elem.classList.remove('icon-ingredients-fill');
}

export function checkIdIngredients(id) {
  let arrIngredients = getLocalData(STORAGE_KEY_INGREDIENT);
  return arrIngredients.indexOf(id);
}
