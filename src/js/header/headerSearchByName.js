import {getCocktailByName} from '../request-api'
import {createMarkupCocktail} from '../createMarkupCocktail'

const formSubmit = document.querySelector('#search-form');


formSubmit.addEventListener('submit', onSubmit);

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