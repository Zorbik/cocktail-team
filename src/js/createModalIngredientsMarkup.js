import sprite from '../images/symbol-defs.svg';
import { checkIdIngredients } from './addFavoriteIngredient';

export async function createModalMarkupCocktail(arrCocktails) {
  const { idIngredient, strIngredient, strType, strAlocohol, strDescription } = arrCocktails;
  return `
        <button type="button" class="modal__cocktail-close-button">
    <svg class="close__icon" width="32" height="32">
      <use href="${sprite}#icon-close-btn"></use>
    </svg>
  </button>
  <h2 class="modal__ingredient-name">${strIngredient}</h2>
  <p class="modal__ingredient-type">${strType ? strType : ''}</p>
  <p class="modal__ingredient-description">${strDescription ? strDescription : ''}</p>
  <ul class="modal__ingredient-info"></ul>
  <button class="gallery__add-btn btn ${
    checkIdIngredients(idIngredient) >= 0 ? 'icon-ingredients-fill' : ''
  }
  " data-id="${idIngredient}" type="button">${
    checkIdIngredients(idIngredient) >= 0 ? 'Remove' : 'Add to'
  }</button>
    `;
}
