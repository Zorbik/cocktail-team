import sprite from '../images/symbol-defs.svg';
import { checkIdCocktail } from './addFavoriteCocktail';

export function createMarkupIngredients(arrIngredients) {
  console.log(arrIngredients);
  return arrIngredients
    .map(({ strType, strIngredient, idIngredient }) => {
      return `
       <li class="gallery__item" data-id="${idIngredient}">
          <p class="gallery__ingredient">${strIngredient}</p>
          <p class="gallery__desc">${strType}</p>
          <div class="gallery__thumb">
          <button class="gallery__info-btn btn" data-id="${idIngredient}" type="button" data-modal-target="#modal">Learn more</button>
          <button class="gallery__add-btn btn" data-id="${idIngredient}" type="button">
            <span class="add-btn__desr">${
              checkIdCocktail(idIngredient) >= 0 ? 'Remove' : 'Add to'
            }</span>
            <svg class="add-btn__icon ${
              checkIdCocktail(idIngredient) >= 0 ? 'icon__fill' : ''
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