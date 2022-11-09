import {getCocktailByLetter,getCocktailById} from './request-api'
import {createMarkupCocktail} from './createMarkupCocktail'

const FAVORITE_COCKTAILS = 'favorite-cocktails';
const favoriteCocktails = localStorage.getItem(FAVORITE_COCKTAILS);
console.log("favoriteCocktails", favoriteCocktails);
 function generateArrPromiseForFavoriteCocktailsMarkup() {
    let arr = JSON.parse(favoriteCocktails);
    let arrPromise = [];

    for (let i = 0; i < arr.length; i += 1) {
        arrPromise.push(getCocktailById(arr[i]));
    }
    console.log('arrPromise', arrPromise);
    return arrPromise;
  }
  async function renderFavoriteCocktailsMarkup() {
    const arrPromise = generateArrPromiseForFavoriteCocktailsMarkup();
    const arrCocktails = await Promise.all([...arrPromise]);
    console.log('arrCocktails', arrCocktails);
    const markup = createMarkupCocktail(arrCocktails);
    document.querySelector('main').innerHTML = '<h2 class="title_ingredients">Favorite ingredients</h2>' + markup;
  }