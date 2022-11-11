function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=n.parcelRequire0630;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequire0630=r),r.register("bTcpz",(function(e,t){var n=r("2I93e"),a=r("cyp4R"),o=r("8Z9kZ"),i=r("lEkxL");document.querySelector(".js-modal-coctail-close");const c=document.querySelector("#modal"),s=document.querySelector("body"),l=document.querySelector(".gallery"),d=document.getElementById("overlay");function u(e){(0,o.isFavorite)(e),function(e){e.target.closest(".js-modal-coctail-close")&&g()}(e),(0,i.onClickIngredient)(e)}function g(){c.classList.remove("active"),d.classList.remove("active"),s.classList.toggle("modal-opened"),removeEventListener("click",u)}l.addEventListener("click",(async function(e){if(!e.target.dataset.modalTarget)return;c.classList.add("active"),d.classList.add("active"),s.classList.toggle("modal-opened"),console.log("123",e.target.dataset.id);const t=await(0,n.getCocktailById)(e.target.dataset.id),o=await(0,a.createModalMarkupCocktail)(t);c.innerHTML=o,c.addEventListener("click",u)})),d.addEventListener("click",(function(){document.querySelectorAll(".modal.active").forEach((e=>{g()}))}))})),r.register("cyp4R",(function(n,a){t(n.exports,"createModalMarkupCocktail",(function(){return l}));var o=r("1rJhf"),i=r("8Z9kZ"),c=r("89IKy"),s=r("krGWQ");async function l(t){const n=await(0,c.renderIngredientsMarkup)(t.idDrink),{strDrinkThumb:a,strDrink:r,idDrink:l,strInstructions:d}=t;return`\n        <button class="modal__cocktail-close-button js-modal-coctail-close" type="button">\n            <svg class="close__icon" width="32" height="32">\n              <use href="${e(o)}#icon-close-btn"></use>\n            </svg>\n        </button>\n        <h2 class="modal__coctail-name">${r}</h2>\n        <div class="modal__wrapper">\n        <div class="modal__wrapper-instructions">\n        <p class="modal__coctail-instractions">INSTRUCTIONS:</p>\n        <p class="modal__coctail-description">${d}</p>\n        </div>\n        <img class="modal__coctail-img" src="${a}" alt="${r}" />\n        <div class="modal__wrapper-ingredients">\n        <p class="modal__coctail-ingredients">INGREDIENTS</p>\n        <p class="modal__p">Per cocktail</p>\n        <ul class="modal__coctail-ingredients-list">${n}</ul>\n        </div>\n        </div>\n        <button class="gallery__add-btn btn" data-id="${l}" type="button">\n            <span class="add-btn__desr">${(0,i.checkIdCocktail)(s.STORAGE_KEY,l)>=0?"Remove":"Add to"}</span>\n            <svg class="add-btn__icon ${(0,i.checkIdCocktail)(s.STORAGE_KEY,l)>=0?"icon__fill":""}" width="18" height="18">\n              <use href="${e(o)}#icon-empty-heart"></use>\n            </svg>\n        </button>\n    `}})),r.register("1rJhf",(function(e,t){e.exports=new URL(r("kyEFX").resolve("9v6fF"),import.meta.url).toString()})),r.register("89IKy",(function(e,n){t(e.exports,"renderIngredientsMarkup",(function(){return o}));var a=r("2I93e");async function o(e){const t=await async function(e){const t=await(0,a.getCocktailById)(e);let n={};for(let e=1;e<=15;e+=1)t[`strIngredient${e}`]&&(n={...n,[t[`strIngredient${e}`]]:t[`strMeasure${e}`]});return n}(e);return Object.keys(t).map((e=>`<li class="modal__ingredients-item" data-ingredient="${e}"<span>✶ </span><a data-ingredient="${e}" class="modal__ingredient-link">${t[e]?t[e]:""} ${e}</a></li>`)).join("")}})),r.register("jHLfh",(function(e,n){t(e.exports,"renderFavoriteCocktailsMarkup",(function(){return l}));var a=r("2I93e"),o=r("ueX3T"),i=r("krGWQ"),c=r("8Z9kZ");function s(){let e=(0,c.getLocalData)(i.STORAGE_KEY);if(!e.length)return void(i.gallery.textContent="You haven't added any favorite cocktails yet");let t=[];for(let n=0;n<e.length;n+=1)t.push((0,a.getCocktailById)(e[n]));return console.log("arrPromise",t),t}async function l(){const e=s(),t=await Promise.all([...e]);console.log("arrCocktails",t);const n=(0,o.createMarkupCocktail)(t);i.gallery.innerHTML=n,i.elem.firstElementChild.textContent="Favorite Cocktails"}document.querySelector(".js-favorite-cocktails").addEventListener("click",l)})),r("kyEFX").register(JSON.parse('{"cKcKP":"favoriteCocktailsPage.7c8c60ce.js","9v6fF":"symbol-defs.fc3e2d0b.svg"}'));
//# sourceMappingURL=favoriteCocktailsPage.7c8c60ce.js.map