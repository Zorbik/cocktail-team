import sprite from '../images/symbol-defs.svg';
import { checkIdCocktail } from './addFavoriteCocktail';

export function createMarkupCocktail(arrCocktails) {
  console.log(arrCocktails);
  return arrCocktails
    .map(({ strDrinkThumb, strDrink, idDrink }) => {
      return `
       <li class="gallery__item" data-id="${idDrink}">
          <img class="gallery__img" src="${strDrinkThumb}" alt="${strDrink}" width="280" />
          <div class="gallery__thumb">
            <p class="gallery__text">${strDrink}</p>
            <button class="gallery__info-btn btn" data-id="${idDrink}" type="button" data-modal-target="#modal">Learn more</button>
            <button class="gallery__add-btn btn" data-id="${idDrink}" type="button">
              <span class="add-btn__desr">${
                checkIdCocktail(idDrink) >= 0 ? 'Remove' : 'Add to'
              }</span>
              <svg class="add-btn__icon ${
                checkIdCocktail(idDrink) >= 0 ? 'icon__fill' : ''
              }" width="18" height="18">
              <use href="${sprite}#icon-empty-heart"></use>
              </svg>
           </button>
          </div>
       </li>
    `;
    })
    .join('');
}

// ${(checkIdCocktail(idDrink) >= 0) ? 'icon__fill' : ''}
