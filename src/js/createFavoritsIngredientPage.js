import { elem, gallery, STORAGE_KEY_INGREDIENT, modalIngredientEl } from './refs';
import { getIngredientById } from './request-api';
import { createMarkupIngredients } from './createMarkupIngredients';
import { getLocalData } from './addFavoriteCocktail';
import { onAddIngredient, onRemoveIngredient } from './addFavoriteIngredient';
import { openIngredientModal, onButtonCloseModalIngredient } from './modalEngredient';
import { createModalMarkupCocktail } from './createModalIngredientsMarkup';
import { pagination } from './renderSearchPage';

gallery.addEventListener('click', onClickBtns);

function onClickBtns(e) {
  if (!e.target.classList.contains('btn')) return;

  if (e.target.closest('.ingredient-info__btn-add')) {
    onClickBtnAdd(e);
  } else {
    onClickBtnInfo(e);
  }
}

async function onClickBtnInfo(e) {
  openIngredientModal();
  const ingredient = await getIngredientById(e.target.dataset.id);
  modalIngredientEl.innerHTML = createModalMarkupCocktail(ingredient);

  modalIngredientEl.addEventListener('click', onBtnModalClick);
}

function onBtnModalClick(e) {
  onButtonCloseModalIngredient(e);
  if (e.target.closest('.modal-ingredient__add-btn')) {
    onClickBtnAdd(e);
  }
}

function onClickBtnAdd(e) {
  if (e.target.classList.contains('icon-ingredients-fill')) {
    onRemoveIngredient(e.target);
    location = location.href;
  } else {
    onAddIngredient(e.target);
  }
}

function generateArrPromiseForFavoriteIngredientMarkup() {
  let arr = getLocalData(STORAGE_KEY_INGREDIENT);
  if (!arr.length) {
    gallery.textContent = `You haven't added any favorite ingridients yet`;
    return;
  }
  let arrPromise = [];

  for (let i = 0; i < arr.length; i += 1) {
    arrPromise.push(getIngredientById(arr[i]));
    console.log('arrPromise', arrPromise);
  }
  console.log('arrPromise', arrPromise);
  return arrPromise;
}

export async function renderFavoriteIngredientMarkup() {
  const arrPromise = generateArrPromiseForFavoriteIngredientMarkup();
  if (!arrPromise) return;
  const arrIngredient = await Promise.all([...arrPromise]);
  console.log('arrIngredient', arrIngredient);

  pagination(arrIngredient);

  elem.firstElementChild.textContent = 'Favorite Ingredients';
}
