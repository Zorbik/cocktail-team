import {getCocktailByLetter} from './request-api'
import {createMarkupCocktail} from './createMarkupCocktail'

const heroListEl = document.querySelector(".hero_list")
const heroSelectEl = document.querySelector(".hero_select")
const heroSearchCoctailsEl = document.querySelector(".hero_search_coctails")

heroSearchCoctailsEl.addEventListener('click', e => {
    heroSearchCoctailsEl.classList.toggle('js_hero_search');
})
heroListEl.addEventListener('click', onClickLetter)

export async function onClickLetter(e) {
    if(e.target.nodeName === "LI") {
        heroSelectEl.innerText = e.target.textContent;
        heroSearchCoctailsEl.classList.add('js_hero_active');
        heroSearchCoctailsEl.classList.remove('js_hero_search');
        if(e.currentTarget.querySelector('.js_hero_item')) {
            e.currentTarget.querySelector('.js_hero_item').classList.remove('js_hero_item')
        }
        e.target.classList.add('js_hero_item');
        const coctailsByLetter = await getCocktailByLetter(e.target.textContent);
        console.log(coctailsByLetter);
        if(!coctailsByLetter.drinks) console.log('error');
        const markup = await createMarkupCocktail(coctailsByLetter.drinks);
        document.querySelector('.gallery__list').innerHTML = markup;
    }
}