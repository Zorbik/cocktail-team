import { STORAGE_KEY } from './refs';

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

function onAdd(elem) {
  let arrCocktails = getLocalData(STORAGE_KEY);
  arrCocktails.push(elem.dataset.id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
  console.log(elem.dataset.id);
  elem.firstElementChild.textContent = 'Remove';
  elem.lastElementChild.classList.add('icon__fill');
}

function onRemove(elem) {
  let arrCocktails = getLocalData(STORAGE_KEY);
  const index = checkIdCocktail(STORAGE_KEY, elem.dataset.id);

  if (location.pathname === '/cocktail-team/favoriteCocktailsPage.html') {
    location.reload();
  }

  if (index >= 0) {
    arrCocktails.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
  }

  elem.firstElementChild.textContent = 'Add to';
  elem.lastElementChild.classList.remove('icon__fill');
}

export function checkIdCocktail(key, id) {
  return getLocalData(key).indexOf(id);
}
