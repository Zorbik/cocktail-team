export function createMarkupCocktail(arrCocktails) {
  console.log(arrCocktails);
  return arrCocktails
    .map(({ strDrinkThumb, strDrink, idDrink }) => {
      return `
      <li class="gallery__item" data-id="${idDrink}">
        <img class="gallery__img" src="${strDrinkThumb}" alt="" width="280" />
        <div class="gallery__thumb">
          <p class="gallery__text">${strDrink}</p>
          <button class="gallery__info-btn btn" type="button" data-modal-target="#modal">
            Learn more
          </button>
          <button class="gallery__add-btn btn" type="button">Remove</button>
        </div>
        <!--  -->
      </li>
    `;
    })
    .join('');
}
