!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequire0630;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequire0630=i),i.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=n),n}})),i("iE7OH").register(JSON.parse('{"6xlug":"favoriteIngredientsPage.9cd4d32b.js","kxKJ3":"symbol-defs.fc3e2d0b.svg","fcj7Z":"favoriteCocktailsPage.2ab98196.js"}')),i("29o51"),i("9PKIM"),i("aHRbB");var a,c=i("bpxeT"),l=i("8nrFW"),s=i("2TvXO"),d=i("4Nugj"),u=i("ikj7U");a=i("aNJCr").getBundleURL("6xlug")+i("iE7OH").resolve("kxKJ3");var f=i("29o51"),g=(d=i("4Nugj"),i("gdPhy"));function p(e){return console.log(e),e.map((function(e){var t=e.strType,r=e.strIngredient,o=e.idIngredient;return'\n       <li class="gallery__item" data-id="'.concat(o,'">\n          <p class="gallery__ingredient">').concat(r,'</p>\n          <p class="gallery__desc">').concat(t||"",'</p>\n          <div class="ingredient-info gallery__thumb">\n          <button class="ingredient-info__btn-info btn gallery__info-btn-ingredient" data-id="').concat(o,'" type="button" data-modal-target="#modal">Learn more</button>\n          <button class="gallery__remove-btn-ingredient ingredient-info__btn-add btn ').concat((0,g.checkIdIngredients)(o)>=0?"icon-ingredients-fill":"",'" data-id="').concat(o,'" type="button">\n           ').concat((0,f.checkIdCocktail)(d.STORAGE_KEY_INGREDIENT,o)>=0?"Remove":"Add to",'\n            <svg class="add-btn__icon ').concat((0,f.checkIdCocktail)(d.STORAGE_KEY_INGREDIENT,o)>=0?"icon__fill":"",'" width="18" height="18">\n            <use href="').concat(n(a),'#icon-empty-heart"></use>\n            </svg>\n         </button>\n          </div>\n       </li>\n    ')})).join("")}f=i("29o51");var v=i("9oB79"),_=(g=i("gdPhy"),v=i("9oB79"),i("eqHit"));function h(){return(h=n(c)(n(s).mark((function e(t){var r;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,v.openIngredientModal)(),e.next=3,(0,u.getIngredientById)(t.target.dataset.id);case 3:r=e.sent,d.modalIngredientEl.innerHTML=(0,_.createModalMarkupCocktail)(r),d.modalIngredientEl.addEventListener("click",b);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){(0,v.onButtonCloseModalIngredient)(e),e.target.closest(".gallery__add-btn")&&y(e)}function y(e){e.target.classList.contains("icon-ingredients-fill")?((0,g.onRemoveIngredient)(e.target),window.location=window.location.href):(0,g.onAddIngredient)(e.target)}function m(){var e=(0,f.getLocalData)(d.STORAGE_KEY_INGREDIENT);if(e.length){for(var n=[],t=0;t<e.length;t+=1)n.push((0,u.getIngredientById)(e[t])),console.log("arrPromise",n);return console.log("arrPromise",n),n}d.gallery.textContent="You haven't added any favorite ingridients yet"}function E(){return(E=n(c)(n(s).mark((function e(){var t,r,o;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=m()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Promise.all(n(l)(t));case 5:r=e.sent,console.log("arrIngredient",r),o=p(r),d.gallery.innerHTML=o,d.elem.firstElementChild.textContent="Favorite Ingredients";case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.gallery.addEventListener("click",(function(e){if(!e.target.classList.contains("btn"))return;e.target.closest(".ingredient-info__btn-add")?y(e):function(e){h.apply(this,arguments)}(e)})),function(){E.apply(this,arguments)}()}();
//# sourceMappingURL=favoriteIngredientsPage.9cd4d32b.js.map
