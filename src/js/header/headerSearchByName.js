import { getCocktailByName } from '../request-api';
import nofound from '../../images/nofound.png';
import { menu } from './header-mobile';
import { elem, gallery, heroSearchCoctailsEl, heroListEl } from '../refs';
import { pagination } from '../renderSearchPage';

const formSubmitMob = document.querySelector('#search-form-mob');
const formSubmit = document.querySelector('#search-form');

formSubmit.addEventListener('submit', onSubmit);
formSubmitMob.addEventListener('submit', onSubmitMob);

function onSubmitMob(e) {
  e.preventDefault();
  searchQuery(e);
  menu();
  heroSearchCoctailsEl.classList.remove('js_hero_active');
  if (heroListEl.querySelector('.js_hero_item')) {
    heroListEl.querySelector('.js_hero_item').classList.remove('js_hero_item');
  }
}

function onSubmit(e) {
  e.preventDefault();
  searchQuery(e);
  if (heroListEl.querySelector('.js_hero_item')) {
    heroListEl.querySelector('.js_hero_item').classList.remove('js_hero_item');
  }
}

async function searchQuery(e) {
  const searchQuery = e.target.elements.searchQuery.value.trim().toLowerCase();
  if (!searchQuery) {
    console.log('empty');
    return;
  }
  try {
    const data = await getCocktailByName(searchQuery);
    if (!data.drinks) {
      isFind(data.drinks);
      noFoundData(data.drinks);
    } else {
      isFind(data.drinks);
      pagination(data.drinks);
    }
  } catch (error) {
  } finally {
    e.target.elements.searchQuery.value = '';
  }
}

export function isFind(array) {
  if (!array) {
    elem.firstElementChild.textContent = `Sorry, we didn't find any cocktail for you`;
  } else {
    elem.firstElementChild.textContent = `Cocktails`;
  }
}

export function noFoundData(array) {
  gallery.innerHTML = `<img class="nofound__img" src="${nofound}" alt="not found image" />`;
  elem.lastElementChild.innerHTML = '';
}
