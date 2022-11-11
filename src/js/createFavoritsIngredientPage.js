import { elem, gallery, STORAGE_KEY_INGREDIENT } from './refs';
import { getIngredientById } from './request-api';
import { createMarkupIngredients } from './createMarkupIngredients';
import { getLocalData } from './addFavoriteCocktail';
import { openIngredientModal } from './modalEngredient';

gallery.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  // console.log('e.target', e.target);

  if (e.target.nodeName !== 'BUTTON') return;
  console.log('e.target', e.target);
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
