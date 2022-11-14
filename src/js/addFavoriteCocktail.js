import { STORAGE_KEY, elem } from './refs';
import { noFoundFavorit } from './createFavoritesPage';

const galleryEl = document.querySelector('.gallery__list');

galleryEl.addEventListener('click', isFavorite);

export function isFavorite(e) {
  const targetEl = e.target.closest('.gallery__add-btn');

  if (!targetEl) {
    return;
  }

  if (targetEl.lastElementChild.classList.contains('icon__fill')) {
    onRemove(targetEl);
  } else {
    onAdd(targetEl);
  }
}

export function getLocalData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function onAdd(el) {
  let arrCocktails = getLocalData(STORAGE_KEY);
  arrCocktails.push(el.dataset.id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
  el.firstElementChild.textContent = 'Remove';
  el.lastElementChild.classList.add('icon__fill');
}

function onRemove(el) {
  let arrCocktails = getLocalData(STORAGE_KEY);
  const index = checkIdCocktail(STORAGE_KEY, el.dataset.id);

  if (
    location.pathname === '/cocktail-team/favoriteCocktailsPage.html' ||
    location.pathname === '/favoriteCocktailsPage.html'
  ) {
    el.closest('li').remove();

    if (getLocalData(STORAGE_KEY).length === 1) {
      noFoundFavorit();
      elem.lastElementChild.innerHTML = '';
    }
  }

  if (index >= 0) {
    arrCocktails.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
  }

  el.firstElementChild.textContent = 'Add to';
  el.lastElementChild.classList.remove('icon__fill');
}

export function checkIdCocktail(key, id) {
  return getLocalData(key).indexOf(id);
}
