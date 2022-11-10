import { getCocktailById } from './request-api';

async function generateIngredientsList(idCocktail) {
  const arrCocktail = await getCocktailById(idCocktail);
  const cocktailObj = arrCocktail;
  let objIngredients = {};

  for (let i = 1; i <= 15; i += 1) {
    if (cocktailObj[`strIngredient${i}`]) {
      objIngredients = {
        ...objIngredients,
        [cocktailObj[`strIngredient${i}`]]: cocktailObj[`strMeasure${i}`],
      };
    }
  }
  return objIngredients;
}

export async function renderIngredientsMarkup(id) {
  const cocktail = await generateIngredientsList(id);
  const arrIngredients = Object.keys(cocktail);
  const markup = arrIngredients
    .map(el => {
      return `<li data-ingredient="${el}">${cocktail[el]}${el}</li>`;
    })
    .join('');
  return markup;
}
