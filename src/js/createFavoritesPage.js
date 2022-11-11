import { getCocktailById } from './request-api';
import { createMarkupCocktail } from './createMarkupCocktail';
import { elem, gallery, STORAGE_KEY } from './refs';
import { getLocalData } from './addFavoriteCocktail';

const favoriteCocktailsEl = document.querySelector('.js-favorite-cocktails');
const favoriteIngredientsEl = document.querySelector('.js-favorite-ingredients');

favoriteCocktailsEl.addEventListener('click', renderFavoriteCocktailsMarkup);

function generateArrPromiseForFavoriteCocktailsMarkup() {
  let arr = getLocalData(STORAGE_KEY);
  if (!arr.length) return noFoundFavorit();
  let arrPromise = [];

  for (let i = 0; i < arr.length; i += 1) {
    arrPromise.push(getCocktailById(arr[i]));
  }
  console.log('arrPromise', arrPromise);
  return arrPromise;
}

export async function renderFavoriteCocktailsMarkup() {
  const arrPromise = generateArrPromiseForFavoriteCocktailsMarkup();
  const arrCocktails = await Promise.all([...arrPromise]);
  console.log('arrCocktails', arrCocktails);
  const markup = createMarkupCocktail(arrCocktails);
  gallery.innerHTML = markup;
  elem.firstElementChild.textContent = 'Favorite Cocktails';
}

export function noFoundFavorit() {
  gallery.textContent = `You haven't added any favorite cocktails yet`;
}
