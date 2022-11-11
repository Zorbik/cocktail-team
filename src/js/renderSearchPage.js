import { createMarkupCocktail } from './createMarkupCocktail';
import { gallery, elem } from './refs';
import { amountCards } from './renderStartMarkup';

const pagContainer = elem.lastElementChild;

pagContainer.addEventListener('click', onNumPage);

let paginationArray = [];
let cardsPerPage = 0;
let countPage = 0;
let page = 1;

export function pagination(array) {
  page = 1;
  paginationArray = array;
  cardsPerPage = amountCards();
  countPage = Math.ceil(array.length / cardsPerPage);
  createPagArray(page);
}

export function createPagArray(page) {
  if (page > countPage) return;
  const tempArray = [...paginationArray];
  gallery.innerHTML = createMarkupCocktail(
    tempArray.splice((page - 1) * cardsPerPage, cardsPerPage)
  );
  renderNumPagesGallery(page);
}

export function renderNumPagesGallery(currentPage) {
  let markup = `<span class="decr-arrow" data-action="decrement" ${
    currentPage === 1 ? 'style="display: none;"' : ''
  }></span>`;
  const fistPage = `<span class="numPage">1</span>`;
  const lastPage = `<span class="numPage">${countPage}</span>`;
  const delimiter = `<div>...</div>`;
  const prevPage = `<span class="numPage">${currentPage - 1}</span>`;
  const nextPage = `<span class="numPage">${currentPage + 1}</span>`;

  if (currentPage > 2) markup += fistPage;
  if (currentPage > 3) markup += delimiter;
  if (currentPage > 1) markup += prevPage;

  markup += `<span class="numPage active">${currentPage}</span>`;

  if (currentPage < countPage) markup += nextPage;
  if (currentPage < countPage - 2) markup += delimiter;
  if (currentPage < countPage - 1) markup += lastPage;

  markup += `<span class="incr-arrow" data-action="increment" ${
    currentPage === countPage ? 'style="display: none;"' : ''
  }></span>`;

  pagContainer.innerHTML = markup;
}

function onNumPage(e) {
  if (e.target.nodeName !== 'SPAN') return;
  if (e.target.textContent) {
    page = Number(e.target.textContent);
    return createPagArray(page);
  }

  if (e.target.dataset.action) {
    switch (e.target.dataset.action) {
      case 'increment':
        page += 1;
        return createPagArray(page);

      case 'decrement':
        page -= 1;
        return createPagArray(page);
    }
  }
}
