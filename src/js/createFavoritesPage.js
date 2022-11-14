import { getCocktailById } from './request-api';
import { elem, gallery, STORAGE_KEY } from './refs';
import { getLocalData } from './addFavoriteCocktail';
import { pagination } from './renderSearchPage';

const favoriteCocktailsEl = document.querySelector('.js-favorite-cocktails');

favoriteCocktailsEl.addEventListener('click', renderFavoriteCocktailsMarkup);

function generateArrPromiseForFavoriteCocktailsMarkup() {
  let arr = getLocalData(STORAGE_KEY);
  if (!arr.length) return noFoundFavorit();

  let arrPromise = [];

  for (let i = 0; i < arr.length; i += 1) {
    arrPromise.push(getCocktailById(arr[i]));
  }
  return arrPromise;
}

export async function renderFavoriteCocktailsMarkup() {
  const arrPromise = generateArrPromiseForFavoriteCocktailsMarkup();
  if (!arrPromise) return;
  const arrCocktails = await Promise.all([...arrPromise]);

  pagination(arrCocktails);

  elem.firstElementChild.textContent = 'Favorite Cocktails';
}

export function noFoundFavorit() {
  gallery.innerHTML = `<li class="nf"> You haven't added any favorite cocktails yet </li>`;
}
