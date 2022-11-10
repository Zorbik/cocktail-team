<<<<<<< Updated upstream
import {getCocktailByName} from '../request-api'
import {createMarkupCocktail} from '../createMarkupCocktail'
=======
import { getCocktailByName } from '../request-api';
import { createMarkupCocktail } from '../createMarkupCocktail';
import nofound from '../../images/nofound.png';
import { menu } from './header-mobile';

const formSubmitMob = document.querySelector('#search-form-mob');

formSubmitMob.addEventListener('submit', onSubmitMob);

export  function onSubmitMob(e) {
  e.preventDefault();
  searchQuery(e);
  menu();
}
>>>>>>> Stashed changes

const formSubmit = document.querySelector('#search-form');


formSubmit.addEventListener('submit', onSubmit);

<<<<<<< Updated upstream
export async function onSubmit(e) {
    e.preventDefault();

    searchQuery = e.target.elements.searchQuery.value
    .trim()
    .toLowerCase();
    if(!searchQuery){
        console.log('empty')
        return
    }
    try{
        const data = await getCocktailByName(searchQuery);
        if(!data.drinks){
            document.querySelector('.gallery__list').innerHTML = 'not found';
        }
        else{
           
            const markup = createMarkupCocktail(data.drinks);
            document.querySelector('.gallery__list').innerHTML = markup;
        }
    }
    catch(error){
    
    }
    finally{
        e.target.elements.searchQuery.value = '';
    }
   
    
}
=======
export  function onSubmit(e) {
  e.preventDefault();
  searchQuery(e);
  
}
async function searchQuery(e){
  const searchQuery = e.target.elements.searchQuery.value.trim().toLowerCase();
  if (!searchQuery) {
    console.log('empty');
    return;
  }
  try {
    const data = await getCocktailByName(searchQuery);
    if (!data.drinks) {
      const elem = document.querySelector('.gallery__wrap');
      elem.firstElementChild.textContent = `Sorry, we didn't find any cocktail for you`;
      elem.lastElementChild.innerHTML = `<img class="nofound__img" src="${nofound}" alt="not found image" />`;
    } else {
      const markup = createMarkupCocktail(data.drinks);
      document.querySelector('.gallery__list').innerHTML = markup;
    }
  } catch (error) {
  } finally {
    e.target.elements.searchQuery.value = '';
  }
}
>>>>>>> Stashed changes
