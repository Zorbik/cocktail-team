import sprite from '../images/symbol-defs.svg';
import { checkIdCocktail } from './addFavoriteCocktail';
import { STORAGE_KEY_INGREDIENT } from './refs';
import { checkIdIngredients } from './addFavoriteIngredient';

export function createMarkupIngredients(array) {
  console.log(array);
  return array
    .map(({ strType, strIngredient, idIngredient }) => {
      return `
       <li class="gallery__item" data-id="${idIngredient}">
          <p class="gallery__ingredient">${strIngredient}</p>
          <p class="gallery__desc">${strType ? strType : ''}</p>
          <div class="ingredient-info gallery__thumb-ingredient">
          <button class="ingredient-info__btn-info btn gallery__info-btn-ingredient" data-id="${idIngredient}" type="button" data-modal-target="#modal">Learn more</button>
          <button class="gallery__remove-btn-ingredient ingredient-info__btn-add btn ${
            checkIdIngredients(idIngredient) >= 0 ? 'icon-ingredients-fill' : ''
          }" data-id="${idIngredient}" type="button">
           ${checkIdCocktail(STORAGE_KEY_INGREDIENT, idIngredient) >= 0 ? 'Remove' : 'Add to'}
            <svg class="add-btn__icon ${
              checkIdCocktail(STORAGE_KEY_INGREDIENT, idIngredient) >= 0 ? 'icon__fill' : ''
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
