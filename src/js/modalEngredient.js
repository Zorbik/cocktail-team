import { getIngredientsByName } from './request-api';
const modalIngredientEl = document.querySelector('#modal-ingredient');
const overlayIngredient = document.querySelector('#overlay-ingredient');

overlayIngredient.addEventListener('click', onOverlayIngredientClick);
function onOverlayIngredientClick(e) {
  closeIngredientModal();
}

export async function onClickIngredient(e) {
  if (!e.target.classList.contains('modal__ingredient-link')) return;
  openIngredientModal();
  // console.log(e.target.dataset.parentNode.ingredient);

  const ingredient = await getIngredientsByName('vodka');
  console.log(ingredient);
}

function openIngredientModal() {
  console.log(modalIngredientEl);
  modalIngredientEl.classList.add('active');
  overlayIngredient.classList.add('active');
  // body.classList.toggle('modal-opened');
  console.log('asdasdas----');
}

function closeIngredientModal() {
  modalIngredientEl.classList.remove('active');
  overlayIngredient.classList.remove('active');
  // body.classList.toggle('modal-opened');
  // removeEventListener('click', onClickModal);
}
