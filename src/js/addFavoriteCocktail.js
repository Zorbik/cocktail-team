const galleryEl = document.querySelector('.gallery__list');
const STORAGE_KEY = 'favorite-cocktails';

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

function getLocalData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function onAdd(elem) {
  let arrCocktails = getLocalData();
  arrCocktails.push(elem.dataset.id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
  console.log(elem.dataset.id);
  elem.firstElementChild.textContent = 'Remove';
  elem.lastElementChild.classList.add('icon__fill');
}

function onRemove(elem) {
  let arrCocktails = getLocalData();
  const index = checkIdCocktail(elem.dataset.id);
  if (index >= 0) {
    arrCocktails.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
  }

  elem.firstElementChild.textContent = 'Add to';
  elem.lastElementChild.classList.remove('icon__fill');
}

export function checkIdCocktail(id) {
  let arrCocktails = getLocalData();
  return arrCocktails.indexOf(id);
}
