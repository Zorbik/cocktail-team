import { getCocktailByName } from '../request-api';
import { createMarkupCocktail } from '../createMarkupCocktail';
import nofound from '../../images/nofound.png';

const formSubmit = document.querySelector('#search-form');

formSubmit.addEventListener('submit', onSubmit);

export async function onSubmit(e) {
  e.preventDefault();

  searchQuery = e.target.elements.searchQuery.value.trim().toLowerCase();
  if (!searchQuery) {
    console.log('empty');
    return;
  }
  try {
    const data = await getCocktailByName(searchQuery);
    if (!data.drinks) {
      const elem = document.querySelector('.gallery__wrap');
      elem.firstElementChild.textContent = `Sorry, we didn't find any cocktail for you`;
      elem.lastElementChild.innerHTML = `<img class="nofound__img" src="${nofound}" alt="not found image" />`;
    } else {
      const markup = createMarkupCocktail(data.drinks);
      document.querySelector('.gallery__list').innerHTML = markup;
    }
  } catch (error) {
  } finally {
    e.target.elements.searchQuery.value = '';
  }
}
