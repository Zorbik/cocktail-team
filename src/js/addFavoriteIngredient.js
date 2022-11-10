// const STORAGE_KEY = 'favorite-ingredients';


// export function onClickIngredient(e) {
//     if (!e.target.classList.contains('modal__ingredient-link')) return
//     console.log("asdasdasd");
// }


// function getLocalData() {
//     return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
//   }
  
// function onAddIngredient(elem) {
//     let arrCocktails = getLocalData();
//     arrCocktails.push(elem.dataset.id);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
//     console.log(elem.dataset.id);
//     elem.firstElementChild.textContent = 'Remove';
//     elem.lastElementChild.classList.add('icon__fill');
//   }
  
// function onRemoveIngredient(elem) {
//     let arrCocktails = getLocalData();
//     const index = checkIdCocktail(elem.dataset.id);
//     if (index >= 0) {
//       arrCocktails.splice(index, 1);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(arrCocktails));
//     }
  
//     elem.firstElementChild.textContent = 'Add to';
//     elem.lastElementChild.classList.remove('icon__fill');
//   }
  
// export function checkIdCocktail(id) {
//     let arrCocktails = getLocalData();
//     return arrCocktails.indexOf(id);
//   }
  