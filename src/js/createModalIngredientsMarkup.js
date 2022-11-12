import sprite from '../images/symbol-defs.svg';
import { checkIdIngredients } from './addFavoriteIngredient';

export function createModalMarkupCocktail(arrCocktails) {
  const { idIngredient, strIngredient, strType, strAlcohol, strDescription } = arrCocktails;
  return `
        <button type="button" class="modal__cocktail-close-button">
    <svg class="close__icon" width="32" height="32">
      <use href="${sprite}#icon-close-btn"></use>
    </svg>
  </button>
  <h2 class="modal__ingredient-name">${strIngredient}</h2>
  <p class="modal__ingredient-type">${strType ? strType : ''}</p>
  <hr class="modal__ingredients-hr">
  <p class="modal__ingredient-description">${
    strDescription
      ? strDescription
      : "unfortunately we did'nt find any info about this ingredient :-("
  }</p>
  <ul class="modal__ingredient-info">
    <li>✶ <span modal__ingredient-item>Alcohol: ${strAlcohol ? strAlcohol : ''}</span></li>
  </ul>
  <button class="gallery__add-btn btn ${
    checkIdIngredients(idIngredient) >= 0 ? 'icon-ingredients-fill' : ''
  }
  " data-id="${idIngredient}" type="button">${
    checkIdIngredients(idIngredient) >= 0 ? 'Remove from favorite' : 'Add to favorite'
  }</button>
    `;
}
