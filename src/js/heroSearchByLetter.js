import { getCocktailByLetter } from './request-api';
import { isFind, noFoundData } from './header/headerSearchByName';
import { pagination } from './renderSearchPage';
import { heroSearchCoctailsEl, heroListEl } from './refs';

const heroSelectEl = document.querySelector('.hero_select');


heroSearchCoctailsEl.addEventListener('click', e => {
  heroSearchCoctailsEl.classList.toggle('js_hero_search');
});
heroListEl.addEventListener('click', onClickLetter);

export async function onClickLetter(e) {
  if (e.target.nodeName === 'LI') {
    heroSelectEl.innerText = e.target.textContent;
    heroSearchCoctailsEl.classList.add('js_hero_active');
    heroSearchCoctailsEl.classList.remove('js_hero_search');
    if (e.currentTarget.querySelector('.js_hero_item')) {
      e.currentTarget.querySelector('.js_hero_item').classList.remove('js_hero_item');
    }
    e.target.classList.add('js_hero_item');
    const coctailsByLetter = await getCocktailByLetter(e.target.textContent);
    console.log(coctailsByLetter);
    isFind(coctailsByLetter.drinks);
    if (!coctailsByLetter.drinks) {
      noFoundData(coctailsByLetter.drinks);
    } else {
      pagination(coctailsByLetter.drinks);
    }
  }
}
