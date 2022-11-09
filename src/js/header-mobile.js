(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
            openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
            mobileMenu.classList.toggle('is-open');
    };

    openMenuBtn.addEventListener('click', () => {
        toggleMenu();
        document.body.style.overflow = 'hidden';
    });
    closeMenuBtn.addEventListener('click', () => {
        toggleMenu();
        document.body.style.overflow = '';
    });

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
        openMenuBtn.setAttribute('aria-expanded', false);
    });
})();

// import {getCocktailByName} from './request-api'
// import {createMarkupCocktail} from './createMarkupCocktail'

// const formSubmit = document.querySelector('#search-form');
// const inputRef = document.querySelector('.search-input');
// const submitBtn = document.querySelector('.submit-btn');

// formSubmit.addEventListener('submit', onSubmit);
// submitBtn.addEventListener('focus', onSubmit);
// const markup = await createMarkupCocktail(coctailsByName.drinks);
// document.querySelector('.gallery__list').innerHTML = markup;

// export async function onSubmit(e) {
//     e.preventDefault();
//     searchQuery = e.currentTarget.elements.searchQuery.value
//     .trim()
//     .toLowerCase();
   
// }


