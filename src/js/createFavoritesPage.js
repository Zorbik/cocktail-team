import { getCocktailById } from './request-api';
import { createMarkupCocktail } from './createMarkupCocktail';
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
  console.log('arrPromise', arrPromise);
  return arrPromise;
}

export async function renderFavoriteCocktailsMarkup() {
  const arrPromise = generateArrPromiseForFavoriteCocktailsMarkup();
  if (!arrPromise) return;
  console.log('asdasdasdsadasda', arrPromise);
  const arrCocktails = await Promise.all([...arrPromise]);
  console.log('arrCocktails', arrCocktails);
  pagination(arrCocktails);

  elem.firstElementChild.textContent = 'Favorite Cocktails';
}

function noFoundFavorit() {
  gallery.textContent = `You haven't added any <br> favorite cocktails yet`;
}
