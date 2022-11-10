import sprite from '../images/symbol-defs.svg';
import { checkIdCocktail } from './addFavoriteCocktail';
import { renderIngredientsMarkup } from './generateIngridientsList';

export async function createModalMarkupCocktail(arrCocktails) {
  const list = await renderIngredientsMarkup(arrCocktails[0].idDrink);
  const { strDrinkThumb, strDrink, idDrink, strInstructions } = arrCocktails[0];

  return `
        <button class="modal__cocktail-close-button js-modal-coctail-close" type="button">
            <svg class="close__icon" width="32" height="32">
              <use href="${sprite}#icon-close-btn"></use>
            </svg>
        </button>
        <h2 class="modal__coctail-name">${strDrink}</h2>
        <div class="modal__wrapper">
        <div class="modal__wrapper-instructions">
        <p class="modal__coctail-instractions">INSTRACTIONS:</p>
        <p class="modal__coctail-description">${strInstructions}</p>
        </div>
        <img class="modal__coctail-img" src="${strDrinkThumb}" alt="${strDrink}" />
        <div class="modal__wrapper-ingredients">
        <p class="modal__coctail-ingredients">INGREDIENTS</p>
        <p class="modal__p">Per cocktail</p>
        <ul class="modal__coctail-ingredients-list">${list}</ul>
        </div>
        </div>
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
    `;
}