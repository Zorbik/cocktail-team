import { elem, gallery, STORAGE_KEY_INGREDIENT } from './refs';
import { getIngredientById } from './request-api';
import { createMarkupIngredients } from './createMarkupIngredients';
import { getLocalData } from './addFavoriteCocktail';
import { openIngredientModal } from './modalEngredient';
import { onAddIngredient, onRemoveIngredient } from './addFavoriteIngredient';
import { onClickIngredient } from './modalEngredient';

gallery.addEventListener('click', onClickBtns);

function onClickBtns(e) {
  if (!e.target.classList.contains('btn')) return;

  if (e.target.closest('.ingredient-info__btn-add')) {
    onClickBtnAdd(e);
  } else {
    onClickBtnInfo(e);
  }
}

function onClickBtnInfo(e) {
  // onClickIngredient(e);
}

function onClickBtnAdd(e) {
  // if (!e.target.closest('.ingredient-info__btn-add')) return;
  console.log('test', e.target);

  if (e.target.classList.contains('icon-ingredients-fill')) {
    onRemoveIngredient(e.target);
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
  const arrIngredient = await Promise.all([...arrPromise]);
  console.log('arrIngredient', arrIngredient);
  const markup = createMarkupIngredients(arrIngredient);
  gallery.innerHTML = markup;
  elem.firstElementChild.textContent = 'Favorite Ingredients';
}
