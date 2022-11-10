import { getCocktailById } from './request-api';
import { createMarkupCocktail } from './createMarkupCocktail';

const favoriteCocktailsEl = document.querySelector('.js-favorite-cocktails');
const favoriteIngredientsEl = document.querySelector('.js-favorite-ingredients');

const FAVORITE_COCKTAILS = 'favorite-cocktails';
const favoriteCocktails = localStorage.getItem(FAVORITE_COCKTAILS);

favoriteCocktailsEl.addEventListener('click', renderFavoriteCocktailsMarkup);

function generateArrPromiseForFavoriteCocktailsMarkup() {
  let arr = JSON.parse(favoriteCocktails) ? JSON.parse(favoriteCocktails) : [];
  let arrPromise = [];

  for (let i = 0; i < arr.length; i += 1) {
    arrPromise.push(getCocktailById(arr[i]));
  }
  console.log('arrPromise', arrPromise);
  return arrPromise;
}

async function renderFavoriteCocktailsMarkup() {
  const arrPromise = generateArrPromiseForFavoriteCocktailsMarkup();
  const arrCocktails = await Promise.all([...arrPromise]);
  console.log('arrCocktails', arrCocktails);
  const markup = await createMarkupCocktail(arrCocktails);
  document.querySelector('.gallery__list').innerHTML = markup;
  document.querySelector('.gallery__title').textContent = 'Favorite Cocktails';
  document.querySelector('.hero').classList.add('js_hero_hidden');
}
