import sprite from '../images/symbol-defs.svg';

export function createModalMarkupCocktail(arrCocktails) {
  console.log(arrCocktails);
  return arrCocktails
    .map(({ strDrinkThumb, strDrink, idDrink }) => {
      return `
        <button class="modal__cocktail-close-button js-modal-coctail-close" type="button">
          <svg class="close__icon" width="32" height="32">
            <use href="${sprite}#icon-close-btn"></use>
          </svg>
        </button>
        <h2 class="modal__coctail-name">${strDrink}</h2>
        <p class="modal__coctail-instractions">Instractions:</p>
        <p class="modal__coctail-description">    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, recusandae eligendi! Suscipit,
        quas iste ipsa ratione consectetur soluta ab est voluptatem accusamus adipisci, modi in
        provident. Consectetur atque incidunt vitae!</p>
        <img class="modal__coctail-img" src="${strDrinkThumb}" alt="${strDrink}" />
        <button data-close-button class="modal__close-button"></button>
        <p class="modal__coctail-ingredients">Ingredients</p>
        <p class="modal__p">Per cocktail</p>
        <ul class="modal__coctail-ingredients-list"></ul>
        <button class="modal__coctail-button" type="button" data-id="${idDrink}">Add to favourites</button>
    `;
    })
    .join('');
}
