import { getRandomCocktail } from './request-api';
import { createMarkupCocktail } from './createMarkupCocktail';

export async function renderStartMarkup() {
  const arrPromise = generateArrPromiseForStartMarkup();
  const arrCocktails = await Promise.all([...arrPromise]);
  const markup = createMarkupCocktail(arrCocktails);
  document.querySelector('.gallery__list').innerHTML = markup;
}

function generateArrPromiseForStartMarkup() {
  let arr = [];
  let calcGenerateCards;

  if (window.innerWidth < 768) {
    calcGenerateCards = 3;
  } else if (window.innerWidth < 1200) {
    calcGenerateCards = 6;
  } else {
    calcGenerateCards = 9;
  }

  for (let i = 0; i < calcGenerateCards; i += 1) {
    arr.push(getRandomCocktail());
  }
  return arr;
}
