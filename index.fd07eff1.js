!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},o=n.parcelRequire0630;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in c){var e=c[t];delete c[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){c[t]=e},n.parcelRequire0630=o),o.register("ctta1",(function(e,n){var r,c;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return c}),(function(t){return c=t}));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},c=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("dQPT4",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var c={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=c[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),c[t]=e),e}})),o("ctta1").register(JSON.parse('{"6Pvh5":"index.fd07eff1.js","keK3E":"symbol-defs.fc3e2d0b.svg","2ro3O":"favoriteIngredientsPage.2cfc1d99.js"}'));var a,i=o("eivUI"),s=o("4cQhD"),l=o("9kPzR"),u=o("89NHv");s=o("4cQhD"),l=o("9kPzR");a=o("dQPT4").getBundleURL("6Pvh5")+o("ctta1").resolve("keK3E");var d=o("brUO7");s=o("4cQhD");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){f(t,e,n[e])}))}return t}function g(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}l=o("9kPzR"),u=o("89NHv");function h(t){return _.apply(this,arguments)}function _(){return(_=(0,s.default)((function(t){var e,n,r,c;return(0,l.__generator)(this,(function(o){switch(o.label){case 0:return[4,(0,u.getCocktailById)(t)];case 1:for(e=o.sent(),n=e,r={},c=1;c<=15;c+=1)n["strIngredient".concat(c)]&&(r=g(p({},r),f({},n["strIngredient".concat(c)],n["strMeasure".concat(c)])));return[2,r]}}))}))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,s.default)((function(t){var e,n;return(0,l.__generator)(this,(function(r){switch(r.label){case 0:return[4,h(t)];case 1:return e=r.sent(),n=Object.keys(e),[2,n.map((function(t){return'<li class="modal__ingredients-item" data-ingredient="'.concat(t,'"<span>✶ </span><a data-ingredient="').concat(t,'" class="modal__ingredient-link">').concat(e[t]?e[t]:""," ").concat(t,"</a></li>")})).join("")]}}))}))).apply(this,arguments)}var b=o("8M3hD");function y(t){return O.apply(this,arguments)}function O(){return(O=(0,s.default)((function(t){var n,r,c,o,i;return(0,l.__generator)(this,(function(s){switch(s.label){case 0:return[4,v(t.idDrink)];case 1:return n=s.sent(),r=t.strDrinkThumb,c=t.strDrink,o=t.idDrink,i=t.strInstructions,[2,'\n        <button class="modal__cocktail-close-button js-modal-coctail-close" type="button">\n            <svg class="close__icon" width="32" height="32">\n              <use href="'.concat(e(a),'#icon-close-btn"></use>\n            </svg>\n        </button>\n        <h2 class="modal__coctail-name">').concat(c,'</h2>\n        <div class="modal__wrapper">\n        <div class="modal__wrapper-instructions">\n        <p class="modal__coctail-instractions">INSTRUCTIONS:</p>\n        <p class="modal__coctail-description">').concat(i,'</p>\n        </div>\n        <img class="modal__coctail-img" src="').concat(r,'" alt="').concat(c,'" />\n        <div class="modal__wrapper-ingredients">\n        <p class="modal__coctail-ingredients">INGREDIENTS</p>\n        <p class="modal__p">Per cocktail</p>\n        <ul class="modal__coctail-ingredients-list">').concat(n,'</ul>\n        </div>\n        </div>\n        <button class=" modal__add-btn coctail ').concat((0,d.checkIdCocktail)(b.STORAGE_KEY,o)>=0?"btn-added":"",'" data-id="').concat(o,'" type="button">\n            ').concat((0,d.checkIdCocktail)(b.STORAGE_KEY,o)>=0?"Remove from favorite":"Add to favorite","\n        </button>\n    ")]}}))}))).apply(this,arguments)}var E=o("j0Qg5"),k=(b=o("8M3hD"),d=o("brUO7"),document.querySelector(".js-modal-coctail-close"),document.querySelector("#modal")),S=document.querySelector("body"),j=document.querySelector(".gallery"),w=document.getElementById("overlay");function L(){return(L=(0,s.default)((function(t){var e;return(0,l.__generator)(this,(function(n){switch(n.label){case 0:return t.target.dataset.modalTarget?(R(),[4,(0,u.getCocktailById)(t.target.dataset.id)]):[2];case 1:return[4,y(n.sent())];case 2:return e=n.sent(),k.innerHTML=e,k.addEventListener("click",D),[2]}}))}))).apply(this,arguments)}function P(t){var e,n,r=t.target.closest(".modal__add-btn");r&&(r.classList.contains("btn-added")?function(t){var e=(0,d.getLocalData)(b.STORAGE_KEY),n=(0,d.checkIdCocktail)(b.STORAGE_KEY,t.dataset.id);n>=0&&(e.splice(n,1),localStorage.setItem(b.STORAGE_KEY,JSON.stringify(e)));t.textContent="Add to favorite",t.classList.remove("btn-added")}(r):(e=r,(n=(0,d.getLocalData)(b.STORAGE_KEY)).push(e.dataset.id),localStorage.setItem(b.STORAGE_KEY,JSON.stringify(n)),e.textContent="Remove from favorite",e.classList.add("btn-added")))}function D(t){P(t),function(t){t.target.closest(".js-modal-coctail-close")&&T()}(t),(0,E.onClickIngredient)(t)}function R(){k.classList.add("active"),w.classList.add("active"),S.classList.toggle("modal-opened")}function T(){k.classList.remove("active"),w.classList.remove("active"),k.innerHTML="",S.classList.toggle("modal-opened"),removeEventListener("click",D)}j.addEventListener("click",(function(t){return L.apply(this,arguments)})),w.addEventListener("click",(function(){document.querySelectorAll(".modal.active").forEach((function(t){T()}))})),o("brUO7");s=o("4cQhD"),l=o("9kPzR"),u=o("89NHv");var I=o("hPPXE"),C=o("8eLzN"),x=(b=o("8M3hD"),document.querySelector(".hero_select"));function N(){return(N=(0,s.default)((function(t){var e;return(0,l.__generator)(this,(function(n){switch(n.label){case 0:return"LI"!==t.target.nodeName?[3,2]:(x.innerText=t.target.textContent,b.heroSearchCoctailsEl.classList.add("js_hero_active"),b.heroSearchCoctailsEl.classList.remove("js_hero_search"),t.currentTarget.querySelector(".js_hero_item")&&t.currentTarget.querySelector(".js_hero_item").classList.remove("js_hero_item"),t.target.classList.add("js_hero_item"),[4,(0,u.getCocktailByLetter)(t.target.textContent)]);case 1:e=n.sent(),(0,I.isFind)(e.drinks),e.drinks?(0,C.pagination)(e.drinks):(0,I.noFoundData)(e.drinks),n.label=2;case 2:return[2]}}))}))).apply(this,arguments)}b.heroSearchCoctailsEl.addEventListener("click",(function(t){b.heroSearchCoctailsEl.classList.toggle("js_hero_search")})),b.heroListEl.addEventListener("click",(function(t){return N.apply(this,arguments)})),o("85WWj"),o("hPPXE"),o("7w3u0"),(0,i.renderStartMarkup)()}();
//# sourceMappingURL=index.fd07eff1.js.map