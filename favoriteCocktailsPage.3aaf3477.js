!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},c=n.parcelRequire0630;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},n.parcelRequire0630=c),c.register("5xtVg",(function(t,n){var r=c("bpxeT"),a=c("2TvXO"),o=c("ikj7U"),i=c("6qGjV"),s=c("29o51"),l=c("9oB79"),u=(document.querySelector(".js-modal-coctail-close"),document.querySelector("#modal")),d=document.querySelector("body"),p=document.querySelector(".gallery"),f=document.getElementById("overlay");function g(){return(g=e(r)(e(a).mark((function t(n){var r,c;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.dataset.modalTarget){e.next=2;break}return e.abrupt("return");case 2:return m(),console.log("123",n.target.dataset.id),e.next=6,(0,o.getCocktailById)(n.target.dataset.id);case 6:return r=e.sent,e.next=9,(0,i.createModalMarkupCocktail)(r);case 9:c=e.sent,u.innerHTML=c,u.addEventListener("click",v);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(e){(0,s.isFavorite)(e),function(e){e.target.closest(".js-modal-coctail-close")&&_()}(e),(0,l.onClickIngredient)(e)}function m(){u.classList.add("active"),f.classList.add("active"),d.classList.toggle("modal-opened")}function _(){u.classList.remove("active"),f.classList.remove("active"),d.classList.toggle("modal-opened"),removeEventListener("click",v)}p.addEventListener("click",(function(e){return g.apply(this,arguments)})),f.addEventListener("click",(function(){document.querySelectorAll(".modal.active").forEach((function(e){_()}))}))})),c.register("6qGjV",(function(n,r){t(n.exports,"createModalMarkupCocktail",(function(){return d}));var a=c("bpxeT"),o=c("2TvXO"),i=c("ffrYG"),s=c("29o51"),l=c("f0g2L"),u=c("4Nugj");function d(e){return p.apply(this,arguments)}function p(){return(p=e(a)(e(o).mark((function t(n){var r,a,c,d,p;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.renderIngredientsMarkup)(n.idDrink);case 2:return r=t.sent,a=n.strDrinkThumb,c=n.strDrink,d=n.idDrink,p=n.strInstructions,t.abrupt("return",'\n        <button class="modal__cocktail-close-button js-modal-coctail-close" type="button">\n            <svg class="close__icon" width="32" height="32">\n              <use href="'.concat(e(i),'#icon-close-btn"></use>\n            </svg>\n        </button>\n        <h2 class="modal__coctail-name">').concat(c,'</h2>\n        <div class="modal__wrapper">\n        <div class="modal__wrapper-instructions">\n        <p class="modal__coctail-instractions">INSTRACTIONS:</p>\n        <p class="modal__coctail-description">').concat(p,'</p>\n        </div>\n        <img class="modal__coctail-img" src="').concat(a,'" alt="').concat(c,'" />\n        <div class="modal__wrapper-ingredients">\n        <p class="modal__coctail-ingredients">INGREDIENTS</p>\n        <p class="modal__p">Per cocktail</p>\n        <ul class="modal__coctail-ingredients-list">').concat(r,'</ul>\n        </div>\n        </div>\n        <button class="gallery__add-btn btn" data-id="').concat(d,'" type="button">\n            <span class="add-btn__desr">').concat((0,s.checkIdCocktail)(u.STORAGE_KEY,d)>=0?"Remove":"Add to",'</span>\n            <svg class="add-btn__icon ').concat((0,s.checkIdCocktail)(u.STORAGE_KEY,d)>=0?"icon__fill":"",'" width="18" height="18">\n              <use href="').concat(e(i),'#icon-empty-heart"></use>\n            </svg>\n        </button>\n    '));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}})),c.register("ffrYG",(function(e,t){e.exports=c("aNJCr").getBundleURL("czn6k")+c("iE7OH").resolve("kxKJ3")})),c.register("f0g2L",(function(n,r){t(n.exports,"renderIngredientsMarkup",(function(){return p}));var a=c("bpxeT"),o=c("hKHmD"),i=c("dDDEV"),s=c("2TvXO"),l=c("ikj7U");function u(e){return d.apply(this,arguments)}function d(){return(d=e(a)(e(s).mark((function t(n){var r,a,c,u;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.getCocktailById)(n);case 2:for(r=t.sent,a=r,c={},u=1;u<=15;u+=1)a["strIngredient".concat(u)]&&(c=e(i)({},c,e(o)({},a["strIngredient".concat(u)],a["strMeasure".concat(u)])));return t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=e(a)(e(s).mark((function t(n){var r,a,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(n);case 2:return r=e.sent,a=Object.keys(r),c=a.map((function(e){return'<li class="modal__ingredients-item" data-ingredient="'.concat(e,'"><a data-ingredient="').concat(e,'" class="modal__ingredient-link">').concat(r[e]?r[e]:""," ").concat(e,"</a></li>")})).join(""),e.abrupt("return",c);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}})),c.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),c.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=c("hKHmD"))&&n.__esModule?n:{default:n}})),c.register("fbpvy",(function(n,r){t(n.exports,"renderFavoriteCocktailsMarkup",(function(){return f}));var a=c("bpxeT"),o=c("8nrFW"),i=c("2TvXO"),s=c("ikj7U"),l=c("9qdW1"),u=c("4Nugj"),d=c("29o51");function p(){var e=(0,d.getLocalData)(u.STORAGE_KEY);if(e.length){for(var t=[],n=0;n<e.length;n+=1)t.push((0,s.getCocktailById)(e[n]));return console.log("arrPromise",t),t}u.gallery.textContent="You haven't added any favorite cocktails yet"}function f(){return g.apply(this,arguments)}function g(){return(g=e(a)(e(i).mark((function t(){var n,r,a;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p(),t.next=3,Promise.all(e(o)(n));case 3:r=t.sent,console.log("arrCocktails",r),a=(0,l.createMarkupCocktail)(r),u.gallery.innerHTML=a,u.elem.firstElementChild.textContent="Favorite Cocktails";case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}document.querySelector(".js-favorite-cocktails").addEventListener("click",f)})),c("iE7OH").register(JSON.parse('{"czn6k":"favoriteCocktailsPage.3aaf3477.js","kxKJ3":"symbol-defs.fc3e2d0b.svg"}'))}();
//# sourceMappingURL=favoriteCocktailsPage.3aaf3477.js.map
