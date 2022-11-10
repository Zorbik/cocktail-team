import { getRandomCocktail } from './request-api';
import { createMarkupCocktail } from './createMarkupCocktail';
import { gallery } from './refs';

export async function renderStartMarkup() {
  const arrPromise = generateArrPromiseForStartMarkup();
  const arrCocktails = await Promise.all([...arrPromise]);
  const markup = createMarkupCocktail(arrCocktails);
  gallery.innerHTML = markup;
}

function generateArrPromiseForStartMarkup() {
  let arr = [];
  const calcGenerateCards = amountCards();

  for (let i = 0; i < calcGenerateCards; i += 1) {
    arr.push(getRandomCocktail());
  }
  return arr;
}

export function amountCards() {
  if (window.innerWidth < 768) {
    return 3;
  }
  if (window.innerWidth < 1280) {
    return 6;
  }
  return 9;
}
