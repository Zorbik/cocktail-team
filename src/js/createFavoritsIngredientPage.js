import { elem, gallery, STORAGE_KEY_INGREDIENT } from './refs';
import { getLocalData } from './addFavoriteCocktail';
import { getIngredientById } from './request-api';
import { createMarkupIngredients } from './createMarkupIngredients';

const favoriteIngredientsEl = document.querySelector('.js-favorite-ingredients');

function generateArrPromiseForFavoriteIngredientMarkup() {
  let arr = getLocalData(STORAGE_KEY_INGREDIENT);
  if (!arr.length) return (gallery.textContent = `You haven't added any favorite ingridients yet`);
  let arrPromise = [];

  for (let i = 0; i < arr.length; i += 1) {
    arrPromise.push(getIngredientById(arr[i]));
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
