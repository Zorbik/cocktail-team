import { elem, gallery, STORAGE_KEY_INGREDIENT } from './refs';
import { getIngredientById } from './request-api';
import { createMarkupIngredients } from './createMarkupIngredients';

const favoriteIngredientsEl = document.querySelector('.js-favorite-ingredients');

function generateArrPromiseForFavoriteIngredientMarkup() {
  let arr = getLocalDataIngredient(STORAGE_KEY_INGREDIENT);
  if (!arr.length) {
     gallery.textContent = `You haven't added any favorite ingridients yet`;
     return
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
  console.log(getLocalDataIngredient(STORAGE_KEY_INGREDIENT))
  const arrPromise = generateArrPromiseForFavoriteIngredientMarkup();
  const arrIngredient = await Promise.all([...arrPromise]);
  console.log('arrIngredient', arrIngredient);
  const markup = createMarkupIngredients(arrIngredient);
  gallery.innerHTML = markup;
  elem.firstElementChild.textContent = 'Favorite Ingredients';
}
 function getLocalDataIngredient() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_INGREDIENT)) || [];
}